<style lang="scss">
  .form {
    padding: 0 30px;

    .label {
      display: inline-block;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.1em;
      margin-bottom: 18px;
    }

    .input {
      display: block;
      background: #fff;
      border: 2px solid #f6f6f6;
      border-radius: 8px;
      height: 58px;
      width: 100%;
      padding-left: 15px;
      margin-bottom: 18px;
      font-size: 14px;
      letter-spacing: 0.08em;
      text-align: left;
      box-sizing: border-box;
    }

    .description {
      display: block;
      border: 2px solid #f6f6f6;
      border-radius: 8px;
      height: 190px;
      width: 100%;
      margin-bottom: 26px;
      resize: none;
    }

    .label-for-price {
      display: block;
    }

    .price {
      display: inline-block;
      width: 64%;
    }

    .currency {
      display: inline-block;
      float: right;
      width: 33%;
    }

    .post-ad {
      display: table;
      background: transparent linear-gradient(#e7774a, #df5b27) repeat scroll 0% 0%;
      border: 0px none;
      border-radius: 22px;
      color: #fff;
      margin: 20px auto 0px;
      width: 182px;
      height: 42px;
    }

    .mandatory {
      color: red;
    }
  }
</style>

<template lang="jade">
  .form
    label.label(for="category") Categoria
      span.mandatory *
    drop-down-menu(:name="category.title", :elements="categories", @change="setCategory")

    label.label(for="subcategory") Subcategoria
      span.mandatory *
    drop-down-menu(:name="subcategory.title", :elements="subcategories", @change="setSubcategory")

    label.label(for="region") Regiunea
    drop-down-menu(:name="subcategory.title", :elements="subcategories", @change="setSubcategory")

    label.label(for="title") Titlul anunţului
      span.mandatory *
    input.input.title(type="text", name="title", v-model="title")

    label.label(for="description") Descriere
      span.mandatory *
    textarea.description(name="description", v-model="description")

    label.label.contacts Contacte
    input.input.phone(type="text", name="phone", placeholder="telefon", v-model="phone")
    input.input.contact-name(type="text", name="contact-name", placeholder="nume de contact", v-model="contactName")

    label.label.label-for-price(for="price") Preţ
    input.input.price(type="text", name="price", v-model="price")
    .ul-width.currency
      drop-down-menu(:name="currency", :elements="currencies", @change="setCurrency")

    button.post-ad(type="button", @click="postAd") Postează anunţ
</template>

<script>
  import io from '../sails'
  import DropDownMenu from './DropDownMenu'

  var data = {
    expandButton: false,
    categories: '',
    subcategories: '',
    category: {
      title: 'Alege categoria',
      id: ''
    },
    subcategory: {
      title: 'Alege subcategoria',
      id: ''
    },
    title: '',
    description: '',
    phone: '',
    contactName: '',
    price: '',
    currencies: [
      {
        title: 'lei'
      },
      {
        title: '$'
      },
      {
        title: '€'
      }
    ],
    currency: 'lei'
  }

  export default {
    components: {
      DropDownMenu
    },
    data () {
      return data
    },
    methods: {
      setCategory (index) {
        this.category = this.categories[index]

        io.socket.get('/subcategory/find/', {
          category: index
        }, (data) => {
          this.subcategories = data
        })

        this.subcategory.title = 'Alege subcategoria'
      },

      setSubcategory (index) {
        this.subcategory = this.subcategories[index]
      },

      setCurrency (index) {
        this.currency = this.currencies[index].title
      },

      postAd () {
        if (!this.category.id && !this.subcategory.id) {
          return
        }

        io.socket.post('/ad/create', {
          subcategory: this.subcategory.id,
          title: this.title,
          description: this.description,
          phone: this.phone,
          contactName: this.contactName,
          price: this.price,
          currency: this.currency
        }, (data, res) => {
          res.statusCode
        })
      }
    },
    ready () {
      io.socket.get('/category/find', (data) => {
        this.categories = data
      })
      this.$on('close-drop-down', (id) => {
        this.$broadcast('close-drop-down', id)
      })
    }
  }
</script>
