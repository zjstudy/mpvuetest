<template>
  <div class="container">
    <div class="search-input">
      <div class="input-box">
        <i class="iconfont dingwei">&#xe621;</i>
        <input type="text" placeholder="搜索歌曲、歌手、专辑">
      </div>
    </div>
    <div class="search-tag">
      <div class="tag-list" v-for="(item,index) in content" :key="index">
        {{item.data}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return{
      content:[
        {data:"再见Hip-Hop"},
        {data:"中国新说唱"},
        {data:"泰勒·斯威夫特"},
        {data:"可不可以"},
        {data:"香蜜沉沉烬如霜"},
        {data:"戳爷新专辑"},
        {data:"窦佳嫄"},
        {data:"陈奕迅"}
      ]
    }
  },

  components: {

  },

  methods: {

  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfof()
  }
}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  .search-input{
    display: flex;
    width: 100%;
    height: 150rpx;
    border: 1px solid rgba(0,0,0,.1);
    .input-box{
      width: 90%;
      margin: auto;
      position: relative;
    }
    .dingwei{
      position: absolute;
      top: 12rpx;
      left: 20rpx;
      color: #333;
    }
    input{
      width: 100%;
      height: 25rpx;
      font-size: .3rem;
      padding-left: 60rpx;
      box-sizing: border-box;
      margin: auto;
      background-color: #ebecec;
      border-radius: 25rpx;
    }
  }
  .search-tag{
    font-size: .3rem;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    padding-top: 30rpx;
    .tag-list{
      color: #656c73;
      line-height: 60rpx;
      padding: 0 15rpx;
      height: 60rpx;
      border-radius: 20px;
      margin: 20rpx 15rpx;
      border: 1px solid rgba(0,0,0,.1);
    }
  }

}

</style>
