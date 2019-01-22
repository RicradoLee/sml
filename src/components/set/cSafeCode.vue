<template>
    <div class="app-cSafeCode">
        <!--顶部页面提示-->
        <div class='mui-row cCode'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow' @click='backToOld'></span>
                    <span>修改密码</span>
                </div>
            </div>
        </div>
        <!-- 修改安全码-->
        <form class="mui-input-group" style='background-color:#efeff4;'>
            <div class="mui-input-row">
              <label>旧安全码</label>
            	<input type="text" class="mui-input-clear" placeholder="请输入旧安全码 若无 可不填" v-model="cSafePwd.data.pastSafePwd">
            </div>
						<div class="mui-input-row">
              <label>新安全码</label>
            	<input type="text" class="mui-input-clear" placeholder="请输入6位新安全码" v-model="cSafePwd.data.newSafePwd">
            </div>
						<div class="mui-input-row">
              <label>确认安全码</label>
            	<input type="text" class="mui-input-clear" placeholder="请再次输入新安全码" v-model="againSafePwd" @blur='checkSafeCode'>
            </div>
						<div class="mui-button-row">
			        <button type="button" class="mui-btn mui-btn-primary" @click="checkAndSendMsg">确认</button>
    				</div>
        </form>
    </div>
</template>
<script>
import{Toast} from "mint-ui"
export default {
  data() {
    return {
      againSafePwd: null,
      cSafePwd: {
        type: 600,
        data: {
          user: null,
          toke: null,
          pastSafePwd: null,
          newSafePwd: null
        }
      }
    };
  },
  created() {},
  watch: {},
  methods: {
		backToOld(){
			this.$router.go(-1);
		},
    checkAndSendMsg() {
      if (this.againSafePwd != this.cSafePwd.data.newSafePwd) {
        Toast(`两次安全码输入不同`);
      } else {
        console.log(this.cSafePwd);
        let url = "http://192.168.199.101:3001/cSafePwd";
        this.axios
          .post(url, this.qs.stringify(this.cSafePwd), {
            headers: {
              "Content-type": "application/x-www-form-urlencoded"
            }
          })
          .then(res => {
            console.log(res.data);
            if (re.data.type == 601 && res.data.data.msg == "change succeed") {
              Toast({
                message: "修改成功",
                iconClass: "icon icon-success"
              });
            }
          });
      }
    },
    checkSafeCode(){
      if (this.againSafePwd != this.cSafePwd.data.newSafePwd) {
        Toast(`两次安全码输入不同`);
      }
    }
  }
};
</script>
<style lang="less">
.cCode .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.cCode .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.cCode .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.cCode .back span:nth-child(1){
  margin-left:5%;
}
.cCode .back span:nth-child(2){
  margin:0 auto !important;
}

form div:last-child button{
	width:100%;
}
</style>
