<template>
    <v-app>
        <NavbarVue />
        <SliderVue />
        <AboutVue />
        <!-- <CoursesBlock /> -->
        <Footer />
    </v-app>
    

</template>

<script>
import NavbarVue from "@/components/Navigation/Navbar.vue";
import SliderVue from "@/components/Home/SliderVue.vue";
import AboutVue from "@/components/Home/AboutVue.vue";
// import CoursesBlock from "@/components/Home/CoursesBlock.vue";
import Footer from "@/components/Navigation/Footer.vue"
export default {
    name: 'HomePage',
    components: {
    NavbarVue,
    SliderVue,
    AboutVue,
    // CoursesBlock,
    Footer,
}
}
</script>

<style scoped>
    .main-home {
        position: relative;
        width:100%;
    }

</style>