import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  type?: 'h1' | 'h2' | 'h3'
}

const Heading: React.FC<HeadingProps> = ({ type = 'h1', children }) => (
  <S.Wrapper as={type}>{children}</S.Wrapper>
)

export default Heading
