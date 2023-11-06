import { css, styled } from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 26rem 1fr;
  grid-template-rows: auto 1fr;
  height: 100vh;
`

export const Main = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.colorGrey50};
    padding: 4rem 4.8rem 6.4rem;
  `}
`

export const Container = styled.div``
