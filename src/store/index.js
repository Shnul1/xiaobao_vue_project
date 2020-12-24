import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    course: [
      { id: 1, 
        url: "../assets/images/course.jpg",
        name: "英语教育系列课程", 
        price: "139.7", 
        date: "8月26日-9月1日", 
        time: "每周四 18:00-19:00", 
        restStudent: "20", 
        student: "53",
        period: [10, 20, 30],
        className: "三年级201班",
        courseDetail: "主题式教学，将英语生活话，融入点滴生活，帮助您的孩子顺利起步少儿英语课程，把字母和单词学习融化在丰富多彩的儿歌和游戏中，结合生动的肢体语言，趣味口诀，课堂游戏帮助孩子记忆和书写单词。"
      }
    ],
    coupons: [
      {
        id: 1,
        condition: '满 30000元 使用',
        originCondition: 30000*100,
        reason: '订单未满30000元',
        value: 2000*100,
        name: '新年优惠促销',
        startAt: 1557910400,
        endAt: 1574592000,
      },
      {
        id: 2,
        condition: '满 30000元 使用',
        originCondition: 30000*100,
        reason: '订单未满30000元',
        value: 2000*100,
        name: '新年优惠促销',
        startAt: 1559104000,
        endAt: 1574592000,
      },
      {
        id: 3,
        condition: '满 20000元 使用',
        originCondition: 20000*100,
        reason: '订单未满20000元',
        value: 1000*100,
        name: '新年优惠促销',
        startAt: 1559104000,
        endAt: 1574592000,
      }
    ]
  },
    mutations: {
      

    
    },//同步操作
    actions: {

    },//异步操作
    modules: {

    }
})
