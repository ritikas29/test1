<template>
    <div class="login">
        <div class="image">
            <i class="zmdi zmdi-account-circle  zmdi-hc-5x"></i>
            <h2>Login</h2>
        </div>
        <form action="#">
            <div class="form-icon">
                <label for="Username">Username</label>
                <input type="text" v-model="input.username" placeholder="Username">
                <span class="fa fa-user" aria-hidden="true"></span>
            </div>
            <div class="form-icon">
                <label for="Password">Password</label>
                <input type="password"  v-model="input.password" placeholder="Password">
                <span class="fa fa-key" aria-hidden="true"></span>
            </div>
            <button type="submit" v-on:click="login()">Login</button>
                    <router-link to="/register">signup</router-link>            
        </form>    
    </div>
</template>
<script>
import axios from 'axios'
import { error } from 'util';
   // let header = {headers: {auth1:"1"}}
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
                axios.post('http://192.168.15.141:8000/login',this.input)
				.then(response => {
                     let newToken=response.data.authorization;
                     console.log(newToken)
                     console.log(response)
                     let token = localStorage.getItem("token")
                     console.log(token)
                     this.$router.push('/secure')
                     window.token=newToken;
                     let user=response.data.user;	
                     localStorage.setItem('token',newToken);
                     localStorage.setItem('user',JSON.stringify(user));//turns a JavaScript object into JSON text and stores that JSON text in a string.
                        //window.axios.defaults.params={token:newToken}
                     this.$emit('login',user);
                     this.$emit("token",true)
                     this.$router.replace({name:"secure"});
                }).catch(error => {
                    console.log(error)
                })

            }
           

            // login() {
            //     let token = localStorage.getItem("token")
            //              axios.post('http://192.168.15.141:8000/login',this.input, {
            //                 headers: {
            //                     'X-AUTH':'localStorage.token',
            //                     'authorization':token,
            //                     'token':token,
            //                     'Content-Type': 'application/json'
            //                 }
                    
            //             })
            //             .then(response => {
            //                 //alert('login successful')
            //                 let newToken=response.data.authorization
            //                 window.token=newToken;
			// 		        let user=response.data.user;	
			// 		        localStorage.setItem('token',newToken);
			// 		        localStorage.setItem('user',JSON.stringify(user))
            //                     console.log(response.headers)
            //                     console.log(response.data)
            //                 this.$router.push('/secure')
                            
            //                 // return  response;
            //             })
            //             .catch((error) => {
            //                 //return  error;
            //             });
            // }
                  //axios.post('http://192.168.15.81:8000/login',this.input, header )
                  //.then(response => {
                    //  console.log(response);
                      //this.$emit("authenticated", true);
                       //this.$router.replace({ name: "secure" });

                      // let token= response.data.username.api_token;
                      //localStorage.setItem('token',token);
                    
                 // });
                
                //if(this.input.username != "" && this.input.password != "") {
                  //  if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                    //    this.$emit("authenticated", true);
                       // this.$router.replace({ name: "secure" });
                    //} else {
                      //  console.log("The username and / or password is incorrect");
                   // }
                //} else {
                  //  console.log("A username and password must be present");
                //    if(token) {
                   //  return 'Bearer ' + token
                //} else {
                //return ''
               //}}

             //axios.post('http://localhost:3000/post',this.login)
              //  .then(response => {
                //    let token =response.data.username.api_token;
                  //  localStorage.setItem('token',token);
                    //this.$router.push('/');
                //});


            //,
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