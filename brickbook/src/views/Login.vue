<template>
<div>
        <div>
            <nav-bar/>
        </div>

        <div id="login-box" class="block is-info has-background-info">
            <div class="hero-foot">
                <div class="columns">
                    <div class="column"></div>
                    <div class="column">
                        <form @submit.prevent="login" class="box" >

                        <!--<article class="message is-danger">
                            <div class="message-header">
                                <p>Try Again</p>
                                <button class="delete" aria-label="delete"></button>
                            </div>
                            <div class="message-body">
                                Login Failed. Your Username or Password is incorrect. Try Again.
                            </div>
                        </article>-->
                        <div>    
                        </div>

                        <div class="field">
                            <label class="label">Username</label>
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="username" placeholder="@Matt123" v-model="handle">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <label class="label">Password</label>
                            <p class="control has-icons-left">
                                <input class="input" type="password" placeholder="********" v-model="password">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                    
                        <button class="button is-info">Log in</button><br>
                        <button class="button is-info is-half is-large">
                            <span>
                                <i id="fbsquare" class="fab fa-facebook-square"></i>
                            </span>
                            Login with Facebook
                        </button>
                        <p class="is-size-5">
                            Dont have an account? Sign Up here.
                        </p>
                        <router-link to="/signup" class="button is-info">
                            Sign Up
                        </router-link>
                    </form>
                    </div>
                    <div class="column"></div>
                </div>

                </div>
            </div>
        </div>
      
</template>

<script>
import NavBar from '../components/NavBar.vue'
import Session, { Login } from '../models/Session'

export default {
  components: { NavBar },
    data: () => ({
        handle: null,
        password: null
    }),
    methods: {
        login(){
            Login(this.handle, this.password)
            console.log("Login Successful : " + Session.user.handle + " : " + Session.user.password)
        }
    }
}
</script>

<style>
.button {
    margin: 10px;
}
#login-hero {
    
}
#fbsquare{
    margin-right: 10px;
}
#login-box{
   height: 200px;
}
</style>