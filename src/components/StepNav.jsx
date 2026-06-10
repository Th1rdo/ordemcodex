const STEPS = [
  { id: 'conceito', label: 'Conceito' },
  { id: 'atributos', label: 'Atributos' },
  { id: 'origem', label: 'Origem' },
  { id: 'classe', label: 'Classe' },
  { id: 'pericias', label: 'Perícias' },
  { id: 'resumo', label: 'Resumo' },
]

export default function StepNav({ step, onGoStep }) {
  return (
    <div className="steps no-print">
      {STEPS.map((s, i) => (
        <div key={s.id} style={{ display: 'contents' }}>
          {i > 0 && <div className="step-sep" />}
          <div className={`step-item${i === step ? ' active' : ''}`}>
            <div
              className={`step-dot${i === step ? ' active' : i < step ? ' done clickable' : ''}`}
              onClick={() => onGoStep(i)}
            >
              {i < step ? '✓' : i + 1}
            </div>
            <span className="step-label">{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export { STEPS }
