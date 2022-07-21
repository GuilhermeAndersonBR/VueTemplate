<template>
    <section class="posts-content">
        <div class="posts">
            <posts-item/>
        </div>
    </section>
</template>

<script>
import PostsItem from "./PostsItem.vue"
export default {
    name: 'Posts',
    components: {
        PostsItem
    }
}
</script>

<style lang="scss" scoped>
    @import "/css/Style/Main/Models/PostsStyle.scss"
</style>