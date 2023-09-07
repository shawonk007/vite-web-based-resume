import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import '@/style.css'

router.beforeEach((to, from, next) => {
  const title = to.meta.title
  if (title) {
    document.title = title || DEFAULT_TITLE
  }
  next()
});

createApp(App)
.use(router)
.mount('#app')
