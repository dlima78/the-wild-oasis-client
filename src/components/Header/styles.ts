import { css, styled } from 'styled-components'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorGrey0};
    padding: 1.2rem 4.8rem;
    border-bottom: 1px solid ${theme.colors.colorGrey100};
  `}
`
