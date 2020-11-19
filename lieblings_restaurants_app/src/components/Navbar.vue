<template>
    <nav>
        <v-app-bar
          app
          dark
          color="primary">
            <v-app-bar-nav-icon v-if="isLoggedIn" @click.stop="isNavShown = !isNavShown"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <span class="d-none d-sm-flex">Unsere Lieblings<v-icon class="mx-3">fa-cutlery</v-icon>Restaurants</span>
                <span class="d-flex d-sm-none">Unsere <v-icon class="ml-3">fa-heart</v-icon><v-icon class="ml-2">fa-cutlery</v-icon></span>
            </v-toolbar-title>
             <v-spacer></v-spacer>
            <v-btn icon v-if="this.$route.name == 'Restaurants'" @click.stop="isFilterShown = !isFilterShown">
                <v-icon>fa-search</v-icon>
            </v-btn>
        </v-app-bar>
         <v-navigation-drawer 
           temporary
           app
           v-model="isNavShown"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Was möchtest du tun?
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list>
                <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.id">
                        <v-list-item-icon >
                            <v-icon color="primary">{{ link.icon }}</v-icon>                   
                        </v-list-item-icon>
                        <v-list-item-content>
                            <v-list-item-title  @click.stop="routeTo(link.target)">
                                {{ link.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>            
        </v-navigation-drawer>
        <v-navigation-drawer
          temporary
          app
          right
          v-model="isFilterShown"
        >
            <v-list-item>
                <v-list-item-content>
                    <v-list-item-title class="title">
                        Suchen nach
                    </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>            
            <v-list-item>
                <v-list-item-content >
                    <v-combobox
                      v-model="selectedCuisines"
                      :items="cuisines"
                      @change="onCuisinesChange"
                      label="Cuisines"
                      multiple
                      chips
                    ></v-combobox>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-combobox
                      v-model="selectedCities"
                      :items="cities"
                      @change="onCitiesChange"
                      label="Ort"
                      multiple
                      chips
                    ></v-combobox>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                    <v-switch
                      v-model="isFoodOrderable"
                      @change="onFoodOrderableChange"
                      :label="`Essen bestellen möglich`"
                    ></v-switch>
                </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-content>
                   <v-btn color="warning" @click="clearSelection">Suche zurücksetzen</v-btn>  
                </v-list-item-content>
            </v-list-item>
        </v-navigation-drawer>
    </nav>
</template>
<script>
export default {
    data() {
        return {
            isNavShown: false,
            isFilterShown: false,
            links: [
                {id:1, text: 'Restaurants ansehen', icon: 'fa-cutlery' , target: 'Restaurants'},
                {id:2, text: 'Restaurant hinzufügen', icon: 'fa-plus-circle' , target: 'RestaurantCreate'},
            ],
            selectedCuisines: [],
            selectedCities: [],
            isFoodOrderable: false,    
        }
    },

    computed: {
        isLoggedIn() {
            return this.$store.getters.isLoggedIn
        },
        cuisines() {
            return this.$store.getters.cuisines
        },
        cities() {
            return this.$store.getters.cities
        },
    },

    methods: {
        onCuisinesChange() {
            this.$store.commit("selectCuisines", this.selectedCuisines)
        },
        onCitiesChange() {
            this.$store.commit("selectCities", this.selectedCities)
        },
        onFoodOrderableChange() {
            this.$store.commit("toogleIsFoodOrderable")
        },
        clearSelection() {
            this.selectedCuisines = []
            this.selectedCities = []
            this.$store.commit("selectCuisines", this.selectedCuisines)
            this.$store.commit("selectCities", this.selectedCities)
            this.isFoodOrderable = false
            this.$store.commit("toogleIsFoodOrderable")    
        },
        routeTo(name) {
            if (this.$router.currentRoute.name === name) {
                 this.$router.go()
            } else {
                this.$router.push({name: `${name}` })
            }
        }
    }
}
</script>