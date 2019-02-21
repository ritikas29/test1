<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="authenticated" to="/login" v-on:click.native="logout()" replace>
            <button type="button" class="btn btn-primary">logout</button>
    
       </router-link>
        </div>
        <router-view @authenticated="setAuthenticated" />
     </div>
</template>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    <script src="https://cdn.jsdelivr.net/vuejs-paginator/2.0.0/vuejs-paginator.min.js"></script>

<script>

    export default {
        name: 'App',

        data() {
            return {
                authenticated: false,
                mockAccount: {
                    username: "ritika",
                    password: "cool"
                }
            }
        },
        mounted() {
            if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
        methods: {
            setAuthenticated(status) {
                this.authenticated = status;
            },
            logout() {
                this.authenticated = false;
            }
        }
    }
</script>
<style >
     @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

    body {
        background-color: #F0F0F0;
    }
    h1 {
        padding: 0;
        margin-top: 0;
    }
    #app {
        width: 1024px;
        margin: auto;
    }
    #nav {
    
        text-align: right;
    }
    button{
    background:lightgreen; 
    color: #6373cc;
    padding: 12px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top:20px;
}

button:hover{
    background: purple;
    transition: 0.2s all ease;
}
</style>