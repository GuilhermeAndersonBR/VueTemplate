<template>
    <header id="header" class="header-content">
        <div class="header">
            <form action="">
                <button type="submit"><i class="fas fa-search"></i></button>
                <input type="text" value="" placeholder="Search...">
            </form>
            <router-link to="/" class="logo-content"><h2>MAGDESIGN</h2></router-link>
            <div class="menu-content">
                <nav>
                    <a href="#"><i class="fa-brands fa-twitter"></i></a>
                    <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                    <a href="#"><i class="fa-brands fa-instagram"></i></a>
                </nav>
                <button id="open-btn"><i class="fa-solid fa-bars"></i></button>
                <div class="sub-menu-content">
                    <div class="close-btn">
                        <button id="close-btn"><i class="fa-solid fa-xmark"></i></button>
                    </div>
                    <ul>
                        <li><a class="link-active" href="#">Home</a></li>
                        <li class="dropdown">
                            <a href="categories.html">Categories</a>
                            <button id="submenu-btn"><i class="fa-solid fa-angle-down"></i></button>
                        </li>
                        <div class="dropdown-menu">
                            <ul>
                                <li><router-link to="/">Home</router-link></li>
                                <li><router-link to="/categorias">Categories</router-link></li>
                                <li><router-link to="/single">Single</router-link></li>
                                <li><router-link to="/user">Usuário</router-link></li>
                            </ul>
                        </div>
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Food</a></li>
                        <li><a href="#">Technology</a></li>
                        <li><a href="#">Business</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>

<style lang="scss" scoped>

</style>
