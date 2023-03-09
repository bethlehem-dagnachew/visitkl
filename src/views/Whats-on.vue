<template>
    <div>
    <header>
        <a class="back" href="">
            <img src="@/assets/icons/chevron_back.svg" alt="chevron back" />
        </a>
        <a class="header__left-what" href="./profile.html">
            <img src="@/assets/images/profile_pic.png" alt="profile picture" />
            <p>Hello,<br/><b>Nik Syazwan!</b></p>
        </a>
        <a class="header__right" href="./menu.html">
            <img src="@/assets/icons/menu.svg" alt="menu"/>
        </a>
    </header>
    <main class="main">
        <section class="content-what">

            <!-- Top -->
            <div class="content__top">
                <img src="@/assets/icons/cheers.svg" alt="cheers"/>
                <h1>Coming Soon</h1>
            </div>
            <div class="content__bar">
                <a class="content__bar--item__selected" href="">
                    <img src="@/assets/icons/calendar_red.svg" alt="calendar red"/>
                    <h2>Events from KLCH</h2>
                </a>
                <a class="content__bar--item__unselected" href="">
                    <img src="@/assets/icons/calendar_blue.svg" alt="calendar blue"/>
                    <h2>Events from Organizers</h2>
                </a>
            </div>

            <!-- Activities -->
            <section class="activities">
                <div class="activities__item">
                    <div class="activities__item--date">
                        <p class="activities__item--date__month">OCT</p>
                        <p class="activities__item--date__day">07</p>
                    </div>
                    <div class="activities__item--info">
                        <img class="activities__item--info__image" src="@/assets/images/whats_1.png" alt="whats on 1"/>
                        <div class="activities__item--info__content">
                            <h3 class="activities__item--info__content--title">Acara Larian Jublee<br/>Emas KL 2022</h3>
                            <div class="activities__item--info__content--wrapper">
                                <a class="activities__item--info__content--link" href="">
                                    <img src="@/assets/icons/bell.svg" alt="notifications bell"/>
                                    <p>Remind Me</p>
                                </a>
                                <a class="activities__item--info__content--link" href="">
                                    <img src="@/assets/icons/info.svg" alt="info icon"/>
                                    <p>Info</p>
                                </a>
                            </div>
                        </div>
                        <h4 class="activities__item--info__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                        <p class="activities__item--info__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices massa vitae enim vehicula, eu accumsan lacus iaculis. Quisque malesuada tempus tempus. Suspendisse maximus ex turpis, ut mollis ante aliquam eget.
                        </p>
                    </div>
                </div>
                <div class="activities__item">
                    <div class="activities__item--date">
                        <p class="activities__item--date__month">OCT</p>
                        <p class="activities__item--date__day">19</p>
                    </div>
                    <div class="activities__item--info">
                        <img class="activities__item--info__image" src="@/assets/images/whats_2.png" alt="whats on 2"/>
                        <div class="activities__item--info__content">
                            <h3 class="activities__item--info__content--title">Lorem Ipsum Dolor Sit Amet</h3>
                            <div class="activities__item--info__content--wrapper">
                                <a class="activities__item--info__content--link" href="">
                                    <img src="@/assets/icons/bell.svg" alt="notifications bell"/>
                                    <p>Remind Me</p>
                                </a>
                                <a class="activities__item--info__content--link" href="">
                                    <img src="@/assets/icons/info.svg" alt="info icon"/>
                                    <p>Info</p>
                                </a>
                            </div>
                        </div>
                        <h4 class="activities__item--info__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h4>
                        <p class="activities__item--info__text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices massa vitae enim vehicula, eu accumsan lacus iaculis. Quisque malesuada tempus tempus. Suspendisse maximus ex turpis, ut mollis ante aliquam eget.
                        </p>
                    </div>
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
@import url(@/assets/styles/whats_on.css);
</style>