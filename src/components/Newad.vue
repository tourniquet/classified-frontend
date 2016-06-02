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
    button.button(type="button", @click="showMenu") {{ category }}
    .ul-width
      ul.show-ul-menu(:class="{'hide-ul-menu': !expandButton}")
        li(v-for="item in items", @click="setButton($index, 'category')") {{ item.title}}

    label.label(for="subcategory") Subcategoria
    button.button(type="button", @click="showMenu") {{ subcategory }}
    .ul-width
      ul.show-ul-menu(:class="{'hide-ul-menu': !expandButton}")
        li(v-for="item in items", @click="setButton($index, 'subcategory')") {{ item.title}}

    label.label(for="region") Regiunea
    button.button(type="button", @click="showMenu") selectați regiunea
    .ul-width
      ul.show-ul-menu(:class="{'hide-ul-menu': !expandButton}")
        li(v-for="item in items", @click="setButton($index)") {{ item.title}}

    label.label(for="title") Titlul anunţului
    input.input.title(type="text", name="title", v-model="title")

    label.label(for="description") Descriere
    textarea.description(name="description", v-model="description")

    label.label.contacts Contacte
    input.input.phone(type="text", name="phone", v-model="phone")
    input.input.contact-name(type="text", name="contact-name", v-model="contactName")

    label.label.label-for-price(for="price") Preţ
    input.input.price(type="text", name="price", v-model="price")
    .ul-width.currency
      button.button(type="button", @click="showMenu")
      ul.show-ul-menu(:class="{'hide-ul-menu': !expandButton}")
        li lei
        li $
        li €

    button.post-ad(type="button", @click="postAd") Postează anunţ
</template>

<script>
  import io from '../sails'

  var data = {
    expandButton: false,
    items: [
      {
        title: 'Imobiliare',
        slug: 'real-estate'
      },
      {
        title: 'Automobile',
        slug: 'cars'
      },
      {
        title: 'Telefoane',
        slug: 'phones'
      }
    ],
    category: 'Alege categoria',
    subcategory: 'Alege subcategoria',
    title: '',
    description: '',
    phone: '',
    contactName: '',
    price: '',
    currency: ''
  }

  export default {
    data () {
      return data
    },
    methods: {
      showMenu () {
        if (this.expandButton) {
          this.expandButton = false
          return
        }
        this.expandButton = true
      },

      setButton (index, button) {
        this[button] = this.items[index].title
        this.expandButton = false
      },

      postAd () {
        console.log('hei!')
        io.socket.post('/ad/create', {
          title: this.category,
          description: this.subcategory
        }, (data, res) => {
          console.log(data)
          console.log(res.statusCode)
        })
      }
    },
    ready () {
      io.socket.get('/category/fibn', (data) => {
        this.categories = data
      })
    }
  }
</script>
