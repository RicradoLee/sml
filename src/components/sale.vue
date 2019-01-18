<template>
    <div class="appSale">
        <!-- <h1>购入资产</h1> -->
        <!-- tbody -->
        <tbody>
            <div  class="tbody pa tr t42 l50">
                <p class="pa tr t5 l50 grfwq">卖出服务器</p>
                <img src="static/img/@3x/server.png" class="pa tr t25 l25">
                <p class="pa tr t20 l70">名称：XXXXX</p>
                <p class="pa tr t25 l70">描述：XXXX</p>
                <p class="pa tr t75 l70">数量：
                    <a href="#" class="a-btn" @click="redNum">-</a>
                        {{num}}
                    <a href="#" class="a-btn" @click="addNum">+</a>
                </p>
                <p class="pa tr t80 l70">可卖出数量：20</p>
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
</style>
