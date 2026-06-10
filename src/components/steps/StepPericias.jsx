import { PERICIAS, ATTR_SHORT } from '../../data'
import { getSkillSlots } from '../../utils/charCalc'

export default function StepPericias({ char, setChar }) {
  const { extraSlots, locked } = getSkillSlots(char)
  const chosen = char.pericias.filter((p) => !locked.includes(p))
  const slotsLeft = extraSlots - chosen.length

  const toggle = (nome) => {
    if (locked.includes(nome)) return
    setChar((c) => {
      const curr = c.pericias
      if (curr.includes(nome)) return { ...c, pericias: curr.filter((p) => p !== nome) }
      if (chosen.length >= extraSlots) return c
      return { ...c, pericias: [...curr, nome] }
    })
  }

  return (
    <div className="card">
      <div className="card-title">Perícias</div>
      <div className="card-sub">
        Estas são as habilidades que seu personagem domina. Perícias treinadas concedem +5
        nos testes relacionados.
      </div>

      <div className="skills-info">
        {locked.length > 0 && (
          <>
            {locked.map((p) => (
              <span key={p} className="skills-badge badge-fixed">
                {p}
              </span>
            ))}
            <span style={{ fontSize: 11, color: 'var(--text-dim)' }}>
              — fixas da origem/classe
            </span>
          </>
        )}
        <div className="skills-counter">
          <span>{Math.max(0, slotsLeft)}</span> / {extraSlots} slots restantes
        </div>
      </div>

      <div className="skills-grid">
        {PERICIAS.map((p) => {
          const isLocked = locked.includes(p.nome)
          const isSelected = char.pericias.includes(p.nome) || isLocked
          return (
            <div
              key={p.nome}
              className={`skill-item${isLocked ? ' locked' : isSelected ? ' selected' : ''}`}
              onClick={() => toggle(p.nome)}
            >
              <div className="skill-check">{isSelected ? '✓' : ''}</div>
              <span className="skill-name">{p.nome}</span>
              <span className="skill-attr">{ATTR_SHORT[p.attr]}</span>
            </div>
          )
        })}
      </div>

      {slotsLeft < 0 && (
        <div className="warning-row">
          ⚠ Você escolheu mais perícias do que seus slots permitem. Desmarque{' '}
          {Math.abs(slotsLeft)}.
        </div>
      )}
    </div>
  )
}
