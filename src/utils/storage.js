const STORAGE_KEY = 'op_characters'

export function listSavedChars() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]')
  } catch {
    return []
  }
}

export function saveChar(char) {
  const list = listSavedChars()
  const id = char.id ?? `char_${Date.now()}`
  const entry = { ...char, id, savedAt: new Date().toISOString() }
  const idx = list.findIndex((c) => c.id === id)
  if (idx >= 0) list[idx] = entry
  else list.push(entry)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
  return id
}

export function deleteChar(id) {
  const list = listSavedChars().filter((c) => c.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(list))
}

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
        resolve(char)
      } catch {
        reject(new Error('Arquivo de personagem inválido.'))
      }
    }
    reader.onerror = () => reject(new Error('Erro ao ler o arquivo.'))
    reader.readAsText(file)
  })
}
