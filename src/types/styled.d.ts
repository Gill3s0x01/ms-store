import 'styled-components'
import { theme } from '../styles/Themes'

declare module 'styled-components' {
  export interface DefaultTheme extends theme {
    title: string
    primary: { 100: string; 200: string }
    secondary: { 100: string; 200: string; 300: string }
    terciary: string
    shadow: string
  }
}
