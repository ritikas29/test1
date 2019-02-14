<template>
    <div class="register">
        <div class="image">
            <i class="zmdi zmdi-account-circle  zmdi-hc-5x"></i>
            <h2>Register</h2>
        </div>
        <form action="#">

            <div class="form-icon">
                <label for="username">Username</label>
                <input type="text" v-model="input1.username" placeholder="username">
                <span class="fa fa-envelope" aria-hidden="true"></span>
            </div>
            <div class="form-icon">
                <label for="Password">Password</label>
                <input type="password" v-model="input1.password" placeholder="Password">
                <span class="fa fa-key" aria-hidden="true"></span>
            </div>
            <div class="form-icon">
                <label for="Confirm Password"> Confirm Password</label>
                <input type="password" v-model="input1.confirmpassword" placeholder="Confirm Password">
                <span class="fa fa-key" aria-hidden="true"></span>
            </div>
            <button type="submit" v-on:click="signin()">Register</button>
        </form>
    </div>
</template>
<script>
import axios from "axios"
export default {
    name: 'Register',
        data() {
            return {
                input1: {
                    username: "",
                    password: "",
                    confirmpassword: ""
                }
            }
        },
    /* methods: {
         signin() {
                axios.post('http://localhost:3000/posts').then(input1 =>{
              // console.log(input1);
              
              
               this.input1 =input1.data

         });


         }*/
         methods: {
             signin() {
                  axios.post('http://localhost:3000/posts',this.input1)
                  .then(response => {
                      console.log(response);
                      // let token= response.data.username.api_token;
                      //localStorage.setItem('token',token);
                    
                  });
         },
         mounted() {
             
         }
     }
}
</script>
<style src="./register.css" scoped>
</style>
