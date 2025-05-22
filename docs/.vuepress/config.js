import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'pt-BR',

  title: 'Avaliapp',

  description: 'Veja o que há de novo no Avaliapp:',

  base: '/vuepress-tryout/',

  theme: defaultTheme({
    logo: 'logo.png',

    navbar: [
      {
        text: 'Ver atualizações do Webapp',
        link: '/web/1.0.html',
      },
      {
        text: 'Ver atualizações do Aplicativo',
        link: '/app/1.0.html',
      },
      {
        text: 'Avaliapp',
        link: 'https://avaliapp.altecnologia.com.br',
      }
    ],
  }),

  themeConfig: {
    sidebar: [
      {
        title: '1.0',
        collapsable: false,
      }
    ]
  },

  head: [['link', { rel: 'stylesheet', href: '/index.css' }]],

  bundler: viteBundler(),
})