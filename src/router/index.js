import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login'
import Home from '@/pages/Home'
import Register from '@/pages/Register'
import Search from '@/pages/Search'


Vue.use(VueRouter)


export default new VueRouter({
    routes:[
        {
            path:'/home',
            component:Home
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHidden:true
            }
        },
        {
            path:'/register',
            component:Register,
            meta:{
                isHidden:true
            }
        },
        {
            path:'/search',
            component:Search
        },
        {
            path:'/',
            redirect: '/home'
        }

    ]
})