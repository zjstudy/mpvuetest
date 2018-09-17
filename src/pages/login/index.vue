<template>
  <div class="container" @click="clickHandle('test click', $event)">
    <span>
      需要获取权限才能下一步
    </span>
    <button open-type="getUserInfo" @getuserinfo="bindGetUserInfo" @clcik="getUserInfof">获取权限</button>

  </div>
</template>

<script>

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      root:false
    }
  },

  components: {

  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfof () {
      let _this = this
      wx.getSetting({
        success: function(res){
          console.log("判断是否授权")
          if (res.authSetting['scope.userInfo']) {
            wx.getUserInfo({
              success: function(res) {
                //用户已经授权过
                wx.switchTab({
                  url: '../index/main'
                });

                console.log('用户已经授权过')
                _this.userInfo = res.userInfo
                if(_this.root){
                  console.log("111")
                  wx.showToast({
                    title:"已授权"
                  })
                }
                _this.root = true
              }
            })
          }else{
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
        this.getUserInfof()
        wx.switchTab({
          url: '../index/main'
        });
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
  }
}
</script>

<style lang="less" scoped>
.container{
  width: 100%;
  padding-top: 300rpx;
  span{
    color: #7bd473;
    margin: 50rpx auto;
  }
}


</style>
