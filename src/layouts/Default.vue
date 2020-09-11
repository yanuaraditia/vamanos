<template>
  <div id="app">
    <Header/>
    <main class="main-wrapper">
      <slot/>
    </main>
    <Cta v-if="contact"></Cta>
    <Footer/>
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Logo from '~/components/Logo.vue'
import Cta from '~/components/Contact.vue'
import Footer from '~/components/Footer.vue'

export default {
  props: {
    showLogo: { default: true },
    contact: {default: false}
  },
  components: {
    Logo,
    Header,
    Cta,
    Footer
  }
}
</script>
