<template>
  <div id="app" class="app container">
    <div class="row">
      <app-header></app-header>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import header from './components/header'
export default {
  name: 'app',
  components: {
    'app-header': header
  }
}
</script>
<!-- styling for the component -->
<style lang="scss">
  @import 'src/assets/stylesheets/base.scss';
</style>