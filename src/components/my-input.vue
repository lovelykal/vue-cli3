<template>
  <div class="my-input">
    <div style="height:200px;width:200px;background:#ddd;">
      <slot name="label">
        <span>没有插入内容</span>
      </slot>
    </div>
    <!-- <input type="text" @input="lazyInput" v-model="value" :placeholder="placeholder"/> -->
    <input class="cardInput" v-model="cardNumShow" @keyup="showNum" @blur="chargeNum" ref="cardInput" maxlength="23">
    <slot name="footer">footer</slot>
    <span>injectData {{injectData}}</span>
    <my-radio />
    <router-link to="/">Home</router-link>|
    <router-link to="/myradio">myradio</router-link>
  </div>
</template>

<script>
import myRadio from '@/components/my-radio.vue'
export default {
  name: 'MyInput',
  components: {
    myRadio
  },
  inject: ['injectData'],
  props: {
    placeholder: {
      type: String,
      val: null
    }
  },
  data () {
    return {
      val: null,
      value: '',
      timer: null,
      cardNum: '', // 银行卡-传给后台去空格
      cardNumShow: '' // 银行卡四位一空显示
    }
  },
  methods: {
    lazyInput (e) {
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
      this.timer = setTimeout(() => {
        this.handleInput(e)
      }, 100)
    },
    handleInput (e) {
      const caretStart = e.target.selectionStart
      const caretEnd = e.target.selectionEnd
      const originVal = this.value.replace(/[^0-9]/g, '')
      const val = originVal.replace(/(\d{4})(?=\d)/g, '$1 ')
      this.value = val
      this.$nextTick(() => {
        this.$nextTick(() => {
          e.target.setSelectionRange(caretStart, caretEnd)
        })
      })
    },
    showNum () {
      const cInput = this.$refs.cardInput
      if (cInput.selectionStart < this.cardNumShow.length) {
        return
      }
      this.cardNumShow = this.cardNumShow.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
      this.cardNum = this.cardNumShow.replace(/\s/g, '')
    },
    chargeNum () {
      this.cardNumShow = this.cardNumShow.replace(/\s/g, '').replace(/(\d{4})(?=\d)/g, '$1 ')
      this.cardNum = this.cardNumShow.replace(/\s/g, '')
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
.my-input {
  height: 20px;
  width: 100px;
  border: 1px solid #ddd;
}
</style>
