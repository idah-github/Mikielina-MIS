<template>
<v-app>
    <Navbar />
    <WelcomeNote />

    <FooterVue />
    
</v-app>
</template>

<script>
import Navbar from "@/components/Navigation/Navbar.vue"
import FooterVue from "@/components/Navigation/Footer.vue"
import WelcomeNote from "@/components/Home/WelcomeNote.vue"

export default{
    name: "EnrollmentPage",
    components: { Navbar, FooterVue, WelcomeNote }
}

</script>

<style scoped>

</style>