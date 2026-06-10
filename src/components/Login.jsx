import { useState } from 'react'
import { supabase } from '../lib/supabase'

export default function Login() {
  const [mode, setMode] = useState('in') // 'in' | 'up'
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [erro, setErro] = useState(null)
  const [info, setInfo] = useState(null)
  const [busy, setBusy] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setErro(null); setInfo(null); setBusy(true)
    try {
      if (mode === 'in') {
        const { error } = await supabase.auth.signInWithPassword({ email, password: senha })
        if (error) throw error
      } else {
        const { data, error } = await supabase.auth.signUp({ email, password: senha })
        if (error) throw error
        // se confirmação de e-mail estiver ligada, não há sessão imediata
        if (!data.session) {
          setInfo('Conta criada! Verifique seu e-mail para confirmar e depois entre.')
          setMode('in')
        }
      }
    } catch (err) {
      setErro(traduzErro(err.message))
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="menu-screen">
      <div className="menu-scanline" aria-hidden="true" />

      <div className="menu-logo">
        <div className="menu-logo-top">Ordo Realitas</div>
        <h1 className="menu-logo-title"><span>ORDEM</span> <span>PARANORMAL</span></h1>
        <div className="menu-logo-sub">Acesso de Agente</div>
      </div>

      <form className="auth-form" onSubmit={submit}>
        <div className="auth-tabs">
          <button type="button" className={`auth-tab${mode === 'in' ? ' active' : ''}`} onClick={() => { setMode('in'); setErro(null); setInfo(null) }}>Entrar</button>
          <button type="button" className={`auth-tab${mode === 'up' ? ' active' : ''}`} onClick={() => { setMode('up'); setErro(null); setInfo(null) }}>Criar Conta</button>
        </div>

        <label className="auth-label">E-mail</label>
        <input
          type="email" className="auth-input" autoComplete="email" required
          value={email} onChange={(e) => setEmail(e.target.value)} placeholder="agente@ordem.com"
        />

        <label className="auth-label">Senha</label>
        <input
          type="password" className="auth-input" required minLength={6}
          autoComplete={mode === 'in' ? 'current-password' : 'new-password'}
          value={senha} onChange={(e) => setSenha(e.target.value)} placeholder="••••••••"
        />

        {erro && <div className="auth-msg auth-msg--err">⚠ {erro}</div>}
        {info && <div className="auth-msg auth-msg--ok">{info}</div>}

        <button type="submit" className="btn btn-primary auth-submit" disabled={busy}>
          {busy ? '...' : mode === 'in' ? 'Entrar' : 'Criar Conta'}
        </button>
      </form>

      <div className="menu-footer">seus personagens ficam salvos na sua conta, em qualquer dispositivo</div>
    </div>
  )
}

function traduzErro(msg = '') {
  if (/Invalid login credentials/i.test(msg)) return 'E-mail ou senha incorretos.'
  if (/Email not confirmed/i.test(msg)) return 'Confirme seu e-mail antes de entrar.'
  if (/already registered/i.test(msg)) return 'Este e-mail já tem conta. Tente entrar.'
  if (/at least 6/i.test(msg) || /Password should be/i.test(msg)) return 'A senha precisa de ao menos 6 caracteres.'
  return msg
}
