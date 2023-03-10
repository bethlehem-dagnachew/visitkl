<template>
    <div class="main-profile-page">
    <div class="header-profile">
        <h1>Update Profile</h1>
        <a href="./login.html">
            <img src="@/assets/icons/logout_white.svg" alt="logout" />
        </a>
    </div>
    <div class="main-profile">
        <section class="top">
            <div class="top__profile">
                <img class="top__profile--picture" src="@/assets/images/profile_pic-big.png" alt="profile picture"/>
                <img class="top__profile--camera" src="@/assets/icons/camera_grey.svg" alt="camera"/>
            </div>
            <p class="top__profile--text">Hello, <br/> <b>Nik Syazwan!</b></p>
            <p class="top__profile--login">Last successful login<br/>18 Aug, 5:05 PM</p>
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
                    <label class="middle__form--item" for="phone">
                        <span>Mobile Number</span>
                        <input type="tel" id="phone" placeholder="+601234567890"/>
                    </label>
                    <label class="middle__form--item last" for="email">
                        <span>Email Address</span>
                        <input type="email" id="email" placeholder="niksyazwan@gmail.com"/>
                    </label>
                </div>
                <a class="middle__form--change" href="./change_password.html">Change Password</a>
                <a class="middle__form--button" href="./home.html">Save Changes</a>
            </form>
        </section>

        <section class="bottom">
            <div class="bottom__item">
                <img src="@/assets/icons/phone_grey.svg" alt="phone" />
            </div>
            <div class="bottom__item" href="https://goo.gl/maps/cpxA94RqUs6WNVFb6" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/icons/location_grey.svg" alt="location" />
            </div>
            <div class="bottom__item" href="mailto:enquiries@kltourismbureau.com.my">
                <img src="@/assets/icons/mail_grey_small.svg" alt="email" />
            </div>
            <div class="bottom__item" href="https://www.youtube.com/channel/UCf3Hyh6WFpro28sHODsLPfQ?app=desktop" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/icons/youtube_grey.svg" alt="youtube" />
            </div>
            <div class="bottom__item" href="https://twitter.com/visitklofficial" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/icons/twitter_grey.svg" alt="twitter" />
            </div>
            <div class="bottom__item" href="https://www.instagram.com/visitklofficial/?hl=en" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/icons/instagram_grey.svg" alt="instagram" />
            </div>
            <div class="bottom__item" href="https://www.facebook.com/Visitklofficial" target="_blank" rel="noopener noreferrer">
                <img src="@/assets/icons/facebook_grey.svg" alt="facebook">
            </div>
        </section>
        <div class="footer-profile" >
            <div href="./home.html">
                <img src="@/assets/icons/home_white.svg" alt="home icon"/>
            </div>
        </div>
    </div>
    
    </div>
</template>

<script>
    export default {
        name:'profile-page'
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/profile.css);

</style>