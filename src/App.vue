<template>
  <div>
      <Header/>
      <router-view></router-view>
      <Footer v-show="!$route.meta.isHidden"/>
  </div>
</template>

<script>
import Footer from '@/components/Footer'
import Header from '@/components/Header'
export default {
    name:'App',
    components:{
    Header,
    Footer
  },
}
</script>

<style lang="less" scoped>

</style>