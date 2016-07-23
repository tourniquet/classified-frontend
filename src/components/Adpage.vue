<style lang="sass">
  .ad
    padding: 0 30px
    margin-top: 20px
    .label
      color: #e26433
      font-weight: 600
    .ad-breadcrumb
      color: #e26433
      font-size: small
      font-weight: 600
      line-height: 1.65em
      .slash
        color: #9d9d9d
      .ad-title
        color: #000

    .ad-info
      color: #9d9d9d
      letter-spacing: 0.012em
      margin-top: 42px
      font-size: small
      .posted-by
        color: #000
        font-size: small
        font-weight: 600
        margin-top: 56px

    .posting-date-and-views
      display: flex
      flex-direction: row
      justify-content: space-between
      color: #9d9d9d
      margin-top: 9px
      letter-spacing: 0.012em
      .date
        background: url('../assets/calendar.png') no-repeat
        background-size: 12px
        padding: 3px 0 0 20px
        background-position: 0 2px
        font-size: 13px
      .views
        background: url('../assets/views.png') no-repeat
        background-size: 18px
        padding: 3px 0 0 30px
        background-position: 3px 3px
        font-size: 13px

    hr
      border: 1px solid
      color: #f6f6f6
      width: 100%
      margin-top: 15px

    .ad-title
      margin-top: 48px
      font-size: 24px
      letter-spacing: 0.013em

    .ad-description
      color: #505050
      margin-top: 23px
      font-size: small
      line-height: 1.16

    .images
      margin-top: 64px
      display: flex
      justify-content: space-between
      flex-flow: row wrap
      margin-bottom: -5px
      img
        padding-bottom: 20px

    .price
      margin: 28px 0 30px

    .region
      margin-bottom: 16px

    .send-a-message
      height: 155px
      resize: none
      border-radius: 5px
      border: 2px solid #f6f6f6
      width: 92%
      margin-top: 30px
      padding: 15px 0 0 20px
</style>

<template lang="jade">
  .ad
    .ad-breadcrumb
      span Acasă
      span.slash &nbsp;&nbsp;/&nbsp;&nbsp;
      span &nbsp;Telefoane
      span.slash &nbsp;&nbsp;/&nbsp;&nbsp;
      span &nbsp;Telefoane mobile
      span.slash &nbsp;&nbsp;/&nbsp;&nbsp;
      span.breadcrumb-ad-title &nbsp;iPhone 6s, vînd urgent

    .ad-info
      span Anunţ postat de
      span.posted-by &nbsp;OnlyAppleXXX

    hr

    .posting-date-and-views
      span.date 12 iulie 2016
      span.views Vizualizări: 39

    .ad-title
      h2 iPhone 6s, vînd urgent

    .ad-description
      span "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      | tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      | quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      | consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      | cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      | non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    .images
      img(src="../assets/ad-image.jpg")
      img(src="../assets/ad-image.jpg")
      img(src="../assets/ad-image.jpg")
      img(src="../assets/ad-image.jpg")

    hr

    .price
      span.label Preţ:&nbsp;
      span 18800 lei / 950 usd / 860 eur
    br
    .region
      span.label Regiune:&nbsp;
      span Orhei
    .contacts
      span.label Contacte:&nbsp;
      span 079357745, Eugen

    textarea.send-a-message(placeholder="Lăsaţi un mesaj")
</template>

<script>
</script>
