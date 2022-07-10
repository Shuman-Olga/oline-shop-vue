import Vue  from 'vue'
import VueRouter from 'vue-router'
import vCatalog from '../components/v-catalog'
import vCart from '../components/v-cart'
import vProductpage from '../components/v-product-page'
import vMainPage from '../components/v-main-page.vue'

Vue.use(VueRouter);

let router = new VueRouter({
    routes: [
        {
            path:'/',
            name: 'mainPage',
            component: vMainPage
        },
        {
            path:'/catalog',
            name: 'catalog',
            component: vCatalog
        },
        {
            path: '/product',
            name: 'product',
            component:vProductpage
        },
        {
            path: '/cart',
            name: 'cart',
            component: vCart,
            props: true
    
        }
    ]
})

export default router;