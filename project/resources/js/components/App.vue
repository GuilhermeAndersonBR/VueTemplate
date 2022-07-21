<template>
    <body>
        <div class="site-content">
            <Header />
            <router-view>
            
            </router-view>
            <Footer />
        </div>
    </body>
</template>
<script>
import Header from './template/Header/Header.vue'
import Main from './template/Main/Main.vue'
import Categories from './template/Main/Categories.vue'
import Single from './template/Main/Single.vue'
import User from './template/Main/User.vue'
import Footer from './template/Footer/Footer.vue'
export default {
    name: 'App',
    setup: () => ({
        title: 'How To Install Vue 3 in Laravel 9 From Scratch'
    }),
    components: {
        Header,
        Main,
        Categories,
        Single,
        User,
        Footer
    }
    
}
</script>

<style lang="scss">
    @import "/css/Style/Style.scss";
</style>