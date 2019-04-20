
<template>
    <div id="app">
        <div id="nav">
            <router-link v-if="token" to="/login" v-on:click.native="logout()" replace>
            <button type="button" class="btn btn-secondary">logout</button>  
       </router-link>
        </div>
        <router-view @token="setAuthenticated" />
     </div>
</template>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
    

<script>
    export default {
        name: 'App',
        data() {
            return {
               // authenticated: false,
                token: false,
               // mockAccount: {
                 //   username: "ritika",
                  //  password: "cool"
                //}
            }
        },
        mounted() {
          if (!token) {
          return this.$router.push({ name: "login" });
        }
           // if(!this.authenticated) {
             //   this.$router.replace({ name: "login" });
            //}
        },
        methods: {
            setAuthenticated(status) {
                this.token = status;
            },
            logout() {
                this.token = false;
            }
        }
    }
</script>
<style >
     @import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

    :root{
    --primary: #2667a8;
    --secondary:#040333;
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
    background: var(--primary);
    color: #ffffff;
    padding: 12px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover{
    background:  var(--secondary);
    transition: 0.2s all ease;
}
    /*button{
    background:lightgreen; 
    color:#6373cc;
    padding: 12px 12px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top:20px;
}

button:hover{
    background: purple;
    transition: 0.2s all ease;
}*/
</style>