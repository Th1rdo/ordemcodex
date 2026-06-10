import { useMemo, useState } from 'react'
import { PATENTES, getPatente, podeUsarAmaldicoados } from '../../data/patentes'
import { MUNICOES, PROTECOES, EQUIPAMENTO_GERAL, capacidadeCarga } from '../../data/equipamento'
import { ITENS_AMALDICOADOS } from '../../data/maldicoes'
import { getArmas, getItensAmaldicoadosExtras, getItensExtras } from '../../utils/content'
import {
  categoriaEfetiva, espacosItem, espacosTotais,
  getModsDisponiveis, getMaldicoesDisponiveis,
  validarModificacao, validarMaldicao, validarNovoItem,
  contarUsoPorCategoria, CATEGORIA_LABEL,
} from '../../utils/inventoryRules'

let nextId = 1
const newId = () => `item-${Date.now()}-${nextId++}`

export default function InventoryTab({ char, setChar }) {
  const [catalogo, setCatalogo] = useState('arma')
  const [erro, setErro] = useState(null)
  const [editando, setEditando] = useState(null) // item id sendo editado

  const armas = useMemo(() => getArmas(char), [char])
  const amaldicoados = useMemo(
    () => [...ITENS_AMALDICOADOS, ...getItensAmaldicoadosExtras(char)],
    [char]
  )
  const extras = useMemo(() => getItensExtras(char), [char])
  const patente = getPatente(char.patente)
  const inventario = char.inventario ?? []
  const carga = espacosTotais(char)
  const cargaMax = capacidadeCarga(
    char.atributos?.['Força'] ?? 1,
    inventario.some((i) => i.base.nome === 'Mochila militar')
  )
  const uso = contarUsoPorCategoria(char)

  const catalogos = {
    arma: { label: 'Armas', itens: armas, tipo: 'arma' },
    protecao: { label: 'Proteções', itens: PROTECOES, tipo: 'protecao' },
    municao: { label: 'Munições', itens: MUNICOES, tipo: 'municao' },
    geral: { label: 'Equipamento', itens: [...EQUIPAMENTO_GERAL, ...extras], tipo: 'geral' },
    amaldicoado: { label: 'Amaldiçoados', itens: amaldicoados, tipo: 'amaldicoadoEspecial' },
  }

  function addItem(base, tipo) {
    // Acessórios (Utensílio/Vestimenta/Kit) contam como tipo acessorio para mods/maldições
    const tipoFinal = tipo === 'geral' && base.grupo === 'Acessório' ? 'acessorio' : tipo
    const check = validarNovoItem(base, tipoFinal, char)
    if (!check.ok) { setErro(check.motivo); return }
    setErro(null)
    setChar((c) => ({
      ...c,
      inventario: [...(c.inventario ?? []), { id: newId(), tipo: tipoFinal, base, mods: [], maldicoes: [] }],
    }))
  }

  function removeItem(id) {
    setChar((c) => ({ ...c, inventario: (c.inventario ?? []).filter((i) => i.id !== id) }))
    if (editando === id) setEditando(null)
  }

  function addMod(item, modNome) {
    const check = validarModificacao(item, modNome, char)
    if (!check.ok) { setErro(check.motivo); return }
    setErro(null)
    setChar((c) => ({
      ...c,
      inventario: (c.inventario ?? []).map((i) =>
        i.id === item.id ? { ...i, mods: [...(i.mods ?? []), modNome] } : i
      ),
    }))
  }

  function addMaldicao(item, maldNome) {
    const check = validarMaldicao(item, maldNome, char)
    if (!check.ok) { setErro(check.motivo); return }
    setErro(null)
    setChar((c) => ({
      ...c,
      inventario: (c.inventario ?? []).map((i) =>
        i.id === item.id ? { ...i, maldicoes: [...(i.maldicoes ?? []), maldNome] } : i
      ),
    }))
  }

  function removeUpgrade(item, nome, key) {
    setChar((c) => ({
      ...c,
      inventario: (c.inventario ?? []).map((i) =>
        i.id === item.id ? { ...i, [key]: (i[key] ?? []).filter((m) => m !== nome) } : i
      ),
    }))
  }

  return (
    <div>
      {/* Patente e limites */}
      <div className="summary-section">
        <div className="summary-section-title">Patente e Limites</div>
        <div className="summary-section-body">
          <div className="patente-row">
            <select
              className="patente-select"
              value={char.patente ?? 'Recruta'}
              onChange={(e) => setChar((c) => ({ ...c, patente: e.target.value }))}
              aria-label="Patente"
            >
              {PATENTES.map((p) => (
                <option key={p.nome} value={p.nome}>{p.nome} ({p.pp}+ PP)</option>
              ))}
            </select>
            <span className="patente-credito">Crédito: {patente.credito}</span>
          </div>
          <div className="limit-chips">
            {[1, 2, 3, 4].map((c) => (
              <div key={c} className={`limit-chip${(uso[c] ?? 0) > (patente.limiteItens[c] ?? 0) ? ' over' : ''}`}>
                Cat. {CATEGORIA_LABEL[c]}: {uso[c] ?? 0}/{patente.limiteItens[c] ?? 0}
              </div>
            ))}
            <div className={`limit-chip${carga > cargaMax ? ' over' : ''}`}>
              Carga: {carga}/{cargaMax} espaços
            </div>
          </div>
          {!podeUsarAmaldicoados(char.patente) && (
            <div className="hint-line">Itens amaldiçoados exigem patente Agente especial ou superior.</div>
          )}
        </div>
      </div>

      {erro && (
        <div className="error-banner" role="alert">
          ⚠ {erro}
          <button className="error-close" onClick={() => setErro(null)}>✕</button>
        </div>
      )}

      {/* Inventário atual */}
      <div className="summary-section">
        <div className="summary-section-title">Inventário ({inventario.length})</div>
        <div className="summary-section-body">
          {inventario.length === 0 ? (
            <div className="empty-state">
              Inventário vazio. Adicione itens do catálogo abaixo — os limites da sua patente
              são validados automaticamente.
            </div>
          ) : (
            <div className="inv-list">
              {inventario.map((item) => {
                const cat = categoriaEfetiva(item)
                const aberto = editando === item.id
                const podeUpgrades = ['arma', 'protecao', 'acessorio', 'municao'].includes(item.tipo)
                return (
                  <div key={item.id} className={`inv-item${aberto ? ' open' : ''}`}>
                    <div className="inv-item-row">
                      <div className="inv-item-main">
                        <span className="inv-item-nome">{item.base.nome}</span>
                        <span className="inv-item-meta">
                          Cat. {CATEGORIA_LABEL[Math.min(cat, 5)]} · {espacosItem(item)} esp.
                          {item.tipo === 'amaldicoadoEspecial' && ' · amaldiçoado'}
                        </span>
                        {(item.mods ?? []).map((m) => (
                          <span key={m} className="upgrade-tag" onClick={() => removeUpgrade(item, m, 'mods')} title="Clique para remover">
                            {m} ✕
                          </span>
                        ))}
                        {(item.maldicoes ?? []).map((m) => (
                          <span key={m} className="upgrade-tag upgrade-tag--mald" onClick={() => removeUpgrade(item, m, 'maldicoes')} title="Clique para remover">
                            ☠ {m} ✕
                          </span>
                        ))}
                      </div>
                      <div className="inv-item-actions">
                        {podeUpgrades && (
                          <button className="btn-mini" onClick={() => setEditando(aberto ? null : item.id)}>
                            {aberto ? 'Fechar' : 'Modificar'}
                          </button>
                        )}
                        <button className="btn-mini btn-mini--danger" onClick={() => removeItem(item.id)}>Remover</button>
                      </div>
                    </div>
                    {item.base.desc && <div className="inv-item-desc">{item.base.desc}</div>}

                    {aberto && (
                      <div className="upgrade-panel">
                        <div className="upgrade-col">
                          <div className="upgrade-title">Modificações (+I categoria cada)</div>
                          <div className="upgrade-options">
                            {getModsDisponiveis(item).map((m) => {
                              const valid = validarModificacao(item, m.nome, char)
                              return (
                                <button
                                  key={m.nome}
                                  className="upgrade-option"
                                  disabled={!valid.ok}
                                  title={valid.ok ? m.efeito : valid.motivo}
                                  onClick={() => addMod(item, m.nome)}
                                >
                                  {m.nome}
                                </button>
                              )
                            })}
                          </div>
                        </div>
                        <div className="upgrade-col">
                          <div className="upgrade-title">Maldições (1ª +II, depois +I)</div>
                          <div className="upgrade-options">
                            {getMaldicoesDisponiveis(item).map((m) => {
                              const valid = validarMaldicao(item, m.nome, char)
                              return (
                                <button
                                  key={m.nome}
                                  className="upgrade-option upgrade-option--mald"
                                  disabled={!valid.ok}
                                  title={valid.ok ? `${m.elemento}: ${m.efeito}` : valid.motivo}
                                  onClick={() => addMaldicao(item, m.nome)}
                                >
                                  {m.nome} <span className="upgrade-el">{m.elemento}</span>
                                </button>
                              )
                            })}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {/* Catálogo */}
      <div className="summary-section">
        <div className="summary-section-title">Adicionar Itens</div>
        <div className="summary-section-body">
          <div className="catalog-tabs">
            {Object.entries(catalogos).map(([k, v]) => (
              <button
                key={k}
                className={`catalog-tab${catalogo === k ? ' active' : ''}`}
                onClick={() => setCatalogo(k)}
              >
                {v.label}
              </button>
            ))}
          </div>
          <div className="catalog-list">
            {catalogos[catalogo].itens.map((base) => {
              const tipoFinal = catalogos[catalogo].tipo === 'geral' && base.grupo === 'Acessório' ? 'acessorio' : catalogos[catalogo].tipo
              const valid = validarNovoItem(base, tipoFinal, char)
              return (
                <div key={base.nome} className={`catalog-item${valid.ok ? '' : ' blocked'}`}>
                  <div className="catalog-item-info">
                    <span className="catalog-item-nome">
                      {base.nome}
                      {base.elemento && <span className="poder-elemento-badge" style={{ marginLeft: 6 }}>{base.elemento}</span>}
                    </span>
                    <span className="catalog-item-meta">
                      Cat. {CATEGORIA_LABEL[base.categoria ?? 0]}
                      {base.dano ? ` · ${base.dano} (${base.critico})` : ''}
                      {base.defesa ? ` · +${base.defesa} Defesa` : ''}
                      {base.espacos != null ? ` · ${base.espacos} esp.` : ''}
                    </span>
                    {(base.desc || base.duracao) && <span className="catalog-item-desc">{base.desc ?? `Duração: ${base.duracao}`}</span>}
                  </div>
                  <button
                    className="btn-mini"
                    disabled={!valid.ok}
                    title={valid.ok ? 'Adicionar ao inventário' : valid.motivo}
                    onClick={() => addItem(base, catalogos[catalogo].tipo)}
                  >
                    + Add
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
