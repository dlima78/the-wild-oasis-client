import styled, { DefaultTheme, css } from 'styled-components'
import { ButtonProps } from '.'

export type WrapperProps = Pick<ButtonProps, 'size' | 'variations'>

const WrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    padding: 0.4rem ${theme.spacings.xxsmall};
    text-transform: uppercase;
    font-weight: 600;
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    padding: 1.2rem ${theme.spacings.xsmall};
    font-weight: 500;
  `,
  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    padding: 1.2rem ${theme.spacings.small};
    font-weight: 500;
  `,
  primary: (theme: DefaultTheme) => css`
    color: ${theme.colors.colorBrand50};
    background-color: ${theme.colors.colorBrand500};

    &:hover {
      background-color: ${theme.colors.colorBrand700};
    }
  `,
  secondary: (theme: DefaultTheme) => css`
    color: ${theme.colors.colorGrey600};
    background-color: ${theme.colors.colorGrey0};
    border: 1px solid ${theme.colors.colorGrey200};

    &:hover {
      background-color: ${theme.colors.colorGrey50};
    }
  `,
  danger: (theme: DefaultTheme) => css`
    color: ${theme.colors.colorRed100};
    background-color: ${theme.colors.colorRed700};

    &:hover {
      background-color: ${theme.colors.colorRed800};
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, variations }) => css`
    border: none;
    border-radius: ${theme.borderRadius.small};
    box-shadow: ${theme.shadows.small};

    ${!!size && WrapperModifiers[size](theme)}
    ${!!variations && WrapperModifiers[variations](theme)}
  `}
`
