import { PERICIAS, ATTR_SHORT } from '../../data'
import { getAllSkills } from '../../utils/charCalc'

const GRAU_BONUS = { treinado: 5, veterano: 10, expert: 15 }

export default function SkillsTab({ char }) {
  const treinadas = getAllSkills(char)
  const grades = char.periciaGraus ?? {}

  return (
    <div>
      <div className="summary-section">
        <div className="summary-section-title">Perícias</div>
        <div className="summary-section-body">
          <div className="skills-grid">
            {PERICIAS.map((p) => {
              const treinada = treinadas.includes(p.nome)
              const grau = treinada ? (grades[p.nome] ?? 'treinado') : null
              const bonus = grau ? GRAU_BONUS[grau] : 0
              const dados = char.atributos?.[p.attr] ?? 1
              return (
                <div key={p.nome} className={`skill-row${treinada ? ' trained' : ''}`}>
                  <span className="skill-row-nome">{p.nome}</span>
                  <span className="skill-row-attr">{ATTR_SHORT[p.attr]}</span>
                  <span className="skill-row-dados">{dados}d20</span>
                  <span className="skill-row-bonus">{bonus > 0 ? `+${bonus}` : '—'}</span>
                  {grau && grau !== 'treinado' && (
                    <span className={`skill-tag--${grau} skill-row-grau`}>{grau}</span>
                  )}
                </div>
              )
            })}
          </div>
          <div className="hint-line" style={{ marginTop: 10 }}>
            Teste = role (atributo)d20, pegue o maior, some o bônus de treinamento.
            Atributo 0: role 2d20 e pegue o menor.
          </div>
        </div>
      </div>
    </div>
  )
}
