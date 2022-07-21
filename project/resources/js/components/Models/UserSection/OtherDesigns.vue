<template>
    <div class="other-designs">
        <a href="#" v-for="(post, index) in posts.slice(0, 8)" v-bind:key="index">
            <img :src=" post.image " alt="">
        </a>
    </div>
</template>

<script>
export default {
    name: 'OtherDesigns',
    data() {
        return {
            posts: [
                { title: 'Php', image: '/img/slidershow-image-4.jpg' },
                { title: 'Laravel', image: '/img/slidershow-image-1.jpg' },
                { title: 'Java', image: '/img/slidershow-image-2.jpg' },
                { title: 'c', image: '/img/slidershow-image-3.jpg' },
                { title: 'c#', image: '/img/slidershow-image-4.jpg' },
                { title: 'Laravel', image: '/img/slidershow-image-1.jpg' },
                { title: 'C++', image: '/img/slidershow-image-2.jpg' },
                { title: 'JavaScript', image: '/img/slidershow-image-3.jpg' },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "/css/Style/Main/Models/UserOtherDesignsStyle.scss"
</style>