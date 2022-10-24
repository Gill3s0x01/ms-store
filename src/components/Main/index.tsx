import { MainContainer } from './styles'
import usePersistedState from '../../Hooks/usePersistedState'
import { DefaultTheme, ThemeProvider } from 'styled-components'
import { GlobalStyle } from '../../styles/global'
import light from '../../styles/Themes/light'
import dark from '../../styles/Themes/dark'
import { Header } from '../../components/Header'
import Footer from '../../components/Footer'
import Head from 'next/head'
import { useCallback, useEffect, useState } from 'react'
import mks, { Product } from '../../integrations/api'
import Products from '../../components/Products'
import { NextPage } from 'next'
import { ShoppingCartDrawer } from '../ShoppingCartDrawer'

const Home: NextPage = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [drawerVisible, setDrawerVisible] = useState(false)
  const [darkTheme, setDarkTheme] = usePersistedState<DefaultTheme>(
    'theme',
    light
  )
  const toggleTheme = () => {
    setDarkTheme(darkTheme.title === 'light' ? dark : light)
  }
  const openDrawer = () => {
    setDrawerVisible(true)
  }

  const closeDrawer = () => {
    setDrawerVisible(false)
  }

  const fetchProducts = useCallback(async () => {
    setLoading(true)

    try {
      const fetchedProducts = await mks.fetchProducts({
        page: 1,
        rows: 50,
        sortBy: 'id',
        orderBy: 'ASC',
      })

      if (fetchedProducts) {
        setProducts(fetchedProducts)
      }
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProducts().catch(() => {
      console.error('Falha ao carregar produtos')
    })
  }, [fetchProducts])
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>MKS Sistemas</title>
      </Head>
      <Header toggleTheme={toggleTheme} onOpenCart={openDrawer} />
      <MainContainer>
        <GlobalStyle />
        <main>
          <Products loading={loading} products={products} />
        </main>
        <ShoppingCartDrawer visible={drawerVisible} onClose={closeDrawer} />
        <Footer />
      </MainContainer>
    </ThemeProvider>
  )
}

export default Home
