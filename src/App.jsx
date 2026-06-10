import { useState, useMemo } from 'react'
import { pontosDisponiveis, getSkillSlots, calcStats } from './utils/charCalc'
import { isMaxNex } from './utils/levelup'
import { saveChar } from './utils/storage'
import Header from './components/Header'
import StepNav, { STEPS } from './components/StepNav'
import StepConceito from './components/steps/StepConceito'
import StepAtributos from './components/steps/StepAtributos'
import StepOrigem from './components/steps/StepOrigem'
import StepClasse from './components/steps/StepClasse'
import StepPericias from './components/steps/StepPericias'
import CharacterSheet from './components/sheet/CharacterSheet'
import LevelUpModal from './components/LevelUpModal'
import MainMenu from './components/MainMenu'

const INITIAL_CHAR = {
  id: null,
  nome: '',
  conceito: '',
  historico: '',
  atributos: { Agilidade: 1, Força: 1, Intelecto: 1, Presença: 1, Vigor: 1 },
  origem: null,
  classe: null,
  trilha: null,
  pericias: [],
  nex: 5,
  poderes: [],
  poderesParanormais: [],
  rituais: [],
  periciaGraus: {},
  pvMax: null,
  peMax: null,
  sanMax: null,
  pvAtual: null,
  peAtual: null,
  sanAtual: null,
  suplementos: [],
  patente: 'Recruta',
  inventario: [],
}

// Migração de fichas antigas (preserva dados existentes)
export function migrateChar(c) {
  const novo = { ...INITIAL_CHAR, ...c }
  if (!c.suplementos) {
    // fichas antigas tinham acesso aos poderes gerais (Sobrevivendo ao Horror)
    novo.suplementos = ['sobrevivendo']
  }
  if (c.pvAtual == null && c.pvMax != null) novo.pvAtual = c.pvMax
  if (c.peAtual == null && c.peMax != null) novo.peAtual = c.peMax
  if (c.sanAtual == null && c.sanMax != null) novo.sanAtual = c.sanMax
  return novo
}

function buildInitialStats(char) {
  if (char.pvMax !== null) return char
  const stats = calcStats(char)
  return {
    ...char,
    pvMax: stats.pv, peMax: stats.pe, sanMax: stats.san,
    pvAtual: stats.pv, peAtual: stats.pe, sanAtual: stats.san,
  }
}

function canAdvance(step, char) {
  switch (step) {
    case 0:
      return char.nome.trim().length > 0
    case 1:
      return pontosDisponiveis(char.atributos) >= 0
    case 2:
      return !!char.origem
    case 3:
      return !!char.classe
    case 4: {
      const { extraSlots, locked } = getSkillSlots(char)
      const chosen = char.pericias.filter((p) => !locked.includes(p))
      return chosen.length <= extraSlots
    }
    default:
      return true
  }
}

export default function App() {
  const [view, setView] = useState('menu') // 'menu' | 'create' | 'sheet'
  const [step, setStep] = useState(0)
  const [char, setChar] = useState(INITIAL_CHAR)
  const [showLevelUp, setShowLevelUp] = useState(false)

  const canNext = useMemo(() => canAdvance(step, char), [step, char])

  const goNext = () => {
    if (!canNext) return
    if (step === 4) {
      setChar((c) => buildInitialStats(c))
      setView('sheet')
      return
    }
    setStep((s) => s + 1)
  }
  const goPrev = () => { if (step > 0) setStep((s) => s - 1) }
  const goStep = (i) => { if (i <= step) setStep(i) }

  function handleLevelUpConfirm(updates) {
    setChar((c) => {
      const next = { ...c, ...updates }
      if (updates.pvMax != null) next.pvAtual = (c.pvAtual ?? c.pvMax ?? 0) + (updates.pvMax - (c.pvMax ?? 0))
      if (updates.peMax != null) next.peAtual = (c.peAtual ?? c.peMax ?? 0) + (updates.peMax - (c.peMax ?? 0))
      if (updates.sanMax != null) next.sanAtual = (c.sanAtual ?? c.sanMax ?? 0) + (updates.sanMax - (c.sanMax ?? 0))
      saveChar(next) // auto-save on level up
      return next
    })
    setShowLevelUp(false)
  }

  function handleNew() {
    setChar(INITIAL_CHAR)
    setStep(0)
    setView('create')
  }

  function handleLoad(loaded) {
    setChar(migrateChar(loaded))
    setView('sheet')
  }

  function handleMenu() {
    setView('menu')
  }

  if (view === 'menu') {
    return <MainMenu onNew={handleNew} onLoad={handleLoad} />
  }

  if (view === 'sheet') {
    return (
      <div className="app view-anim">
        <CharacterSheet
          char={char}
          setChar={setChar}
          onLevelUp={() => setShowLevelUp(true)}
          canLevelUp={!isMaxNex(char.nex) && !!char.classe}
          onMenu={handleMenu}
          onEdit={() => { setStep(0); setView('create') }}
        />
        {showLevelUp && (
          <LevelUpModal
            char={char}
            onConfirm={handleLevelUpConfirm}
            onClose={() => setShowLevelUp(false)}
          />
        )}
      </div>
    )
  }

  const renderStep = () => {
    switch (step) {
      case 0: return <StepConceito char={char} setChar={setChar} />
      case 1: return <StepAtributos char={char} setChar={setChar} />
      case 2: return <StepOrigem char={char} setChar={setChar} />
      case 3: return <StepClasse char={char} setChar={setChar} />
      case 4: return <StepPericias char={char} setChar={setChar} />
      default: return null
    }
  }

  return (
    <div className="app view-anim">
      <Header compact onMenu={handleMenu} />
      <StepNav step={step} onGoStep={goStep} />

      <div key={step} className="step-anim">
        {renderStep()}
      </div>

      <div className="nav no-print">
        <button className="btn btn-ghost" onClick={step === 0 ? handleMenu : goPrev}>
          ← {step === 0 ? 'Menu' : 'Voltar'}
        </button>
        <button className="btn btn-primary" onClick={goNext} disabled={!canNext}>
          {step === 4 ? 'Ver Ficha →' : 'Próximo →'}
        </button>
      </div>
    </div>
  )
}
