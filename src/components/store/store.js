// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    musiclist:[
      {
        title:"Venice Bitch",
        singer:"Lana Del Rey - Venice Bitch",
        bgimg:"https://p4.music.126.net/mSkcEUHjP4CsERhrGCr26A==/109951163557495506.jpg",
        core_img:"http://p1.music.126.net/VZNBHguayu4ks3LL7zLwCw==/109951163557483095.jpg"
      },
      {
        title:"可一可再",
        singer:"陈奕迅 / eason and the duo band - 可一可再",
        bgimg:"https://p3.music.126.net/6lWbR0pA7d73918hSD1PLg==/109951163512809145.jpg",
        core_img:"http://p1.music.126.net/ihkYgnwvjcDiQf8kmnESig==/109951163512803446.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0"
      },
      {
        title:"Space Oddity",
        singer:"吉克隽逸 - Space Oddity",
        bgimg:"https://p3.music.126.net/wtPAxEpFQ1RUAwI4_XH41g==/109951163559109698.jpg",
        core_img:"http://p1.music.126.net/4GtKwIDp5D3bHdv1jw9LJw==/109951163557994040.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0"
      }
    ],
    hotmusiclist:[
      {
        title:"五月雨",
        singer:"五月雨（《火影忍者疾风传OST2》配乐）- 高梨康治/刃-yaiba-",
        musicurl:"http://music.163.com/song/media/outer/url?id=530507",
        bgimg:"https://p3.music.126.net/Lfw6SFwd5q78J5Nih9PjZQ==/109951163338274302.jpg",
        core_img:"http://p2.music.126.net/2s6Sxg_TE20FnQsCWw80JQ==/109951163338274299.jpg"
      },
      {
        title:"可不可以",
        singer:"张紫豪 - 可不可以",
        musicurl:"http://music.163.com/song/media/outer/url?id=553755659",
        bgimg:"https://p4.music.126.net/BItr8CpEEnPgOJF9WnW5Zg==/109951163532998104.jpg",
        core_img:"http://p1.music.126.net/WafK2OQfEtqXitdDXJ772Q==/109951163252847249.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0"
      },
      {
        title:"盗将行",
        singer:"花粥 / 马雨阳 - 粥请客（二）",
        musicurl:"http://music.163.com/song/media/outer/url?id=574566207",
        bgimg:"https://p4.music.126.net/gBlW9UV6fqxiarWt-fpi_A==/109951163555870585.jpg",
        core_img:"http://p1.music.126.net/-qHPT3rhxDlu5zQV9NcQ-A==/109951163555860423.jpg"
      },
      {
        title:"Venice Bitch",
        singer:"Lana Del Rey - Venice Bitch",
        musicurl:"http://music.163.com/song/media/outer/url?id=1311021714",
        bgimg:"https://p4.music.126.net/mSkcEUHjP4CsERhrGCr26A==/109951163557495506.jpg",
        core_img:"http://p1.music.126.net/VZNBHguayu4ks3LL7zLwCw==/109951163557483095.jpg"
      },
      {
        title:"可一可再",
        singer:"陈奕迅 / eason and the duo band - 可一可再",
        musicurl:"http://music.163.com/song/media/outer/url?id=1300423074",
        bgimg:"https://p3.music.126.net/6lWbR0pA7d73918hSD1PLg==/109951163512809145.jpg",
        core_img:"http://p1.music.126.net/ihkYgnwvjcDiQf8kmnESig==/109951163512803446.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0"
      },
      {
        title:"Space Oddity",
        singer:"吉克隽逸 - Space Oddity",
        musicurl:"http://music.163.com/song/media/outer/url?id=1311132052",
        bgimg:"https://p3.music.126.net/wtPAxEpFQ1RUAwI4_XH41g==/109951163559109698.jpg",
        core_img:"http://p1.music.126.net/4GtKwIDp5D3bHdv1jw9LJw==/109951163557994040.jpg?imageView&thumbnail=360y360&quality=75&tostatic=0"
      }
    ],
    hotsearchlist:[
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
    ],
    count: 10
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  },
  getters:{
    getlistdata:state=>(id)=> {
      if (id){
        console.log("返回vuex的ID="+id+"首页音乐的数据")
        return state.musiclist[id]
      } else {
        console.log("返回vuex首页音乐全部数据")
        return state.musiclist
      }
    },
    gethotmusic:state=>(id)=> {
      if (id){
        console.log("返回vuex的ID="+id+"热门音乐的数据")
        return state.hotmusiclist[id]
      } else {
        console.log("返回vuex中热门音乐全部数据")
        return state.hotmusiclist
      }
    },
    gethotsearch:state=>(id)=> {
      return state.hotsearchlist
    }
  }
})

export default store
