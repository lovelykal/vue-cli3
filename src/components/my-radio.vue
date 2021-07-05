<template>
  <div class="my-radio">
    <h3>---------------radio----------</h3>
    <span>radio:</span>
    <input type="radio">
    <!-- <span v-if="injectData">injectData {{injectData}}</span> -->
    <router-link to="/">Home</router-link> |
      <router-link to="/myinput">myinput</router-link>
      <button @click="asd">asdasd</button>
  </div>
</template>

<script>
export default {
  name: 'MyRadio',
  data () {
    return {
      val: null
    }
  },
  // inject: ['injectData'],
  provide: {
    aaaa: 'aaaa'
  },
  methods: {
    handleInput () {
      this.$emit('input', this.val)
    },
    asd () {
      this.asd2 = false
      console.log(this.asd2)
      console.log(this.asd2)
      console.log(this.asd2)
      console.log(this.asd2)
      console.log(this.asd2)
      console.log(this.asd2)
    }
  },
  model: {
    prop: 'val',
    event: 'input'
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .my-radio{
    width:1000px;
  }
</style>
