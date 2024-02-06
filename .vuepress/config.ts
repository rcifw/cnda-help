import { defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { defaultTheme } from '@vuepress/theme-default'
import viteBundler from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',
  title: 'CNDA',
  description:
    'The Research Computing and Informatics Facility (RCIF) ' +
    'supports human imaging researchers across all campuses of ' +
    'Washington University in St. Louis.',
  head: [['link', { rel: 'icon', href: '/images/favicon.png' }]],
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: 'rcifw/cnda-help',
    repoLabel: 'Contribute!',
    navbar: [],
    sidebar: [],
    themePlugins: {
      git: false,
    },
  }),
  bundler: viteBundler(),
  plugins: [
    searchPlugin({
      hotKeys: [
        '/',
        {
          key: 'k',
          ctrl: true,
        },
      ],
      maxSuggestions: 10,
      // To add more fields to the index, (Other than title + headers) you should extend the `SearchIndex` type:
      // https://v2.vuepress.vuejs.org/reference/plugin/search.html#getextrafields
    }),
  ],
})
