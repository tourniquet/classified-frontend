import VMenu from 'components/VMenu'
import Newad from 'components/Newad'
import Category from 'components/Category'
import Subcategory from 'components/Subcategory'
import Adpage from 'components/Adpage'

export default {
  '/': {
    name: 'menu',
    component: VMenu
  },
  '/newad': {
    name: 'newad',
    component: Newad
  },
  '/category/:category': {
    name: 'category',
    component: Category
  },
  '/:category/:subcategory': {
    name: 'subcategory',
    component: Subcategory
  },
  '/:uri': {
    name: 'adpage',
    component: Adpage
  }
}
