<template>
    <div class="app-cGetId">
      <!--顶部页面提示-->
        <div class='mui-row cId'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow' @click='backToOld'></span>
                    <span>修改收款账号</span>
                </div>
            </div>
        </div>
        <!-- 修改收款账号 -->
        <form class="mui-input-group" style='background-color:#efeff4;'>
            <div class="mui-input-row">
              <label>手机号</label>
            	<input type="text" class="mui-input-clear" placeholder="请输入手机号" v-model="cGetId.data.phone">
            </div>
						<div class="mui-input-row">
              <label>验证码</label>
            	<input type="text" class="mui-input-clear" placeholder="请输入6位验证码" v-model="cGetId.data.authToken">
            </div>
						<div class="mui-input-row">
              <label>新收款账号</label>
            	<input type="text" class="mui-input-clear" placeholder="请输入新收款账号" v-model="cGetId.data.newGetId">
            </div>
						<div class="mui-button-row">
			        <button type="button" class="mui-btn mui-btn-primary" @click="checkAndSend">确认</button>
    				</div>
        </form>

    </div>
</template>
<script>
import {Toast} from "mint-ui"
export default {
  data() {
    return {
      againPwd: null,
      cGetId: {
        type: 700,
        data: {
          user: null,
          token: null,
          phone: null,
          newGetId: null,
          authToken:null
        }
      }
    };
  },
  created() {},
  watch: {},
  methods: {
    checkAndSend() {
        let url = "http://192.168.199.101:3001/cGetId";
        this.axios.post(
            url,
            this.qs.stringify(this.cGetId),
            {
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded"
                }
            }
        )
        .then((res)=>{
            console.log(res.data);
            if(res.data.type == 701 && res.data.msg == "change succeed"){
                Toast({
                    message:"修改成功",
                    iconClass:"icon icon-success"
                });
            }
        }); 
    },
		backToOld(){
			this.$router.go(-1);
		},
  }
};
</script>
<style lang="less">
.cId .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.cId .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.cId .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.cId .back span:nth-child(1){
  margin-left:5%;
}
.cId .back span:nth-child(2){
  margin:0 auto !important;
}
form div:last-child button{
	width:100%;
}
</style>
