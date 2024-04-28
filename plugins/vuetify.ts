import {createVuetify, type ThemeDefinition} from 'vuetify'

const myCustomLightTheme: ThemeDefinition = {
    dark: false,
    colors: {
        background: '#FFFFFF',
        appbar: '#f8f9fa',
        surface: '#FFFFFF',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#f8f9fa',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

const myCustomDarkTheme: ThemeDefinition = {
    dark: true,
    colors: {
        background: '#333b42',
        appbar: '#262c30',
        surface: '#33383b',
        primary: '#6200EE',
        'primary-darken-1': '#3700B3',
        secondary: '#262c30',
        'secondary-darken-1': '#018786',
        error: '#B00020',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
    },
}

export default defineNuxtPlugin((nuxtApp) => {
    const vuetify = createVuetify({
        icons: {
            defaultSet: 'mdi',
        },
        theme: {
            defaultTheme: 'light',
            themes: {
                light: myCustomLightTheme,
                dark: myCustomDarkTheme,
            },
        },
    })
    nuxtApp.vueApp.use(vuetify)
})