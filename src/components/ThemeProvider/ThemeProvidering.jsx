import {ThemeProvider} from '@emotion/react'

const theme = {
    colors: {
        white: '',
        warning: '',
        focus: '',
        primary: {
            a: '#5754ED',
            b: '',
            c: ''
        },
        secondary: {
            a:  '#EBEAF9',
            b: '',
            c: ''
        },
        neutral: {
            a: '',
            b: '',
            c: ''
        },
        dark: {
            a: '',
            b: '',
        }
    }
}

export const ThemeProvidering = ({children}) =>{
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}