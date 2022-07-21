<template>
    <main class="main-content">
        
        <Slider />

        <Posts />

        <OtherPosts />

    </main>
</template>

<script>
import Slider from '../../Models/SliderSection/Slider.vue'
import Posts from '../../Models/PostsSection/Posts.vue'
import OtherPosts from '../../Models/OtherPostsSection/OtherPosts.vue'
export default {
    name:'Main',
    data() {
        return {
            avatar: '/img/user.jpg',
            slide1: '/img/slidershow-image-1.jpg',
            slide2: '/img/slidershow-image-2.jpg',
            slide3: '/img/slidershow-image-3.jpg',
            slide4: '/img/slidershow-image-4.jpg',
            slide5: '/img/slidershow-image-5.jpg',
            description: 'Que bonita a sua roupa'
        }
    },
    components: {
        Slider,
        Posts,
        OtherPosts,
    }
}
</script>

<style lang="scss" scoped>
    
</style>