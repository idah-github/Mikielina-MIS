<template>
    <v-row class="about-container">

        <v-col class=" fill-height d-flex flex-end">
            <v-img class="fill-height about-img"
                src="https://images.unsplash.com/photo-1498079022511-d15614cb1c02?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGdyYWR1YXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60">
            </v-img>
        </v-col>

        <v-col class="about-text">
            <h4>About Us</h4>
            <h2> Who Are We ?</h2>
            <p> Mikielina Savings Group is a close-knit community initiative founded by members of the Mikielina extended family. 
                Committed to financial empowerment, we provide a platform for collective saving, lending, and investment, 
                fostering a supportive environment where family members can thrive financially together</p>
            <v-list flat>
                <v-list-item-group v-model="selectedItem" color="primary">
                    <v-list-item v-for="(item, i) in aboutList" :key="i">
                        <v-list-item-icon>
                            <font-awesome-icon :icon="item.icon" />
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title v-text="item.text"></v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
            <v-btn class="red learn-more"> Learn More </v-btn>
        </v-col>

    </v-row>


</template>

<script>

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faGraduationCap, faMedal , faHome, faBuildingColumns, faUserGraduate, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faGraduationCap, faMedal, faHome, faBuildingColumns, faUserGraduate, faSignOut, faUser)

export default {
    name: "AboutVue",
    data: () => {
        return {
            aboutList: [
                {
                    icon: "fas fa-graduation-cap",
                    text: " Take the first step today"

                },
                {
                    icon: "fas fa-medal",
                    text: " Apply to join"
                },
                {
                    icon: "fas fa-building-columns",
                    text: " Save, Loan, Invest and Thrive"
                }
            ],
            selectedItem: null

        }

    },

}

</script>

<style scoped>
.about-container {
    width: 100%;
    margin: 60pt 0 50px 0;
    height: 380px;
    padding: 0 5% 0 5%;
}

.about-container .about-img {
    width: 80%;

}

.about-container .about-text {}

/* Learn More button*/
.about-container .learn-more {
    color:#fff;

}
.about-text h4 {
    font-weight: 700;
    color: blue;


}

.about-text p {}
</style>