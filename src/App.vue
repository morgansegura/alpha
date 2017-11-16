<template>
  <div id="app" class="app cf">
    <div class="container">
      <header class="menu">
        <div class="logo-block">
          <h2>Alpha</h2>
          <p>Where it all begins</p>
        </div>
        <nav>
          <router-link v-bind:to="'/'">Home</router-link>
          <router-link v-bind:to="'/work'">Work</router-link>
          <router-link v-bind:to="'/about'">About</router-link>
          <router-link v-bind:to="'/blog'">Blog</router-link>
          <router-link v-bind:to="'/services'">Services</router-link>
          <router-link v-bind:to="'/contact'">Contact</router-link>
        </nav>
        <div class="filter">
          <h3>Filter</h3>
          <ul>
            <li><a href="">All Works</a></li>
            <li><a href="">web design</a></li>
            <li><a href="">illustration</a></li>
            <li><a href="">photography</a></li>
            <li><a href="">wallpapers</a></li>
            <li><a href="">brochures</a></li>
          </ul>
        </div>
        <div class="social-media">
          <a href=""><i class="fa fa-tumbler"></i></a>
          <a href=""><i class="fa fa-google-plus"></i></a>
          <a href=""><i class="fa fa-twitter"></i></a>
          <a href=""><i class="fa fa-pinterest"></i></a>
          <a href=""><i class="fa fa-dribbble"></i></a>
          <a href=""><i class="fa fa-tumbler"></i></a>
          <a href=""><i class="fa fa-facebook"></i></a>
        </div>
        <p class="copyright">&copy 2017 Alpha. All Rights Reserved.</p>
      </header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<!-- styling for the component -->
<style></style>