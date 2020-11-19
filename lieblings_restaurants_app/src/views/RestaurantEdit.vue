<template>
<v-container>        
    <h1>Restaurant aktualisieren</h1>
    <v-form @submit.prevent="onSubmit" ref="form">
        <v-container v-if="loading">
             <loading message="Restaurant wird aktualisiert"></loading>
        </v-container>
        <v-container v-else>
            <v-row>
                <v-col cols="12" sm="6">
                    <v-text-field
                     v-model="restaurant.name"
                     label="Restaurant Name"
                     :rules="[(v) => !!v || 'Bitte Restaurant Name eingeben']"
                     required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                     v-model="restaurant.cuisine"
                     label="Cuisine"
                     :rules="[(v) => !!v || 'Bitte Cuisine eingeben']"
                     required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                     v-model="restaurant.street"
                     label="Straße"
                     :rules="[(v) => !!v || 'Bitte Straße eingeben']"
                     required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                     v-model="restaurant.house_no"
                     label="Hausnummer"
                     :rules="[(v) => !!v || 'Bitte Hausnummer eingeben']"
                     required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                     v-model="restaurant.zip"
                     label="PLZ"
                     :rules="[(v) => !!v || 'Bitte PLZ eingeben']"
                     required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                     v-model="restaurant.city"
                     label="Stadt"
                     :rules="[(v) => !!v || 'Bitte Stadt eingeben']"
                     required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                     v-model="restaurant.phone_no"
                     label="Telefonnummer"
                     :rules="[(v) => !!v || 'Bitte Telefonnummer eingeben']"
                     required
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-text-field
                     v-model="restaurant.url"
                     label="Webseite"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                    <v-checkbox
                      v-model="restaurant.food_orderable"
                      label="Essen kann bestellt werden"
                    ></v-checkbox>
                </v-col>
                <v-btn color="primary" type="submit" mb-2>
                    Restaurant aktualisieren
                </v-btn>
            </v-row>
        </v-container>
    </v-form>
</v-container>
</template>
<script>
// @ is an alias to /src
import api from "@/api/restaurants"
import Loading from "@/components/Loading"

export default {
    components: {
        Loading
    },

    data() {
        return {
            restaurant: [],
            loading: false,
        }
    },

    mounted() {
        this.fetchData()
    },

    methods: {
        fetchData() {
            let selectedRestaurant = this.$store.getters.selectedRestaurant
            if (typeof selectedRestaurant === "string") {
                this.restaurant = JSON.parse(selectedRestaurant)
            } else {
                this.restaurant = selectedRestaurant
            }
        },
        onSubmit(){
            this.loading = true
            if (this.$refs.form.validate()) {
                api.update(this.restaurant.id, this.restaurant)
                    .then(() => {
                        this.$store.commit("setSelectedRestaurant", this.restaurant)
                        this.$store.commit("setSnackbarInfo","Restaurant wurde aktualisiert")
                        this.$store.commit("toggleSnackbar")
                        let id = this.restaurant.id
                        this.$router.push({name: 'RestaurantDeatil', params: {id}})
                        this.loading = false
                    }) 
                    .catch((error) => {
                        this.loading = false
                        console.log(error);
                    })
            }
        }
    }
}
</script>