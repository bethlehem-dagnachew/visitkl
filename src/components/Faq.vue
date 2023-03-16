<template>
    <div>
    
    <div class="header-faq">
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
    <div class="main-faq">
        <section class="content-faq">

            <!-- Title -->
            <div class="content__top-faq">
                <h1 class="content__top--title-faq">
                    Frequently<br/>
                    Ask<br/>
                    Questions
                </h1>
                <img class="content__top--img" src="@/assets/logos/faq_logo.png" alt="faq image"/>
            </div>

            <!-- Questions -->
            <section class="questions">
                <div class="questions--item">
                    <p>What is Kuala Lumpur, Malaysia<br/>known for?</p>
                    <img src="@/assets/icons/chevron_down-white.svg" alt="arrow down"/>
                </div>
                <div class="questions--item">
                    <p>What is the best season to visit Kuala Lumpur?</p>
                    <img src="@/assets/icons/chevron_down-white.svg" alt="arrow down"/>
                </div>
                <div class="questions--item">
                    <p>What currency is used in Kuala Lumpur?</p>
                    <img src="@/assets/icons/chevron_down-white.svg" alt="arrow down"/>
                </div>
                <div class="questions--item">
                    <p>What’s the best cellular service for tourists in KL?</p>
                    <img src="@/assets/icons/chevron_down-white.svg" alt="arrow down"/>
                </div>
                <div class="questions--item">
                    <p>Is it legal to consume alcohol in Kuala Lumpur?</p>
                    <img src="@/assets/icons/chevron_down-white.svg" alt="arrow down"/>
                </div>
                <div class="questions--item">
                    <p>Do we need a custom visa to travel in Kuala Lumpur?</p>
                    <img src="@/assets/icons/chevron_down-white.svg" alt="arrow down"/>
                </div>
                <div class="questions--item">
                    <p>What is The Golden Triangle of Kuala Lumpur?</p>
                    <img src="@/assets/icons/chevron_down-white.svg" alt="arrow down"/>
                </div>
                <div class="questions--item">
                    <p>Is it safe to travel in Kuala Lumpur?</p>
                    <img src="@/assets/icons/chevron_down-white.svg" alt="arrow down"/>
                </div>
                <div class="questions--item">
                    <p>Is it easy to find halal food in Malaysia?</p>
                    <img src="@/assets/icons/chevron_down-white.svg" alt="arrow down"/>
                </div>
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
        name:'faq-page'
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/faq.css);

</style>