import { ATRIBUTOS, ATTR_SHORT, CLASSES } from '../../data'
import { getOrigens } from '../../utils/content'
import { PACKS } from '../../data/packs'
import { PROGRESSAO } from '../../data/progressao'

export default function InfoTab({ char }) {
  const cls = CLASSES[char.classe]
  const origem = getOrigens(char).find((o) => o.nome === char.origem)
  const packsAtivos = PACKS.filter((p) => (char.suplementos ?? []).includes(p.id))

  return (
    <div>
      <div className="summary-section">
        <div className="summary-section-title">Atributos</div>
        <div className="summary-section-body">
          <div className="attr-summary-grid">
            {ATRIBUTOS.map((a) => (
              <div key={a} className="attr-summary-item">
                <div className="attr-summary-val">{char.atributos[a] ?? 1}</div>
                <div className="attr-summary-name">{ATTR_SHORT[a]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {(char.conceito || char.historico) && (
        <div className="summary-section">
          <div className="summary-section-title">Conceito</div>
          <div className="summary-section-body">
            {char.conceito && <div className="concept-block">{char.conceito}</div>}
            {char.historico && (
              <p style={{ marginTop: 10, fontSize: 13, color: 'var(--text-dim)', lineHeight: 1.6 }}>
                {char.historico}
              </p>
            )}
          </div>
        </div>
      )}

      {origem && (
        <div className="summary-section">
          <div className="summary-section-title">Origem · {origem.nome}</div>
          <div className="summary-section-body">
            <p style={{ fontSize: 13, color: 'var(--text-dim)', marginBottom: 8 }}>{origem.desc}</p>
            <div className="poder-summary"><strong>{origem.poder}.</strong> {origem.poderDesc}</div>
          </div>
        </div>
      )}

      {cls && (
        <div className="summary-section">
          <div className="summary-section-title">Proficiências e Progressão</div>
          <div className="summary-section-body">
            <div style={{ fontSize: 14, color: 'var(--text-dim)', marginBottom: 10 }}>{cls.proficiencias}</div>
            <div className="prog-table">
              {PROGRESSAO.map((p) => {
                const feito = (char.nex ?? 5) >= p.nex
                const label = p.choices.length
                  ? p.choices.join(' + ')
                  : 'habilidade de classe'
                return (
                  <div key={p.nex} className={`prog-row${feito ? ' done' : ''}`}>
                    <span className="prog-nex">{p.nex}%</span>
                    <span className="prog-label">{label}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}

      <div className="summary-section">
        <div className="summary-section-title">Suplementos Ativos ({packsAtivos.length})</div>
        <div className="summary-section-body">
          {packsAtivos.length === 0 ? (
            <div className="empty-state">Apenas o livro básico está ativo para este personagem.</div>
          ) : (
            <div className="skill-tags">
              {packsAtivos.map((p) => (
                <span key={p.id} className="skill-tag" title={p.desc}>{p.nome}</span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
