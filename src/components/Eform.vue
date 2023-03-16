<template>
    <div>

    <header>
        <a class="back" href="">
            <img src="../src/icons/chevron_back.svg" alt="chevron back" />
        </a>
        <a class="header__left" href="./profile.html">
            <img src="../src/images/profile_pic.png" alt="profile picture" />
            <p>Hello,<br/><b>Nik Syazwan!</b></p>
        </a>
        <a class="header__right" href="./menu.html">
            <img src="../src/icons/menu.svg" alt="menu"/>
        </a>
    </header>
    <main class="main">
        <section class="content">
            <div class="content__top">
                <h1 class="content__top--title">Welcome to e-Form!</h1>
                <img class="content__top--image" src="../src/icons/waving_hand.svg" alt="thumbs up"/>
            </div>
            <p class="content__text">
                Promote your events here for FREE. Millions of tourists and KL Lites want to know about your event.
            </p>

            <form class="form__container">
                <label class="form__container--fill" for="description">
                    <span>Event or Promotion Name</span>
                    <textarea id="description" placeholder="Fill in here" required></textarea>
                </label>
                <div class="form__container--div">
                    <label class="form__container--fill" for="date-start">
                        <span>Start Date</span>
                        <input type="date" id="date-start" placeholder="Choose one" required/>
                    </label>
                    <label class="form__container--fill" for="time-start">
                        <span>Start Time</span>
                        <input type="time" id="time-start" placeholder="Choose one" required/>
                    </label>
                </div>
                <label class="form__container--fill" for="tags">
                    <span>Venue</span>
                    <input type="text" id="tags" placeholder="Fill in here" required/>
                </label>
                <div class="form__container--div">
                    <label class="form__container--fill" for="date-end">
                        <span>End Date</span>
                        <input type="date" id="date-end" placeholder="Choose one" required/>
                    </label>
                    <label class="form__container--fill" for="time-end">
                        <span>End Time</span>
                        <input type="time" id="time-end" placeholder="Choose one" required/>
                    </label>
                </div>
                <label class="form__container--fill" for="description">
                    <span>Event / Promotion Description</span>
                    <textarea id="description" placeholder="Fill in here" required></textarea>
                </label>
                <label class="form__container--fill" for="event-list">
                    <span>Type of Event</span>
                    <select class="form__container--fill__select" name="event-list" id="event-list" required>
                        <option class="form__container--fill__option" value="" disabled selected>Choose one</option>
                        <option class="form__container--fill__option" value="travel">Travel</option>
                        <option class="form__container--fill__option" value="accomodations">Accomodations</option>
                        <option class="form__container--fill__option" value="food_&_entertainment">Food & Entertainment</option>
                        <option class="form__container--fill__option" value="arts_&_culture">Arts & Culture</option>
                        <option class="form__container--fill__option" value="places_to_go">Places To Go</option>
                        <option class="form__container--fill__option" value="health_&_wellness">Health & Wellness</option>
                        <option class="form__container--fill__option" value="mice">MICE</option>
                        <option class="form__container--fill__option" value="shopping">Shopping</option>
                        <option class="form__container--fill__option" value="sports">Sports</option>
                        <option class="form__container--fill__option" value="education">Education</option>
                      </select>
                </label>
                <label class="form__container--fill" for="link">
                    <span>Link</span>
                    <input type="url" id="link" placeholder="Fill in here" required/>
                </label>
                <label class="form__container--fill" for="company">
                    <span>Company Name</span>
                    <input type="text" id="company" placeholder="Fill in here" required/>
                </label>
                <a class="form__container--submit" href="./e-form-thanks.html">
                    Submit
                </a>
            </form>
            
        </section>
    </main>
    <footer>
        <a href="./home.html">
            <img src="../src/icons/home_cherry-red.svg" alt="home icon"/>
        </a>
    </footer>

    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import url(@/assets/styles/e-form.css);
</style>