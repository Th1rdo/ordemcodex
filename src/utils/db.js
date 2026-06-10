// Persistência de personagens via Supabase (substitui o localStorage).
// Cada linha pertence a um usuário (RLS garante isolamento). O personagem
// inteiro é guardado em `data` (jsonb); `name` é desnormalizado para listagem.
import { supabase } from '../lib/supabase'

export async function listChars() {
  const { data, error } = await supabase
    .from('characters')
    .select('id, data, updated_at')
    .order('updated_at', { ascending: false })
  if (error) throw error
  return (data ?? []).map((r) => ({ ...r.data, id: r.id, updatedAt: r.updated_at }))
}

export async function saveChar(char) {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Você precisa estar autenticado para salvar.')
  const row = {
    user_id: user.id,
    name: char.nome || 'Sem nome',
    data: char,
    updated_at: new Date().toISOString(),
  }
  if (char.id) row.id = char.id
  const { data, error } = await supabase
    .from('characters')
    .upsert(row)
    .select('id')
    .single()
  if (error) throw error
  return data.id
}

export async function deleteChar(id) {
  const { error } = await supabase.from('characters').delete().eq('id', id)
  if (error) throw error
}

// Export/import de arquivo continua disponível (independe do banco)
export function exportChar(char) {
  const blob = new Blob([JSON.stringify(char, null, 2)], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${char.nome || 'agente'}.json`
  a.click()
  URL.revokeObjectURL(url)
}

export function importChar(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => {
      try {
        const char = JSON.parse(e.target.result)
        if (!char.nome && !char.classe) throw new Error('Arquivo inválido')
        // ficha importada vira um novo registro do usuário atual
        delete char.id
        resolve(char)
      } catch {
        reject(new Error('Arquivo de personagem inválido.'))
      }
    }
    reader.onerror = () => reject(new Error('Erro ao ler o arquivo.'))
    reader.readAsText(file)
  })
}
