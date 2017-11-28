<template>
  <div class="content about col-sm-12 col-md-8 col-lg-8">
    <section>
      <img class="headline-image"  src="//static.pexels.com/photos/296881/pexels-photo-296881.jpeg" />
      <div class="bio">
        <h3>Who We Are</h3>
        <p>
          This is Photoshop's version  of Lorem Ipsum. 
          Proin gravida nibh vel velit auctor aliquet. 
          Aenean sollicitudin, lorem quis bibendum auctor, 
          nisi elit consequat ipsum, nec sagittis sem nibh id 
          elit. Duis sed odio sit amet nibh vulputate cursus a 
          sit amet mauris. Morbi accumsan ipsum velit. Nam nec 
          tellus a odio tincidunt auctor a ornare odio. 
        </p>
        <p>
          Sed non  mauris vitae erat consequat auctor eu in elit. 
          Class aptent taciti sociosqu ad litora torquent per conubia nostra, 
          per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis 
          dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut 
          imperdiet nisi. Proin condimentum fermentum nunc. Etiam pharetra, 
          erat sed fermentum feugiat, velit mauris egestas quam, ut aliquam 
          massa nisl quis neque. Suspendisse in orci enim.
        </p>
      </div>
      <hr />
      <div class="staff">
        <h3>Our Staff</h3>
        <div class="row">
          <div v-for="(s, index) in staff" :key="index" class="col-sm-4 col-md-4 col-lg-4">
            <img :src="s.image" :alt="s.title" />
            <div class="grid-hover">
              <h4>{{s.name}}</h4>
              <p>{{s.role}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <aside>
      <div class="skills">
        <h3>Our Skills</h3>

        <div>
          <p>Website Design <span>80%</span></p>
          <div class="meter">
            <span style="width: 80%"></span>
          </div>
          <p>Website Development  <span>97%</span></p>
          <div class="meter">
            <span style="width: 97%"></span>
          </div>
          <p>Plugins <span>86%</span></p>
          <div class="meter">
            <span style="width: 86%"></span>
          </div>
          <p>Front end <span>75%</span></p>
          <div class="meter">
            <span style="width: 75%"></span>
          </div>
        </div>
      </div>
      <div class="testimonials">
        <h3>Testimonials</h3>
        <div class="title-bar">
          <div><img src="src/assets/images/ryan-woolfolk.jpg" /></div>
          <p>Collis Farsi - CEO Envato</p>
        </div>
        <div class="quote">
          <p>
            Sollicitudin lorem quis bibendum auctor, nisi elit consequat ipsum, 
            nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate 
            cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus 
            a odio tincidunt.
          </p>
        </div>
      </div>
      <div class="services">
        <h3>Services</h3>
        <ul>
          <li>Web Design</li>
          <li>Photography</li>
          <li>Plugin Development</li>
          <li>Front-end</li>
          <li>Design from Scratch</li>
          <li>Website Maintenance</li>
        </ul>
      </div>
    </aside>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      staff: [
        {
          image: 'src/assets/images/leo-gomez.jpg',
          name: 'Leo Gomez',
          role: 'Senior Programmer'
        },
        {
          image: 'src/assets/images/colleen-d.jpg',
          name: 'Colleen Donohoue',
          role: 'Front End Developer'
        },
        {
          image: 'src/assets/images/ryan-woolfolk.jpg',
          name: 'Ryan Woolfolk',
          role: 'Sr. Motion Designer'
        },
        {
          image: 'src/assets/images/cara-m.jpg',
          name: 'Cara Meyer',
          role: 'Project Manager'
        },
        {
          image: 'src/assets/images/sarah-p.jpg',
          name: 'Sarah Pritt',
          role: 'Web Designer'
        },
        {
          image: 'src/assets/images/timothy-s.jpg',
          name: 'Timothy Sauer, PhD',
          role: 'Research and Analytics Specialist'
        }
      ]
    }
  },
  computed: {}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
