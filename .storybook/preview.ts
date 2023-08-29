import { withThemeFromJSXProvider } from '@storybook/addon-styling'
import type { Preview } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import GlobalStyles from '../src/styles/global'
import theme from '../src/styles/theme'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      light: theme
    },
    defaultTheme: 'light',
    Provider: ThemeProvider,
    GlobalStyles
  })
]

export default preview
