import App from './App'
import router from './router'

/* eslint-disable no-new */

router.start({
  components: { App }
}, 'body')

// document.body.addEventListener('click', () => {
//   vm.$broadcast('close-drop-down')
// })
