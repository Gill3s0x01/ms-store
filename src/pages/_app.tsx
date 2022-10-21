import usePersistedState from '../Hook/usePersistedState'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider, DefaultTheme } from 'styled-components'
import light from '../styles/Themes/light'
import dark from '../styles/Themes/dark'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  const [darkTheme, setDarkTheme] = usePersistedState<DefaultTheme>(
    'theme',
    light
  )

  const toggleTheme = () => {
    setDarkTheme(darkTheme.title === 'light' ? dark : light)
  }
  // globalStyles()
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
