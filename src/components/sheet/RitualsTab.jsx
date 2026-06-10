import { getRituais } from '../../utils/content'
import { CUSTO_POR_CIRCULO, circuloMaximo } from '../../data/rituais'

export default function RitualsTab({ char }) {
  const RITUAIS = getRituais(char)
  const conhecidos = char.rituais ?? []
  const maxCirculo = circuloMaximo(char.nex ?? 5)

  const detalhados = conhecidos.map((nome) => {
    for (const el of Object.keys(RITUAIS)) {
      for (const c of [1, 2, 3, 4]) {
        const found = RITUAIS[el][c]?.find((r) => r.nome === nome)
        if (found) return { ...found, elemento: el, circulo: c, custo: CUSTO_POR_CIRCULO[c] }
      }
    }
    return { nome, elemento: '?', circulo: 1, custo: '?', desc: '' }
  })

  return (
    <div>
      <div className="summary-section">
        <div className="summary-section-title">
          Rituais Conhecidos ({detalhados.length})
          {char.classe === 'Ocultista' && (
            <span className="section-hint"> · pode lançar até o {maxCirculo}º círculo</span>
          )}
        </div>
        <div className="summary-section-body">
          {detalhados.length === 0 ? (
            <div className="empty-state">
              {char.classe === 'Ocultista'
                ? 'Nenhum ritual conhecido ainda. Ocultistas escolhem 3 rituais de 1º círculo na criação e aprendem um novo a cada NEX.'
                : 'Nenhum ritual conhecido. Personagens podem aprender rituais com o poder paranormal Aprender Ritual (limite igual ao Intelecto).'}
            </div>
          ) : (
            <div className="rituais-list">
              {detalhados.map((r) => (
                <div key={r.nome} className="ritual-item ritual-item--full">
                  <div className="ritual-header">
                    <span className="ritual-nome">{r.nome}</span>
                    <span className="poder-elemento-badge">{r.elemento}</span>
                    <span className="ritual-meta">{r.circulo}º círculo · {r.custo} PE</span>
                  </div>
                  {(r.execucao || r.alcance || r.duracao) && (
                    <div className="ritual-statline">
                      {r.execucao && <span><strong>Execução:</strong> {r.execucao}</span>}
                      {r.alcance && <span><strong>Alcance:</strong> {r.alcance}</span>}
                      {r.alvo && <span><strong>Alvo:</strong> {r.alvo}</span>}
                      {r.duracao && <span><strong>Duração:</strong> {r.duracao}</span>}
                      {r.resistencia && <span><strong>Resistência:</strong> {r.resistencia}</span>}
                    </div>
                  )}
                  <div className="ritual-desc">{r.desc}</div>
                  {r.discente && <div className="ritual-upgrade"><strong>Discente:</strong> {r.discente}</div>}
                  {r.verdadeiro && <div className="ritual-upgrade"><strong>Verdadeiro:</strong> {r.verdadeiro}</div>}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
