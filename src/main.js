import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import axios from 'axios';
Vue.prototype.axios = axios;
Vue.prototype.bus = new Vue();
Vue.config.productionTip = false
Vue.use(MuseUI);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
