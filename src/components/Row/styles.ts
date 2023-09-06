import { css, styled } from 'styled-components'
import { RowProps } from '.'

export type WrapperProps = Pick<RowProps, 'type'>
const WrapperModifiers = {
  horizontal: () => css`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `,
  vertical: () => css`
    flex-direction: column;
    gap: 1.6rem;
  `
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ type }) => css`
    display: flex;

    ${!!type && WrapperModifiers[type]()}
  `}
`
