<template>
    <section class="slider-content">
        <h1>Trending</h1>
        <div id="slider">
            <ul id="slideWrap"> 
                <slider-item/>
            </ul>
            <a id="prev"><i class="fa-solid fa-angle-left"></i></a>
            <a id="next"><i class="fa-solid fa-angle-right"></i></a>
        </div> 
    </section>
</template>

<script>
import SliderItem from "./SliderItem.vue"
export default {
    name: 'Slider',
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
        SliderItem,
    }
}
</script>

<style lang="scss" scoped>
    @import "/css/Style/Main/Models/SliderStyle.scss"
</style>