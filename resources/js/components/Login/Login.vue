<template>
    <v-container>
        <form @submit.prevent="login">
            <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
                required
            ></v-text-field>

            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
                   required
            ></v-text-field>

            <v-btn
                type="submit"
                color="green"
            >submit</v-btn>
            <router-link to="/register">
                <v-btn  color="blue">Register</v-btn>
            </router-link>
        </form>
    </v-container>
</template>

<script>
    import User from "../../Helpers/User";

    export default {
        data() {
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },
        created() {
            if ( User.loggedIn() ) {
                this.$router.push({name: 'forum'})
            }
        },
        methods: {
            login () {
                User.login(this.form)
                this.$router.push({name: 'forum'})
            }
        }
    }
</script>
