<template>
  <div class="container">
    <div class="bg-img" v-if="bgimg.length>0" :style="{backgroundImage: 'url(' + bgimg + ')'}"></div>
    <div class="shade"></div>
    <div class="content">
      <div class="header">
        <div class="header-left">
          <i class="iconfont">&#xe6d0;</i>
          <span>网易云音乐</span>
        </div>
        <div class="header-right">

        </div>
      </div>
      <div class="core">
        <div class="core-img" v-if="core_bg_img.length>0" :style="{backgroundImage: 'url(' + core_bg_img + ')'}">
          <img class="rotate" :class="pause?'pause': ''" :src="core_img" @click="playcontrol">
          <i v-if="pause" class="iconfont"  @click="playcontrol">&#xe624;</i>
        </div>
      </div>
      <div class="lyrics">
        <span>'Cause baby, tonight, we're beautiful now, we're beautiful</span>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      bgimg: 'https://p3.music.126.net/eGEyfHzRtT_eHfBqdlFA6Q==/109951163221163562.jpg',
      core_bg_img: 'https://s3.music.126.net/m/s/img/disc-plus.png?b700b62e1971b351dcb8b8ce1c9ceea3',
      core_img:'http://p1.music.126.net/ze_ggtReuHBLF2o-wUolFw==/109951163221161145.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0',
      pause:false,
      userInfo: {},
      root:false
    }
  },

  components: {

  },

  methods: {
    rotatecontrol(){
      let _this = this
      // console.log(this.pause)
      // setInterval(function () {
      //   _this.pause =  !_this.pause
      //   console.log(_this.pause)
      // },3000)
    },
    playcontrol(){
      this.pause =  !this.pause
    },
    setbgdataval(id){
      console.log("传输ID="+id)
      // let dats = store.commit('getlistdata')
      let datas = this.$store.getters.getlistdata(id)
      this.bgimg = datas.bgimg
      this.core_img = datas.core_img
    }

  },
  onLoad:function (options) {
    let arr = Object.getOwnPropertyNames(options)
    if(arr.length){
      this.setbgdataval(options.id)
    }

    // console.log(this.bgimg)
    // console.log(this.core_img)
  },
  created () {
    // 调用应用实例的方法获取全局数据
    // this.getUserInfof()
    this.rotatecontrol()
  }
}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction:column;
  .bg-img{
    position: fixed;
    width: 750rpx;
    height: 100%;
    background-position: 50%;
    background-size: auto 100%;
    transform: scale(1.5);
    transform-origin:center top;
    opacity: 1;
    z-index: 1;
  }
  .shade{
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: black;
    opacity: 0.5;
    z-index: 11;
  }
  .content{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow:scroll;
    z-index: 13;
    .header{
      display: flex;
      width: 750rpx;
      height: 80rpx;
      background-color:rgba(0,0,0,0.3);
      z-index: 14;
      .header-left{
        height: 80rpx;
        display: flex;
        i,span{
          color: white;
          line-height: 80rpx;
          margin-left: 20rpx;
        }
        i{
          line-height: 80rpx;
          color: red;
        }
      }

    }
    .core{
      display: flex;
      width: 100%;
      z-index: 99;
      .core-img{
        margin: 120rpx auto;
        width: 600rpx;
        height: 600rpx;
        background-size: auto 100%;
        display: flex;
        position: relative;
        img{
          margin: auto;
          width: 375rpx;
          height: 375rpx;
          border-radius: 50%;
        }
        .rotate{
          transition: 0.5s;
          animation: rotate 20s linear infinite;
        }
        .pause{
          animation-play-state:paused;
        }
        i{
          position: absolute;
          top: 50%;
          left: 50%;
          padding: 0 4rpx;
          background-color:rgba(0,0,0,0.5);
          border-radius: 50%;
          transform:translate(-50%,-50%);
          font-size: 1rem;
          color: #ebebeb;
        }
      }
    }
    .lyrics{
      display: flex;
      flex-wrap: wrap;
      z-index: 999;
      width: 100%;
      height: 500rpx;
      padding: 0 100rpx;
      box-sizing: border-box;
      color: white;
      text-align: center;
    }

  }

}

@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(359deg);
  }
}



</style>
