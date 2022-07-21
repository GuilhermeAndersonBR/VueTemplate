const Main = ()=> import('./template/Main/Main.vue');
const Categories = ()=> import('./template/Main/Categories.vue');
const Single = ()=> import('./template/Main/Single.vue');
const User = ()=> import('./template/Main/User.vue');

export const routes = [
    {
        name: 'main',
        path: '/',
        component: Main,
    },
    {
        name: 'categories',
        path: '/categorias',
        component: Categories, 
    },
    {
        name: 'showUser',
        path: '/user',
        component: User, 
    },
    {
        name: 'single',
        path: '/single',
        component: Single, 
    },
];

