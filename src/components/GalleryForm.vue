<template>
    <div>

    <div class="header-galleryForm">
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
    <div class="main-galleryForm">
        <section class="content-galleryForm">

            <!-- Top -->
            <div class="content__top">
                <img class="content__top--title" src="@/assets/logos/gallery_form_title.png" alt="gallery form title"/>
                <div class="content__top--links">
                    <a class="content__top--links__item" href="./gallery_form.html">
                        <img class="content__top--links__item--grey" src="@/assets/icons/upload_grey.svg" alt="upload"/>
                    </a>
                    <a class="content__top--links__item" href="./gallery.html">
                        <img src="@/assets/icons/grid_black.svg" alt="grid"/>
                    </a>
                    <a class="content__top--links__item" href="./gallery_reels.html">
                        <img src="@/assets/icons/video_black.svg" alt="video"/>
                    </a>
                </div>
            </div>

            <!-- Form -->
            <form class="form__container">
                <p class="form__container--text">
                    Memories are made to be remembered.<br/>
                    Today’s special moments are tomorrow’s priceless moment.
                    Share yours with us. Upload your pictures, videos or even both!
                </p>
                <label class="form__container--fill" for="description">
                    <span>Description</span>
                    <textarea id="description" placeholder="Fill in here" required></textarea>
                </label>
                <label class="form__container--fill" for="tags">
                    <span>Tagged Words</span>
                    <input type="text" id="tags" placeholder="Ex: Architecture, Food, Arts and Culture" required/>
                </label>
                <label class="form__container--fill" for="name">
                    <span>Name</span>
                    <input type="text" id="fill" placeholder="Fill in here" required/>
                </label>
                <label class="form__container--fill" for="email">
                    <span>Email</span>
                    <input type="email" id="email" placeholder="Fill in here" required/>
                </label>
                <label class="form__container--file" for="file">
                    <span>Upload your file here</span>
                    <div class="form__container--file__cover">
                        <input type="file" id="file" placeholder="Fill in here" required/>
                    </div>
                </label>
                <a class="form__container--submit" href="./gallery_form_thanks.html">Submit</a>
            </form>
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
@import url(@/assets/styles/gallery-form.css);

</style>