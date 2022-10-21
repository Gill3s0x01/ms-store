import { useState } from 'react'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '../styles/global'
import { ThemeProvider } from 'styled-components'
import light from '../styles/Themes/light'
import dark from '../styles/Themes/dark'
import { Header } from '../components/Header'

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState(light)

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light)
  }
  // globalStyles()
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
