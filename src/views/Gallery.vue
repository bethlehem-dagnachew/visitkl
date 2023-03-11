<template>
    <div>
            <div class="header-gallery">
                <router-link to="#" class="back">
                    <img src="@/assets/icons/chevron_back.svg" alt="chevron back" />
                </router-link>
                <router-link to="#" class="header__left" >
                    <img src="@/assets/images/profile_pic.png" alt="profile picture" />
                    <p>Hello,<br/><b>Nik Syazwan!</b></p>
                </router-link>
                <router-link to="#" class="header__right" >
                    <img src="@/assets/icons/menu.svg" alt="menu"/>
                </router-link>
            </div>
            <div class="main-gallery">
                <section class="content-gallery">
        
                    <!-- Top -->
                    <div class="content__top">
                        <img class="content__top--title" src="@/assets/logos/gallery_title.png" alt="gallery title"/>
                        <div class="content__top--links">
                            <router-link class="content__top--links__item" to="/galleryForm">
                                <img src="@/assets/icons/upload_black.svg" alt="upload"/>
                            </router-link>
                            <router-link class="content__top--links__item" to="gallery">
                                <img src="@/assets/icons/grid_grey.svg" alt="grid"/>
                            </router-link>
                            <router-link class="content__top--links__item" to="/galleryReels" >
                                <img src="@/assets/icons/video_black.svg" alt="video"/>
                            </router-link>
                        </div>
                    </div>
        
                    <!-- Pictures -->
                    <section class="pictures">
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_1.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_2.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_3.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_4.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_5.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_6.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_7.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_8.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_9.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_10.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_11.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                        <router-link class="pictures__item" to="/galleryOpen" >
                            <img class="pictures__item--img" src="@/assets/images/gallery_12.png" alt="gallery image"/>
                            <img class="pictures__item--corner" src="@/assets/icons/image_group.svg" alt="image group"/>
                        </router-link>
                    </section>
                    
                    
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
        name:'gallery-page'
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/gallery.css);

</style>