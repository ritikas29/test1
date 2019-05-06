
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

            <router-link to="/login">
                                    <button type="submit" v-on:click="signin()">Register</button>
                                    </router-link> 
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
                  axios.post('http://192.168.15.141:8000/register',this.input1,)
                  .then(function(response) {
                       
                        })
                   },
        
     }
}
</script>
<style src="./register.css" scoped>
</style>

