<style lang="scss">
  .registration {
    z-index: 2;
    display: block;
    position: absolute;
    background: #fff;
    height: 667px;
    width: 100%;
    margin: -47px 0 0 -30px;
    box-shadow: 6px 8px 7px #e3e3e3;
    box-sizing: border-box;

    .close-modal {
      background: url('../assets/close.png') no-repeat;
      height: 24px;
      width: 24px;
      float: right;
      margin-right: 29px;
      margin-top: 34px;
    }

    .header-text {
      text-align: center;
      margin-top: 146px;
      font-size: 28px;
      letter-spacing: 0.03em;
    }

    .form {
      margin-top: 46px;

      input {
        display: block;
        background: #fff;
        border: 2px solid #f6f6f6;
        border-radius: 8px;
        height: 58px;
        width: 100%;
        padding-left: 15px;
        margin-bottom: 29px;
        font-size: 14px;
        letter-spacing: 0.08em;
        text-align: left;
        box-sizing: border-box;
      }

      .submit {
        display: table;
        background: transparent linear-gradient(#e7774a, #df5b27) repeat scroll 0% 0%;
        border: 0px none;
        border-radius: 22px;
        color: #fff;
        margin: 20px auto 0px;
        width: 182px;
        height: 42px;
        text-align: center;
      }
    }
  }
</style>

<template lang="jade">
  .registration(v-if="isVisible")
    .close-modal(@click="closeModal")
    h1.header-text ÎNREGISTRARE

    .form
      input.email(type="email", v-model="email", placeholder="Email")
      input.password(type="password", v-model="password", placeholder="Parolă")
      input.password-confirmation(type="password", v-model="passwordConfrimation", placeholder="Confirmă parola")
      input.submit(type="button", @click="registration", value="Crează cont")
</template>

<script>
  import io from '../sails'

  var data = {
    isVisible: true,
    email: '',
    password: '',
    passwordConfrimation: ''
  }

  export default {
    data () {
      return data
    },
    methods: {
      closeModal () {
        this.isVisible = false
      },
      registration () {
        if (this.email && (this.password === this.passwordConfrimation)) {
          io.socket.post('http://localhost:1337/user/create', {
            email: this.email,
            password: this.password
          }, (data) => {
            console.log(data)
          })
        }
      }
    }
  }
</script>
