<template>
    <v-toolbar>
        <!-- <v-toolbar-side-icon></v-toolbar-side-icon> -->
        <v-toolbar-title>Single App</v-toolbar-title>
        <v-spacer></v-spacer>


        <div class="hidden-sm-and-down">
            <router-link :to="item.to" v-for="item in items" :key="item.title" v-if="item.show">
                <v-btn flat>{{ item.title }}</v-btn>
            </router-link>
        </div>

    </v-toolbar>
</template>

<script>
    import User from "../Helpers/User";

    export default {
        data() {
            return {
                items: [
                    {title: 'Forum', to: '/forum', show: true},
                    {title: 'Login', to: '/login', show: !User.loggedIn()},
                    {title: 'Ask Question', to: '/ask', show: User.loggedIn()},
                    {title: 'Category', to: '/category', show: User.loggedIn()},
                    {title: 'Logout', to: '/logout', show: User.loggedIn()},

                ]
            }
        },
        created() {
            EventBus.$on('logout', () => {
                User.logout()
            })
        }
    }
</script>
