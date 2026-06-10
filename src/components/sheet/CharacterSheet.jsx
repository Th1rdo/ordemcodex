import { useState } from 'react'
import { NEX_SEQUENCE } from '../../data/progressao'
import { saveChar, exportChar } from '../../utils/db'
import CombatTab from './CombatTab'
import PowersTab from './PowersTab'
import RitualsTab from './RitualsTab'
import InventoryTab from './InventoryTab'
import SkillsTab from './SkillsTab'
import InfoTab from './InfoTab'
import { defesaTotal } from './sheetUtils'

const TABS = [
  { id: 'combate', label: 'Combate' },
  { id: 'poderes', label: 'Poderes' },
  { id: 'rituais', label: 'Rituais' },
  { id: 'inventario', label: 'Inventário' },
  { id: 'pericias', label: 'Perícias' },
  { id: 'info', label: 'Info' },
]

function StatTracker({ label, atual, max, onChange, tone }) {
  const val = atual ?? max ?? 0
  const pct = max > 0 ? Math.max(0, Math.min(100, (val / max) * 100)) : 0
  return (
    <div className={`tracker tracker--${tone}`}>
      <div className="tracker-head">
        <span className="tracker-label">{label}</span>
        <div className="tracker-stepper">
          <button className="tracker-step" onClick={() => onChange(val - 1)} aria-label={`-1 ${label}`}>−</button>
          <span className="tracker-vals">
            <input
              type="number"
              className="tracker-input"
              value={val}
              onChange={(e) => onChange(Number(e.target.value))}
              aria-label={`${label} atual`}
            />
            <span className="tracker-max">/ {max ?? 0}</span>
          </span>
          <button className="tracker-step" onClick={() => onChange(val + 1)} aria-label={`+1 ${label}`}>+</button>
        </div>
      </div>
      <div className="tracker-bar"><div className="tracker-fill" style={{ width: `${pct}%` }} /></div>
    </div>
  )
}

export default function CharacterSheet({ char, setChar, onLevelUp, canLevelUp, onMenu, onEdit }) {
  const [tab, setTab] = useState('combate')
  const [savedFlash, setSavedFlash] = useState(false)

  const [saveErr, setSaveErr] = useState(false)
  const handleSave = async () => {
    try {
      const id = await saveChar(char)
      if (!char.id) setChar((c) => ({ ...c, id }))
      setSaveErr(false)
      setSavedFlash(true)
      setTimeout(() => setSavedFlash(false), 1500)
    } catch {
      setSaveErr(true)
      setTimeout(() => setSaveErr(false), 2500)
    }
  }

  const setAtual = (key, max) => (v) =>
    setChar((c) => ({ ...c, [key]: Math.max(0, Math.min(max ?? 999, v)) }))

  const defesa = defesaTotal(char)
  const limitePE = Math.ceil((char.nex ?? 5) / 5)
  const nexIdx = NEX_SEQUENCE.indexOf(char.nex ?? 5)
  const nexPct = Math.round((nexIdx / (NEX_SEQUENCE.length - 1)) * 100)

  const rituaisCount = (char.rituais ?? []).length
  const visibleTabs = TABS.filter((t) => t.id !== 'rituais' || rituaisCount > 0 || char.classe === 'Ocultista')

  return (
    <div className="sheet">
      {/* Cabeçalho fixo de combate */}
      <div className="sheet-header no-print-sticky">

        {/* identidade + ações */}
        <div className="sheet-top">
          <div className="sheet-identity">
            <div className="summary-name">{char.nome || '—'}</div>
            <div className="summary-class">
              {char.classe || '—'}
              {char.trilha ? ` · ${char.trilha}` : ''}
              {char.origem ? ` · ${char.origem}` : ''}
              {` · ${char.patente ?? 'Recruta'}`}
            </div>
          </div>
          <div className="sheet-actions no-print">
            {onMenu && <button className="icon-btn" onClick={onMenu} title="Menu principal">☰</button>}
            {onEdit && <button className="icon-btn" onClick={onEdit} title="Editar criação">✎</button>}
            <button className={`icon-btn${savedFlash ? ' flash' : ''}${saveErr ? ' err' : ''}`} onClick={handleSave} title="Salvar na conta">
              {saveErr ? '✕' : savedFlash ? '✓' : '↓'}
            </button>
            <button className="icon-btn" onClick={() => exportChar(char)} title="Exportar JSON">⇪</button>
          </div>
        </div>

        {/* NEX: rótulo + barra + ação na mesma linha */}
        <div className="sheet-nexrow">
          <span className="nex-label">NEX <b>{char.nex ?? 5}%</b></span>
          <div className="nex-bar-track"><div className="nex-bar-fill" style={{ width: `${nexPct}%` }} /></div>
          {canLevelUp && (
            <button className="btn btn-primary btn-levelup no-print" onClick={onLevelUp}>
              ▲ Subir NEX
            </button>
          )}
          {!canLevelUp && char.nex === 99 && <span className="nex-max">MÁX</span>}
        </div>

        {/* recursos */}
        <div className="sheet-trackers">
          <StatTracker label="PV" atual={char.pvAtual} max={char.pvMax} onChange={setAtual('pvAtual', char.pvMax)} tone="pv" />
          <StatTracker label="PE" atual={char.peAtual} max={char.peMax} onChange={setAtual('peAtual', char.peMax)} tone="pe" />
          <StatTracker label="SAN" atual={char.sanAtual} max={char.sanMax} onChange={setAtual('sanAtual', char.sanMax)} tone="san" />
        </div>

        {/* derivados */}
        <div className="sheet-chiprow">
          <div className="chip-stat"><span className="chip-val">{defesa}</span><span className="chip-label">Defesa</span></div>
          <div className="chip-stat"><span className="chip-val">{limitePE}</span><span className="chip-label">PE / turno</span></div>
          <div className="chip-stat"><span className="chip-val">9m</span><span className="chip-label">Deslocamento</span></div>
        </div>

        <nav className="sheet-tabs" role="tablist">
          {visibleTabs.map((t) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={tab === t.id}
              className={`sheet-tab${tab === t.id ? ' active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
              {t.id === 'rituais' && rituaisCount > 0 && <span className="tab-badge">{rituaisCount}</span>}
              {t.id === 'inventario' && (char.inventario ?? []).length > 0 && (
                <span className="tab-badge">{(char.inventario ?? []).length}</span>
              )}
            </button>
          ))}
        </nav>
      </div>

      <div className="sheet-body">
        <div key={tab} className="tab-anim">
          {tab === 'combate' && <CombatTab char={char} />}
          {tab === 'poderes' && <PowersTab char={char} />}
          {tab === 'rituais' && <RitualsTab char={char} />}
          {tab === 'inventario' && <InventoryTab char={char} setChar={setChar} />}
          {tab === 'pericias' && <SkillsTab char={char} />}
          {tab === 'info' && <InfoTab char={char} />}
        </div>
      </div>

      <div className="nav no-print" style={{ justifyContent: 'space-between' }}>
        <button className="btn btn-print" onClick={() => window.print()}>⎙ Imprimir Ficha</button>
      </div>
    </div>
  )
}
