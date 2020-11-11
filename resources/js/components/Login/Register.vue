<template>
    <v-container>
        <form @submit.prevent="register">
            <v-text-field
                v-model="form.name"
                label="Name"
                type="text"
            ></v-text-field>
            <span class="red--text" v-if="errors.name">{{ errors.name[0] }}</span>
            <v-text-field
                v-model="form.email"
                label="E-mail"
                type="email"
            ></v-text-field>
            <span class="red--text" v-if="errors.email">{{ errors.email[0] }}</span>

            <v-text-field
                v-model="form.password"
                label="Password"
                type="password"
            ></v-text-field>
            <span class="red--text" v-if="errors.password">{{ errors.password[0] }}</span>

            <v-text-field
                v-model="form.password_confirmation"
                label="Confirm Password"
                type="password"
            ></v-text-field>
            <v-btn
                type="submit"
                color="green"
            >submit</v-btn>
            <router-link to="/login">
                <v-btn color="blue">Login</v-btn>
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
                    password: null,
                    name: null,
                    password_confirmation: null
                },
                errors: {

                }
            }
        },
        created() {
            if ( User.loggedIn() ) {
                this.$router.push({name: 'forum'})
            }
        },
        methods: {
            register () {
                axios.post('api/auth/register', this.form)
                    .then(res => {
                        User.responseAfterLogin(res);
                        this.$router.push({name: 'forum'})
                    })
                    .catch(error => this.errors = error.response.data.errors)
            }
        }
    }
</script>
