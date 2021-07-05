<template>
  <div class="my-swiper">
    <swiper v-if="list.length > 0">
       <slide v-for="(item,index) in list" :key="item">
        {{index}}
       </slide>
    </swiper>
    <!-- <div>123123</div> -->
    <!-- <div class="container" @touchstart="touchStart">
      <div class="img" v-for="item in list" :key="item">{{item}}</div>
    </div> -->
  </div>
</template>

<script>
import Swiper from './components/swiper'
import Slide from './components/slide'
export default {
  name: 'MySwiper',
  components: {
    Swiper, Slide
  },
  data () {
    return {
      val: null,
      list: [1, 2, 3, 4, 5]
    }
  },
  methods: {
    // touchStart (e) {
    //   console.log(e)
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.my-swiper {
  width: 90%;
  height: 80px;
  float: left;
  overflow: hidden;
  .container{
    float: left;
    width:500%;
  }
  .img {
    float: left;
    width: 20%;
    height: 80px;
    border: 1px solid #ddd;
    box-sizing: border-box;
  }
}
.wh_slide {
  border: 1px solid #ddd;
}
</style>
