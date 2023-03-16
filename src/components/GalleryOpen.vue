<template>
    <div>
  
    <div class="header-galleryOpen" header>
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
    <div class="main-galleryOpen">
        <section class="content-galleryOpen">

            <!-- Top -->
            <div class="content__top">
                <img class="content__top--profile" src="@/assets/images/profile_gallery.png" alt="gallery profile pic"/>
                <div class="content__top--text">
                    <h3>Malcolm Aussie</h3>
                    <p>Merdeka Square, KL Malaysia</p>
                </div>
            </div>

            <!-- Picture -->
            <section class="picture">
                <div class="picture__main">
                    <img class="picture__main--img" src="@/assets/images/gallery_open.png" alt="main picture"/>
                    <img class="picture__main--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                </div>
                <div class="picture__bottom">
                    <div class="picture__bottom--social">
                        <img src="@/assets/icons/heart_like.svg" alt="like"/>
                        <img src="@/assets/icons/arrow_send.svg" alt="send share"/>
                    </div>
                    <img class="picture__bottom--circles" src="@/assets/icons/circles_images.png" alt="circles"/>
                </div>
                <div class="picture__interactions">
                    <img src="@/assets/images/liked_by.png" alt="interactions"/>
                </div>
                <p class="picture__description">
                    <b>Description:</b> Night in the city<br/>
                    <b>#PlacesToGo</b><br/>
                    <b>Credit to</b>: Malcolm Aussie
                </p>
                <p class="picture__date">31 August 2022</p>
            </section>
        </section>
    </div>
    <footer>
        <router-link to="/home">
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
@import url(@/assets/styles/gallery-open.css);

</style>