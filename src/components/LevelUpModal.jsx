import { useState, useMemo } from 'react'
import {
  getProgressaoStep,
  getClassMilestone,
  getTrilhaPoder,
  getAvailablePoderes,
  getVersatilidadeTrilhaPoderes,
  getAvailableGradeUpgrades,
  getGrauUpgradeCount,
  getUpgradableAttributes,
  getAvailableParanormais,
  statGains,
  nextNex,
} from '../utils/levelup'
import { ATRIBUTOS } from '../data'
import { getPoderesParanormais, getRituaisDisponiveis } from '../utils/content'

export default function LevelUpModal({ char, onConfirm, onClose }) {
  const targetNex = nextNex(char.nex)
  const step = getProgressaoStep(targetNex)
  const gains = statGains(char, targetNex)
  const trilhaPoder = getTrilhaPoder(char, targetNex)
  const classMilestone = getClassMilestone(char, targetNex)
  const choices = step?.choices ?? []

  const availablePoderes = useMemo(() => getAvailablePoderes(char), [char])
  const versatilidadeTrilha = useMemo(
    () => (choices.includes('versatilidade') ? getVersatilidadeTrilhaPoderes(char) : []),
    [char, choices]
  )
  const upgradableSkills = useMemo(() => getAvailableGradeUpgrades(char, targetNex), [char, targetNex])
  const grauCount = useMemo(() => getGrauUpgradeCount(char), [char])
  const upgradableAttrs = useMemo(() => getUpgradableAttributes(char), [char])
  const availableParanormais = useMemo(
    () => getAvailableParanormais({ ...char, nex: targetNex }, getPoderesParanormais(char)),
    [char, targetNex]
  )
  // Ocultista aprende 1 ritual a cada aumento de NEX (qualquer círculo que possa lançar)
  const isOcultista = char.classe === 'Ocultista'
  const availableRituais = useMemo(
    () => (isOcultista ? getRituaisDisponiveis(char, targetNex).filter((r) => !(char.rituais ?? []).includes(r.nome)) : []),
    [char, targetNex, isOcultista]
  )

  const [pickedPoder, setPickedPoder] = useState(null)
  const [pickedParanormal, setPickedParanormal] = useState(null)
  const [pickedAttr, setPickedAttr] = useState(null)
  const [pickedGraus, setPickedGraus] = useState([])
  const [pickedRitual, setPickedRitual] = useState(null)

  const isTranscender = pickedPoder === 'Transcender'

  const needsPoder = choices.includes('poder') || choices.includes('versatilidade')
  const needsAttr = choices.includes('atributo')
  const needsGrau = choices.includes('grau') && upgradableSkills.length > 0
  const grauTarget = Math.min(grauCount, upgradableSkills.length)

  const canConfirm =
    (!needsPoder || pickedPoder) &&
    (!isTranscender || pickedParanormal) &&
    (!needsAttr || pickedAttr || upgradableAttrs.length === 0) &&
    (!needsGrau || pickedGraus.length === grauTarget) &&
    (!isOcultista || pickedRitual || availableRituais.length === 0)

  // Transcender remove o ganho de SAN deste nível
  const sanGain = isTranscender ? 0 : gains.san

  function toggleGrau(skill) {
    setPickedGraus((prev) =>
      prev.includes(skill)
        ? prev.filter((s) => s !== skill)
        : prev.length < grauTarget
          ? [...prev, skill]
          : prev
    )
  }

  function handleConfirm() {
    const updates = {
      nex: targetNex,
      pvMax: (char.pvMax ?? 0) + gains.pv,
      peMax: (char.peMax ?? 0) + gains.pe,
      sanMax: (char.sanMax ?? 0) + sanGain,
    }
    if (pickedPoder) {
      updates.poderes = [...(char.poderes ?? []), pickedPoder]
    }
    if (pickedParanormal) {
      updates.poderesParanormais = [...(char.poderesParanormais ?? []), pickedParanormal]
    }
    if (pickedAttr) {
      updates.atributos = { ...char.atributos, [pickedAttr]: (char.atributos[pickedAttr] ?? 1) + 1 }
    }
    if (pickedGraus.length > 0) {
      const novo = { ...char.periciaGraus }
      for (const skill of pickedGraus) {
        const curr = novo[skill] ?? 'treinado'
        novo[skill] = curr === 'treinado' ? 'veterano' : 'expert'
      }
      updates.periciaGraus = novo
    }
    if (pickedRitual) {
      updates.rituais = [...(char.rituais ?? []), pickedRitual]
    }
    onConfirm(updates)
  }

  const grauLabel = (skill) => {
    const curr = char.periciaGraus?.[skill] ?? 'treinado'
    const next = curr === 'treinado' ? 'veterano' : 'expert'
    return `${skill} (${curr} → ${next})`
  }

  const renderPoderItem = (p) => (
    <div
      key={p.nome}
      className={`poder-pick-item${pickedPoder === p.nome ? ' selected' : ''}`}
      onClick={() => { setPickedPoder(p.nome); if (p.nome !== 'Transcender') setPickedParanormal(null) }}
    >
      <div className="poder-pick-nome">{p.nome}</div>
      <div className="poder-pick-desc">{p.desc}</div>
      {p.prereqText && <div className="poder-pick-prereq">Pré-req: {p.prereqText}</div>}
    </div>
  )

  const classePoderes = availablePoderes.filter((p) => p.grupo === char.classe)
  const geraisPoderes = availablePoderes.filter((p) => p.grupo === 'Geral')

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">AVANÇANDO PARA NEX {targetNex}%</div>
          <button className="modal-close" onClick={onClose}>✕</button>
        </div>

        {/* Stat gains */}
        <div className="modal-section">
          <div className="modal-section-title">Ganhos Automáticos</div>
          <div className="levelup-gains">
            <div className="gain-chip">+{gains.pv} PV</div>
            <div className="gain-chip">+{gains.pe} PE</div>
            <div className={`gain-chip${isTranscender ? ' gain-chip--warn' : ''}`}>
              {isTranscender ? '±0 SAN (Transcender)' : `+${gains.san} SAN`}
            </div>
          </div>
        </div>

        {/* Class ability milestone (Ataque Especial / Perito / círculo de ritual) */}
        {classMilestone && (
          <div className="modal-section">
            <div className="modal-section-title">Habilidade de Classe · {char.classe}</div>
            <div className="modal-trilha-poder">
              <div className="poder-desc">{classMilestone}</div>
            </div>
          </div>
        )}

        {/* Trilha milestone */}
        {trilhaPoder && (
          <div className="modal-section">
            <div className="modal-section-title">Habilidade de Trilha · {char.trilha}</div>
            <div className="modal-trilha-poder">
              <div className="poder-nome">{trilhaPoder.nome}</div>
              <div className="poder-desc">{trilhaPoder.desc}</div>
            </div>
          </div>
        )}

        {/* Attribute pick */}
        {needsAttr && upgradableAttrs.length > 0 && (
          <div className="modal-section">
            <div className="modal-section-title">+1 Atributo</div>
            <div className="modal-section-sub">Escolha um atributo para aumentar (máximo 5).</div>
            <div className="attr-pick-grid">
              {ATRIBUTOS.map((a) => {
                const canPick = upgradableAttrs.includes(a)
                return (
                  <div
                    key={a}
                    className={`attr-pick-item${!canPick ? ' disabled' : pickedAttr === a ? ' selected' : ''}`}
                    onClick={() => canPick && setPickedAttr(a)}
                  >
                    <div className="attr-pick-val">{(char.atributos[a] ?? 1) + (pickedAttr === a ? 1 : 0)}</div>
                    <div className="attr-pick-name">{a}</div>
                    {pickedAttr === a && <div className="attr-pick-badge">+1</div>}
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Skill grade upgrades (múltiplas perícias: base da classe + Int) */}
        {needsGrau && (
          <div className="modal-section">
            <div className="modal-section-title">
              Grau de Treinamento ({pickedGraus.length}/{grauTarget})
            </div>
            <div className="modal-section-sub">
              Escolha {grauTarget} perícia{grauTarget > 1 ? 's' : ''} para evoluir
              (treinado → veterano{targetNex >= 70 ? ' ou veterano → expert' : ''}).
            </div>
            <div className="skill-grade-grid">
              {upgradableSkills.map((s) => (
                <div
                  key={s}
                  className={`skill-grade-item${pickedGraus.includes(s) ? ' selected' : ''}`}
                  onClick={() => toggleGrau(s)}
                >
                  {grauLabel(s)}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Power pick */}
        {needsPoder && (
          <div className="modal-section">
            <div className="modal-section-title">
              {choices.includes('versatilidade') ? 'Versatilidade (NEX 50%)' : `Poder de ${char.classe}`}
            </div>
            {choices.includes('versatilidade') && (
              <div className="modal-section-sub">
                Escolha um poder de {char.classe?.toLowerCase()}, um poder geral, ou o primeiro poder de outra trilha de {char.classe?.toLowerCase()}.
              </div>
            )}
            <div className="poder-pick-list">
              {availablePoderes.length === 0 && versatilidadeTrilha.length === 0 && (
                <div style={{ color: 'var(--text-dim)', fontSize: 13 }}>
                  Todos os poderes disponíveis já foram aprendidos.
                </div>
              )}
              {classePoderes.length > 0 && (
                <>
                  <div className="poder-pick-group-label">Poderes de {char.classe}</div>
                  {classePoderes.map(renderPoderItem)}
                </>
              )}
              {versatilidadeTrilha.length > 0 && (
                <>
                  <div className="poder-pick-group-label">Poderes de Outras Trilhas</div>
                  {versatilidadeTrilha.map(renderPoderItem)}
                </>
              )}
              {geraisPoderes.length > 0 && (
                <>
                  <div className="poder-pick-group-label">Poderes Gerais</div>
                  {geraisPoderes.map(renderPoderItem)}
                </>
              )}
            </div>
          </div>
        )}

        {/* Transcender — paranormal power sub-pick */}
        {isTranscender && (
          <div className="modal-section">
            <div className="modal-section-title">Transcender — Escolha um Poder Paranormal</div>
            <div className="modal-section-sub">
              Ao transcender, você não ganha Sanidade neste nível. Escolha um poder do Outro Lado.
            </div>
            <div className="poder-pick-list">
              {availableParanormais.map((p) => (
                <div
                  key={p.nome}
                  className={`poder-pick-item${pickedParanormal === p.nome ? ' selected' : ''}`}
                  onClick={() => setPickedParanormal(p.nome)}
                >
                  <div className="poder-pick-nome">
                    {p.nome}
                    {p.elemento && <span className="poder-elemento-badge">{p.elemento}</span>}
                  </div>
                  <div className="poder-pick-desc">{p.desc}</div>
                  {p.afinidade && (
                    <div className="poder-pick-prereq">Afinidade: {p.afinidade}</div>
                  )}
                  {p.prereqElemento && (
                    <div className="poder-pick-prereq">
                      Pré-req: {p.prereqElemento.count} poder{p.prereqElemento.count > 1 ? 'es' : ''} de {p.prereqElemento.elemento}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Ocultista: aprende 1 ritual a cada aumento de NEX */}
        {isOcultista && availableRituais.length > 0 && (
          <div className="modal-section">
            <div className="modal-section-title">Novo Ritual (Escolhido pelo Outro Lado)</div>
            <div className="modal-section-sub">
              Sempre que avança de NEX, você aprende um ritual de qualquer círculo que possa lançar.
            </div>
            <div className="poder-pick-list">
              {availableRituais.map((r) => (
                <div
                  key={`${r.nome}-${r.elemento}`}
                  className={`poder-pick-item${pickedRitual === r.nome ? ' selected' : ''}`}
                  onClick={() => setPickedRitual(r.nome)}
                >
                  <div className="poder-pick-nome">
                    {r.nome}
                    <span className="poder-elemento-badge">{r.elemento}</span>
                    <span style={{ color: 'var(--text-dim)', fontSize: 11, marginLeft: 6 }}>
                      {r.circulo}º círculo · {r.custo} PE
                    </span>
                  </div>
                  <div className="poder-pick-desc">{r.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="modal-footer">
          <button className="btn btn-ghost" onClick={onClose}>Cancelar</button>
          <button className="btn btn-primary" onClick={handleConfirm} disabled={!canConfirm}>
            Confirmar NEX {targetNex}%
          </button>
        </div>
      </div>
    </div>
  )
}
