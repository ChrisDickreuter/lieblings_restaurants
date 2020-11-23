<template>
    <v-container grid-list-lg>
        <v-form @submit.prevent="login" ref="form" v-model="valid">
            <v-layout row>
                <v-flex offset-sm2 sm8 offset-md4 md4>
                    <v-card height="100%">
                        <v-card-title primary-title class="pb-0">
                            <div>
                                <h1 class="headline mb-0">Login</h1>
                            </div>
                        </v-card-title>
                        <v-card-text class="pt-0">
                            <p class="red--text" v-if="error">Name oder Passwort falsch</p>
                            <v-text-field 
                                validate-on-blur 
                                label="Name" 
                                required 
                                type="text"
                                :rules="[(v) => !!v || 'Bitte Name eingeben']" 
                                v-model="name"
                                @input="error = false"></v-text-field>
                            <v-text-field validate-on-blur 
                                label="Passwort" 
                                required
                                :rules="[(v) => !!v || 'Bitte Passwort eingeben']" 
                                type="password"
                                v-model="password"
                                @input="error = false"></v-text-field>
                        </v-card-text>
                        <v-card-actions class="pb-3 pl-3 pt-0">
                            <v-btn :loading="isSending" 
                                color="primary" 
                                type="submit" mb-2>Login</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-form>
    </v-container>    
</template>
<script>
export default {
    data() {
        return {
            valid: false,
            name: "",
            password: "",
            isSending: false,
            error: false
        }
    },
    methods: {
        login: function () {
            if(this.$refs.form.validate()) {
                this.valid = true
                this.isSending = true
                let name = this.name
                let password = this.password
                this.$store.dispatch('login', {name, password})
                    .then(() => {
                        this.isSending = false
                        this.$router.push('/')
                    })
                    .catch((error) => {
                        this.isSending = false
                        this.error = true
                        console.log(error);
                    })
            }
        }
    }
}
</script>