import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import * as S from './styles'
const AppLayout = () => (
  <S.Wrapper>
    <Header />
    <Sidebar />
    <S.Main>
      <S.Container>Main content</S.Container>
    </S.Main>
  </S.Wrapper>
)

export default AppLayout
