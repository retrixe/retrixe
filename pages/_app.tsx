import createCache from '@emotion/cache'
import { CacheProvider, Global, css } from '@emotion/react'

import { type AppProps } from 'next/app'

const cache = createCache({ key: 'next' })

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: () => JSX.Element }): JSX.Element => (
  <CacheProvider value={cache}>
    <Global
      styles={css`
        * {
          margin: 0;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            --link-color: #fbaed2; /* Color: Lavender pink */
            --background-color: #333;
            --color: #ffffff;
          }
        }

        @media (prefers-color-scheme: light) {
          :root {
            --link-color: #8f00ff; /* Color: Was Bright pink (#ff007f), now Electric violet */
            --background-color: #eee;
            --color: #000000;
          }
        }

        body {
          font-family: system-ui, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell,
            'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol';
          background-color: var(--background-color);
          color: var(--color);
        }

        #__next {
          width: 100vw;
          max-width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
      `}
    />
    <Component {...pageProps} />
  </CacheProvider>
)

export default App
