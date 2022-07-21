<template>
    <main class="main-content">

        <Text />

        <OtherPosts />
        
    </main>
</template>

<script>
import OtherPosts from "../../Models/SingleSection/OtherPosts.vue";
import Text from "../../Models/SingleSection/Text.vue";
export default {
    name: 'Single',
    components: {
        OtherPosts,
        Text,
    }
}
</script>

<style>

</style>