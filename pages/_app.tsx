import createCache from '@emotion/cache'
import { CacheProvider, Global, css } from '@emotion/react'

import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'

const cache = createCache({ key: 'next' })

// Choices: Inter / Open Sans / IBM Plex Sans / Libre Franklin / Lato / Noto Sans / Oxygen
// const switzer = localFont({ src: './Switzer-Variable.ttf' })
const inter = Inter({
  subsets: ['latin'],
  // weight: ['100', '200', '300', '400', '500', '600', '700'], // IBM Plex Sans
  // weight: ['100', '300', '400', '700', '900'], // Lato
  // weight: ['300', '400', '700'], // Oxygen
})
// Some shades that could look good: Yellow, cyan, green, blue, purple, pink, violet, magenta

const App = ({
  Component,
  pageProps,
}: AppProps & { Component: () => React.JSX.Element }): React.JSX.Element => (
  <CacheProvider value={cache}>
    <Global
      styles={css`
        * {
          margin: 0;
        }

        @media (prefers-color-scheme: dark) {
          :root {
            color-scheme: dark;
            --link-color: #40e0d0; /* Color: Was Heliotrope (#df73ff), now Turquoise */
            --background-color: #111; /* Color: Was #333 */
            --color: #ffffff;
            --divider-color: #666;
          }
        }

        @media (prefers-color-scheme: light) {
          :root {
            --link-color: #8f00ff; /* Color: Was Bright pink (#ff007f), now Electric violet */
            --background-color: #eee;
            --color: #000000;
            --divider-color: #bbb;
          }
        }

        body {
          font-family: ${inter.style.fontFamily}, system-ui, 'Segoe UI', Roboto, Oxygen-Sans,
            Ubuntu, Cantarell, 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji',
            'Segoe UI Emoji', 'Segoe UI Symbol';
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
