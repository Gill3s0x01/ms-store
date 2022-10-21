import type { NextPage } from 'next'
import usePersistedState from '../Hooks/usePersistedState'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../styles/global'
import light from '../styles/Themes/light'
import dark from '../styles/Themes/dark'
import { Header } from '../components/Header'
import Footer from '../components/Footer'
import Head from 'next/head'

const Home: NextPage = () => {
  const [darkTheme, setDarkTheme] = usePersistedState<DefaultTheme>(
    'theme',
    light
  )
  const toggleTheme = () => {
    setDarkTheme(darkTheme.title === 'light' ? dark : light)
  }
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>MKS Sistemas</title>
        <meta
          name="description"
          content="Teste pratico para empresa MKS Sistemas"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <Header toggleTheme={toggleTheme} />
      <Footer />
    </ThemeProvider>
  )
}

export default Home
