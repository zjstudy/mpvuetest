<template>
  <div class="container">
    <div class="header">
      <div class="left-img"></div>
      <span>更新时间{{update_time}}</span>
    </div>
    <div class="newmusic">
      <div class="musiclist" v-for="(item,index) in hotmusiclist" :key="index">
        <span :class="index<3?'red-class':''">
          <text v-if="index<9">0</text>{{index+1}}
        </span>
        <div class="list-left">
          <div class="music-title">{{item.title}}</div>
          <div class="music-singer">
            <i class="iconfont" v-if="i<7">&#xe600;</i>
            {{item.singer}}
          </div>
        </div>
        <i class="iconfont iconsize"  @click="tabDetails(index)">&#xe610;</i>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      update_time:"",
      hotmusiclist:[]
    }
  },

  components: {

  },

  methods: {
    tabDetails(index){
      wx.navigateTo({
        url: '../musicplay/main?id='+index+'&&fun=hotmusic'
      })
    },
    getupdatatime(){
      var date = new Date();
      var seperator1 = "-";
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      var currentdate = year + seperator1 + month + seperator1 + strDate;
      this.update_time =  currentdate;
    },
    gethotmusiclist(){  //初始化音乐列表
      let datas = this.$store.getters.gethotmusic()
      this.hotmusiclist = datas
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfof()
    this.getupdatatime()
    this.gethotmusiclist()
  }
}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  .header{
    display: flex;
    flex-direction: column;
    height: 292rpx;
    width: 100%;
    margin-bottom: 20rpx;
    background: url("../../icon/img/hot_music_bg_2x.jpg") no-repeat;
    background-size: contain;
    .left-img{
      margin-left: 40rpx;
      margin-top: 50rpx;
      width: 142px;
      height: 67px;
      background: url("https://s3.music.126.net/m/s/img/index_icon_2x.png") no-repeat;
      background-size: 166px 97px;
      background-position: -24px -30px;
    }
    span{
      margin: 20rpx 0 0 40rpx;
      color: white;
      font-size: .3rem;
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
        width: 580rpx;
        border-bottom: 1px solid rgba(0,0,0,.1);
        .music-title{
          font-size: 35rpx;
          line-height: 60rpx;
        }
        .music-singer{
          width: 100%;
          font-size: 25rpx;
          line-height: 30rpx;
          color: #333333;
          overflow: hidden;/*超出部分隐藏*/
          white-space: nowrap;/*不换行*/
          text-overflow:ellipsis;/*超出部分文字以...显示*/
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
