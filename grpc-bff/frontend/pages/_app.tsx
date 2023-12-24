import { urqlClient } from '@/lib/init-urql'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'urql'

export default function App({ Component, pageProps }: AppProps) {
  return <Provider value={urqlClient}><Component {...pageProps} /></Provider>
}
