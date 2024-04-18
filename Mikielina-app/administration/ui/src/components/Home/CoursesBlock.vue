<template>
    <div class="courses-block">
        <div class="block-intro ">
            <h3 class="">Featured Courses</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt magnam reprehenderit dignissimos odit
                commodi voluptatibus maiores eius sunt veritatis</p>
            <v-btn class="apply-now "> Apply Now</v-btn>

        </div>

        <v-carousel class="carousel-block" cycle height="300" hide-delimiter-background show-arrows-on-hover>
            <!-- <v-carousel-item v-for= "(slide, i) in slides" :key="i"> -->
            <v-carousel-item v-for="(slide, i) in slides" :key="'slide_' + i">
                <v-row class="d-flex space-between">
                    <v-col class="card-sheet" v-for="elevation in elevations" :key="elevation" cols="12" md="3">
                        <v-sheet class=" insider-cards  fill-height" color="">
                            <v-sheet :elevation="elevation" class="mx-auto pic-sheet " height="150" width="150">
                                <v-img class="course-image"
                                    src="https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFjdHVyaWFsJTIwc2NpZW5jZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60">
                                </v-img>
                                <h6 class="course-title text-center"> Bsc Acturial Science </h6>
                            </v-sheet>
                        </v-sheet>
                    </v-col>
                </v-row>
            </v-carousel-item>
        </v-carousel>

    </div>

</template>

<script>
export default {
    name: "CourseBlock",
    // data: () => ({
    //     return{
    data: ()=>{
        return{
            elevations: [6, 12, 18, 18],
            model: 0,
            slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
            ],
        }
    },
    //     elevations: [6, 12, 18, 18],
    //     model: 0,
    //     slides: [
    //         'First',
    //         'Second',
    //         'Third',
    //         'Fourth',
    //         'Fifth',
    //     ],
        
    // }),


}

</script>

<style scoped>
.courses-block {
    height: 500px;
    background-color: #2196F3;
}

.block-intro {
    height: 200px;
    display: flex;
    background-color: #2196F3;

    flex-direction: column;
    margin: 0 0 0 0;


}

.block-intro h3 {
    text-align: center;
    font-weight: 600;
    font-size: 28pt;
    color: #fff;
}


.block-intro p {
    font-size: 12pt;
    font-weight: 400;
    text-align: center;
    width: 50%;
    margin: auto;
    color: #fff;

}

.block-intro .apply-now {
    width: 140pt;
    height: 40pt;
    margin: auto;
    border-radius: 24pt;
    color: #fff;
    background-color: #ff0000;
}

/*Carousel Block inside block intro*/



.carousel-block .card-sheet {
    margin: 0;
    height: 200pt;
    padding: 15pt;
    width: 20%;
    background-color: #2196F3;

}

.carousel-block .insider-cards {
    width: 75%;
    display: flex;
    align-items: center;

}

.carousel-block .pic-sheet {}
</style>