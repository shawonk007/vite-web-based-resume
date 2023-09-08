import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'
import '@/style.css'
import '@/assets/css/fonts.css'

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import { fab } from "@fortawesome/free-brands-svg-icons"

library.add( fas, far, fab );

router.beforeEach((to, from, next) => {
  const title = to.meta.title
  if (title) {
    document.title = title || DEFAULT_TITLE
  }
  next()
});

createApp(App)
.use(router)
.component('fa-icon', FontAwesomeIcon)
.mount('#app')
