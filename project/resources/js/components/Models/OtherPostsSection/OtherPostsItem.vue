<template>
    <div class="post" v-for="(post, index) in posts.slice(0, 3)" v-bind:key="index">
        <img :src=" post.image " alt="">
        <div class="post-text">
            <h4><span>Business, Travel</span> — July 2, 2020</h4>
            <h2>Your most unhappy customers are your greatest source of learning.</h2>
            <div class="post-user">
                <img :src="avatar" alt="">
                <div class="user-text">
                    <h1>Sergy Campbell</h1>
                    <h3>Author, 26 published post</h3>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OtherPostsItem',
    data() {
        return {
            avatar: '/img/user.jpg',
            posts: [
            { title: 'Php', image: '/img/slidershow-image-4.jpg' },
            { title: 'Laravel', image: '/img/slidershow-image-1.jpg' },
            { title: 'Java', image: '/img/slidershow-image-2.jpg' },
            { title: 'c', image: '/img/slidershow-image-3.jpg' },
            { title: 'c#', image: '/img/slidershow-image-4.jpg' },
            { title: 'Laravel', image: '/img/slidershow-image-1.jpg' },
            { title: 'C++', image: '/img/slidershow-image-2.jpg' },
            { title: 'JavaScript', image: '/img/slidershow-image-3.jpg' },
            { title: 'Razarthoth', image: '/img/slidershow-image-4.jpg' },
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "/css/Style/Main/Models/OtherPostsItemStyle.scss"
</style>