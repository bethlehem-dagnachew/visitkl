<template>
    <div>
    <div class="header-galleryFormThanks">
        <router-link class="back" to="">
            <img src="@/assets/icons/chevron_back.svg" alt="chevron back" />
        </router-link>
        <router-link class="header__left" to="/profile">
            <img src="@/assets/images/profile_pic.png" alt="profile picture" />
            <p>Hello,<br/><b>Nik Syazwan!</b></p>
        </router-link>
        <router-link class="header__right" to="/menu">
            <img src="@/assets/icons/menu.svg" alt="menu"/>
        </router-link>
    </div>
    <div class="main-galleryFormThanks">
        <section class="content-galleryFormThanks">
            <div class="content__top-galleryFormThanks">
                <h1 class="content__top--title-galleryFormThanks">Thank you!</h1>
                <img class="content__top--image" src="@/assets/icons/thumbs_up.svg" alt="thumbs up"/>
            </div>
            <p class="content__text">
                Your media will be viewed and an approved application will be posted in KL Gallery section shortly.
            </p>
            <router-link class="content__submit" to="./galleryForm">
                Submit New Application
            </router-link>
        </section>
    </div>
    <footer>
        <router-link to="/">
            <img src="@/assets/icons/home_cherry-red.svg" alt="home icon"/>
        </router-link>
    </footer>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/gallery_form_thanks.css);

</style>