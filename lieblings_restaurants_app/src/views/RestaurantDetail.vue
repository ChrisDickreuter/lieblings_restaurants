<template>
    <v-container>
        <v-row>
            <v-card class="mx-auto">
                <v-card-title>{{ restaurant.name }}</v-card-title>
                <v-card-subtitle><v-icon>fa-cutlery</v-icon> {{ restaurant.cuisine }}</v-card-subtitle>
                <v-divider></v-divider>
                <v-card-text>
                    <v-icon>fa-map-marker</v-icon> 
                    <address>
                    {{ restaurant.street }} {{ restaurant.house_no }}<br/>
                    {{ restaurant.zip }} {{ restaurant.city }}
                    </address>
                    <v-icon>fa-phone</v-icon>
                    <p>{{ restaurant.phone_no }}</p>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click.stop="routeToEdit">
                        <v-icon>fa-edit</v-icon>Bearbeiten
                        </v-btn>
                        <v-btn :href="`tel:${restaurant.phoneNo}`"  color="success">
                            <span><v-icon>fa-phone</v-icon> anrufen</span>
                        </v-btn>
                    </v-card-actions>
                </v-card-text>
            </v-card>
        </v-row>
    </v-container>
</template>
<script>
// @ is an alias to /src
import api from "@/api/restaurants"

export default {
    data() {
        return {
            restaurant: {},
        }
    },

   mounted() {
        this.fetchData()
    },

    methods: {
        fetchData() {
            api.getById(this.$route.params.id)
                .then(response => {
                    this.restaurant = response.data.restaurant
                    this.$store.commit("setSelectedRestaurant", response.data.restaurant)
                })
        },
        routeToEdit() {
            this.$router.push({name: 'RestaurantEdit'})
        }
    }
}
</script>