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
      content:""
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
    },
    getsearchlist(){
      let datalist = this.$store.getters.gethotsearch()
      this.content = datalist
      console.log(datalist)
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
    this.getsearchlist()
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
      top: 25rpx;
      left: 20rpx;
      color: #333;
    }
    .clearicon{
      position: absolute;
      display: block;
      top: 10rpx;
      right: 15rpx;
      z-index: 999;
      color: #333;
      font-size: .6rem;
    }
    input{
      width: 100%;
      height: 80rpx;
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
