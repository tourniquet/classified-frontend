import App from './App'
import router from './router'

/* eslint-disable no-new */

router.start({
  components: { App }
}, 'body')

// document.body.addEventListener('click', () => {
  // router.$broadcast('close-drop-down')
// })
