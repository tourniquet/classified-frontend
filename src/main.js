import Vue from 'vue'
import App from './App'

/* eslint-disable no-new */
var vm = new Vue({
  el: 'body',
  components: { App }
})

document.body.addEventListener('click', () => {
  vm.$broadcast('close-drop-down')
})
