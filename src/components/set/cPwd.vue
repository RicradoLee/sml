<template>
    <div class="cPwd">
        <!-- 修改密码 -->

        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item ui-border-b">
                    <label>
                        旧密码
                    </label>
                    <input type="password" placeholder="旧密码" v-model="cPwd.data.pastPwd">
                    <a href="#" class="ui-icon-close" @click="clearPastPwd">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        新密码
                    </label>
                    <input type="password" placeholder="8-15位新密码" v-model="cPwd.data.newPwd">
                    <a href="#" class="ui-icon-close" @click="clearNewPwd">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        重复密码
                    </label>
                    <input type="password" placeholder="再一次密码" v-model="againPwd">
                    <a href="#" class="ui-icon-close" @click="clearAgainPwd">
                    </a>
                </div>
                <div class="ui-btn-wrap">
                    <button class="ui-btn-lg ui-btn-primary" @click="checkAndSendMsg">
                        确定
                    </button>
                </div>
            </form>
        </div>


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
      if (curVal != oldVal) {
        Toast("两次密码输入不同");
      }
    },
    clearPastPwd() {
      this.cPwd.data.pastPwd = null;
    },
    clearNewPwd() {
      this.cPwd.data.newPwd = null;
    },
    clearAgainPwd() {
      this.againPwd = null;
    }
  }
};
</script>
<style lang="less">
</style>
