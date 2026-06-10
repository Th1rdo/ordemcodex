import { getOrigens } from '../../utils/content'

export default function StepOrigem({ char, setChar }) {
  const ORIGENS = getOrigens(char)
  const selected = ORIGENS.find((o) => o.nome === char.origem)

  return (
    <div className="card">
      <div className="card-title">Origem</div>
      <div className="card-sub">
        O que você fazia antes de se envolver com o paranormal? Escolha uma origem — ela
        define duas perícias treinadas e um poder exclusivo.
      </div>

      <div className="origin-grid">
        {ORIGENS.map((o) => (
          <div
            key={o.nome}
            className={`origin-card${char.origem === o.nome ? ' selected' : ''}`}
            onClick={() => setChar((c) => ({ ...c, origem: o.nome }))}
          >
            <div className="origin-name">{o.nome}</div>
            <div className="origin-pericias">{o.pericias.filter(Boolean).join(' · ')}</div>
            <div className="origin-poder">{o.poder}</div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="origin-detail">
          <div className="origin-detail-name">{selected.nome}</div>
          <div className="origin-detail-desc">{selected.desc}</div>
          <div className="tag-row">
            {selected.pericias.filter(Boolean).map((p) => (
              <span key={p} className="tag tag-skill">
                {p}
              </span>
            ))}
            <span className="tag tag-power">{selected.poder}</span>
          </div>
          <div className="poder-box">
            <strong>{selected.poder}.</strong> {selected.poderDesc}
          </div>
        </div>
      )}
    </div>
  )
}
