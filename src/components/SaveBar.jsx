import { useState, useRef } from 'react'
import { listSavedChars, saveChar, deleteChar, exportChar, importChar } from '../utils/storage'

export default function SaveBar({ char, onLoad }) {
  const [showList, setShowList] = useState(false)
  const [saved, setSaved] = useState(false)
  const fileRef = useRef()

  function handleSave() {
    saveChar(char)
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  function handleLoad(entry) {
    onLoad(entry)
    setShowList(false)
  }

  function handleDelete(id, e) {
    e.stopPropagation()
    deleteChar(id)
    setShowList(false)
    setTimeout(() => setShowList(true), 10)
  }

  async function handleImport(e) {
    const file = e.target.files[0]
    if (!file) return
    try {
      const char = await importChar(file)
      onLoad(char)
    } catch (err) {
      alert(err.message)
    }
    e.target.value = ''
  }

  const chars = listSavedChars()

  return (
    <>
      <div className="save-bar no-print">
        <button className="btn btn-ghost" onClick={() => setShowList((v) => !v)}>
          ⊞ Personagens Salvos
        </button>
        <button className="btn btn-ghost" onClick={handleSave}>
          {saved ? '✓ Salvo!' : '↓ Salvar'}
        </button>
        <button className="btn btn-ghost" onClick={() => exportChar(char)}>
          ↥ Exportar JSON
        </button>
        <button className="btn btn-ghost" onClick={() => fileRef.current.click()}>
          ↤ Importar JSON
        </button>
        <input ref={fileRef} type="file" accept=".json" style={{ display: 'none' }} onChange={handleImport} />
      </div>

      {showList && (
        <div className="modal-overlay" onClick={() => setShowList(false)}>
          <div className="modal-box modal-box--narrow" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <div className="modal-title">PERSONAGENS SALVOS</div>
              <button className="modal-close" onClick={() => setShowList(false)}>✕</button>
            </div>
            {chars.length === 0 ? (
              <div style={{ padding: '24px', color: 'var(--text-dim)', textAlign: 'center' }}>
                Nenhum personagem salvo.
              </div>
            ) : (
              <div className="char-list">
                {chars.map((c) => (
                  <div key={c.id} className="char-list-item" onClick={() => handleLoad(c)}>
                    <div className="char-list-info">
                      <div className="char-list-name">{c.nome || '(sem nome)'}</div>
                      <div className="char-list-meta">
                        {c.classe || '—'} · NEX {c.nex ?? 5}%
                        {c.savedAt && (
                          <> · {new Date(c.savedAt).toLocaleDateString('pt-BR')}</>
                        )}
                      </div>
                    </div>
                    <button
                      className="char-list-delete"
                      onClick={(e) => handleDelete(c.id, e)}
                      title="Excluir"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
