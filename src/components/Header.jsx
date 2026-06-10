export default function Header({ compact = false, onMenu }) {
  return (
    <div className={`header${compact ? ' header--compact' : ''}`}>
      {onMenu && (
        <button className="header-menu-btn no-print" onClick={onMenu} aria-label="Voltar ao menu">
          ☰ Menu
        </button>
      )}
      <div className="header-logo">Ordo Realitas</div>
      <div className="header-title">Ordem Paranormal</div>
      <div className="header-sub">Criador de Agente</div>
    </div>
  )
}
