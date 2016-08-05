<style lang="sass">
  @media (max-width: 1199px)
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
        a:link, a:visited, a:active, a:hover
          color: #e26433
          text-decoration: none
        .slash
          color: #9d9d9d
        .breadcrumb-ad-title
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
          margin-bottom: 20px
          border-radius: 6px

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

  @media (min-width: 1200px)
    .ad
      margin: 0 auto
      width: 1170px
      margin-top: -33px
      margin-bottom: -33px
      .label
        color: #e26433
        font-weight: 600
      .ad-breadcrumb
        color: #e26433
        font-size: small
        font-weight: 600
        line-height: 1.65em
        margin-bottom: 33px
        a:link, a:visited, a:active, a:hover
          color: #e26433
          text-decoration: none
        .slash
          color: #9d9d9d
          padding: 0 12px
        .breadcrumb-ad-title
          color: #000

      .ad-info
        color: #9d9d9d
        letter-spacing: 0.012em
        margin: 0
        font-size: small
        float: right
        margin-top: 12px
        .posted-by
          color: #000
          font-size: small
          font-weight: 600
          margin-top: 56px

      .under-ad-info
        display: none

      .posting-date-and-views
        display: flex
        flex-direction: row
        justify-content: space-between
        color: #9d9d9d
        margin: 0
        float: left
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
          margin-left: 25px

      .under-posting-date
        margin-top: 80px

      hr
        border: 1px solid
        color: #f6f6f6
        width: 100%
        margin-top: 15px

      .ad-details
        margin-top: 56px
        margin-bottom: 190px
        .ad-title
          margin-top: 48px
          font-size: 24px
          letter-spacing: 0.013em
          width: 50%

        .ad-description
          color: #505050
          margin-top: 23px
          font-size: small
          line-height: 1.16
          float: left
          width: 40%

        .images
          margin-top: 64px
          display: flex
          justify-content: space-between
          flex-flow: row wrap
          margin: 0
          margin-bottom: -5px
          width: 50%
          float: right
          img
            margin-bottom: 20px
            border-radius: 6px

      .container
        display: inline-block
        margin-top: -9px
        .price
          margin: 28px 0 30px

        .region
          margin-bottom: 16px

      .send-a-message
        display: inline-block
        height: 155px
        resize: none
        border-radius: 5px
        border: 2px solid #f6f6f6
        width: 100%
        margin-top: 10px
        padding: 15px 0 0 20px
        width: 48%
        float: right
</style>

<template lang="jade">
  .ad
    .ad-breadcrumb
      span: a(href="/") Acasă
      span.slash /
      span: a(href="/category/{{category}}/") {{ category }}
      span.slash /
      span: a(href="/{{category}}/{{subcategory}}") {{ subcategory }}
      span.slash /
      span.breadcrumb-ad-title &nbsp; {{ ad.title }}

    .ad-info
      span Anunţ postat de
      span.posted-by &nbsp;OnlyAppleXXX

    hr.under-ad-info

    .posting-date-and-views
      span.date 12 iulie 2016
      span.views Vizualizări: {{ad.views}}

    hr.under-posting-date

    .ad-details
      .ad-title
        h2 {{ ad.title }}

      .ad-description
        span {{ ad.description }}

      .images
        img(v-bind:src="firstImage.thumbnail")
        img(v-bind:src="secondImage.thumbnail")
        img(v-bind:src="thirdImage.thumbnail")

    hr

    .container
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
  import io from '../sails'

  let url = window.location.pathname.split('/')[1]
  let data = {
    url: url,
    ad: '',
    category: '',
    subcategory: '',
    firstImage: {
      url: '',
      thumbnail: ''
    },
    secondImage: {
      url: '',
      thumbnail: ''
    },
    thirdImage: {
      url: '',
      thumbnail: ''
    }
  }
  export default {
    data () {
      return data
    },
    ready () {
      io.socket.get(`/${url}`, (data) => {
        this.ad = data.data[0]

        io.socket.get(`/subcategory/find/${this.ad.subcategory}`, (data) => {
          this.subcategory = data.title

          io.socket.get(`/category/find/${data.category.id}`, (data) => {
            this.category = data.title
          })
        })

        let views = data.data[0].views
        let id = data.data[0].id
        io.socket.put(`/ad/${id}`, {
          views: views += 1
        }, (data) => {
          this.ad.views = data.views
        })
      })

      this.firstImage = {
        url: `http://192.168.1.101:1337/${this.url}0.jpg`,
        thumbnail: `http://192.168.1.101:1337/thumb_${this.url}0.jpg`
      }
      this.secondImage = {
        url: `http://192.168.1.101:1337/${this.url}1.jpg`,
        thumbnail: `http://192.168.1.101:1337/thumb_${this.url}1.jpg`
      }
      this.thirdImage = {
        url: `http://192.168.1.101:1337/${this.url}2.jpg`,
        thumbnail: `http://192.168.1.101:1337/thumb_${this.url}2.jpg`
      }
    }
  }
</script>
