<template>
  <div>
    <Typenav/>
     <Listcontainer/>
     <Recommend/>
     <Rank/>
     <Like/>
     <Floor/>
     <Floor/>
     <Brand/>
  </div>
</template>

<script>
import Listcontainer from './Listcontainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Brand from './Brand'
import Floor from './Floor'

export default {

    name:'Home',
    components:{
    Listcontainer,
    Recommend,
    Rank,
    Like,
    Brand,
    Floor

  }
}
</script>

<style lang='less' scoped>

</style>