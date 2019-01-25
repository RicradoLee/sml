<template>
    <div class="app-LeavrMsg">
    <!--顶部页面提示-->
    <div class='mui-row msg'>
      <div class='mui-col-xs-12'>
          <div class='grid-content bg-purple-dark back'>
            <span class='arrow' @click='backToOld'></span>
            <span>留言</span>
          </div>
      </div>
    </div>

		<div class='mui-row msgDet'>
			<div class='mui-col-xs-12'>
				<p class='firstT'>交易号:{{busId}}</p>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT'>投诉类型:xxxxx</p>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT'>发起人:{{user}}</p>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT'>投诉时间:1/1 15:49:40</p>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT'>留言</p>
				<textarea cols="20" rows="5"></textarea>
			</div>
			<div class='mui-col-xs-12'>
				<p class='firstT'>凭证：</p>
				<img src="static/img/@3x/$.png">
				<img src="static/img/@3x/$.png">
				<img src="static/img/@3x/$.png">
			</div>
		</div>



        
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
.msg{
	width:100%;
}
.msg .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.msg .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.msg .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.msg .back span:nth-child(1){
  margin-left:5%;
}
.msg .back span:nth-child(2){
  margin:0 auto !important;
}
.app-LeavrMsg p.firstT{
  font-size:18px;
  color:#000;
}
.app-LeavrMsg p.secT{
  color:#000;
  font-size:14px;
}
.app-LeavrMsg p,.app-LeavrMsg textarea{
	display:inline-block;
}
.app-LeavrMsg{
	display:flex;
	flex-direction:column;
	align-items:center;
}


.myProof{
  display:flex;
  flex-direction:row;
  align-items:start;
  margin-top:2%;
}
.myProof div:nth-child(1) p{
  margin-top:40%;
}

.msgDet{
	width:70%;
}
.msgDet>div{
	margin-top:5%;
	display:flex;
	flex-direction:column;
	align-items:start;
	justify-content:center;
}
.msgDet>div:nth-child(5){
	flex-direction:row;
}
.msgDet>div:nth-child(5) textarea{
	width:81%;
	margin-left:5%;
}
.msgDet>div:last-child{
	flex-direction:row;
	justify-content:start;
}
.msgDet>div:last-child img{
	width:25%;
	margin-right:5%;
}
.msgDet>div:last-child p{
	white-space:nowrap;
	margin-top:13%;
}
</style>
