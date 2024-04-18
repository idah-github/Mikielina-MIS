<template>
    <div class="home-block">
        <div class="intro">
            <h3>Hi John</h3>
            <p>Welcome to our online admission portal. Start your career journey today by enrolling to your course of
                choice </p>

            <v-btn color="red" class="apply-button"> Start Application</v-btn>
        </div>

    </div>


</template>

<script>
export default {
    name: "WelcomeNote",
    methods: () => {
        return {

        }
    }
}
</script>

<style scoped>
.home-block {
    min-height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


}

.intro {
    width: 80%;
    height: 250px;
    -webkit-box-shadow: 0px 1px 13px -6px rgba(8, 8, 8, 1);
    -moz-box-shadow: 0px 1px 13px -6px rgba(8, 8, 8, 1);
    box-shadow: 0px 1px 13px -6px rgba(8, 8, 8, 1);
    padding: 30pt;

}

.apply-button {
    color: #fff;
}
</style>