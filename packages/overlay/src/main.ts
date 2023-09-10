import { createApp, h } from 'vue'
import type { Component } from 'vue'
import { createDevToolsVuePlugin } from '@vue-devtools-plus/core'
import App from './App.vue'

function createDevToolsContainer(App: Component) {
  const CONTAINER_ID = '__vue-devtools-container__'
  const el = document.createElement('div')
  el.setAttribute('id', CONTAINER_ID)
  el.setAttribute('data-v-inspector-ignore', 'true')
  document.getElementsByTagName('body')[0].appendChild(el)
  const app = createApp({
    render: () => h(App),
    devtools: {
      hide: true,
    },
  })
  app.use(createDevToolsVuePlugin())
  app.mount(el)
}

createDevToolsContainer(App)
