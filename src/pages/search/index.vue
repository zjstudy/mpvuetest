<template>
  <div class="container">
    <div class="search-input">
      <div class="input-box">
        <i class="iconfont dingwei">&#xe621;</i>
        <input type="text" placeholder="搜索歌曲、歌手、专辑" v-model="searchdata">
        <i v-if="clearshow" @click="clearinput" class="iconfont clearicon">&#xe611;</i>
      </div>
    </div>
    <div class="search-tag">
      <div class="tag-list" v-for="(item,index) in content" :key="index" @click="searchclick(item.data)">
        {{item.data}}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return{
      searchdata:"",
      clearshow:false,
      content:[
        {data:"再见Hip-Hop"},
        {data:"中国新说唱"},
        {data:"泰勒·斯威夫特"},
        {data:"可不可以"},
        {data:"香蜜沉沉烬如霜"},
        {data:"戳爷新专辑"},
        {data:"窦佳嫄"},
        {data:"陈奕迅"},
        {data:"周杰伦"},
        {data:"张学友"}
      ]
    }
  },

  components: {

  },

  methods: {
    searchclick(val){
      this.searchdata = val;
    },
    clearinput(){
      this.searchdata = "";
    }
  },
  watch: {
    searchdata:function (val) {
      console.log(val)

      if(this.searchdata != ""){
        this.clearshow = true
      } else {
        this.clearshow = false
      }
    }
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
      top: 15rpx;
      left: 20rpx;
      color: #333;
    }
    .clearicon{
      position: absolute;
      top: 10rpx;
      right: 15rpx;
      z-index: 999;
      color: #333;
      font-size: .4rem;
    }
    input{
      width: 100%;
      height: 60rpx;
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
