<template>
    <div class="app-trade">
		<!--顶部页面提示-->
    <div class='mui-row trade'>
      <div class='mui-col-xs-12'>
          <div class='grid-content bg-purple-dark back'>
            <span class='arrow' @click='backToOld'></span>
            <span>交易纠纷</span>
          </div>
      </div>
    </div>

		<div class='mui-row detai'>
			<div class='mui-col-xs-12'>
				<p class='firstT'>交易号{{busId}}</p>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT'>纠纷类型：超时未确认</p>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT'>投诉时间：xxxxxxx</p>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT'>发起人{{user}}</p>
				<button>撤销投诉</button>
			</div>
		</div>
		
		<div style='width:100%;height:2px;background:#000;'></div>

		<div class='mui-row log'>
			<div class='mui-col-xs-12'>
				<p class='firstT' style='margin:0 auto;'>协商记录</p>
			</div>
			<div class='mui-col-xs-12'>
				<img src="static/img/@3x/$.png">
				<p class='firstT'>{{user}}</p>
				<p class='firstT'>时间占位符</p>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT'>留言：xxxxxxxxxxxxxxxx</p>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT'>凭证</p>
				<img src="static/img/@3x/$.png">
				<img src="static/img/@3x/$.png">
				<img src="static/img/@3x/$.png">
			</div>
		</div>

		<div style='width:100%;height:2px;background:#000;'></div>

		<div class='mui-row sys'>
			<div class='mui-col-xs-12'>
				<img src="static/img/@3x/$.png">
				<p class='firstT'>系统</p>
				<p class='firstT'>时间占位符</p>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT' style='margin:0 auto;'>用户xxx于xxx发起投诉</p>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT' style='margin:0 auto;'>请用户xxx在xxx前做出回应，若到期无回应则判定此次投诉成功</p>
			</div>
		</div>

		<div style='width:100%;height:2px;background:#000;'></div>

		<router-link to='/leaveMsg'><button>留言</button></router-link>

    <div style='height:200px;'></div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            busId:164567789713,
            user:"asdfsdf"
        }
    },
		methods: {
			backToOld(){
				this.$router.go(-1);
			}
		},   
}
</script>
<style lang="less">
.trade{
	width:100%;
}
.trade .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.trade .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.trade .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.trade .back span:nth-child(1){
  margin-left:5%;
}
.trade .back span:nth-child(2){
  margin:0 auto !important;
}
.app-trade .firstT{
  font-size:18px;
  color:#000;
}
.app-trade .secT{
  color:#000;
  font-size:14px;
}
.app-trade p{
	display:inline-block;
}
.app-trade{
	display:flex;
	flex-direction:column;
	align-items:center;
}

.detai,.log,.sys{
	width:70%;
}
.detai div,.log div,.sys div{
	margin-top:5%;
	display:flex;
	flex-direction:column;
	align-items:start;
	justify-content:center;
}
.detai div:nth-child(4),.log div:nth-child(2),.log div:nth-child(4),.sys div:nth-child(1){
	flex-direction:row;
	align-items:center;
	justify-content:space-between;
}

.app-trade>a>button,.app-trade>a{
	width:100%;
}
</style>
