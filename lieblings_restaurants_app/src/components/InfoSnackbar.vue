<template>
    <div class="text-center ma-2">
        <v-snackbar
          :value="showSnackbar"
          @input="closeSnackbar"
          :color="color"
          top
         :timeout=6000
        >
            {{ message }}
             <template v-slot:action="{ attrs }">
                <v-btn
                  color="pink"
                  text
                    v-bind="attrs"
                    @click="closeSnackbar"
                >
                <v-icon color="white">fa-times-circle-o</v-icon>
                </v-btn>
             </template>
        </v-snackbar>
    </div>
</template>
<script>
export default {
    props: {
        message: String,
        showSnackbar: Boolean,
        color: String    
    },
    methods: {
        closeSnackbar() {
            this.$emit("closeSnackbar")
        }
    },
}
</script>