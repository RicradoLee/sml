<template>
    <div class="app-sale">
        <!--顶部状态栏-->
        <div class='mui-row sale'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow' @click='backToOld'></span>
                    <span>卖出服务器</span>
                </div>
            </div>
        </div>

				<!--主体内容-->
        <div class='mui-row saleCon'>
					<div class='mui-col-xs-5'>
						<img src="static/img/@3x/$.png">
					</div>
					<div class='mui-col-xs-7'>
						<div class='mui-row'>
							<p class='mui-col-xs-12 firstT'>名称:xxxx</p>
							<p class='mui-col-xs-12 firstT'>描述:<span class='secT'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste quae aut harum molestiae nulla libero est maxime nobis, fuga nihil, voluptas ducimus similique officia incidunt! Dicta aperiam adipisci sed eligendi.</span></p>
						</div>
					</div>
        </div>
				<div class='mui-col-xs-12 buttns'>
					<div>
						<p class='firstT'>可购入数量:{{upNum}}</p>
					</div>
					<div>
						<button type="button" class="mui-btn mui-btn-primary mui-btn-outlined" @click="redNum">-</button>
							<span class='secT'>{{num}}</span>
						<button type="button" class="mui-btn mui-btn-primary mui-btn-outlined" @click='addNum'>+</button>
					</div>
				</div>
				<button type="button" class="mui-btn mui-btn-primary mui-btn-outlined ui-btn-lg">提交</button>
        
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:0,
            upNum:20
        }
    },
    methods:{
        backToOld(){
            this.$router.go(-1);
        },
        addNum(){
            this.num++;
        },
        redNum(){
            if(this.num >= 0){
                this.num--;
            }
        }
    }    
}
</script>
<style lang="less">
tbody{
    .tbody{
        .a-btn{
            text-decoration: none;
            color: rgb(255, 0, 0);
            font-size: 0.25rem;
            width: 4px;
            height: 4px;
            border: 1px solid #000;
        }
    }
}
.app-sale .firstT{
  font-size:21px;
  color:#000;
}
.app-sale .secT{
  color:#000;
  font-size:14px;
}

.grfwq{
    z-index: 1;
    font-size: 0.3rem;
}
tbody{
    .tbody{
        width: 100%;
        height: 6rem;
        background: #ffffff;
        .a-btn{
            text-decoration: none;
            color: rgb(255, 0, 0);
            font-size: 0.25rem;
            width: 4px;
            height: 4px;
            border: 1px solid #000;
        }
    }
}
.sale .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.sale .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.sale .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.sale .back span:nth-child(1){
  margin-left:3%;
}
.sale .back span:nth-child(2){
  margin:0 auto !important;
}

.buttns,.buttns>div:nth-child(2){
	display:flex;
	justify-content:center;
	align-items:center;
}
.buttns div{
	width:50%;
}
.buttns button{
	width:30px;
	height:30px;
	padding:0;
}
.buttns .secT{
	margin:0 12px;
}

.saleCon{
	margin-top:5%;
}
.saleCon>div:first-child{
	margin-top:15%;
}

.saleCon>div:last-child>div p{
	margin-bottom:5%;
}
</style>
