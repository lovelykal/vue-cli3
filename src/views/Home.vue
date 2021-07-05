<template>
  <div class="home">
    <!-- <input type="text" placeholder="原生输入框" v-focus> -->
    <my-input v-focus placeholder="自定义输入框" ref="myInput">
      <span slot="label">自定义输入框label</span>
    </my-input>
    <button @click="handleclick" v-click>自动点击</button> <span>点击了{{clickTimes}}下</span>
    <button @click="resetData">重置data</button>
    <div>
      <button @click="handleReq">实验跨域</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { request } from '@/api'
import myInput from '@/components/my-input.vue'
export default {
  name: 'Home',
  components: {
    // HelloWorld
    myInput
  },
  provide: {
    injectData: 12312313
  },
  directives: {
    click: {
      inserted: function (el, vnode) {
        // console.log(el)
        // console.log(vnode)
        el.click()
      }
    }
  },
  data () {
    return {
      inputVal: null,
      activeFocus: false,
      inputStyle: '',
      docmHeight: 0, // 默认屏幕高度
      showHeight: 0, // 实时屏幕高度
      hidshow: true, // 显示或者隐藏footer,
      isResize: false, // 默认屏幕高度是否已获取
      clickTimes: 0
    }
  },
  methods: {
    handleclick () {
      this.clickTimes++
    },
    resetData () {
      console.log('重置', this.$data, '为', this.$options.data())
      // Object.assign(this.$data, this.$options.data())
    },
    handleReq () {
      request({
        url: '/api/articles?type=more&category=home&shown_offset=1524276761019196&first_view=false'
      }).then(res => {
        console.log(res)
      }).catch(error => {
        throw error
      })
    }
  }
  // beforeCreate () {
  //   console.log('beforeCreate')
  //   console.log(this.$data)
  //   console.log(this.$refs.myInput)
  //   console.log(this.$el)
  // },
  // created () {
  //   console.log('created')
  //   console.log(this.$data)
  //   console.log(this.$refs.myInput)
  //   console.log(this.$el)
  // },
  // beforeMount () {
  //   console.log('beforeMount')
  //   console.log(this.$data)
  //   console.log(this.$refs.myInput)
  //   console.log(this.$el)
  // },
  // mounted () {
  //   console.log('mounted')
  //   console.log(this.$data)
  //   console.log(this.$refs.myInput)
  //   console.log(this.$el)

  //   // window.onresize = () => {
  //   //   return (() => {
  //   //     if (!this.isResize) {
  //   //     // 默认屏幕高度
  //   //       this.docmHeight = document.documentElement.clientHeight
  //   //       this.isResize = true
  //   //     }
  //   //     // 实时屏幕高度
  //   //     this.showHeight = document.body.clientHeight
  //   //   })()
  //   // }
  // },
  // beforeUpdate () {
  //   console.log('beforeUpdate')
  //   console.log(this.$data)
  //   console.log(this.$refs.myInput)
  //   console.log(this.$el)
  // },
  // updated () {
  //   console.log('updated')
  //   console.log(this.$data)
  //   console.log(this.$refs.myInput)
  //   console.log(this.$el)
  // },
  // beforeDestroy () {
  //   console.log('beforeDestroy')
  //   console.log(this.$data)
  //   console.log(this.$refs.myInput)
  //   console.log(this.$el)
  // },
  // destroyed () {
  //   console.log('destroyed')
  //   console.log(this.$data)
  //   console.log(this.$refs.myInput)
  //   console.log(this.$el)
  // }
}
</script>
