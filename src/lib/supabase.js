import { createClient } from '@supabase/supabase-js'

// Estas credenciais são públicas por design (chave "publishable"): só permitem
// o que as políticas de Row Level Security autorizam. Cada usuário só enxerga
// e altera os próprios personagens. Seguro para repositório público / SPA.
const SUPABASE_URL = 'https://zktdrataxwkfrdjdkrsl.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Ou76QfuuHEbRUeuEkxOW6Q_36E6j0qN'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
})
