import GlobalStyles from '@/styles/global'
import { ThemeProvider } from 'styled-components'
import * as S from './app.styled'
import ButtonStyled from './components/Button'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <S.AppWrapper>
      <GlobalStyles />
      <h1>The wild oasis</h1>
      <ButtonStyled />
    </S.AppWrapper>
  </ThemeProvider>
)

export default App
