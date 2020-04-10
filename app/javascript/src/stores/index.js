import Vue from 'vue/dist/vue.esm';
import Vuex from 'vuex';
Vue.use(Vuex);

import CardsStore from './modules/cards_store';

const store = new Vuex.Store({
  modules: {
    CardsStore,
  }
});

export default store;
