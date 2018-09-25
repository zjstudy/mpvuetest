<template>
  <div class="counter-warp">
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>

    <a class="home" @click="gohome()">去往首页</a>
    <footers></footers>
  </div>
</template>

<script>
// Use Vuex
import store from './store'
import footers from '@/components/footers'
export default {
  computed: {
    count () {
      return store.state.count
    }
  },
  components: {
    footers
  },
  methods: {
    increment () {
      store.commit('increment')

    },
    decrement () {
      store.commit('decrement')

    },
    getimg(){

    },
    gohome(){
      wx.switchTab({
        url: '../index/main'
      });
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
