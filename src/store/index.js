import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    student: [
      {id:1, studentId:1701, name:"周可寒", useCoupon: []},
      {id:2, studentId:1702, name:"王梓晨", useCoupon: []}
    ],
    course: [
      { 
        id: 1, 
        url: "/img/course.74efb09c.jpg",
        courseClass: "英语教育系列课程",  
        name: "少儿英语A1班",
        date: "8月26日-9月1日", 
        time: "每周四 18:00-19:00", 
        restStudent: "20", 
        student: "53",
        period: {
          periodTime: [10, 20, 30],
          price: [139.7, 279.4, 419.1]
        },
        className: "三年级201班",
        courseDetail: "主题式教学，将英语生活话，融入点滴生活，帮助您的孩子顺利起步少儿英语课程，把字母和单词学习融化在丰富多彩的儿歌和游戏中，结合生动的肢体语言，趣味口诀，课堂游戏帮助孩子记忆和书写单词。"
      }
    ],
    coupons: [
      {
        id: 1,
        condition: '满100元使用',
        reason: '订单未满100元',
        value: 20*100,
        name: '新年优惠促销',
        startAt: 1557910400,
        endAt: 1574592000,
        valueDesc: '100',
        unitDesc: '元',
        flag: true,
        status: ["领取", "去使用"],
        description: '周可寒、王梓晨均可使用此优惠券'
      },
      {
        id: 2,
        condition: '满200元使用',
        reason: '订单未满200元',
        value: 40*100,
        name: '新年优惠促销',
        startAt: 1559104000,
        endAt: 1574592000,
        valueDesc: '200',
        unitDesc: '元',
        flag: true,
        status: ["领取", "去使用"],
        description: '周可寒、王梓晨均可使用此优惠券'
      },
      {
        id: 3,
        condition: '满500元使用',
        reason: '订单未满500元',
        value: 100*100,
        name: '新年优惠促销',
        startAt: 1559104000,
        endAt: 1574592000,
        valueDesc: '500',
        unitDesc: '元',
        flag: true,
        status: ["领取", "去使用"],
        description: '周可寒、王梓晨均可使用此优惠券'
      },
    ],
    useCoupons: [

    ],
    disCoupons: [

    ]
  },
  mutations: {
      // drewCoupon(state){
      //   useCoupons.push(state)
      // }
      changeFlag(state){
        state
      }
  },//同步操作
  actions: {

  },//异步操作
  modules: {

  }
})
