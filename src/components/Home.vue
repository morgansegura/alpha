<template>
  <div class="content main">
    <div class="grid top row">
      <!--  -->
      <div v-for="(grid, index) in filteredItems" :key="index" class="grid-cell col-xs-6 col-sm-6 col-md-4 col-lg-4">
        <a :href="grid.url">
          <img :src="grid.image" :alt="grid.title" />
          <div class="grid-hover">
            <h3>{{grid.title}}</h3>
            <p>
              <span v-for="(tag, index) in grid.tags" :key="index">{{tag}}
                <span v-if="index+1 < grid.tags.length">,</span>&nbsp; 
              </span> 
            </p>
            <hr />
            <i class="fa fa-arrow-right"></i>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      filter: '',
      grids: [
        {
          image: 'src/assets/images/grid1.jpg',
          url: '',
          title: 'Dare to Dream',
          tags: ['strategic planning', 'marketing'],
          category: 'web design'
        },
        {
          image: 'src/assets/images/grid2.jpg',
          url: '',
          title: 'Worth Unlimited Words',
          tags: ['photography', 'print'],
          category: 'print work'
        },
        {
          image: 'src/assets/images/grid3.jpg',
          url: '',
          title: '',
          tags: ['illustration', 'design'],
          category: 'photography'
        },
        {
          image: 'src/assets/images/grid4.jpg',
          url: '',
          title: '',
          tags: ['illustraition', 'design'],
          category: 'illustration'
        },
        {
          image: 'src/assets/images/grid5.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'web design'
        },
        {
          image: 'src/assets/images/grid6.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'wallpapers'
        },
        {
          image: 'src/assets/images/grid7.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'wallpapers'
        },
        {
          image: 'src/assets/images/grid8.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'wallpapers'
        },
        {
          image: 'src/assets/images/grid9.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'wallpapers'
        },
        {
          image: 'src/assets/images/grid10.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'web design'
        },
        {
          image: 'src/assets/images/grid11.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'photography'
        },
        {
          image: 'src/assets/images/grid12.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'web design'
        },
        {
          image: 'src/assets/images/grid13.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'photography'
        },
        {
          image: 'src/assets/images/grid14.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'print work'
        },
        {
          image: 'src/assets/images/grid15.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'photography'
        },
        {
          image: 'src/assets/images/grid16.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'photography'
        },
        {
          image: 'src/assets/images/grid17.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'photography'
        },
        {
          image: 'src/assets/images/grid18.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'photography'
        },
        {
          image: 'src/assets/images/grid19.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'illustration'
        },
        {
          image: 'src/assets/images/grid20.jpg',
          url: '',
          title: '',
          tags: '',
          category: 'photography'
        }
      ]
    }
  },
  computed: {
    filteredItems () {
      return this.grids.filter(grid => {
        return grid.category.toLowerCase().indexOf(this.filter.toLowerCase()) > -1
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
