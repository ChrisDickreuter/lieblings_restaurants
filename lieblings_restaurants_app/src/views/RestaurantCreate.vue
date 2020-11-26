<template>
<v-container>
    <infoSnackbar :message="info" :showSnackbar="showSnackbar" :color="snackbarColor" @closeSnackbar="close"></infoSnackbar>        
    <h1>Restaurant hinzufügen</h1>
    <v-form @submit.prevent="onSubmit" ref="form">
        <v-container v-if="loading">
             <loading message="Restaurant wird angelegt"></loading>
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
                    Restaurant anlegen
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
        onSubmit() {
            this.loading = true
            if (this.$refs.form.validate()) {               
                api.store(this.restaurant)
                .then((response) => {
                    let snackbarColor = (response.data.error) ? 'error' : 'success' 
                    this.$store.commit("setsnackbarColor", snackbarColor)
                    this.$store.commit("setSnackbarInfo", response.data.message)
                    this.$store.commit("toggleSnackbar")
                    this.loading = false

                    if (response.data.error) {                        
                        console.log(response.data.error);
                    } else {
                        this.$router.push({name: 'Restaurants'})
                    }  
                })
                .catch((error) => {   
                    this.loading = false               
                    console.log(error);
                })  
            } else {
                this.loading =false
            }  
        },
        close() {
            this.$store.commit("toggleSnackbar")
        },
    },
}
</script>