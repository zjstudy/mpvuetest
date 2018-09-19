<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <div class="index-title">
      <span>推荐歌单</span>
    </div>
    <div class="imgcontent">
      <div class="img-list" v-for="(item,index) in imglist" :key="index">
        <div class="playnum">
          <i class="iconfont">&#xe6bf;</i>
          <span>{{item.playnum}}万</span>
        </div>
        <img :src="item.url">
        <span>{{item.text}}</span>
      </div>
    </div>
    <div class="index-title">
      <span>最新音乐</span>
    </div>
    <div class="newmusic">
      <div class="musiclist" v-for="i in 6" :key="i">
        <div class="list-left">
          <div class="music-title">时光带我飞</div>
          <div class="music-singer">
            <i class="iconfont" v-if="i<3">&#xe600;</i>
            时光街乐队-平行世界
          </div>
        </div>
        <i class="iconfont iconsize" @click="tabDetails">&#xe610;</i>
      </div>
    </div>

    <!--<div class="footer">-->
      <!--<footert :text="motto"></footert>-->
    <!--</div>-->
  </div>
</template>

<script>
import card from '@/components/card'
import cardt from '@/components/cardt'
import footert from '@/components/footers'
export default {
  data () {
    return {
      imglist:[
        {url:"http://p1.music.126.net/QgIq7P9UUFh_bw9iR4oVwg==/109951163525425311.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",
          playnum:"147.6",
          text:"「毒性电子」EDM TRAP 深陷迷幻的电音"
        },
        {url:"http://p1.music.126.net/g9L9qMLPzuQj3xEAWJ4MJQ==/3262251008773647.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",
          playnum:"154.6",
          text:"【复习者联盟】30首期末解压轻音乐"
        },
        {url:"http://p1.music.126.net/38AVOctgHCUDOIX2Zp8Vzg==/18552059697345968.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",
          playnum:"124.6",
          text:"⛱[纯音乐]安静又不失节奏"
        },
        {url:"http://p1.music.126.net/RYXTC5K_AyMzxIZBy5QlKQ==/109951163538115348.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",
          playnum:"147.6",
          text:"「毒性电子」EDM TRAP 深陷迷幻的电音"
        },
        {url:"http://p1.music.126.net/tkQ6Zb_eBdUsFAeD6PM-2A==/109951163547241213.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",
          playnum:"147.6",
          text:"「毒性电子」EDM TRAP 深陷迷幻的电音"
        },
        {url:"http://p1.music.126.net/o9GzTfkc0E8dOUCeejPv4w==/18680702558107743.webp?imageView&thumbnail=246x0&quality=75&tostatic=0&type=webp",
          playnum:"147.6",
          text:"「毒性电子」EDM TRAP 深陷迷幻的电音"
        },
      ],
      motto: 'Hello World',
      userInfo: {},
      root:false
    }
  },

  components: {
    card,
    cardt,
    footert
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    clickHandle(){

    },
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
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer{
  width: 100%;
  height: 1rem;
  position: fixed;
  bottom: 0px;
}
.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
  .index-title{
    display: flex;
    width: 100%;
    height: 80rpx;
    font-size: 35rpx;
    align-items: center;
    span{
      display: flex;
      height: 35rpx;
      line-height: 35rpx;
      border-left: solid 5rpx red;
      padding-left: 5rpx;
      margin-left: 10rpx;
    }
  }
  .imgcontent{
    display: flex;
    width: 750rpx;
    flex-wrap: wrap;
    justify-content: space-between;
    .img-list{
      margin:20rpx 10rpx;
      display: flex;
      width: 230rpx;
      height: 306rpx;
      flex-wrap: wrap;
      position: relative;
      .playnum{
        position: absolute;
        top: 5rpx;
        right: 0;
        display: flex;
        color: white;
        i,span{
          font-size: 25rpx;
        }
      }
      img{
        height: 230rpx;
        width: 230rpx;
        border-radius: 10rpx;
      }
      span{
        margin-top: 10rpx;
        height: 66rpx;
        font-size: 27rpx;
        margin: 0 10rpx;
        display: -webkit-box;
        -webkit-line-clamp:2;
        line-height: 33rpx;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow:ellipsis;

      }

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
      .list-left{
        height: 90rpx;
        margin-left: 10rpx;
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
          }
        }
      }
      i{
        font-size: 50rpx;
        margin-right: 20rpx;
      }
    }

  }


</style>
