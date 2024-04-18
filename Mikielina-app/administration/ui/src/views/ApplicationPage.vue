<template>
    <v-app>
        <Navbar />
        <RegNote />
        <FooterVue />

    </v-app>
</template>

<script>
import Navbar from "@/components/Navigation/Navbar.vue"
import FooterVue from "@/components/Navigation/Footer.vue"
import RegNote from "@/components/Home/RegNote.vue"
        export default{

            name: "ApplicationPage",
            components: { Navbar, FooterVue,RegNote }
        
    }


</script>

<style scoped>

</style>