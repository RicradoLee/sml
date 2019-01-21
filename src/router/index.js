import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import reg from '@/components/register/reg'
import login from '@/components/login'
import home from '@/components/home'
import setting from '@/components/setting'
import middle from '@/components/middle'
import details from '@/components/details'
import orderUserInfo from '@/components/orderUserInfo'

import sale from '@/components/sale'
import buy from '@/components/buy'

import tranDetail from '@/components/transaction/tranDetail'
import tranComplain from '@/components/transaction/tranComplain'
import tradeDispute from '@/components/transaction/tradeDispute'
import leaveMsg from '@/components/transaction/leaveMsg'


import yieTran from '@/components/earning/yieTran'
import exchange from '@/components/earning/exchange'




import cPwd from '@/components/set/cPwd'
import cSafeCode from '@/components/set/cSafeCode'
import perPelForm from '@/components/set/perPelForm'
import cGetId from '@/components/set/cGetId'
import myInvCode from '@/components/set/myInvCode'
import mySup from '@/components/set/mySup'
import myTeam from '@/components/set/myTeam'
import team from '@/components/set/team/team'
import aboutUs from '@/components/set/aboutUs'
import cphone from '@/components/set/cphone'
import cQQ from '@/components/set/cQQ'
import cemail from '@/components/set/cemail'

Vue.use(Router)

export default new Router({
  linkActiveClass: 'mui-active',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/orderUserInfo',
      name:'orderUserInfo',
      component:orderUserInfo
    },
    {
      path:'/details',
      name:'details',
      component:details
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'home',
      component: home
    },
    {
      path: '/setting',
      name: 'setting',
      component: setting
    },
    {
      path: '/middle',
      name: 'middle',
      component: middle
    },
    {
      path: '/buy',
      name: 'buy',
      component: buy
    },
    {
      path: '/sale',
      name: 'sale',
      component: sale
    },
    {
      path: '/setting/cPwd',
      name: 'cPwd',
      component: cPwd
    },
    {
      path: '/setting/cSafeCode',
      name: 'cSafeCode',
      component: cSafeCode
    },
    {
      path: '/setting/perPelForm',
      name: 'perPelForm',
      component: perPelForm
    },
    {
      path: '/setting/cGetId',
      name: 'cGetId',
      component: cGetId
    },
    {
      path: '/setting/myInvCode',
      name: 'myInvCode',
      component: myInvCode
    },
    {
      path: '/setting/mySup',
      name: 'mySup',
      component: mySup
    },
    {
      path: '/setting/myTeam',
      name: 'myTeam',
      component: myTeam
    },
    {
      path: '/setting/aboutUs',
      name: 'aboutUs',
      component: aboutUs
    },
    {
      path: '/setting/myTeam/team',
      name: 'team',
      component: team
    },
    {
      path: '/setting/cphone',
      name: 'cphone',
      component: cphone
    },
    {
      path: '/setting/cQQ',
      name: 'cQQ',
      component: cQQ
    },
    {
      path: '/setting/cemail',
      name: 'cemail',
      component: cemail
    },
    {
      path: '/tranDetail',
      name: 'tranDetail',
      component: tranDetail
    },
    {
      path: '/tranComplain',
      name: 'tranComplain',
      component: tranComplain
    },
    {
      path: '/tradeDispute',
      name: 'tradeDispute',
      component: tradeDispute
    },
    {
      path: '/leaveMsg',
      name: 'leaveMsg',
      component: leaveMsg
    }
  ]
})
