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

    .button {
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
    }

    .ul-width {
      position: relative;
      width: 100%;
    }

    .hide-ul-menu {
      display: none !important;
    }

    .show-ul-menu {
      @extend .button;
      position: absolute;
      background: #fff;
      box-sizing: border-box;
      box-shadow: 2px 2px 6px #888888;
      border-radius: 3px;
    }

    .input {
      @extend .button;
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
      margin: 5px auto 0px;
      width: 182px;
      height: 42px;
    }
  }
</style>

<template lang="jade">
  form.form
    label.label(for="category") Categoria
    button.button(type="button", @click="showMenu('categoryButton')") {{ category.title }}
    .ul-width
      ul.show-ul-menu(:class="{'hide-ul-menu': !buttons.categoryButton}")
        li Alege categoria
        li(v-for="category in categories", @click="setCategory($index)") {{ category.title }}

    label.label(for="subcategory") Subcategoria
    button.button(type="button", @click="showMenu('subcategoryButton')") {{ subcategory.title }}
    .ul-width
      ul.show-ul-menu(:class="{'hide-ul-menu': !subcategoryButton}")
        li Alege subcategoria
        li(v-for="subcategory in subcategories", @click="setSubcategory($index)") {{ subcategory.title}}

    label.label(for="region") Regiunea
    button.button(type="button", @click="showMenu('regionButton')") selectați regiunea
    .ul-width
      ul.show-ul-menu(:class="{'hide-ul-menu': !expandButton}")
        li(v-for="item in items", @click="setButton($index)") {{ item.title}}

    label.label(for="title") Titlul anunţului
    input.input.title(type="text", name="title", v-model="title")

    label.label(for="description") Descriere
    textarea.description(name="description", v-model="description")

    label.label.contacts Contacte
    input.input.phone(type="text", name="phone", placeholder="telefon", v-model="phone")
    input.input.contact-name(type="text", name="contact-name", placeholder="nume de contact", v-model="contactName")

    label.label.label-for-price(for="price") Preţ
    input.input.price(type="text", name="price", v-model="price")
    .ul-width.currency
      button.button(type="button", @click="showMenu('currencyButton')") {{ currency }}
      ul.show-ul-menu(:class="{'hide-ul-menu': !expandButton}")
        li(@click="setCurrency('lei')") lei
        li(@click="setCurrency('$')") $
        li(@click="setCurrency('€')") €

    button.post-ad(type="button", @click="postAd") Postează anunţ
</template>

<script>
  import io from '../sails'

  var data = {
    expandButton: false,
    categories: '',
    subcategories: '',
    category: '',
    subcategory: '',
    title: '',
    description: '',
    phone: '',
    contactName: '',
    price: '',
    currency: '',
    buttons: {
      categoryButton: false,
      subcategoryButton: false,
      regionButton: false,
      currencyButton: false
    }
  }

  export default {
    data () {
      return data
    },
    methods: {
      showMenu (button) {
        if (this.buttons[button]) {
          this.buttons[button] = false
          return
        }
        this.buttons[button] = true
      },

      setCategory (index) {
        this.category = this.categories[index]
        this.buttons.categoryButton = false

        io.socket.get('/subcategory/find/', {
          category: index
        }, (data) => {
          this.subcategories = data
        })
      },

      setSubcategory (index) {
        this.subcategory = this.subcategories[index]
        this.buttons.subcategoryButton = false
      },

      setCurrency (currency) {
        this.currency = currency
        this.buttons.currencyButton = false
      },

      postAd () {
        io.socket.post('/ad/create', {
          category: this.category.id,
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
    }
  }
</script>
