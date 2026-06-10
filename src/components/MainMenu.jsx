import { useEffect, useRef, useState } from 'react'
import { listChars, deleteChar, importChar } from '../utils/db'
import { supabase } from '../lib/supabase'

export default function MainMenu({ session, onNew, onLoad }) {
  const [panel, setPanel] = useState(null) // null | 'saved'
  const [saved, setSaved] = useState([])
  const [loading, setLoading] = useState(false)
  const [erro, setErro] = useState(null)
  const fileRef = useRef(null)

  const refresh = async () => {
    setLoading(true); setErro(null)
    try {
      setSaved(await listChars())
    } catch (err) {
      setErro(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (panel === 'saved') refresh()
  }, [panel])

  const handleImport = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return
    try {
      onLoad(await importChar(file))
    } catch (err) {
      setErro(err.message)
    } finally {
      e.target.value = ''
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteChar(id)
      refresh()
    } catch (err) {
      setErro(err.message)
    }
  }

  return (
    <div className="menu-screen">
      <div className="menu-scanline" aria-hidden="true" />

      <div className="menu-account no-print">
        <span className="menu-account-mail">{session?.user?.email}</span>
        <button className="menu-logout" onClick={() => supabase.auth.signOut()}>Sair</button>
      </div>

      <div className="menu-logo">
        <div className="menu-logo-top">Ordo Realitas</div>
        <h1 className="menu-logo-title"><span>ORDEM</span> <span>PARANORMAL</span></h1>
        <div className="menu-logo-sub">Criador de Agente</div>
      </div>

      <nav className="menu-nav" aria-label="Menu principal">
        <button className="menu-item" style={{ '--i': 0 }} onClick={onNew}>
          <span className="menu-item-marker" />
          Novo Agente
        </button>
        <button
          className={`menu-item${panel === 'saved' ? ' open' : ''}`}
          style={{ '--i': 1 }}
          onClick={() => setPanel(panel === 'saved' ? null : 'saved')}
        >
          <span className="menu-item-marker" />
          Agentes Salvos
          {saved.length > 0 && <span className="menu-count">{saved.length}</span>}
        </button>
        <button className="menu-item" style={{ '--i': 2 }} onClick={() => fileRef.current?.click()}>
          <span className="menu-item-marker" />
          Importar Ficha
        </button>
        <input ref={fileRef} type="file" accept=".json" hidden onChange={handleImport} />
      </nav>

      {erro && (
        <div className="error-banner menu-error" role="alert">
          ⚠ {erro}
          <button className="error-close" onClick={() => setErro(null)}>✕</button>
        </div>
      )}

      {panel === 'saved' && (
        <div className="menu-saved">
          {loading ? (
            <div className="empty-state">Carregando…</div>
          ) : saved.length === 0 ? (
            <div className="empty-state">Nenhum agente salvo ainda.</div>
          ) : (
            saved.map((c, i) => (
              <div key={c.id} className="menu-saved-item" style={{ '--i': i }}>
                <button className="menu-saved-load" onClick={() => onLoad(c)}>
                  <span className="menu-saved-nome">{c.nome || 'Sem nome'}</span>
                  <span className="menu-saved-meta">
                    {c.classe ?? '—'}{c.trilha ? ` · ${c.trilha}` : ''} · NEX {c.nex ?? 5}%
                  </span>
                </button>
                <button
                  className="btn-mini btn-mini--danger"
                  onClick={() => handleDelete(c.id)}
                  aria-label={`Excluir ${c.nome}`}
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>
      )}

      <div className="menu-footer">v2 · conteúdo: livro básico + suplementos oficiais</div>
    </div>
  )
}
