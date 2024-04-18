<template>
    <v-main>
        <v-container class="fill-height form-holder" fluid>
            <v-row class="window-forms" align="center" justify="center">
                <v-col>
                    <v-card class="elevation-12 window-card">
                        <v-window v-model="step">
                            <v-window-item :value="1">
                                <v-container>
                                    <div class="mb-4 ">
                                        <v-card-text class="mt-5">
                                            <h3 class="text-left large-headings dark--text">Personal Details</h3>


                                            <ValidationObserver>
                                                <v-form @submit.prevent="loginUser" ref="form" class="data-forms">


                                                    <ValidationProvider name="password" rules="required">

                                                        <v-select :items="titles" label="Title" outlined>
                                                        </v-select>
                                                    </ValidationProvider>
                                                    <ValidationProvider name="names">

                                                        <v-text-field label="Full Names" autocomplete="off"
                                                            v-model.trim="username" name="username" type="text"
                                                            color=" " class="input-entry" outlined />

                                                    </ValidationProvider>
                                                    <ValidationProvider name="password" rules="required">

                                                        <v-select :items="gender" label="Gender" outlined>
                                                        </v-select>
                                                    </ValidationProvider>
                                                    <ValidationProvider name="dob" rules="required">

                                                        <v-text-field  label="Date of Birth" type="datetime-local"
                                                         name="dob" class="input-entry"
                                                            outlined />

                                                    </ValidationProvider>
                                                    <ValidationProvider name="marriage-state" rules="required">

                                                        <v-select :items="maritalStatus" label="Marital Status" outlined>
                                                        </v-select>

                                                    </ValidationProvider>
                                                    <ValidationProvider name="country" rules="required">
                                                        <v-select :items="countries" label="country" outlined>

                                                        </v-select>

                                                    </ValidationProvider>
                                                    <ValidationProvider name="password" rules="required">
                                                        <v-text-field id="password" label="Title" type="password"
                                                            v-model.trim="password" name="password" class="input-entry"
                                                            outlined />

                                                    </ValidationProvider>
                                                    <ValidationProvider name="password" rules="required">


                                                            
                                                        <v-select :items="health" label="Disability" outlined>

                                                        </v-select>

                                                    </ValidationProvider>
                                                    <div class=" mt-3">
                                                        <v-btn rounded color="blue darken-2" type="submit" dark>Save
                                                        </v-btn>
                                                    </div>
                                                </v-form>
                                            </ValidationObserver>
                                        </v-card-text>

                                    </div>

                                    <div class="text-right ">
                                        <v-btn rounded class="" color="blue" outlined dark @click="step++">Next</v-btn>
                                    </div>

                                </v-container>
                            </v-window-item>
                            <v-window-item :value="2">
                                <v-container class="fill-height  ">


                                    <div class="mb-4 p-5 form-items">
                                        <v-card-text class="mt-4">
                                            <h3 class="text-center large-headings dark--text ">Course Application</h3>
                                        </v-card-text>

                                            <ValidationObserver>
                                                <v-form @submit.prevent="loginUser" ref="form" class="">


                                                    <ValidationProvider name="program" rules="required">

                                                        <v-select :items="program" label="Program" outlined>
                                                        </v-select>
                                                    </ValidationProvider>
                                                    <ValidationProvider name="names">
                                                        <v-select :items="professional" label="Course" outlined>
                                                        </v-select>

                                                    </ValidationProvider>
                                                    <ValidationProvider name="" label="" rules="required">

                                                        <v-select :items="grades" label="KCSE Qualification (Grade)" outlined>
                                                        </v-select>
                                                    </ValidationProvider>
                                                    <ValidationProvider name="year" >

                                                        <v-file-input
                                                        label="KCSE Certificate"
                                                        outlined
                                                        dense
                                                      ></v-file-input>

                                                    </ValidationProvider>
                                                    <ValidationProvider name="other-qualifications" rules="required">

                                                        <v-select :items="program" label="Other Qualifications" outlined>


                                                        </v-select>


                                                    </ValidationProvider>
                                                    <ValidationProvider>
                                                        <v-file-input
                                                        label="Upload Certificate"
                                                        outlined
                                                        dense
                                                      ></v-file-input>
                                                    </ValidationProvider>
                                                    <ValidationProvider name="intake" rules="required">

                                                        <v-select :items="intake" label="Prefferred Intake" outlined>


                                                        </v-select>

                                                    </ValidationProvider>
                                                    <ValidationProvider name="summary" rules="required">
                                                        <v-textarea
                                                        background-color="light-blue"
                                                        color="black"
                                                        label="Why should be admit you?"
                                                      ></v-textarea>

                                                    </ValidationProvider>

                            

                                                    <div class=" d-flex  mt-3 ">
                                                        <v-btn rounded  outlined class="left"  @click="step--">Previous</v-btn>

                                                        <v-btn rounded  outlined class="right"  @click="step++">Next</v-btn>

                                                    </div>
                                                </v-form>
                                            </ValidationObserver>


                                    </div>
                                </v-container>
                            </v-window-item>

                            <v-window-item :value="3">
                                <v-container class="fill-height window-forms">
                                    <div class=" blue darken-2  ">

                                        <div class="login-option">

                                            <v-btn rounded outlined dark @click="step--">Next</v-btn>
                                        </div>


                                    </div>

                                    <div class="mb-4">
                                        <v-card-text class="mt-12">
                                            <h3 class="text-center large-headings dark--text ">Create Account</h3>
                                            <div class="d-flex justify-center">
                                                <v-img v-bind:src="strath" max-width="200" max-height="200">

                                                </v-img>

                                            </div>
                                            <ValidationObserver>
                                                <form @submit.prevent="createUser">


                                                    <ValidationProvider name="Username" rules="required">
                                                        <v-text-field label="Full Name" name="username" type="text"
                                                            v-model.trim="username" color="blue darken-3" />

                                                    </ValidationProvider>


                                                    <ValidationProvider name="E-mail" rules="required|email">
                                                        <v-text-field label="Email" name="email" type="email"
                                                            v-model="email" color="blue darken-3" />
                                                        <!-- <span>{{ errors[0] }}</span> -->
                                                    </ValidationProvider>

                                                    <ValidationProvider name="password" rules="required|min:8|max:30"
                                                        ref="password">

                                                        <v-text-field id="password" label="Password" v-model="password"
                                                            name="password" type="password" color="blue darken-3" />
                                                        <!-- <span>{{ errors[0] }}</span> -->
                                                    </ValidationProvider>

                                                    <validationProvider name="Confirm Password"
                                                        rules="required|confirmed:password">
                                                        <v-text-field id="confirmpassword" label="Confirm Password"
                                                            v-model="confirmpassword" name="confirmpassword"
                                                            data-vv-as="password" type="password"
                                                            color="blue darken-3" />

                                                        <!-- <span>{{ errors[0] }}</span> -->
                                                    </validationProvider>

                                                    <div class="text-center mt-5">
                                                        <v-btn rounded color="blue darken-3" type="submit" dark>SIGN UP
                                                        </v-btn>
                                                    </div>

                                                </form>
                                            </ValidationObserver>
                                        </v-card-text>

                                    </div>
                                </v-container>
                            </v-window-item>
                        </v-window>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>

</template>

<script>
import { ValidationProvider } from 'vee-validate';

export default {
    name: "RegNote",
    data: () => ({
        step: 1,
        titles: ["Mr", "Mrs", "Miss", "Sir"],
        gender: ["male", "female"],
        maritalStatus: ["single", "married", "divorced"],
        countries: ["Kenya", "Uganda", "Tanzania", "Ethiopia", "Other"],
        health: ["disabled", "none"],
        program: ["certification", "diploma", "degree"],
        certs: ["Certificate in Computer Applications", "International Computer driving license",],
        diploma: ["Diploma in Business Information Technology", "Diploma in Business Management ", "Diploma in Business Creation and Entrepreneurship", "Diploma in International Relations", "Diploma in Journalism and New Media", "Diploma in Procurement"],
        professional: ["ACCA", "CPA", "CFA", "CIM", "CISA", "CISM", "CHRP"],
        grades: ["A", "B", "C", "D",],
        intake: ['Jan- April','May-August', 'Sept- Dec']
    }),
    components: { ValidationProvider }
}
</script>

<style scoped>
/* Holds all the v-windows and shows status update*/
.form-holder {
    background-color: #dcdcdc6f;
    padding: 10pt 15pt;
}

.data-forms {
    padding: 15pt;

}

.input-entry {
    /* height:20px; */

}

.window-card {
    min-height: 90vh;
    width: 70%;
    margin: auto;
}

.large-headings {
    font-size: 18pt;
    font-weight: 600;
}

span {
    color: red;
}

.sub-text {
    font-size: 14px;
    margin-top: 8pt;

}



.login-option {
    margin-top: 20%;
}

.window-forms {
    display: flex;
    flex-direction: column;
}

.form-items{
    width:75%;
    margin:auto;
}
</style>