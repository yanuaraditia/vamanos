<template>
  <b-navbar toggleable="lg" type="dark">
      <div class="container">
        <b-navbar-brand to="/" class="mr-md-5 pr-md-3"><g-image src="~/assets/images/logo-large.png" width="105px"></g-image></b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="d-flex justify-content-between">
              <b-nav-item to="/anggota">Anggota</b-nav-item>
              <b-nav-item to="/covid">Covid-19</b-nav-item>
              <b-nav-item to="/kuisioner">Kuisioner</b-nav-item>
              <b-nav-item to="/join">Gabung</b-nav-item>
              <b-nav-item href="//instagram.com/imakajogja">Support</b-nav-item>
              <b-nav-item href="mailto:imaka@outlook.co.id">Kontak</b-nav-item>
              <b-nav-item to="/about">Tentang Kami</b-nav-item>
              <ToggleTheme/>
          </b-navbar-nav>
        </b-collapse>
      </div>
  </b-navbar>
</template>
<script>
import ToggleTheme from '~/components/ToggleTheme.vue'
export default {
  components: {
    ToggleTheme,
  },
}
</script>