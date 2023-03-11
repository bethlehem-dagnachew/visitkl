<template>
    <div>
    <div class="headerrr-login">
        <img src="@/assets/logos/visitKL_logo1.png" alt="visitKL logo" />
    </div>
    <div class="main-login">
        <section class="content-login">
            <div class="content__cover"></div>
            <form class="content__container">
                <h1 class="content__container--title">Sign in</h1>
                <label class="content__container--input" for="username">
                    <span>Username</span>
                    <div class="content__container--input__wrapper">
                        <img src="@/assets/icons/mail_grey.svg" alt="email icon"/>
                        <input type="username" id="username" placeholder="Enter Username"  required/>
                    </div>
                </label>
                <label class="content__container--input" for="password">
                    <span>Password</span>
                    <div class="content__container--input__wrapper">
                        <img src="@/assets/icons/lock_grey.svg" alt="password icon"/>
                        <input type="password" id="password" placeholder="Enter Password" required/>
                    </div>
                </label>
                <label class="content__container--checkbox" for="remember">
                    <div class="content__container--checkbox__container">
                        <input class="content__container--checkbox__container--box" type="checkbox" id="remember"/>
                        <span class="content__container--checkbox__container--cover"></span>
                    </div>
                    <span>Remember me</span>
                </label>
                <a class="content__container--submit" href="#">Sign In</a>
                <a class="content__container--forgot" href="">
                    Forgot Password?
                </a>
                <p class="content__container--links">
                    <a href="#"> Sign Up Now</a> or login as <a href="#">Guest</a>
                </p>
            </form>
        </section>
    </div>

    </div>
</template>

<script>
    export default {
        name:'login-page'
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/login.css);

</style>