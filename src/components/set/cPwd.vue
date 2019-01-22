<template>
    <div class="app-cPwd">
        <!--顶部页面提示-->
        <div class='mui-row cpwd'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow' @click='backToOld'></span>
                    <span>修改密码</span>
                </div>
            </div>
        </div>
        <!-- 修改密码 -->
        <form class="mui-input-group" style='background-color:#efeff4;'>
            <div class="mui-input-row">
              <label>旧密码</label>
            	<input type="text" class="mui-input-clear" placeholder="请输入旧密码" v-model="cPwd.data.pastPwd">
            </div>
						<div class="mui-input-row">
              <label>新密码</label>
            	<input type="text" class="mui-input-clear" placeholder="请输入8-15位新密码" v-model="cPwd.data.newPwd">
            </div>
						<div class="mui-input-row">
              <label>确认密码</label>
            	<input type="text" class="mui-input-clear" placeholder="请再次输入新密码" v-model="againPwd" @blur='checkPwd'>
            </div>
						<div class="mui-button-row">
			        <button type="button" class="mui-btn mui-btn-primary" @click="checkAndSendMsg">确认</button>
    				</div>
        </form>

    </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      againPwd: null,
      cPwd: {
        type: 500,
        data: {
          user: null,
          token: null,
          pastPwd: null,
          newPwd: null
        }
      }
    };
  },
  created() {},
  watch: {
    // againPwd: "checkPwd"
  },
  methods: {
		backToOld(){
			this.$router.go(-1);
		},
    checkAndSendMsg() {
        if(this.againPwd != this.cPwd.data.newPwd){
            Toast(`两次密码输入不同`);
        }else{
            console.log(this.cPwd);
            let url = "http://192.168.199.101:3001/cPwd"
            this.axios.post(
                url,
                this.qs.stringify(this.cPwd),
                {
                    headers:{
                        "Content-type":"application/x-www-form-urlencoded"
                    }
                }
            )
            .then((res)=>{
                console.log(res.data);
                if(re.data.type == 501 && res.data.data.msg == "change succeed"){
                    Toast({
                        message: '修改成功',
                        iconClass: 'icon icon-success'
                    });
                }
            });
        }
    },
    checkPwd(curVal, oldVal) {
      if (this.againPwd != this.cPwd.data.newPwd) {
        Toast("两次密码输入不同");
      }
    }
  }
};
</script>
<style lang="less">
.cpwd .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.cpwd .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.cpwd .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.cpwd .back span:nth-child(1){
  margin-left:5%;
}
.cpwd .back span:nth-child(2){
  margin:0 auto !important;
}

form div:last-child button{
	width:100%;
}
</style>
