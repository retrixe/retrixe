import createCache from '@emotion/cache'
import { CacheProvider } from '@emotion/react'

import { type AppProps } from 'next/app'

const cache = createCache({ key: 'next' })

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: () => JSX.Element }): JSX.Element => (
  <CacheProvider value={cache}>
    <Component {...pageProps} />
  </CacheProvider>
)

export default App
