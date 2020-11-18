<template>
    <v-container>
        <infoSnackbar :message="info" :showSnackbar="showSnackbar" @closeSnackbar="close"></infoSnackbar>
        <v-row 
            v-if="loading"
        >
            <loading message="Restaurant wird geladen"></loading>
        </v-row>
        <v-row v-else>
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
                    <span v-if="restaurant.url">
                        <v-icon>fa-globe</v-icon>
                        <p><a :href="restaurant.url" target="_blank">{{ restaurant.url }}</a></p>
                    </span>
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
import Loading from "@/components/Loading"
import InfoSnackbar from "@/components/InfoSnackbar"


export default {
     components: {
        Loading,
        InfoSnackbar
    },

    data() {
        return {
            restaurant: {},
            loading: false,
        }
    },

   mounted() {
        this.fetchData()
    },

    computed: {
        showSnackbar() {
            return this.$store.getters.showSnackbar
        },
        info() {
            return this.$store.getters.snackbarInfo
        },
    },

    methods: {
        fetchData() {
            this.loading = true
            api.getById(this.$route.params.id)
                .then(response => {
                    this.restaurant = response.data.restaurant
                    this.$store.commit("setSelectedRestaurant", response.data.restaurant)
                    this.loading = false
                })
                .catch((error) => {
                    this.loading = false
                    console.log(error);
                })
        },
        routeToEdit() {
            this.$router.push({name: 'RestaurantEdit'})
        },
        close() {
            this.$store.commit("toggleSnackbar")
        },
    }
}
</script>