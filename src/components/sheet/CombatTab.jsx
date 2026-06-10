import { CLASSES } from '../../data'
import { CLASS_MILESTONES } from '../../data/progressao'
import { ataqueDaArma, descricaoDano } from './sheetUtils'

// Habilidade de classe no nível atual (ex.: Ataque Especial no patamar certo)
function milestoneAtual(char) {
  const tabela = CLASS_MILESTONES[char.classe]
  if (!tabela) return null
  const nex = char.nex ?? 5
  const niveis = Object.keys(tabela).map(Number).filter((n) => n <= nex).sort((a, b) => b - a)
  return niveis.length ? tabela[niveis[0]] : null
}

export default function CombatTab({ char }) {
  const cls = CLASSES[char.classe]
  const armas = (char.inventario ?? []).filter((i) => i.tipo === 'arma')
  const protecoes = (char.inventario ?? []).filter((i) => i.tipo === 'protecao')
  const milestone = milestoneAtual(char)

  return (
    <div>
      {/* Ataques */}
      <div className="summary-section">
        <div className="summary-section-title">Ataques</div>
        <div className="summary-section-body">
          {armas.length === 0 ? (
            <div className="empty-state">
              Nenhuma arma no inventário. Adicione armas na aba <strong>Inventário</strong> para
              ver os ataques calculados aqui.
            </div>
          ) : (
            <div className="attack-table-wrap">
              <table className="attack-table">
                <thead>
                  <tr>
                    <th>Arma</th><th>Teste</th><th>Dano</th><th>Crítico</th><th>Alcance</th><th>Tipo</th>
                  </tr>
                </thead>
                <tbody>
                  {armas.map((item) => {
                    const { pericia, ataqueBonus, danoBonus } = ataqueDaArma(char, item)
                    return (
                      <tr key={item.id}>
                        <td className="attack-nome">
                          {item.base.nome}
                          {(item.mods ?? []).length > 0 && <span className="attack-mods"> ({item.mods.join(', ')})</span>}
                          {(item.maldicoes ?? []).length > 0 && <span className="attack-malds"> ☠ {item.maldicoes.join(', ')}</span>}
                        </td>
                        <td>{pericia}{ataqueBonus > 0 ? ` +${ataqueBonus}` : ''}</td>
                        <td className="attack-dano">{descricaoDano(item, danoBonus)}</td>
                        <td>{item.base.critico}</td>
                        <td>{item.base.alcance ?? '—'}</td>
                        <td>{item.base.tipoDano}</td>
                      </tr>
                    )
                  })}
                  <tr>
                    <td className="attack-nome">Ataque desarmado</td>
                    <td>Luta</td>
                    <td className="attack-dano">1d3+{char.atributos?.['Força'] ?? 1} (não letal)</td>
                    <td>x2</td><td>—</td><td>I</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Habilidade de classe ativa */}
      {milestone && (
        <div className="summary-section">
          <div className="summary-section-title">Habilidade de Classe · {char.classe}</div>
          <div className="summary-section-body">
            <div className="poder-summary"><strong>{milestone}</strong></div>
            {cls && <div className="poder-summary" style={{ marginTop: 8 }}>{cls.habilidade}</div>}
          </div>
        </div>
      )}

      {/* Proteções */}
      <div className="summary-section">
        <div className="summary-section-title">Proteções</div>
        <div className="summary-section-body">
          {protecoes.length === 0 ? (
            <div className="empty-state">Sem proteções equipadas (Defesa = 10 + Agilidade).</div>
          ) : (
            <div className="skill-tags">
              {protecoes.map((p) => (
                <span key={p.id} className="skill-tag" title={p.base.desc}>
                  {p.base.nome} (+{(p.base.defesa ?? 0) + ((p.mods ?? []).includes('Reforçada') ? 2 : 0)} Defesa)
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Referência rápida de ações */}
      <div className="summary-section">
        <div className="summary-section-title">Referência Rápida</div>
        <div className="summary-section-body">
          <div className="quickref-grid">
            <div className="quickref-item"><strong>Agredir</strong> (padrão) — ataque com arma ou desarmado.</div>
            <div className="quickref-item"><strong>Mirar</strong> (movimento) — ignora penalidade de alvo envolvido em corpo a corpo.</div>
            <div className="quickref-item"><strong>Esquiva</strong> (reação) — +5 na Defesa contra um ataque (Reflexos).</div>
            <div className="quickref-item"><strong>Bloqueio</strong> (reação) — resistência a dano igual à Fortitude.</div>
            <div className="quickref-item"><strong>Contra-ataque</strong> (reação, 2 PE) — após esquiva bem-sucedida, ataque corpo a corpo.</div>
            <div className="quickref-item"><strong>Corrida</strong> (completa) — desloca o dobro do deslocamento.</div>
            <div className="quickref-item"><strong>Recarregar</strong> (movimento) — recarrega arma de disparo.</div>
            <div className="quickref-item"><strong>Levantar-se</strong> (movimento) — sai da condição caído.</div>
          </div>
        </div>
      </div>
    </div>
  )
}
