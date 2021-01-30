import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import vuetify from './plugins/vuetify';

Vue.use(Axios)

Vue.config.productionTip = false

new Vue({
  Axios,
  vuetify,
  render: h => h(App)
}).$mount('#app')
