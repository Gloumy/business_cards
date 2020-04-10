/* eslint no-console: 0 */

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Inputs from '../src/components/inputs.vue'
import TemplatesList from '../src/components/templates_list.vue'
import PreviewContainer from '../src/components/preview_container.vue'
import Vuex from 'vuex'
import store from '../src/stores/index'

Vue.use(Vuex)
Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#vue-app',
    store,
    // data: () => {
    //   return {
    //     message: "Can you say hello?"
    //   }
    // },
    components: { Inputs, TemplatesList, PreviewContainer }
  })
})