/* eslint no-console: 0 */

import TurbolinksAdapter from 'vue-turbolinks'
import Vue from 'vue/dist/vue.esm'
import Inputs from '../src/components/inputs.vue'

Vue.use(TurbolinksAdapter)

document.addEventListener('turbolinks:load', () => {
  const app = new Vue({
    el: '#vue-app',
    // data: () => {
    //   return {
    //     message: "Can you say hello?"
    //   }
    // },
    components: { Inputs }
  })
})