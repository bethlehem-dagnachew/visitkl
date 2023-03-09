<template>
    <div>
    <header>
        <a class="back" href="">
            <img src="@/assets/icons/chevron_back.svg" alt="chevron back" />
        </a>
        <a class="header__left" href="./profile.html">
            <img src="@/assets/images/profile_pic.png" alt="profile picture" />
            <p>Hello,<br/><b>Nik Syazwan!</b></p>
        </a>
        <a class="logout" href="./login.html">
            <img src="@/assets/icons/logout_white.svg" alt="logout" />
        </a>
    </header>
    <main class="main">
        <section class="content-things">

            <!-- Title -->
            <img src="@/assets/logos/things_to_do_title.png" alt="things to do title"/>

            <!-- Search -->
            <div class="content__search">
                <label class="content__search--bar" for="search">
                    <img class="content__search--bar__magnifying" src="@/assets/icons/magnifying_glass_black.svg" alt="magnifying glass"/>
                    <input class="content__search--bar__input" type="text" id="search" placeholder="Search"/>
                </label>
                <a class="content__search--arrow" href="./error404.html">
                    <img src="@/assets/icons/go_arrow.svg" alt="go arrow search"/>
                </a>
            </div>

            <!-- Slider -->
            <div class="content__slider">
                <a class="content__slider--item" href="">
                    <div class="content__slider--item__circle">
                        <img src="@/assets/images/arts_circle.png" alt="arts and culture" />
                    </div>
                    <h3>Arts &<br/>Culture</h3>
                </a>
                <a class="content__slider--item" href="">
                    <div class="content__slider--item__circle">
                        <img src="@/assets/images/places_circle.png" alt="places to go"/>
                    </div>
                    <h3>Places<br/>To Go</h3>
                </a>
                <a class="content__slider--item" href="">
                    <div class="content__slider--item__circle">
                        <img src="@/assets/images/health_circle.png" alt="health and wellness"/>
                    </div>
                    <h3>Health &<br/>Wellness</h3>
                </a>
                <a class="content__slider--item" href="">
                    <div class="content__slider--item__circle">
                        <img src="@/assets/images/mice_circle.png" alt="MICE"/>
                    </div>
                    <h3>MICE</h3>
                </a>
            </div>

            <!-- Images -->
            <section class="content__pics">
                <h1 class="content__pics--title">Food & Entertainment</h1>
                <div class="content__pics--grid">
                    <a class="content__pics--grid__item" href="./bttd_intro.html">
                        <img src="@/assets/images/pics_1.png" alt="pics"/>
                        <h3>Lembah<br/>Pantai</h3>
                    </a>
                    <a class="content__pics--grid__item" href="./bttd_intro.html">
                        <img src="@/assets/images/pics_2.png" alt="pics"/>
                        <h3>Seputeh</h3>
                    </a>
                    <a class="content__pics--grid__item" href="./bttd_intro.html">
                        <img src="@/assets/images/pics_3.png" alt="pics"/>
                        <h3>Cheras</h3>
                    </a>
                    <a class="content__pics--grid__item" href="./bttd_intro.html">
                        <img src="@/assets/images/pics_4.png" alt="pics"/>
                        <h3>Bukit<br/>Bintang</h3>
                    </a>
                    <a class="content__pics--grid__item" href="./bttd_intro.html">
                        <img src="@/assets/images/pics_5.png" alt="pics"/>
                        <h3>Setiawangsa</h3>
                    </a>
                    <a class="content__pics--grid__item" href="./bttd_intro.html">
                        <img src="@/assets/images/pics_6.png" alt="pics"/>
                        <h3>Titiwangsa</h3>
                    </a>
                    <a class="content__pics--grid__item" href="./bttd_intro.html">
                        <img src="@/assets/images/pics_1.png" alt="pics"/>
                        <h3>Lembah<br/>Pantai</h3>
                    </a>
                    <a class="content__pics--grid__item" href="./bttd_intro.html">
                        <img src="@/assets/images/pics_2.png" alt="pics"/>
                        <h3>Lembah<br/>Pantai</h3>
                    </a>
                    <a class="content__pics--grid__item" href="./bttd_intro.html">
                        <img src="@/assets/images/pics_3.png" alt="pics"/>
                        <h3>Lembah<br/>Pantai</h3>
                    </a>
                </div>
                </section>
            </section>
    </main>
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
.content__slider{
    flex-wrap: nowrap;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none;
    }
}
.content__slider--item{
    flex: 0 0 auto;
}
@import url(@/assets/styles/things_to_do.css);

</style>