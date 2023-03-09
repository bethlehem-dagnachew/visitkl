<template>
  <div class="main-home">
    <div class="header">
       <router-link to="/profile"> <div class="header__left-home">
            <img src="@/assets/images/profile_pic.png" alt="profile picture" />
            <p>Hello,<br/><b>Nik Syazwan!</b></p>
        </div></router-link>
        <div class="header__right" @click="menu">
            <img src="@/assets/icons/menu.svg" alt="menu"/>
        </div>
      </div>
    <div class="main-page">
        <section class="top">
            <label class="top__search" for="search">
                <div class="top__search--bg"></div>
                <img class="top__search--magnifying" src="@/assets/icons/magnifying_glass_white.svg" alt="magnifying glass"/>
                <input class="top__search--input" type="text" placeholder="Locations, entertainments, etc.." id="search"/>
                <img class="top__search--arrow" src="@/assets/icons/chevron_right_white-bg.svg" alt="chevron right" />
            </label>
        </section>
        <section class="content">
            <img class="content__logo" src="@/assets/logos/visitKL_logo1.png" alt="visit KL logo"/>

            <p class="content__info">
                <b>Selamat Datang ke Kuala Lumpur!</b> Discover the city of contrasts and diversity. A melting pot of cultures that provides visitors with a one-of-a-kind experience. Enjoy a vast number of must-see destinations and activities that have been gathered into the best attractions that will guide you in and around this exciting city.
            </p>

            <h2 class="content__subtitle">Best things to do in KL</h2>

            <div class="content__slider">
                <div class="content__slider--item">
                    <div class="content__slider--item__circle">
                        <img src="@/assets/images/arts_circle.png" alt="arts and culture" />
                    </div>
                    <h2>Arts & Culture</h2>
                  </div>
                <div class="content__slider--item">
                    <div class="content__slider--item__circle">
                        <img src="@/assets/images/places_circle.png" alt="places to go"/>
                    </div>
                    <h2>Arts & Places<br/>To Go</h2>
                  </div>   
            </div>
            <div class="content__slider">
              <div class="content__slider--item">
                  <div class="content__slider--item__circle">
                      <img src="@/assets/images/health_circle.png" alt="health and wellness"/>
                  </div>
                  <h2>Health &<br/>Wellness</h2>
                </div>
              <div class="content__slider--item" href="">
                  <div class="content__slider--item__circle">
                      <img src="@/assets/images/mice_circle.png" alt="MICE"/>
                  </div>
                  <h2>MICE</h2>
                </div>
          </div>

            <div class="content__cards">
                <div class="content__cards--item">
                    <h2>What’s On?</h2>
                </div>
                <div class="content__cards--item" >
                    <h2>Deals For You</h2>
                </div>
                <div class="content__cards--item">
                    <h2>Products & Services</h2>
                </div>
            </div>

            <article class="content__portal">
                <h3>Visit KL Official Portal</h3>
                <p>Check out the new Visit KL Portal via desktop view for better experience!</p>
                <div class="button" >Go Now</div>
            </article>

            <router-link to="/"><div class="footer">
                <img src="@/assets/icons/home_white.svg" alt="home icon"/>
            </div></router-link>
        </section>
      </div>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  components: {
  },
  methods:{
    menu(){
      this.$router.push({ path: 'menu' })
    }
  }
}
</script>
<style scoped>
@import url(@/assets/styles/home.css);
</style>
