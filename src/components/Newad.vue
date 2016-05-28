<style lang="scss">
  form {
    padding: 0 30px;

    label {
      display: inline-block;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 0.1em;
      margin-bottom: 18px;
    }

    select {
      display: block;
      border: 2px solid #f6f6f6;
      border-radius: 8px;
      height: 58px;
      width: 100%;
      padding-left: 15px;
      margin-bottom: 25px;
      font-size: 14px;
      letter-spacing: 0.08em;
    }

    input {
      @extend select;
      box-sizing: border-box;
    }

    textarea {
      display: block;
      border: 2px solid #f6f6f6;
      border-radius: 8px;
      height: 190px;
      width: 100%;
      margin-bottom: 26px;
      resize: none;
    }

    label#label-for-price {
      display: block;
    }

    input#price {
      display: inline-block;
      width: 64%;
    }

    select#currency {
      display: inline-block;
      float: right;
      width: 33%;
    }

    button {
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
  form
    label(for="cateogry") Categoria
    select#category
      option selectaţi categoria
      option Imobiliare
      option Transport
      option Telefoane

    label(for="subcategory") Subcategoria
    select#subcategory
      option selectaţi subcategoria
      option Imobiliare
      option Transport
      option Telefoane

    label(for="region") Regiunea
    select#region
      option Orhei
      option Bolohan
      option Piatra

    label(for="title") Titlul anunţului
    input#title(type="text")

    label(for="description") Descriere
    textarea#description

    label#contacts Contacte
    input#phone(type="text")
    input#name(type="text")

    label#label-for-price(for="price") Preţ
    input#price(type="text")
    select#currency
      option lei
      option $
      option €

    button(type="button") Postează anunţ
</template>

<script>
</script>
