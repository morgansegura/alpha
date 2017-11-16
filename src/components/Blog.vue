<template>
  <div class="blog">
    {{ msg }}
  </div>
</template>

<script>
export default {
  name: 'Blog',
  data () {
    return {
      msg: 'Welcome to the Blog Page'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
