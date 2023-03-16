<template>
    <div>
    
    <div class="header-events">
        <router-link class="back" to="">
            <img src="@/assets/icons/chevron_back.svg" alt="chevron back" />
        </router-link>
        <router-link class="header__left" to="/profile">
            <img src="@/assets/images/profile_pic.png" alt="profile picture" />
            <p>Hello,<br/><b>Nik Syazwan!</b></p>
        </router-link>
        <router-link class="logout" to="/login">
            <img src="@/assets/icons/logout_white.svg" alt="logout" />
        </router-link>
    </div>
    <div class="main-events">
        <section class="content-events">
            <h1 class="content__title">Events from Kuala Lumpur City Hall</h1>

            <!-- Carousel -->
            <div class="content__carousel">
                <router-link class="content__carousel--item" to="">
                    <img class="content__carousel--item__picture" src="@/assets/images/event_image.png" alt="event image"/>
                    <div class="content__carousel--item__bottom">
                        <h3 class="content__carousel--item__bottom--title">World Digital Economy & Technology SUMMIT 2022</h3>
                        <div class="content__carousel--item__bottom--division">
                            <div class="content__carousel--item__bottom--division__wrapper">
                                <img src="@/assets/icons/heart_outline.svg" alt="heart icon"/>
                                <p>506</p>
                            </div>
                            <div class="content__carousel--item__bottom--division__wrapper">
                                <img src="@/assets/icons/eye_outline.svg" alt="eye icon"/>
                                <p>2000</p>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link class="content__carousel--item" to="">
                    <img class="content__carousel--item__picture" src="@/assets/images/event_image.png" alt="event image"/>
                    <div class="content__carousel--item__bottom">
                        <h3 class="content__carousel--item__bottom--title">World Digital Economy & Technology SUMMIT 2022</h3>
                        <div class="content__carousel--item__bottom--division">
                            <div class="content__carousel--item__bottom--division__wrapper">
                                <img src="@/assets/icons/heart_outline.svg" alt="heart icon"/>
                                <p>506</p>
                            </div>
                            <div class="content__carousel--item__bottom--division__wrapper">
                                <img src="@/assets/icons/eye_outline.svg" alt="eye icon"/>
                                <p>2000</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>

            <!-- More Events -->
            <div class="content__more">
                <h2 class="content__more--subtitle">More Events from Organizers</h2>

                <router-link class="content__more--item" to="">
                    <img class="content__more--item__image" src="@/assets/images/event_item-img.png" alt="event image"/>
                    <div class="content__more--item__body">
                        <h3 class="content__more--item__body--title">Art and Bonding!</h3>
                        <p class="content__more--item__body--text">Paint to create memories. First ever Sip & Paint event in KL</p>
                        <div class="content__more--item__body--division">
                            <div class="content__more--item__body--division__wrapper">
                                <img src="@/assets/icons/heart_outline-small.svg" alt="heart icon"/>
                                <p>506</p>
                            </div>
                            <div class="content__more--item__body--division__wrapper">
                                <img src="@/assets/icons/eye_outline-small.svg" alt="eye icon"/>
                                <p>2000</p>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link class="content__more--item" to="">
                    <img class="content__more--item__image" src="@/assets/images/event_item-img.png" alt="event image"/>
                    <div class="content__more--item__body">
                        <h3 class="content__more--item__body--title">Art and Bonding!</h3>
                        <p class="content__more--item__body--text">Paint to create memories. First ever Sip & Paint event in KL</p>
                        <div class="content__more--item__body--division">
                            <div class="content__more--item__body--division__wrapper">
                                <img src="@/assets/icons/heart_outline-small.svg" alt="heart icon"/>
                                <p>506</p>
                            </div>
                            <div class="content__more--item__body--division__wrapper">
                                <img src="@/assets/icons/eye_outline-small.svg" alt="eye icon"/>
                                <p>2000</p>
                            </div>
                        </div>
                    </div>
                </router-link>
            </div>
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
        name:'events-pages'

        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/events.css);

</style>