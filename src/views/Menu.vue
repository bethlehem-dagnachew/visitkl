<template>
    <div class="main-menu">
    <div class="header-menu">
        <div class="header-nav">
        <div class="back" >
            <img src="@/assets/icons/chevron_back.svg" alt="chevron back" />
        </div>
        <router-link to="/profile"><div class="header__left-menu">
            <img src="@/assets/images/profile_pic.png" alt="profile picture" />
            <p>Hello,<br/><b>Nik Syazwan!</b></p>
        </div>
    </router-link>
    <router-link to="/login">
        <div class="logout" >
            <img src="@/assets/icons/logout_white.svg" alt="logout" />
        </div>
    </router-link>
    </div>
</div>
    <div class="main-menu-page">
        <section class="content-menu">
            <h1 class="content__title">All Menu</h1>

            <section class="content__links">
                <div class="content__links--grid">
                    <router-link to="/thingsToDo">
                    <div class="content__links--item" >
                        <img src="@/assets/icons/things_to_do.svg" alt="things to do" />
                        <h2>Best Things<br/>To Do</h2>
                    </div>
                </router-link>
                    <div class="content__links--item" >
                        <img src="@/assets/icons/gallery.svg" alt="Gallery" />
                        <h2>Gallery</h2>
                    </div>
                    <div class="content__links--item">
                        <img src="@/assets/icons/e-form.svg" alt="e-Form" />
                        <h2>e-Form</h2>
                    </div>
                    
                    <div class="content__links--item" >
                        <router-link to="/whatsOn">
                        <img src="@/assets/icons/whats_on.svg" alt="whats_on" />
                        <h2>What’s On</h2>
                    </router-link>
                    </div>
               
                    <div class="content__links--item" >
                        <img src="@/assets/icons/products.svg" alt="products" />
                        <h2>Product &<br/>Services</h2>
                    </div>
                    <div class="content__links--item" >
                        <img src="@/assets/icons/deals.svg" alt="deals"/>
                        <h2>Deals &<br/>Packages</h2>
                    </div>
                </div>
                <div class="content__links--flex">
                    <div class="content__links--item" href="./faq.html">
                        <img src="@/assets/icons/faq.svg" alt="faq" />
                        <h2>FAQ</h2>
                    </div>
                    <div class="content__links--item" href="">
                        <img src="@/assets/icons/share.svg" alt="share" />
                        <h2>Share Apps</h2>
                    </div>
                </div>
            </section>
            
        </section>
    </div>
    <footer>
        <router-link to="/" >
            <img src="@/assets/icons/home_cherry-red.svg" alt="home icon"/>
        </router-link>
    </footer>
    </div>
</template>

<script>
    export default {
        name:'menu-page'
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/menu.css);

</style>