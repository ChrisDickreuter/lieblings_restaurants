<template>
    <v-container>
        <infoSnackbar :message="info" :showSnackbar="showSnackbar" :color="snackbarColor" @closeSnackbar="close"></infoSnackbar>
        <v-row v-if="loading">
            <loading message="Restaurant wird geladen"></loading>
        </v-row>
        <v-row 
          v-else 
          align="center"
          justify="center"
        >
            <v-col cols="12" sm="8" md="6"> 
                <v-card class="ma-5"  max-width="450px">
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
                        <v-divider class="my-5"></v-divider>  <v-card-title>
                        Kommentare 
                    </v-card-title>       
                         <v-card-text>
                         <v-form @submit.prevent="onSubmit">
                          <v-text-field
                            v-model="comment.comment"                   
                            label="Ich fand es hier..."
                            :rules="[(v) => !!v || 'Bitte gebe einen Kommentar ein']"
                            required
                            ></v-text-field>
                            <v-btn color="primary" type="submit" mb-2>
                                kommentieren
                            </v-btn>
                        </v-form>
                        <v-list three-line class="mx-3">                    
                            <v-list-item  v-for="comment in restaurant.comments" :key="comment.id">
                                <v-list-item-content>
                                    <v-list-item-title class="title">{{comment.user_name}} <span class="caption pl-1">{{comment.created_at | moment("from", "now")}}</span></v-list-item-title>
                                    <p class="body-2">{{comment.comment}}</p>
                                </v-list-item-content>
                            </v-list-item> 
                        </v-list>
                    </v-card-text>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
// @ is an alias to /src
import apiRestaurant from "@/api/restaurants"
import apiComment from "@/api/comments"
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
            comment: {},
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
        snackbarColor() {
            return this.$store.getters.snackbarColor
        }
    },

    methods: {
        fetchData() {
            this.loading = true

            if(this.isOnline) {
                apiRestaurant.getById(this.$route.params.id)
                    .then(response => {
                        this.restaurant = response.data.restaurant
                        this.$store.commit("setSelectedRestaurant", response.data.restaurant)
                        this.loading = false
                    })
                    .catch((error) => {
                        this.loading = false
                        console.log(error);
                    })
            } else {
                let storedRestaurants = this.$offlineStorage.get('restaurants')
                this.restaurant = storedRestaurants.find(bar => bar.id == this.$route.params.id)
                this.loading = false
            }
        },
        onSubmit() {
            if(this.isOnline) {
                this.comment.restaurant_id = this.restaurant.id 
                this.comment.user_name = this.$store.getters.user
                apiComment.store(this.comment)
                    .then(() => {
                        this.comment.comment = ""
                        this.$store.commit("setsnackbarColor", 'error')
                        this.$store.commit("setSnackbarInfo","Restaurant wurde kommentiert")
                        this.$store.commit("toggleSnackbar")
                        this.fetchData()
                    })
            } else {
                this.$store.commit("setsnackbarColor", 'warning')
                this.$store.commit("setSnackbarInfo","Du musst online sein, um ein Restaurant kommentieren zu können.")
                this.$store.commit("toggleSnackbar")
            }
        },
        routeToEdit() {
            if(this.isOnline) {
                this.$router.push({name: 'RestaurantEdit'})
            } else {
                this.$store.commit("setsnackbarColor", 'warning')
                this.$store.commit("setSnackbarInfo","Du musst online sein, um ein Restaurant bearbeiten zu können.")
                this.$store.commit("toggleSnackbar")
            }
            
        },
        close() {
            this.$store.commit("toggleSnackbar")
        },
    }
}
</script>