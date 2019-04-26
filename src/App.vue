
<template>
    <div style="height:100%" >
        <div id="nav" class="header" v-if="token">
            <router-link  to="/login" v-on:click.native="logout()" replace>
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
    --primary:#13195d;
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
    background:#13195d;
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
.header{
    border-bottom:1px solid #ccc;
    padding: 10px;
    box-shadow: 3px 2px 5px #ccc;

}
.header-ll{
   float: left;
   width: 20%;
}
.header-mm{
   float: left;
   width: 60%;
}
.header-rr{
   float: right;
   width: 20%;
}

</style>