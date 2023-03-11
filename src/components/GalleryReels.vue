<template>
    <div>
  
    <div class="header-gallery-reels">
        <router-link class="back" to="#">
            <img src="@/assets/icons/chevron_back.svg" alt="chevron back" />
        </router-link>
        <router-link to="/profile" class="header__left">
            <img src="@/assets/images/profile_pic.png" alt="profile picture" />
            <p>Hello,<br/><b>Nik Syazwan!</b></p>
        </router-link>
        <router-link to="/menu" class="header__right" >
            <img src="@/assets/icons/menu.svg" alt="menu"/>
        </router-link>
    </div>
    <div class="main-gallery-reels">
        <section class="content-gallery-reels">

            <!-- Top -->
            <div class="content__top">
                <img class="content__top--title" src="@/assets/logos/gallery_title.png" alt="gallery title"/>
                <div class="content__top--links">
                    <a class="content__top--links__item" href="./gallery_form.html">
                        <img src="@/assets/icons/upload_black.svg" alt="upload"/>
                    </a>
                    <a class="content__top--links__item" href="./gallery.html">
                        <img src="@/assets/icons/grid_black.svg" alt="grid"/>
                    </a>
                    <a class="content__top--links__item" href="./gallery_reels.html">
                        <img src="@/assets/icons/video_grey.svg" alt="video"/>
                    </a>
                </div>
            </div>

            <!-- Reels -->
            <section class="reels">
                <a class="reels__item" href="./gallery_reel_open.html">
                    <img class="reels__item--img" src="@/assets/images/reel_1.png" alt="gallery reel"/>
                    <div class="reels__item--corner">
                        <img class="reels__item--corner__play" src="@/assets/icons/video_arrow.svg" alt="play button"/>
                        <p class="reels__item--corner__number">5123</p>
                    </div>
                </a>
                <a class="reels__item" href="./gallery_reel_open.html">
                    <img class="reels__item--img" src="@/assets/images/reel_2.png" alt="gallery reel"/>
                    <div class="reels__item--corner">
                        <img class="reels__item--corner__play" src="@/assets/icons/video_arrow.svg" alt="play button"/>
                        <p class="reels__item--corner__number">5123</p>
                    </div>
                </a>
                <a class="reels__item" href="./gallery_reel_open.html">
                    <img class="reels__item--img" src="@/assets/images/reel_3.png" alt="gallery reel"/>
                    <div class="reels__item--corner">
                        <img class="reels__item--corner__play" src="@/assets/icons/video_arrow.svg" alt="play button"/>
                        <p class="reels__item--corner__number">5123</p>
                    </div>
                </a>
                <a class="reels__item" href="./gallery_reel_open.html">
                    <img class="reels__item--img" src="@/assets/images/reel_4.png" alt="gallery reel"/>
                    <div class="reels__item--corner">
                        <img class="reels__item--corner__play" src="@/assets/icons/video_arrow.svg" alt="play button"/>
                        <p class="reels__item--corner__number">5123</p>
                    </div>
                </a>
                <a class="reels__item" href="./gallery_reel_open.html">
                    <img class="reels__item--img" src="@/assets/images/reel_5.png" alt="gallery reel"/>
                    <div class="reels__item--corner">
                        <img class="reels__item--corner__play" src="@/assets/icons/video_arrow.svg" alt="play button"/>
                        <p class="reels__item--corner__number">5123</p>
                    </div>
                </a>
                <a class="reels__item" href="./gallery_reel_open.html">
                    <img class="reels__item--img" src="@/assets/images/reel_1.png" alt="gallery reel"/>
                    <div class="reels__item--corner">
                        <img class="reels__item--corner__play" src="@/assets/icons/video_arrow.svg" alt="play button"/>
                        <p class="reels__item--corner__number">1237</p>
                    </div>
                </a>
            </section>
            
            
        </section>
    </div>
    <footer>
        <a href="./home.html">
            <img src="@/assets/icons/home_cherry-red.svg" alt="home icon"/>
        </a>
    </footer>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/gallery_reels.css);

</style>