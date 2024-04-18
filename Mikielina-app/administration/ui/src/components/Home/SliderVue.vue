<template>
  <v-carousel
    cycle
    height="450"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
      :src="image.url"
    >

        <v-row
          class="fill-height carousel-caption"
          align="center"
          justify="center"
        >
          <div class="inside-caption">
            <h4>{{image.h3}}</h4>
              <p>{{image.introText}} </p>
          </div>
        </v-row>
    </v-carousel-item>
  </v-carousel>
</template>
<script>

  import cover1 from "@/assets/c1.jpg"
  import cover2 from "@/assets/c2.jpg"
  import cover3 from "@/assets/c1.jpg" 
  export default {
    name: "SliderVue",
    data: ()=>{
      return{
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
        images:[
          {
            url: cover1,
            h3: "Financial empowerment meets family",
            introText: "Empowering families through collective saving, lending, and investment in a supportive community environment." 
        
          },
          {
            url:cover2,
            h3: "Mikielina Family Savings Group",
            introText: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
          },
          {
            url:cover3,
            h3: " Join Us Today!",
            introText: "Are you ready to take the first step towards financial freedom?"
          }

        ]
      }
    },

  }
</script>

<style scoped>

@media all and (min-width:768px){


.carousel-caption{
  background-color:rgba(0, 0, 0, 0.385);
}
.inside-caption{
  padding: 15pt;
  color:#fff;
  width: 60%

}
.inside-caption h4{
  font-size: 36pt;
  font-weight: 900;
  line-height: 15pt;

}

.inside-caption p{
  margin-top: 20pt;
  font-size: 15pt;
  font-weight: 600;

}


}

@media all and (max-width:767px){

}

@media all and (max-width: 550px){

}


</style>