<template>
    <div>
 
    <div class="header-galleryReelOpen">
        <router-link class="back" to="#">
            <img src="@/assets/icons/chevron_back.svg" alt="chevron back" />
        </router-link >
        <router-link  class="header__left" to="/profile">
            <img src="@/assets/images/profile_pic.png" alt="profile picture" />
            <p>Hello,<br/><b>Nik Syazwan!</b></p>
        </router-link >
        <router-link  class="header__right" to="/menu">
            <img src="@/assets/icons/menu.svg" alt="menu"/>
        </router-link >
    </div>
    <div class="main-galleryReelOpen">
        <section class="content-galleryReelOpen">            
            <img class="content__reel" src="@/assets/images/reel_main-image.png" alt="reel"/>
            <h1 class="content__title-galleryReelOpen">Reels</h1>
            <div class="content__profile">
                <img class="content__profile--pic" src="@/assets/images/reels_profile.png" alt="reels profile picture"/>
                <div class="content__profile--info">
                    <h4 class="content__profile--info__title">Nik Saerah</h4>
                    <p class="content__profile--info__text">Bandaraya LRT Station, KL Malaysia</p>
                    <div class="content__profile--info__division">
                        <div class="content__profile--info__division--wrapper">
                            <img src="@/assets/icons/video_arrow.svg" alt="play"/>
                            <p>5345</p>
                        </div>
                        <p class="content__profile--info__division--hashtag">#Arts&Culture</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <footer>
        <router-link  to="/">
            <img src="@/assets/icons/home_cherry-red.svg" alt="home icon"/>
        </router-link >
    </footer>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/gallery_reel_open.css);

</style>