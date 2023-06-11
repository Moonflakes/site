import { defineConfig, defaultColors } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'

export default defineConfig({
  theme: {
    title: 'Margot',
    colors: {
      gray: defaultColors.zinc,
      primary: defaultColors.indigo,
    },
    logo: {
      square: '/vite.svg',
      light: '/vite.svg',
      dark: '/vite.svg',
    },
  },
  tree: {
    groups: [
      {
        id: 'top',
        title: '',
      },
      {
        id: 'top1',
        title: '',
      },
      {
        id: 'top2',
        title: '',
      },
      {
        id: 'top3',
        title: '',
      },
    ],
  },
  plugins: [HstVue()],
})
