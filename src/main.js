import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Cloudinary } from '@cloudinary/url-gen'

const app = createApp(App)

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'dlqb8ofzp',
  },
})

app.use(router)

app.mount('#app')
