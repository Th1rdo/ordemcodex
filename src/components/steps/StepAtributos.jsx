import { ATRIBUTOS } from '../../data'
import { pontosDisponiveis } from '../../utils/charCalc'

const ATTR_DESC = {
  Agilidade: 'Coordenação, velocidade e destreza manual',
  Força: 'Potência muscular e habilidades atléticas',
  Intelecto: 'Raciocínio, memória e educação. Define nº de perícias e rituais',
  Presença: 'Percepção, força de vontade e habilidades sociais. Define PE extra',
  Vigor: 'Saúde e resistência física. Define PV extra',
}

export default function StepAtributos({ char, setChar }) {
  const attrs = char.atributos
  const pontos = pontosDisponiveis(attrs)
  const hasZero = Object.values(attrs).some((v) => v === 0)

  const inc = (attr) => {
    if (pontos <= 0 || attrs[attr] >= 3) return
    setChar((c) => ({ ...c, atributos: { ...c.atributos, [attr]: c.atributos[attr] + 1 } }))
  }

  const dec = (attr) => {
    if (attrs[attr] <= 0) return
    if (attrs[attr] === 1 && hasZero) return // can't create second zero
    setChar((c) => ({ ...c, atributos: { ...c.atributos, [attr]: c.atributos[attr] - 1 } }))
  }

  const pointsColor =
    pontos < 0 ? 'var(--danger)' : pontos === 0 ? 'var(--green)' : 'var(--text)'

  return (
    <div className="card">
      <div className="card-title">Atributos</div>
      <div className="card-sub">
        Cada atributo começa em 1. Distribua 4 pontos como quiser (máximo 3 por atributo).
        Você pode reduzir um único atributo para 0 e ganhar +1 ponto extra.
      </div>

      <div className="points-display">
        <div className="points-num" style={{ color: pointsColor }}>
          {pontos}
        </div>
        <div className="points-label">pontos disponíveis</div>
      </div>

      <div className="attr-grid">
        {ATRIBUTOS.map((attr) => (
          <div key={attr} className="attr-card">
            <div className="attr-name">{attr}</div>
            <div className="attr-controls">
              <button
                className="attr-btn"
                disabled={attrs[attr] <= 0 || (attrs[attr] === 1 && hasZero)}
                onClick={() => dec(attr)}
              >
                −
              </button>
              <div className="attr-value">{attrs[attr]}</div>
              <button
                className="attr-btn"
                disabled={pontos <= 0 || attrs[attr] >= 3}
                onClick={() => inc(attr)}
              >
                +
              </button>
            </div>
            <div className="attr-sub">{ATTR_DESC[attr]}</div>
          </div>
        ))}
      </div>

      {hasZero && (
        <div className="warning-row">
          ⚠ Um atributo está em 0 — rola 2d20 e usa o pior resultado para testes desse atributo.
        </div>
      )}
    </div>
  )
}
