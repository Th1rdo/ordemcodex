import { CLASSES } from '../../data'
import { getTrilhas, getRituais } from '../../utils/content'
import { ELEMENTOS, CUSTO_POR_CIRCULO } from '../../data/rituais'

const OCULTISTA_RITUAIS_INICIAIS = 3

export default function StepClasse({ char, setChar }) {
  const selected = char.classe ? CLASSES[char.classe] : null
  const attrs = char.atributos
  const isOcultista = char.classe === 'Ocultista'

  const toggleRitual = (elemento, nome) => {
    setChar((c) => {
      const curr = c.rituais ?? []
      if (curr.includes(nome)) return { ...c, rituais: curr.filter((r) => r !== nome) }
      if (curr.length >= OCULTISTA_RITUAIS_INICIAIS) return c
      return { ...c, rituais: [...curr, nome] }
    })
  }

  const RITUAIS = getRituais(char)
  const allCircle1 = ELEMENTOS.flatMap((el) =>
    (RITUAIS[el]?.[1] ?? []).map((r) => ({ ...r, elemento: el, custo: CUSTO_POR_CIRCULO[1] }))
  )

  return (
    <div className="card">
      <div className="card-title">Classe</div>
      <div className="card-sub">
        Seu treinamento dentro da Ordem. Existem três classes, cada uma com um papel distinto
        no grupo de investigadores.
      </div>

      <div className="class-grid">
        {Object.entries(CLASSES).map(([nome, cls]) => {
          const pv = cls.pvBase + (attrs['Vigor'] ?? 1)
          const pe = cls.peBase + (attrs['Presença'] ?? 1)
          return (
            <div
              key={nome}
              className={`class-card${char.classe === nome ? ' selected' : ''}`}
              onClick={() => setChar((c) => ({ ...c, classe: nome, trilha: null, rituais: [] }))}
            >
              <div className="class-icon">{cls.icon}</div>
              <div className="class-name">{nome}</div>
              <div className="class-desc">{cls.desc}</div>
              <div className="class-stats">
                <div className="class-stat">
                  <div className="class-stat-val">{pv}</div>
                  <div className="class-stat-label">PV</div>
                </div>
                <div className="class-stat">
                  <div className="class-stat-val">{pe}</div>
                  <div className="class-stat-label">PE</div>
                </div>
                <div className="class-stat">
                  <div className="class-stat-val">{cls.sanBase}</div>
                  <div className="class-stat-label">SAN</div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {selected && (
        <div className="class-detail">
          <h3>Habilidade inicial</h3>
          <p>{selected.habilidade}</p>

          <h3>Proficiências</h3>
          <p>{selected.proficiencias}</p>

          <h3>Perícias treinadas</h3>
          <p>
            {selected.periciaFixas.length > 0 && (
              <>
                <strong style={{ color: 'var(--green)' }}>Fixas:</strong>{' '}
                {selected.periciaFixas.join(', ')}.{' '}
              </>
            )}
            Mais{' '}
            <strong style={{ color: 'var(--green)' }}>{selected.periciaExtraLabel}</strong>{' '}
            perícias à sua escolha.
          </p>

          {isOcultista && (
            <>
              <h3 style={{ marginTop: 14 }}>
                Rituais Iniciais
                <span style={{ color: 'var(--text-dim)', fontWeight: 400, fontSize: 13, marginLeft: 8 }}>
                  Escolha {OCULTISTA_RITUAIS_INICIAIS} rituais de 1º círculo
                  ({char.rituais?.length ?? 0}/{OCULTISTA_RITUAIS_INICIAIS})
                </span>
              </h3>
              <div className="ritual-pick-grid">
                {allCircle1.map((r) => {
                  const chosen = char.rituais?.includes(r.nome) ?? false
                  const full = !chosen && (char.rituais?.length ?? 0) >= OCULTISTA_RITUAIS_INICIAIS
                  return (
                    <div
                      key={`${r.nome}-${r.elemento}`}
                      className={`ritual-pick-item${chosen ? ' selected' : full ? ' disabled' : ''}`}
                      onClick={() => !full && toggleRitual(r.elemento, r.nome)}
                      title={r.desc}
                    >
                      <div className="ritual-pick-elemento">{r.elemento}</div>
                      <div className="ritual-pick-nome">{r.nome}</div>
                      <div className="ritual-pick-custo">{r.custo} PE</div>
                    </div>
                  )
                })}
              </div>
            </>
          )}

          <h3 style={{ marginTop: 14 }}>Escolha sua Trilha (NEX 10%)</h3>
          <div className="trilha-grid">
            {getTrilhas(char).map((t) => (
              <div
                key={t.nome}
                className={`trilha-card${char.trilha === t.nome ? ' selected' : ''}`}
                onClick={() => setChar((c) => ({ ...c, trilha: t.nome }))}
              >
                <div className="trilha-name">{t.nome}</div>
                <div className="trilha-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
