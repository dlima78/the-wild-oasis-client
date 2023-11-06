import { css, styled } from 'styled-components'

export const Wrapper = styled.aside`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorGrey0};
    padding: ${theme.spacings.medium} ${theme.spacings.small};
    border-right: 1px solid ${theme.colors.colorGrey100};

    grid-row: 1 / -1;
  `}
`
