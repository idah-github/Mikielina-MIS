<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8" class="mb-4">
                      <flash-message class="myCustomClass"></flash-message>
                      <v-card-text class="mt-5">
                        <h3 class="text-center large-headings dark--text">Sign in to Admission Portal</h3>
                        <div class="text-center d-flex justify-center">
                          <v-img max-height="150" max-width="250" v-bind:src="strath"></v-img>
                        </div>

                        <ValidationObserver>
                          <v-form @submit.prevent="loginUser" ref="form">
                            <ValidationProvider name="email" rules="required" v-slot="{ errors }">

                              <v-text-field label="Email" autocomplete="off" v-model.trim="username" name="username"
                                type="text" color="teal accent-3" />
                              <span>{{ errors[0] }}</span>

                            </ValidationProvider>

                            <ValidationProvider name="password" rules="required" v-slot="{ errors }">

                              <v-text-field id="password" autocomplete="off" label="Password" type="password"
                                v-model.trim="password" name="password" />
                              <span>{{ errors[0] }}</span>

                            </ValidationProvider>
                            <div class="text-center mt-3">
                              <v-btn rounded color="blue darken-2" type="submit" dark>SIGN IN
                              </v-btn>
                            </div>
                          </v-form>
                        </ValidationObserver>
                        <h3 class="text-center mt-4">Forgot your password ?</h3>
                      </v-card-text>

                    </v-col>
                    <v-col cols="12" md="4" class="blue darken-2">
                      <v-card-text class="white--text mt-12">
                        <h3 class="text-center large-headings">Create Account</h3>
                        <p class="sub-text">Enroll for a professional program at Strathmore University</p>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++">SIGN UP</v-btn>
                      </div>
                      <v-img class="center my-3" max-height="150" max-width="250" v-bind:src="coverphoto">
                      </v-img>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class=" blue darken-2 d-flex align-center">
                      <v-card-text class="white--text  ">
                        <h5 class="d-flex justify-center my-3">
                          <font-awesome-icon icon="fas fa-user-graduate" class="graduate-icon" />

                        </h5>
                        <h3 class="text-center large-headings mb-5">Apply Now!</h3>
                        <p class="sub-text">Start your career journey today by applying for professional program at
                          Strathmore University today. </p>
                        <div class="login-option">
                          <p class="white--text " >
                            Already have an account?
                          </p>
                          <v-btn rounded outlined dark @click="step--">Sign in</v-btn>                        </div>
                      </v-card-text>




                    </v-col>

                    <v-col cols="12" md="8" class="mb-4">
                      <v-card-text class="mt-12">
                        <h3 class="text-center large-headings dark--text ">Create Account</h3>
                        <div class="d-flex justify-center">
                          <v-img v-bind:src="strath" max-width="200" max-height="200">

                          </v-img>

                        </div>
                        <ValidationObserver>
                          <form @submit.prevent="createUser">


                            <ValidationProvider name="Username" rules="required">
                              <v-text-field label="Full Name" name="username" type="text" v-model.trim="username"
                                color="blue darken-3" />
                              <!-- <span>{{ errors[0] }}</span> -->
                            </ValidationProvider>


                            <ValidationProvider name="E-mail" rules="required|email">
                              <v-text-field label="Email" name="email" type="email" v-model="email"
                                color="blue darken-3" />
                              <!-- <span>{{ errors[0] }}</span> -->
                            </ValidationProvider>

                            <ValidationProvider name="password" rules="required|min:8|max:30" ref="password">

                              <v-text-field id="password" label="Password" v-model="password" name="password"
                                type="password" color="blue darken-3" />
                              <!-- <span>{{ errors[0] }}</span> -->
                            </ValidationProvider>

                            <validationProvider name="Confirm Password" rules="required|confirmed:password">
                              <v-text-field id="confirmpassword" label="Confirm Password" v-model="confirmpassword"
                                name="confirmpassword" data-vv-as="password" type="password" color="blue darken-3" />

                              <!-- <span>{{ errors[0] }}</span> -->
                            </validationProvider>

                            <div class="text-center mt-5">
                              <v-btn rounded color="blue darken-3" type="submit" dark>SIGN UP
                              </v-btn>
                            </div>

                          </form>
                        </ValidationObserver>
                      </v-card-text>

                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
  
<script>
import { mapMutations } from "vuex";
import axios from "axios"

import strath from "@/assets/strath.png"
// import mklnlogo from "@/assets/mklnlogo.png"
import logomkl from "@/assets/logomkl.png"
import coverphoto from "@/assets/c2.jpg"
import { library } from '@fortawesome/fontawesome-svg-core'

import { faSignInAlt, faUserPlus, faLock, faPerson, faEnvelope, faUserGraduate, faSignOut, faUser } from '@fortawesome/free-solid-svg-icons'

library.add(faSignInAlt, faUserPlus, faLock, faPerson, faEnvelope, faUser, faUserGraduate, faSignOut, faUser)
export default {
  data: () => ({
    step: 1,
    username: '',
    email: '',
    password: '',
    confirmpassword: '',
    token: '',
    strath,
    // mklnlogo,  
    logomkl,
    coverphoto,

  }),

  created() {
  },
  computed: {
    ...mapMutations(["setUser", "setToken"]),
  },
  methods: {
    onSubmit() {
      alert("Your form was successfully submitted")
    },
    createUser() {
      axios.post('http://127.0.0.1:8000/admission/register/',
        {
          username: this.username,
          email: this.email,
          password: this.password
        }).then(
          (response) => {
            const token = response.data.token;
            const user = response.data.user;
            this.setToken(token);
            this.setUser(user);
            this.$router.push({ name: 'home' });
            this.flashMessage.show({
              status: 'success',
              title: 'Successful Authentication',
              message: 'Congratulation :) !! you have successfully been logged in'
            });
          })
        .catch((error) => {
          this.flashMessage.show({
            status: 'warning',
            title: 'Failed Authentication',
            message: 'Invalid username or password. Enter the correct credentials and TRY AGAIN !!'
          });
          console.log(error);
        })
    },
    async loginUser() {
      await axios.post('http://127.0.0.1:8000/admission/login/',
        {
          username: this.username,
          password: this.password
        }).then(
          (response) => {
            if (response.data.isAuthenticated == true) {
              const token = response.data.token;
              const user = response.data.user;
              this.$store.commit("setToken", token, true);
              this.$store.commit("setUser", user);
              this.$router.push({ name: 'home' });
              this.flashMessage.success({
                title: response.data.title,
                message: response.data.message,
                time: 5000,
              });
              console.log(response)
            }
            else {
              this.$refs.form.reset()
              //  other properties include: status, title, message, time, icon, flashMessageStyle(iconStyle, contentStyle,titleStyle, textStyle)
              this.flashMessage.error({
                title: response.data.title,
                message: response.data.message,
                time: 5000,
              });
              console.log(response)
            }
          })
        .catch((error) => {
          this.$refs.form.reset()
          this.flashMessage.error({
            title: "Error",
            message: "Something went wrong. try Again",
            time: 5000,
          });
          console.log(error)
        })
    },
    getPosts() {
    },
  }
};
</script>
<style scoped>
.large-headings {
  font-size: 22pt;
  font-weight: 800;
}

span {
  color: red;
}

.sub-text {
  font-size: 14px;
  margin-top: 8pt;

}

.graduate-icon {
  font-size: 32pt;
}

.login-option{
  margin-top: 20%;
}
</style>