<template>
    <main class="main-content">
        <section class="text-content">
            <div class="user-content">
                <img :src="avatar" alt="">
                <h2>Sergy Campbell</h2>
                <h5>JULY 2, 2020</h5>
            </div>
            <div class="text">
                <blockquote>
                    <div class="quote"></div>
                    <span><p>
                        The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. 
                        She packed her seven versalia, put her initial into the belt and made herself on the way.
                    </p></span>
                </blockquote>
                <h1>Main Projects</h1>
                <main-designs/>
                <h2>Other Designs</h2>
                <other-designs/>
                <hr>
                <div class="share-content">
                    <h1>Share</h1>
                    <nav>
                        <ul>
                            <a href="#"><li><i class="fa-brands fa-twitter"></i></li></a>
                            <a href="#"><li><i class="fa-brands fa-facebook-f"></i></li></a>
                            <a href="#"><li><i class="fa-brands fa-instagram"></i></li></a>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import MainDesigns from '../../Models/UserSection/MainDesigns.vue'
import OtherDesigns from '../../Models/UserSection/OtherDesigns.vue'
export default {
    name: 'User',
    data() {
        return {
            avatar: '/img/user.jpg'
        }
    },
    components: {
        MainDesigns,
        OtherDesigns,
    }
}
</script>

<style lang="scss" scoped>
    @import "/css/Style/Main/Models/UserStyle.scss"
</style>