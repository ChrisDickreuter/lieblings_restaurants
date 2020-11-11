<template>
  <v-app>
      <Navbar />
      <v-main>
        <router-view></router-view>
      </v-main>  
  </v-app>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar";

export default {
  name: 'App',

  components: {
    Navbar
  },

  data: () => ({
    //
  }),
};
</script>
