<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a href="/pages/index/main" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import store from './store'

export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    increment () {
      store.commit('increment')
      wx.scanCode({
        success: (res) => {
          console.log(res)
        }
      })
    },
    decrement () {
      store.commit('decrement')
      wx.chooseImage({
        count:1,
        success:(res) =>{
          console.log(res.tempFilePaths)
        }
      })
    },
    getimg(){

    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    // this.getimg()
  }
}
</script>

<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
