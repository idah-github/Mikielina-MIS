import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import FlashMessage from '@smartweb/vue-flash-message';
import store from './store';

// Import Bootstrap and BootstrapVue CSS files (order is important)
import vuetify from './plugins/vuetify'
import VueFlashMessage from 'vue-flash-message'
import VeeValidate from 'vee-validate';


import { ValidationObserver, ValidationProvider} from 'vee-validate';


/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'




/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)
Vue.use(VueFlashMessage);
Vue.use(VeeValidate);
// Install components globally
Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);

Vue.config.productionTip = false


new Vue({
  router,
  vuetify,
  FlashMessage,
  store,
  render: h => h(App)
}).$mount('#app')
