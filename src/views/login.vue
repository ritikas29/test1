<template>
    <div id="login">
        <h1>Login</h1>
        
        
        <form>
  <div class="form-group">
    <label for="example">Username</label>
    <input type="text" class="form-control" id="username"  v-model="input.username" placeholder="Enter username">
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="input.password"  placeholder="Password">
  </div>
            <button type="button" class="btn btn-primary" v-on:click="login()">Login</button>
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
            }
        }
    }
</script>

<style src="./login.css" scoped>
    #login {
        width: 500px;
        border: 1px solid #CCCCCC;
        background-color: rgb(255, 255, 255);
        margin: auto;
        margin-top: 200px;
        padding: 20px;
    }
</style>