<template>
    <div class="appMiddle">
				<!--顶部页面提示-->
				<div class='mui-row asset'>
					<div class='mui-col-xs-12'>
							<div class='grid-content bg-purple-dark back'>
								<span>申购资产</span>
							</div>
					</div>
				</div>
        <!-- 运行状态 -->
        <div>
					<ul class='myState'>
						<li><p>运行中：&nbsp;&nbsp;&nbsp;&nbsp;{{middleData.data.service}}(台)</p></li>
						<li><p>已到期：&nbsp;&nbsp;&nbsp;&nbsp;{{middleData.data.haveExpired}}(台)</p></li>
						<li><p>可售出：&nbsp;&nbsp;&nbsp;&nbsp;{{middleData.data.canSale}}(台)</p></li>
					</ul>
					<ul class='myAmount'>
						<li>
							<p>今日收益(元)</p>
							<p>{{middleData.data.todayAmount}}</p>
						</li>
						<li>
							<p>我的收益(元)</p>
							<p>{{middleData.data.myAmount}}</p>
						</li>
					</ul>
				</div>

				<!--中间收益选项-->
			<div class='income'>
        <div>
          <mt-cell title='收益兑换'>
            <div class='arrow'></div>
          </mt-cell>
        </div>
        <div>
          <mt-cell title='提取收益'>
            <div class='arrow'></div>
          </mt-cell>
        </div>
      </div>

			<!--订单详情-->
			<div class='orderDet' v-for='item of middleData.data.serviceForm'>
				<div class='upDet'>
					<div class='lImg'><img src="static/img/@3x/收藏.png" class="indentImg"></div>
					<div class='upMiddle'>
						<p>编号{{item.sId}}</p>
						<p>{{item.slode}}...</p>
					</div>
					<div class='rDet'>
						<p>已收益(元)</p>
						<p>{{item.haveAmount}}</p>
					</div>
				</div>
				<div class='downTime'>
					<p>创建时间:{{item.createDate | dateFilter}}</p>
					<p>到期时间:{{item.delDate | dateFilter }}</p>
				</div>
			</div>
			
        
			<div style='height:20px;'></div>
    </div>
</template>
<script>
export default {
  name: "appMiddle",
  data() {
    return {
        middle:null,
        middleData:{
            type:401,
            data:{
                service:18,
                haveExpired:12,
                canSale:10,
                todayAmount:226.00,
                myAmount:338.08,
                serviceForm:[
                    {
                        sId:9527,
                        slode:"运行中",
                        createDate:new Date(),
                        delDate:new Date(),
                        haveAmount:155
                    }
                ]
            }
        }
    };
  },created(){
    this.getMiddleData();
  },
  methods:{
    getMiddleData(){
        let url = sessionStorage.getItem('serverIp')+"/middle";
        this.middle = this.$store.state.loginData;
        this.axios.post(
          url,
          this.qs.stringify(this.middle),{
            headers:{
              "Content-Type": "application/x-www-form-urlencoded"
            }
          }
        )
        .then((res)=>{
          console.log(res.data);
          this.middleData = res.data;
      });

    }
  }
};
</script>
<style lang="less">
ul{
	list-style:none;
}

.myState{
	margin-top:5%;
	margin-left:-1%;
}
.myState p{
	color:#f00;
	font-size:16px;
}

.myAmount{
	display:flex;
	justify-content:space-around;
}
.myAmount li{
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
	width:50%;
	border-top:2px solid #000;
	border-bottom:2px solid #000;
	padding:5px 0;
}
.myAmount li:nth-child(1){
	border-right:2px solid #000;
}
.myAmount li p{
	color:#000;
	font-size:16px;
	margin:0;
	padding:0;
}

.mint-cell-text{
	margin-left:40px;
}

.orderDet{
	margin-top:5%;
	border-bottom:2px solid #000;
}
.orderDet p{
	margin:0;
	padding:0;
	color:#000;
}

.upDet{
	display:flex;
	justify-content:space-around;
}
.upDet .lImg{
	width:30%
}
.lImg img{
	width:60%;
}
.upDet .upMiddle,.upDet .rDet{
	display:flex;
	flex-direction:column;
	justify-content:center;
	align-items:center;
}
.upDet .upMiddle p:nth-child(1){
	float:left;
}
.upDet .rDet{
	align-items:start;
}
.upDet .upMiddle p,.upDet .rDet p{
	margin-top:6px;
	font-size:16px;
}

.downTime{
	display:flex;
	justify-content:space-between;
	margin-top:8px;
}
.downTime p:nth-child(1){
	margin-left:7%;
}
.downTime p:nth-child(2){
	margin-right:7%;
}

.income .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.income .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(45deg);
}
.asset .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.asset .back span:nth-child(1){
  margin:0 auto;
}
</style>
