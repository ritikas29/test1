<template>
 <!--<div id="login">
        <h1>Login</h1>
        
        
        <form>
        <div class="form-icon text-left">
        <label for="example">Username</label><br/>
        <input type="text" class="" id="username"  v-model="input.username" placeholder="Enter username">
        <span class="zmdi zmdi-account"></span>
        </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label><br/>
    <input type="password" class="" id="exampleInputPassword1" v-model="input.password"  placeholder="Password"><br/>
  </div>
            <button type="button" class="btn btn-primary" v-on:click="login()">Login</button>
        </form>
    </div> -->

 <div class="login">
        <div class="image">
            <i class="zmdi zmdi-account-circle  zmdi-hc-5x"></i>
            <h2>Login</h2>
        </div>
        <form action="#">
            <div class="form-icon">
                <label for="Username">username</label>
                <input type="text" v-model="input.username" placeholder="Username">
                <span class="zmdi zmdi-account"></span>
            </div>
            <div class="form-icon">
                <label for="Password">Password</label>
                <input type="password"  v-model="input.password" placeholder="Password">
                <span class="zmdi zmdi-lock"></span>
            </div>
            <button type="submit" v-on:click="login()">Login</button>
                    <router-link to="/register">signup</router-link>
            
        </form>

    </div>

</template>


<script>
    export default {
        name: 'Login',
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log("The username and / or password is incorrect");
                    }
                } else {
                    console.log("A username and password must be present");
                }

            // axios.post('http://localhost:3000/post',this.login)
              //  .then(response => {
                //    let token =response.data.username.api_toekn;
                  //  localStorage.setItem('token',token);
                    //this.$router.push('/');
                //});


            }//,
            // navigate() {
            //     router.push({ name: "register" });
            // }
        }
    }
</script>

<style src="./login.css" scoped>
   /* #login {
        width: 500px;
        border: 2px solid #CCCCCC;
        background-color: rgb(255, 255, 255);
        margin: auto;
        margin-top: 200px;
        padding: 20px;
        justify-content: center;
        align-items: center;
    
    } */
</style>