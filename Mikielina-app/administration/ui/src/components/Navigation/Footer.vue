<template>
<v-footer class="page-footer">
<v-row cols="12" class="footer-row">
    <v-spacer></v-spacer>
<v-col class="footer-item" md="3" lg="3"> 
    <h4>QUICK LINKS</h4>
    <div class="quick-links">
        <a href="#"> Home </a>
        <a href="#"> Login </a>  
        <a href="#"> Signup </a>
        <a href="#"> Apply</a>  
        <a href="#"> Contact Us</a>
    </div>
</v-col>
<v-col class="footer-item "  md="3" lg="3"> 
    <h4>LOANS</h4>
    <div class="courses-link">
        <a href="#"> Pay in One Week</a>
        <a href="#"> Pay after a monthy</a>  
        <a href="#"> Acccess yearly loans</a>  
        <a href="#"> Emergency Loan</a>
        <a href="#"> Save and earn dividends</a>
    </div>
</v-col>
<v-col class="footer-item " md="4" lg="4"> 
    <h4>NEWS LETTER</h4>
    <p>Subscribe to our newsletter for regular updates on whats happening with Mikielina Group,MEMBERS ONLY!</p>

    <v-form class="">
        <v-text-field solo label="Email">

        </v-text-field>

        <v-btn class="float-left red white--text" elevation="2"> Subscribe</v-btn>
    </v-form>
</v-col>
<v-spacer></v-spacer>
</v-row>

<v-row>

</v-row>
<div class="copyright"> @ Idah 2024. All rights reserved</div>
</v-footer>
</template>

<script>

    export default{
        name:"FooterVue",
        data: () => {
            return{

            }

        },

    }

</script>

<style scoped>

.page-footer{
    color:#fff;
    background-color:#000;
    padding: 0;

}
.footer-item{
    padding: 10pt;
    text-align: center;
}
.footer-item h4{
    text-decoration: underline;
}
.quick-links{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content:space-evenly;
    

}
.quick-links a{
    text-align: center;
    text-decoration: none;
    color:#fff;
}

.courses-link{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-evenly;

}

.courses-link a{
    text-decoration: none;
    color:#fff;
}
.footer-row{
    padding:10pt;
}

.copyright{
    height:30pt;
    
    width: 100%;
    background-color:#000;
    text-align:center;
    color:#fff;
    border-top: 1px solid grey;
    padding:4pt 0;
    margin-top: 10pt;
}

</style>