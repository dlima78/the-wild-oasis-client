import { ReactNode } from 'react'
import * as S from './styles'

export type RowProps = {
  type?: 'horizontal' | 'vertical'
  children: ReactNode | ReactNode[]
}

const Row: React.FC<RowProps> = ({ type, children }: RowProps) => (
  <S.Wrapper data-testid="row" type={type}>
    {children}
  </S.Wrapper>
)

export default Row
