<template>
    <div>
     
    <header>
       <router-link to="" class="back">
            <img src="@/assets/icons/chevron_back.svg" alt="chevron back" />
        </router-link>
        <router-link to="/profile" class="header__left">
            <img src="@/assets/images/profile_pic.png" alt="profile picture" />
            <p>Hello,<br/><b>Nik Syazwan!</b></p>
        </router-link>
       <router-link to="/menu" class="header__right">
            <img src="@/assets/icons/menu.svg" alt="menu"/>
        </router-link>
    </header>
    <main class="main">
        <section class="content-product">

            <!-- Title -->
            <img class="content__title" src="@/assets/logos/products_title.png" alt="products title"/>
            <h2 class="content__subtitle">Find out more about KL!</h2>

            <!-- Search -->
            <div class="content__search">
                <label class="content__search--bar" for="search">
                    <img class="content__search--bar__magnifying" src="@/assets/icons/magnifying_glass_black.svg" alt="magnifying glass"/>
                    <input class="content__search--bar__input" type="text" id="search" placeholder="Search for places"/>
                </label>
               <router-link to="" class="content__search--calendar">
                    <img src="@/assets/icons/calendar_icon.svg" alt="calendar icon"/>
                </router-link>
            </div>

            <!-- Slider -->
            <section class="container">
                <article class="container__card">
                    <img class="container__card--image" src="@/assets/images/products_1.png" alt="Low Yat Plaza"/>

                    <div class="container__card--title">
                        <img src="@/assets/images/products_1-related.png" alt="Low Yat Plaza related"/>
                        <h3>Low Yat Plaza</h3>
                    </div>

                    <div class="container__card--location">
                        <img src="@/assets/icons/location_cherry.svg" alt="location"/>
                        <p>7, Jalan Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</p>
                    </div>

                    <div class="container__card--info">
                        <h4>About</h4>
                        <p>Plaza Low Yat is the oldest shopping centre specializing in electronics and IT products in Kuala Lumpur, Malaysia. In 2009, Plaza Low Yat was named “Malaysia’s Largest IT Lifestyle Centre”<br/> <a href="https://www.pelago.co/en-MY/activity/phn49-aquaria-klcc-kuala-lumpur/?utm_source=google&utm_medium=cpc&utm_campaign=acq-gg-apac-my_-_my-my-en-kw-prod-activities-exact&utm_term=prod_aquaria-klcc&utm_content=aquaria%20klcc&gclid=Cj0KCQjwnP-ZBhDiARIsAH3FSRceH_VoRNEUaK28TOSZoQl5O9bruW4nWFp-lq05-GRZ5j0cYb63BaYaAgpSEALw_wcB" target="_blank" rel="noopener noreferrer">See more...</a> </p>
                    </div>
                </article>

                <article class="container__card">
                    <img class="container__card--image" src="@/assets/images/products_1.png" alt="Low Yat Plaza"/>

                    <div class="container__card--title">
                        <img src="@/assets/images/products_1-related.png" alt="Low Yat Plaza related"/>
                        <h3>Low Yat Plaza</h3>
                    </div>

                    <div class="container__card--location">
                        <img src="@/assets/icons/location_cherry.svg" alt="location"/>
                        <p>7, Jalan Bintang, Bukit Bintang, 55100 Kuala Lumpur, Wilayah Persekutuan Kuala Lumpur, Malaysia</p>
                    </div>

                    <div class="container__card--info">
                        <h4>About</h4>
                        <p>Plaza Low Yat is the oldest shopping centre specializing in electronics and IT products in Kuala Lumpur, Malaysia. In 2009, Plaza Low Yat was named “Malaysia’s Largest IT Lifestyle Centre”<br/> <a href="https://www.pelago.co/en-MY/activity/phn49-aquaria-klcc-kuala-lumpur/?utm_source=google&utm_medium=cpc&utm_campaign=acq-gg-apac-my_-_my-my-en-kw-prod-activities-exact&utm_term=prod_aquaria-klcc&utm_content=aquaria%20klcc&gclid=Cj0KCQjwnP-ZBhDiARIsAH3FSRceH_VoRNEUaK28TOSZoQl5O9bruW4nWFp-lq05-GRZ5j0cYb63BaYaAgpSEALw_wcB" target="_blank" rel="noopener noreferrer">See more...</a> </p>
                    </div>
                </article>
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
        name:'product-page'
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/products.css);

</style>