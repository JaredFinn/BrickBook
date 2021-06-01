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
                        <form class="box">
                <div class="columns">
                    <div class="column">
                        <div class="field">
                            <label class="label">First Name</label>
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" v-model="firstName" type="name" placeholder="Eg. Jared">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div class="column">
                        <div class="field">
                            <label class="label">Last Name</label>
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" v-model="lastName" type="name" placeholder="Eg. Finn">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                
                <div class="field">
                    <label class="label">Email</label>
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" v-model="email" type="email" placeholder="Eg. google@gmail.com">
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Username</label>
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" v-model="username" type="username" placeholder="Eg. jaredfinn">
                        <span class="icon is-small is-left">
                            <i class="fas fa-user"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <label class="label">Password</label>
                    <p class="control has-icons-left">
                        <input class="input" v-model="password" type="password" placeholder="********">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>

                <div class="field">
                    <label class="label">Confirm Password</label>
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" v-model="passwordConfirm" type="password" placeholder="********">
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-check"></i>
                            </span>
                            <span class="icon is-small is-right">
                                <i class="fas fa-times"></i>
                            </span>
                    </p>
                </div>

                <button  class="button is-info">Sign Up</button>

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

export default {
  components: { NavBar },
    data: () => ({

    }),
    methods: {
    }
}
</script>

<style>
.button {
    margin: 10px;
}
#fbsquare{
    margin-right: 10px;
}
#login-box{
   height: 200px;
}
</style>