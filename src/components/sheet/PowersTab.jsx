import { CLASSES } from '../../data'
import { getOrigens, getPoderesClasse, getPoderesGerais, getPoderesParanormais, getTrilhaPoderes } from '../../utils/content'

export default function PowersTab({ char }) {
  const cls = CLASSES[char.classe]
  const origem = getOrigens(char).find((o) => o.nome === char.origem)
  const poderes = char.poderes ?? []
  const paranormais = char.poderesParanormais ?? []
  const allParanormais = getPoderesParanormais(char)

  // habilidades de trilha já desbloqueadas
  const trilhaLista = getTrilhaPoderes(char)[char.classe]?.[char.trilha] ?? []
  const trilhaDesbloqueadas = trilhaLista.filter((p) => p.nex <= (char.nex ?? 5))

  // lookup de descrição de poderes (classe + gerais + outras classes)
  const todasFontes = [
    ...getPoderesClasse(char),
    ...getPoderesGerais(char),
    ...getPoderesClasse(char, 'Combatente'),
    ...getPoderesClasse(char, 'Especialista'),
    ...getPoderesClasse(char, 'Ocultista'),
  ]
  const descDe = (nome) => todasFontes.find((p) => p.nome === nome)?.desc ?? ''
  const ehGeral = (nome) => !getPoderesClasse(char).some((p) => p.nome === nome)

  return (
    <div>
      {origem && (
        <div className="summary-section">
          <div className="summary-section-title">Poder de Origem · {origem.nome}</div>
          <div className="summary-section-body">
            <div className="poder-summary"><strong>{origem.poder}.</strong> {origem.poderDesc}</div>
          </div>
        </div>
      )}

      {cls && (
        <div className="summary-section">
          <div className="summary-section-title">Habilidades de Classe · {char.classe}</div>
          <div className="summary-section-body">
            <div className="poder-summary">{cls.habilidade}</div>
          </div>
        </div>
      )}

      {trilhaDesbloqueadas.length > 0 && (
        <div className="summary-section">
          <div className="summary-section-title">Trilha · {char.trilha}</div>
          <div className="summary-section-body">
            <div className="paranormal-list">
              {trilhaDesbloqueadas.map((p) => (
                <div key={p.nome} className="paranormal-item">
                  <div className="paranormal-header">
                    <span className="paranormal-nome">{p.nome}</span>
                    <span className="poder-elemento-badge">NEX {p.nex}%</span>
                  </div>
                  <div className="paranormal-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="summary-section">
        <div className="summary-section-title">Poderes ({poderes.length})</div>
        <div className="summary-section-body">
          {poderes.length === 0 ? (
            <div className="empty-state">
              Nenhum poder ainda. Poderes são escolhidos ao subir de NEX (15%, 30%, 45%…).
            </div>
          ) : (
            <div className="paranormal-list">
              {poderes.map((p, i) => (
                <div key={`${p}-${i}`} className="paranormal-item">
                  <div className="paranormal-header">
                    <span className="paranormal-nome">{p}</span>
                    {ehGeral(p) && <span className="poder-elemento-badge poder-badge--geral">Geral</span>}
                  </div>
                  {descDe(p) && <div className="paranormal-desc">{descDe(p)}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {paranormais.length > 0 && (
        <div className="summary-section">
          <div className="summary-section-title">Poderes Paranormais ({paranormais.length})</div>
          <div className="summary-section-body">
            <div className="paranormal-list">
              {paranormais.map((nome, i) => {
                const p = allParanormais.find((x) => x.nome === nome) ?? { nome, desc: '' }
                return (
                  <div key={`${nome}-${i}`} className="paranormal-item">
                    <div className="paranormal-header">
                      <span className="paranormal-nome">{p.nome}</span>
                      {p.elemento && <span className="poder-elemento-badge">{p.elemento}</span>}
                    </div>
                    <div className="paranormal-desc">{p.desc}</div>
                    {p.afinidade && <div className="paranormal-desc paranormal-afinidade">Afinidade: {p.afinidade}</div>}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
