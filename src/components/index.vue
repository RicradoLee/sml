<template>
  <div class='app-index'>
    <!--顶部状态栏-->
    <div class='top'>
      <div class='mui-row'>
        <div class='mui-col-xs-12'>
          <mt-search v-model="searchVal" cancel-text="取消" placeholder="基金名称/基金代码/基金经理"></mt-search>
        </div>
      </div>
      <!--未登录-->
      <div class='mui-row unlog' v-if='!uname'>
        <p class='topTitle'>服务客户5000万+</p>
        <p class='topTitle'>累计收益900亿+</p>
        <router-link to='/login'><button type="button" class="mui-btn mui-btn-outlined topTitle">登录/注册</button></router-link>
      </div>
      <!--已登录-->
      <div class='mui-row myMoney' v-else>
        <p class='topTitle'>总资产(元)</p>
        <router-link to='/home'><p class='topTitle arrow'>16.43</p></router-link>
        <div>
          <p class='topTitle'>昨日收益 0.00&nbsp;&nbsp;|&nbsp;&nbsp;累计收益 0.01</p>
        </div>
      </div>
    </div>
    
    <!--轮播图-->
    <mt-swipe :auto="1000">
      <mt-swipe-item><img src="static/img/@3x/1.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="static/img/@3x/2.jpg" /></mt-swipe-item>
      <mt-swipe-item><img src="static/img/@3x/3.jpg" /></mt-swipe-item>
    </mt-swipe>

    <!--推荐-->
    <div class='send'>
      <p>精品推荐</p>
      <ul>
        <li>
          <div>
            <p>10.40%</p>
          </div>
          <div>
            <p>固收老手祝你精选信用债</p>
          </div>
        </li>
        <li>
          <div>
            <p>1.46%</p>
          </div>
          <div>
            <p>中小盘王牌指数基</p>
          </div>
        </li>
      </ul>
    </div>

    <div class='send'>
      <p>人气之选</p>
      <ul>
        <li>
          <div>
            <p>10.40%</p>
          </div>
          <div>
            <p>固收老手祝你精选信用债</p>
          </div>
        </li>
        <li>
          <div>
            <p>1.46%</p>
          </div>
          <div>
            <p>中小盘王牌指数基</p>
          </div>
        </li>
      </ul>
    </div>

    <div style='height:200px;'></div>    

  </div>
</template>

<script>
import { Search } from 'mint-ui';
import { Swipe, SwipeItem } from 'mint-ui';
export default{
  data(){
    return {
      searchVal:null,
      uname:false
    }
  },
  methods: {
    
  },
  created() {
    if(sessionStorage.getItem('email')){
      this.uname=true;
    }
  },
  mounted() {
    document.querySelector('.mint-searchbar-core').setAttribute('type','');//去除样式影响
  },
}
</script>

<style lang='less'>
p{margin:0;padding:0;}
.top,{
  background-color:#1E90FF;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
}
.mint-search{
  margin-top:5%;
  height:44px;
}

.top>div:first-child{
  width:90%;
}
.top>div:last-child{
  margin-top:4%;
}
.topTitle{
  color:#fff;
  font-size:18px;
}
button.topTitle,.myMoney p:last-child{
  font-size:14px;
  margin-bottom:5%;
}

.myMoney{
  display:flex;
  flex-direction:column;
}
.myMoney p{
  font-size:14px;
}
.myMoney>a .arrow{
  font-size:24px;
}
.myMoney>a{
  margin-top:4%;
}
.myMoney .arrow{
  display:flex;
  align-items:center;
}
.myMoney .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(45deg);
}
.topTitle.arrow{
  margin-left:33%;
}

.mint-swipe-items-wrap{
  height:200px;
  margin-top:4%;
}
.mint-swipe-items-wrap img{
  width:100%;
}

.send{
  margin-top:4%;
}
.send ul li p:nth-child(1){
  color:#000;
}
.send ul li div:nth-child(1) p:nth-child(1){
  color:#f00;
  font-size:20px;
}
.send>p{
  display:inline-block;
  margin-left:-80%;
  color:gray;
}
.send ul li div:nth-child(1){
  width:30%;
  border-right:1px solid gray;
}
.send ul li div:nth-child(2){
  width:70%;
}
.send ul li div p{
  margin:0 auto;
}
.send ul{
  border:1px solid gray;
}
.send ul li{
  display:flex;
  justify-content:start;
  margin-top:4%;
}
.send ul li:last-child{
  margin-bottom:4%;
}

.unlog p{
  margin-bottom:4%;
}
</style>