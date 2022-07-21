<template>
    <section class="text-content">
        <div class="user-content">
            <img :src=" avatar " alt="">
            <h2>Sergy Campbell</h2>
            <h5>JULY 2, 2020</h5>
        </div>
        <div class="text">
            <h1>Your most unhappy customers are your greatest source of learning.</h1>
            <h3>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</h3>
            <img :src=" image4 " alt="">
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <blockquote>
                <div class="quote"></div>
                <span><p>
                    The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. 
                    She packed her seven versalia, put her initial into the belt and made herself on the way.
                </p></span>
            </blockquote>
            <p>
                Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
            </p>
            <p>
                When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. 
                Pityful a rethoric question ran over her cheek, then she continued her way.
            </p>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. 
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
            </p>
            <p>
                A small river named Duden flows by their place and supplies it with the necessary regelialia. 
                It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
            </p>
            <div class="other-designs">
                <a href="#" v-for="(post, index) in posts.slice(0, 6)" v-bind:key="index">
                    <img :src=" post.image " alt="">
                </a>
            </div>
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
</template>

<script>
export default {
    name: 'Text',
    data() {
        return {
            avatar: '/img/user.jpg',
            image4: '/img/slidershow-image-4.jpg',
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
    @import "/css/Style/Main/Models/SingleTextStyle.scss"
</style>