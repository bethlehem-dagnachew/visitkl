<template>
    <div>
    
    <div class="header-error">
        <router-link class="back" to="">
            <img src="@/assets/icons/chevron_back.svg" alt="chevron back" />
        </router-link>
        <router-link class="header__left" to="/profile">
            <img src="@/assets/images/profile_pic.png" alt="profile picture" />
            <p>Hello,<br/><b>Nik Syazwan!</b></p>
        </router-link>
        <router-link class="logout" to="/login">
            <img src="@/assets/icons/logout_white.svg" alt="logout" />
        </router-link>
    </div>
    <div class="main-error">
        <section class="content-error">

            <!-- Title -->
            <h2 class="content__title">Ops!</h2>
            <h1 class="content__subtitle">Something Went Wrong</h1>
            <img class="content__image" src="@/assets/images/error_404.png" alt="error 404" />
            <p class="content__text">This page is currently not available.<br/>
                Please return to the homepage to continue your travel experience in Kuala Lumpur
            </p>
            <router-link class="content__button" to="/">
                Go Back
            </router-link>


        </section>
    </div>

    </div>
</template>

<script>
    export default {
        name:'error-404'
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/error404.css);

</style>