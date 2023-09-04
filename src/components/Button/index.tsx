import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react'
import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  variations?: 'primary' | 'secondary' | 'danger'
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = ({
  children,
  size = 'medium',
  variations = 'primary',
  ...props
}: ButtonProps) => (
  <S.Wrapper variations={variations} size={size} {...props}>
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default Button
