<template>
 <div class="nav-menu">


    <v-app-bar  light class="">
      <div class="d-flex align-center">


        <v-img alt="Vuetify Name" class="shrink mt-1 " contain min-width="100"
          src="./assets/logomkl.png" width="150" height="40" />
         

        <v-toolbar-title class="nav-title">MIKIELINA Group </v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn plain rounded elevation="0" v-for="item in menu" :key="item.icon" class="nav-elements white--text">
          <router-link class="nav-links" :to="item.icon" :class="{ 'blue--text': item.active == 'true' }">{{ item.title }}
          </router-link>
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn class="blue enroll-button">Apply Now</v-btn>

      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

    </v-app-bar>

    <v-navigation-drawer v-model="drawer" class="sidebar" absolute temporary right>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
          <v-list-item>
            <v-btn block color="" class="text-left" primary>

              <font-awesome-icon icon="fas fa-home" class="mr-2" />

              Home

            </v-btn>

          </v-list-item>
          <template v-if="isLoggedIn ==true">
            <v-list-item>
              <v-btn block class="" color="">

                <font-awesome-icon icon="fas fa-user-graduate" class="mr-2" />

                Academics
              </v-btn>

            </v-list-item>

            <v-list-item>
              <v-btn block>
                <font-awesome-icon icon="fas fa-user" class="mr-2" />
                Manage Profile
              </v-btn>

            </v-list-item>

            <v-list-item>
              <v-btn block>
                <font-awesome-icon icon="fas fa-sign-out" class="mr-2" />
                Logout
              </v-btn>

            </v-list-item>
          </template>

          <template v-else>


            <v-list-item class="my-2">
              <v-btn block outlined color="blue" class=" " primary>
                <v-list-item-icon>
                  <font-awesome-icon icon="fas fa-sign-in-alt" class="mr-2" />
                </v-list-item-icon>
                Login


              </v-btn>
            </v-list-item>
            <v-list-item>
              <v-btn block outlined color="red" class="" primary>
                <v-list-item-icon>
                  <font-awesome-icon icon="fas fa-user-plus" class="mr-2" />
                </v-list-item-icon>
                Signup
              </v-btn>

            </v-list-item>

          </template>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

  </div>

</template>

<style scoped>
.sidebar {

}
.nav-links{
  color:#000;
  font-weight:600;
  
  text-decoration: none;
}

.auth-btn {}
.enroll-button{
  height: 35pt !important;
  margin: 4pt 6pt;
  color:#fff;
  border-radius: 18pt;
}

.nav-title{
  font-weight:800;
  font-size:18pt;

}
</style>

<script>
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSignInAlt, faUserPlus, faHome, faUserGraduate, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faSignInAlt, faUserPlus, faHome, faUserGraduate, faSignOut, faUser)

export default {
  name: "NavbarVue",
  data: () => {
    return {
      menu: [
        { icon: '/', title: "Home", active: "true", to: 'home' },
        { icon: '/post', title: "Abous Us", active: "false" },
        { icon: '/settings', title: "Contact", active: "false" },
      ],
      drawer: false,
      group: null,
      isLoggedIn: false,
    }

  },
  method: {



  }

}

</script>