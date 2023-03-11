<template>
    <div>
            <div class="header-signup">
                <router-link to="/login">
                    <img src="@/assets/icons/chevron_back.svg" alt="chevron back" />
                </router-link>
                <h1>Sign Up</h1>
            </div>
            <main class="main">
                <section class="top">
                    <div class="top__profile">
                        <img class="top__profile--picture" src="@/assets/icons/user_login_grey.png" alt="profile picture"/>
                        <img class="top__profile--camera" src="@/assets/icons/camera_grey.svg" alt="camera"/>
                    </div>
                    <p class="top__profile--text">Hello, <br/> <b>User!</b></p>
                </section>
                <section class="middle">
                    <form class="middle__form">
                        <div class="middle__form--background">
                            <div class="middle__form--division">
                                <label class="middle__form--division__item" for="name">
                                    <span>First Name</span>
                                    <input type="text" id="name" placeholder="Nik Syazwan"/>
                                </label>
                                <label class="middle__form--division__item" for="last-name">
                                    <span>Last Name</span>
                                    <input type="text" id="last-name" placeholder="Nik Ridhuan"/>
                                </label>
                            </div>
                            <label class="middle__form--item" for="password">
                                <span>Password</span>
                                <input type="password" id="password" placeholder="****************"/>
                            </label>
                            <label class="middle__form--item" for="re-password">
                                <span>Re-type Password</span>
                                <input type="password" id="re-password" placeholder="****************">
                            </label>
                            <label class="middle__form--item" for="phone">
                                <span>Mobile Number</span>
                                <input type="tel" id="phone" placeholder="+601234567890"/>
                            </label>
                            <label class="middle__form--item last" for="email">
                                <span>Email Address</span>
                                <input type="email" id="email" placeholder="niksyazwan@gmail.com"/>
                            </label>
                        </div>
                        <a class="middle__form--button" href="./login-post-signup.html">Save Changes</a>
                    </form>
                </section>
        
                <section class="bottom">
                    <div class="bottom__item">
                        <img src="@/assets/icons/phone_grey.svg" alt="phone" />
                    </div>
                    <a class="bottom__item" href="https://goo.gl/maps/cpxA94RqUs6WNVFb6" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/icons/location_grey.svg" alt="location" />
                    </a>
                    <a class="bottom__item" href="mailto:enquiries@kltourismbureau.com.my">
                        <img src="@/assets/icons/mail_grey_small.svg" alt="email" />
                    </a>
                    <a class="bottom__item" href="https://www.youtube.com/channel/UCf3Hyh6WFpro28sHODsLPfQ?app=desktop" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/icons/youtube_grey.svg" alt="youtube" />
                    </a>
                    <a class="bottom__item" href="https://twitter.com/visitklofficial" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/icons/twitter_grey.svg" alt="twitter" />
                    </a>
                    <a class="bottom__item" href="https://www.instagram.com/visitklofficial/?hl=en" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/icons/instagram_grey.svg" alt="instagram" />
                    </a>
                    <a class="bottom__item" href="https://www.facebook.com/Visitklofficial" target="_blank" rel="noopener noreferrer">
                        <img src="@/assets/icons/facebook_grey.svg" alt="facebook">
                    </a>
                </section>
            </main>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/signup.css);

</style>