<style lang="scss">
  footer {
    background: #262626;
    height: 117px;
    margin-top: 40px;
    padding-top: 40px;

    .copyright {
      color: white;
      margin-bottom: 30px;
      font-size: 12px;
      letter-spacing: .02em;
      text-align: center;
    }

    .social {
      text-align: center;

      a.fb {
        display: inline-block;
        background-image: url('../assets/fb.png');
        background-repeat: no-repeat;
        background-size: 20px 20px;
        background-position: 6px 6px;
        border: 1px solid #3c3c3c;
        border-radius: 22px;
        height: 33px;
        width: 33px;
      }

      a.ok {
        @extend a.fb;
        background-image: url('../assets/ok.png');
        margin: 0 22px;
      }

      a.skype {
        @extend a.fb;
        background-image: url('../assets/skype.png');
      }
    }
  }
</style>

<template lang="jade">
  footer
    .copyright
      | © 2016 Anunț Orhei. Toate drepturile sunt rezervate
    .social
      a.fb(href="#")
      a.ok(href="#")
      a.skype(href="skype:testcall")
</template>

<script type="text/javascript">
</script>
