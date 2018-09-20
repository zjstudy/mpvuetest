<template>
  <div class="container">
    <div v-if="loginstate" class="user">
      <img :src="userimg" alt="">
      <div class="userdata">
        <div class="username">
          {{username}}
        </div>
        <div class="data-number">
          <span><a href="#">{{1}}</a><p>动态</p></span>
          <span><a href="#">{{2}}</a>关注</span>
          <span><a href="#">{{9}}</a>粉丝</span>
        </div>
        <div class="user-details">
          <div class="weizhi">
            <span>所在地区：{{weizhi}}</span>
          </div>
        </div>
      </div>
      <div class="content-list">
        <div class="type-title">
          <span>我的歌单</span>
        </div>
        <div class="music-list">
          <div class="music-img">
            <img :src="ranking_list.bgimg" alt="">
          </div>
          <div class="list-content">
            <span class="list-content-top">{{ranking_list.title}}</span>
            <span class="list-content-bottom">累计播放{{ranking_list.playnum}}次</span>
          </div>
        </div>

        <div class="music-list" v-for="(item,index) in music_list" :key="index">
          <div class="music-img">
            <img :src="item.bgimg" alt="">
          </div>
          <div class="list-content">
            <span class="list-content-top">{{item.title}}</span>
            <span class="list-content-bottom">{{item.number}}首,{{item.playnum}}</span>
          </div>
        </div>
      </div>
    </div>
    <div v-if="!loginstate" class="notlogin">
      <span>
        未登录,需要登录后才能查看
      </span>
      <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @clcik="getUserInfof">获取权限</button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      root:false,
      loginstate:false,
      userimg:"http://p1.music.126.net/Jd_p4kg9YsP442GdGsJOXA==/18965476067843006.jpg?param=180y180",
      username:"长脚的水杯",
      weizhi:"重庆",
      ranking_list:{
        bgimg:"http://p1.music.126.net/bxfKljzJN-6ZeA8SA02MuQ==/109951163556763179.jpg?param=140y140",
        title:"我的听歌排行",
        playnum:"1134"
      },
      music_list:[
        {
          bgimg:"http://p1.music.126.net/UEMjJT58RrrxxonJxXArQg==/3407386535439387.jpg?param=140y140",
          title:"我喜欢的音乐",
          number:109,
          playnum:"累计听歌1134首"
        },
        {
          bgimg:"http://p1.music.126.net/o8ZfncjFF5frq8Q8iJJ9QQ==/2321069046256264.jpg?param=140y140",
          title:"外语歌曲",
          number:109,
          playnum:"累计听歌1134首"
        },
        {
          bgimg:"http://p1.music.126.net/4tTN8CnR7wG4E1cauIPCvQ==/109951163240682406.jpg?param=140y140",
          title:"中文歌曲",
          number:109,
          playnum:"累计听歌1134首"
        },
      ]
    }
  },

  components: {

  },

  methods: {

    getUserInfof () {
      let _this = this
      wx.getSetting({
        success: function(res){
          console.log("判断是否授权")
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function(res) {
                //用户已经授权过
                console.log('用户已经授权过')
                _this.loginstate = true;
                if(_this.root){
                  wx.showToast({
                    title:"已授权"
                  })
                }
                _this.root = true
              }
            })
          }else{
            _this.loginstate = false;
            console.log('用户还未授权过')
          }
        }
      })
    },
    bindGetUserInfo(e) {
      // console.log(e.mp.detail.rawData)
      if (e.mp.detail.rawData){
        //用户按了允许授权按钮
        console.log('用户按了允许授权按钮')
        this.loginstate = true;
        this.getUserInfof()
      } else {
        //用户按了拒绝按钮
        console.log('用户按了拒绝按钮')
      }
    },
    clickHandle (msg, ev) {
      // console.log('clickHandle:', msg, ev)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfof()
    //this.getupdatatime()
  }
}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  .user{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    height: 300rpx;
    margin-top: 50rpx;
    align-items: center;
    img{
      width: 200rpx;
      height: 200rpx;
      margin: 0 50rpx;
      box-shadow:0px 0px  5px 1px #aaa;
      border-radius: 50%;
    }
    .userdata{
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      div{
        max-width: 400rpx;
        overflow: hidden;
        margin-bottom: 20rpx;
      }
      .username{
        display: flex;
        align-items: center;
        font-size: .5rem;
        color: #d43c33;
      }
      .data-number{
        display: flex;
        span{
          display: block;
          text-align: center;
          font-size: .25rem;
          margin-right: 35rpx;
        }
      }
      .user-details{
        display: flex;
        flex-wrap: wrap;
        .weizhi{
          font-size: .25rem;
          margin-right: 0 20rpx;
        }
      }
    }
    .content-list{
      width: 750rpx;
      margin-top: 100rpx;
      .type-title{
        span{
          display: flex;
          width: 100%;
          color: #666666;
          font-size: .3rem;
          line-height: 70rpx;
          background-color: #f5f5f5;
        }
      }

      .music-list{
        display: flex;
        height: 140rpx;
        .music-img{
          display: flex;
          width: 120rpx;
          height: 140rpx;
          img{
            height: 100rpx;
            width: 100rpx;
            border: 0;
            border-radius: 0;
            box-shadow: none;
            margin: auto;
          }
        }
        .list-content{
          font-size: .3rem;
          width: 80%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border-bottom: 1px solid #ebebeb;
          padding-left: 20rpx;
          box-sizing: border-box;
          .list-content-top{
            font-size: .4rem;
            margin-bottom: 10rpx;
          }
          .list-content-bottom{
            font-size: .3rem;
            color: #666666;
          }
        }
      }

    }
  }
  .notlogin{
    width: 100%;
    padding-top: 300rpx;
    display: flex;
    flex-direction: column;
    span{
      text-align: center;
      color: #7bd473;
      margin-bottom: 50rpx;
    }
    button{
      width: 30%;
      margin: auto;
    }
  }
}

</style>
