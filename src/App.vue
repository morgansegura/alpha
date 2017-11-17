<template>
  <div id="app" class="app cf">
    <div class="container">
      <header class="menu">
        <div class="fixed">
          <div class="logo-block">
            <h2>alpha</h2>
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
          <div class="filter" v-if="this.$route.path === '/'">
            <h3>Filter <i class="fa fa-th-large"></i></h3>

            <a v-model="filteredItems" rel="all" href="#"> All Works</a>
            <a v-model="filteredItems" rel="web design" href="#"> web design</a>
            <a v-model="filteredItems" rel="illustration" href="#">illustration</a>
            <a v-model="filteredItems" rel="photography" href="#"> photography</a>
            <a v-model="filteredItems" rel="wallpapers" href="#"> wallpapers</a>
            <a v-model="filteredItems" rel="print work" href="#"> print work</a>

          </div>
          <hr />
          <div class="social-media">
            <a href=""><i class="fa fa-flickr"></i></a>
            <a href=""><i class="fa fa-google-plus"></i></a>
            <a href=""><i class="fa fa-twitter"></i></a>
            <a href=""><i class="fa fa-pinterest"></i></a>
            <a href=""><i class="fa fa-dribbble"></i></a>
            <a href=""><i class="fa fa-behance"></i></a>
            <a href=""><i class="fa fa-facebook"></i></a>
          </div>
          <p class="copyright">&copy 2017 Alpha. All Rights Reserved.</p>
        </div>
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