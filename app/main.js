import Vue from 'nativescript-vue'
import App from './components/App'

import VueDevtools from 'nativescript-vue-devtools'
import store from './store/index'
import LayoutDefault from './layouts/LayoutDefault.vue'

import {
  TNSFontIcon,
  fonticon
} from 'nativescript-fonticon';

TNSFontIcon.paths = {
  'fa': './assets/css/fontawesome.css'
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

if(TNS_ENV !== 'production') {
  Vue.use(VueDevtools)
}
  
// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement(
  'RadSideDrawer',
  () => require('nativescript-ui-sidedrawer').RadSideDrawer
)

Vue.component('LayoutDefault', LayoutDefault)

new Vue({
  store,
  render: h => h('frame', [h(App)])
}).$start()
