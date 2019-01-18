<template>
    <div class="cSafeCode">
        <!-- 修改安全码-->

        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item ui-border-b">
                    <label>
                        旧安全码
                    </label>
                    <input type="password" placeholder="旧安全码(若无，可不填)" v-model="cSafePwd.data.pastSafePwd">
                    <a href="#" class="ui-icon-close" @click="clearPastPwd">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        新安全码
                    </label>
                    <input type="password" placeholder="6位新安全码" v-model="cSafePwd.data.newSafePwd">
                    <a href="#" class="ui-icon-close" @click="clearNewPwd">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        重复密码
                    </label>
                    <input type="password" placeholder="再一次安全码" v-model="againSafePwd">
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
