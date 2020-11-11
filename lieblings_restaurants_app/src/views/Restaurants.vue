<template>
    <v-container>
        <v-row dense>
            <v-col
                v-for="restaurant in filteredRestaurants" :key="restaurant.id"
                cols=12 sm="6" md="4">                
                <v-card elevation="1" class="ma-3">
                    <v-card-title class="primary--text text--darken-2" v-text="restaurant.name"></v-card-title>
                    <v-divider></v-divider>
                    <v-card-subtitle>
                       <p><v-icon>fa-cutlery</v-icon> {{ restaurant.cuisine }}</p> 
                        <p><v-icon>fa-map-marker</v-icon> {{ restaurant.city }}</p> 
                    </v-card-subtitle>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn outlined fab small color="primary" class="text--darken-2" @click="routeTo(restaurant.id)">
                        <v-icon>fa-info</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>    
</template>
<script>
// @ is an alias to /src
import api from "@/api/restaurants";

export default {
    data() {
        return {
            restaurants: [],
        }
    },

    mounted() {
        this.fetchData()
    },

    computed: {
        filteredRestaurants() {
            let cuisines = this.$store.getters.selectedCuisines
            let cities = this.$store.getters.selectedCities
            if (cuisines.length > 0 && cities.length == 0) {
                return this.restaurants.filter(restaurant => cuisines.includes(restaurant.cuisine));
            } else if (cuisines.length == 0 && cities.length > 0) {
                return this.restaurants.filter(restaurant => cities.includes(restaurant.city));
            } else if (cuisines.length > 0 && cities.length > 0) {
                return this.restaurants.filter(restaurant => cuisines.includes(restaurant.cuisine) && cities.includes(restaurant.city));
            }else {
                return this.restaurants
            } 
        },
    },

    methods: {
        fetchData() {
            api.all()
                .then(response => {
                    this.restaurants = response.data.restaurants
                    let cuisines = this.restaurants.map(restaurant => restaurant.cuisine)
                    let uniquecuisines = cuisines.filter((item, index) => cuisines.indexOf(item) == index)
                    this.$store.commit("setCuisines", uniquecuisines)   
                    let cities = this.restaurants.map(restaurant => restaurant.city)
                    let uniquecities = cities.filter((item, index) => cities.indexOf(item) == index)
                    this.$store.commit("setCities", uniquecities)
                })
        },
        routeTo(id) {
            this.$router.push({name: 'RestaurantDeatil', params: {id}})
        },
    }
}
</script>
