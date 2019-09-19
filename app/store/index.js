import Vue from 'vue';
import Vuex from 'vuex';
import childrenStore from './modules/childrenStore';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    childrenStore
  }
})

export default store;
