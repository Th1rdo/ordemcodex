import { PACKS } from '../../data/packs'

export default function StepConceito({ char, setChar }) {
  const set = (key) => (e) => setChar((c) => ({ ...c, [key]: e.target.value }))

  const togglePack = (id) => {
    setChar((c) => {
      const atual = c.suplementos ?? []
      return {
        ...c,
        suplementos: atual.includes(id) ? atual.filter((p) => p !== id) : [...atual, id],
      }
    })
  }

  return (
    <div className="card">
      <div className="card-title">Conceito do Agente</div>
      <div className="card-sub">
        Quem é o seu personagem antes de entrar para a Ordem da Realidade?
      </div>

      <div className="field">
        <label className="label">Nome do Agente</label>
        <input
          type="text"
          value={char.nome}
          onChange={set('nome')}
          placeholder="Nome completo do personagem…"
        />
      </div>

      <div className="field">
        <label className="label">Conceito em uma frase</label>
        <input
          type="text"
          value={char.conceito}
          onChange={set('conceito')}
          placeholder="Ex: Médica forense que nunca se conforma com o inexplicável…"
        />
      </div>

      <div className="field">
        <label className="label">Histórico (opcional)</label>
        <textarea
          value={char.historico}
          onChange={set('historico')}
          placeholder="O que fazia antes de encontrar o paranormal? Que evento desencadeou o primeiro contato? Como se comporta em campo?…"
        />
      </div>

      <div className="field">
        <label className="label">Suplementos Oficiais</label>
        <div className="card-sub" style={{ marginBottom: 10 }}>
          Ative os livros cujo conteúdo (origens, trilhas, poderes, rituais e itens) ficará
          disponível para este personagem. O livro básico está sempre ativo.
        </div>
        <div className="pack-grid">
          {PACKS.map((p) => {
            const ativo = (char.suplementos ?? []).includes(p.id)
            return (
              <div
                key={p.id}
                className={`pack-card${ativo ? ' selected' : ''}`}
                onClick={() => togglePack(p.id)}
                role="checkbox"
                aria-checked={ativo}
              >
                <div className="pack-toggle">{ativo ? '✓' : ''}</div>
                <div>
                  <div className="pack-nome">{p.nome}</div>
                  <div className="pack-desc">{p.desc}</div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
