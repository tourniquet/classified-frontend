<style lang="scss">
  footer {
    background: #262626;
    height: 156px;
    margin-top: 41px;
    padding: 40px 0 0 30px;

    .copyright {
      color: white;
      margin-bottom: 30px;
    }

    .social {
      a.fb {
        display: inline-block;
        background: url('../assets/fb.png') no-repeat;
        background-size: 40px 40px;
        height: 40px;
        width: 40px;
        border: 1px solid #3c3c3c;
        border-radius: 22px;
      }

      a.ok {
        @extend a.fb;
        background: url('../assets/ok.png') no-repeat;
      }

      a.skype {
        @extend a.fb;
        background: url('../assets/skype.png') no-repeat;
      }
    }
  }
</style>

<template lang="jade">
  footer
    .copyright
      | © 2016 Anunț Orhei
      br
      | Toate drepturile sunt rezervate
    .social
      a.fb(href="#")
      a.ok(href="#")
      a.skype(href="skype:testcall")
</template>

<script type="text/javascript">
</script>
