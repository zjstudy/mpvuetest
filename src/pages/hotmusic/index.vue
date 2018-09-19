<template>
  <div class="container">
    <div class="header">
      <div class="left-img"></div>
    </div>
    <div class="newmusic">
      <div class="musiclist" v-for="i in 13" :key="i">
        <span :class="i<3?'red-class':''">
          <text v-if="i<9">0</text>{{i+1}}
        </span>
        <div class="list-left">
          <div class="music-title">时光带我飞</div>
          <div class="music-singer">
            <i class="iconfont" v-if="i<7">&#xe600;</i>
            时光街乐队-平行世界
          </div>
        </div>
        <i class="iconfont iconsize"  @click="tabDetails">&#xe610;</i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  components: {

  },

  methods: {
    tabDetails(e){
      wx.navigateTo({
        url: '../musicplay/main'
      })
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
  .header{
    display: flex;
    align-items: center;
    height: 292rpx;
    width: 100%;
    margin-bottom: 20rpx;
    background: url("../../icon/img/hot_music_bg_2x.jpg") no-repeat;
    background-size: contain;
    .left-img{
      margin-left: 40rpx;
      width: 142px;
      height: 67px;
      background: url("https://s3.music.126.net/m/s/img/index_icon_2x.png") no-repeat;
      background-size: 166px 97px;
      background-position: -24px -30px;
    }
  }
  .newmusic{
    width: 100%;
    padding: 0 20rpx;
    box-sizing: border-box;
    .musiclist{
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-bottom: 20rpx;
      span{
        color: #666666;
        width: 50rpx;
        font-size: .3rem;
        line-height: 90rpx;
      }
      .red-class{
        color: red;
      }
      .list-left{
        height: 90rpx;
        width: 600rpx;
        margin-left: 10rpx;
        border-bottom: 1px solid rgba(0,0,0,.1);
        .music-title{
          font-size: 35rpx;
          line-height: 60rpx;
        }
        .music-singer{
          display: flex;
          font-size: 25rpx;
          line-height: 30rpx;
          color: #333333;
          i{
            font-size: 30rpx;
            color: red;
            margin: 0;
            line-height: 30rpx;
          }
        }
      }
      i{
        font-size: 50rpx;
        margin-right: 20rpx;
        line-height: 90rpx;
      }
    }

  }
}

</style>
