<template>
    <li v-for="(post, index) in posts.slice(0, 3)" v-bind:key="index">
        <div id="slider-value" class="slidershow">
            <div class="slidershow-image">
                <img :src=" post.image " alt="">
            </div>
            <div class="slidershow-text">
                <h4><span>Business, Travel</span> — July 2, 2020</h4>
                <h1>Your most unhappy customers are your greatest source of learning.</h1>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                <div class="user-content">
                    <img :src="avatar" alt="">
                    <div class="user-text">
                        <h1>Sergy Campbell</h1>
                        <h3>CEO and Founder</h3>
                    </div>
                </div>
            </div>
        </div>
    </li>
</template>

<script>
export default {
    name: 'SliderItem',
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
            ],
        }
    }
}
</script>

<style lang="scss" scoped>
    @import "/css/Style/Main/Models/SliderItemStyle.scss"
</style>