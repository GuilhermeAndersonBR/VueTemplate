<template>
    <main class="main-content">
        <section class="categories-section">
            <h5>Categories</h5>
            <h1>'Business'</h1>
            <table id="data">
                <tbody>
                    <navigation-item />
                </tbody>
            </table>
        </section>
    </main>
</template>

<script>
import NavigationItem from "./NavigationItem.vue"
export default {
    name: 'Navigation',
    data() {
        return {

        }
    },
    components: {
        NavigationItem,
    }
}
</script>

<style lang="scss" scoped>
    @import "/css/Style/Main/Models/NavigationStyle.scss"
</style>