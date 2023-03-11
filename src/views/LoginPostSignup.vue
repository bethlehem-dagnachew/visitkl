<template>
    <div>
            <div class="header-login-post">
                <img src="@/assets/logos/visitKL_logo1.png" alt="visitKL logo" />
            </div>
            <div class="main-login-post">
                <section class="content-login-post">
                    <div class="content__cover"></div>
                    <form class="content__container">
                        <h1 class="content__container--title">Sign in</h1>
                        <label class="content__container--input" for="username">
                            <span>Username</span>
                            <div class="content__container--input__wrapper">
                                <img src="@/assets/icons/mail_grey.svg" alt="email icon"/>
                                <input type="username" id="username" placeholder="Nik Syazwan"  required/>
                            </div>
                        </label>
                        <label class="content__container--input" for="password">
                            <span>Password</span>
                            <div class="content__container--input__wrapper">
                                <img src="@/assets/icons/lock_grey.svg" alt="password icon"/>
                                <input type="password" id="password" placeholder="***************" required/>
                            </div>
                        </label>
                        <label class="content__container--checkbox" for="remember">
                            <div class="content__container--checkbox__container">
                                <input class="content__container--checkbox__container--box" type="checkbox" id="remember"/>
                                <span class="content__container--checkbox__container--cover"></span>
                            </div>
                            <span>Remember me</span>
                        </label>
                        <router-link to="/login" class="content__container--submit">Sign In</router-link>
                        <router-link to="" class="content__container--forgot">
                            Forgot Password?
                        </router-link>
                        <p class="content__container--links">
                            Dont have any account? <router-link to="/signUp"> Sign Up Now</router-link>
                        </p>
                    </form>
                </section>
            </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/login-post-signup.css);

</style>