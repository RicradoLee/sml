<template>
    <div class="app-Buy">
        <!--顶部状态栏-->
        <div class='mui-row buy'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow' @click='backToOld'></span>
                    <span>购入服务器</span>
                </div>
            </div>
        </div>
        <!-- <h1>购入资产</h1> -->
        <!-- tbody -->
        <tbody>
            <div  class="tbody pa tr t42 l50">
                <img src="static/img/@3x/$.png" class="pa tr t25 l25">
                <p class="pa tr t20 l70">名称：XXXXX</p>
                <p class="pa tr t25 l70">描述：XXXX</p>
                <p class="pa tr t75 l70">数量：
                    <a href="#" class="a-btn" @click="redNum">-</a>
                        {{num}}
                    <a href="#" class="a-btn" @click="addNum">+</a>
                </p>
                <p class="pa tr t80 l70">可购入数量：20</p>
                <button class="ui-btn-lg ui-btn-primary pa tr b0 l50">提交</button>
            </div> 
        </tbody>
    </div>
</template>
<script>
export default {
    data(){
        return{
            num:0
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
.buy .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.buy .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.buy .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.buy .back span:nth-child(1){
  margin-left:3%;
}
.buy .back span:nth-child(2){
  margin:0 auto !important;
}
</style>
