<template>
    <div class="cEmail">
        <!-- 修改邮箱地址 -->

        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item ui-border-b">
                    <label>
                        手机号
                    </label>
                    <input type="password" placeholder="手机号" v-model="cEmail.data.phone">
                    <a href="#" class="ui-icon-close" @click="clearPhone">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        验证码
                    </label>
                    <input type="password" placeholder="6位验证码" v-model="cEmail.data.auth">
                    <a href="#" class="ui-icon-close" @click="clearAuth">
                    </a>
                </div>
                <div class="ui-form-item ui-border-b">
                    <label>
                        邮箱账号
                    </label>
                    <input type="password" placeholder="邮箱地址" v-model="cEmail.data.email">
                    <a href="#" class="ui-icon-close" @click="clearEmail">
                    </a>
                </div>
                <div class="ui-btn-wrap">
                    <button class="ui-btn-lg ui-btn-primary" @click="checkAndSend">
                        修改
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
      cEmail: {
        type: 1300,
        data: {
          user: null,
          token: null,
          phone: null,
          auth: null,
          email: null
        }
      }
    };
  },
  created() {},
  watch: {},
  methods: {
    checkAndSend() {
      let url = "http://192.168.199.101:3001/cGetId";
      this.axios
        .post(url, this.qs.stringify(this.cGetId), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          console.log(res.data);
          if (res.data.type == 1301 && res.data.msg == "change succeed") {
            Toast({
              message: "修改成功",
              iconClass: "icon icon-success"
            });
          }
        });
    },
    clearPhone() {
      this.cEmail.data.phone = null;
    },
    clearAuth() {
      this.cEmail.data.auth = null;
    },
    clearEmail() {
      this.cEmail.data.email = null;
    }
  }
};
</script>
<style lang="less">
</style>
