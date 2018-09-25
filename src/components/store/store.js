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
        console.log("返回vuex的ID="+id+"的数据")
        return state.musiclist[id]
      } else {
        console.log("返回vuex全部数据")
        return state.musiclist
      }
    }
  }
})

export default store
