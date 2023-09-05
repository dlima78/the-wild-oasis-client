import { css, styled } from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'
import { HeadingProps } from '.'

export type WrapperProps = Pick<HeadingProps, 'type'>

const WrapperModifiers = {
  h1: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: 600;
  `,
  h2: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 600;
  `,
  h3: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    font-weight: 500;
  `
}

export const Wrapper = styled.h1<WrapperProps>`
  ${({ theme, type }) => css`
    line-height: 1.4rem;

    ${!!type && WrapperModifiers[type](theme)}
  `}
`
