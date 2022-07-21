<template>
    <section class="other-posts-section">
        <div class="other-posts">
            <div class="content">
                <h1>Sports</h1>
                <other-posts-item />
            </div>
            <div class="content">
                <h1>Business</h1>
                <other-posts-item />
            </div>
        </div>
    </section>
</template>

<script>
import OtherPostsItem from "./OtherPostsItem.vue"
export default {
    name: 'OtherPosts',
    components: {
        OtherPostsItem,
    }
}
</script>

<style lang="scss" scoped>
    @import "/css/Style/Main/Models/OtherPostsStyle.scss"
</style>