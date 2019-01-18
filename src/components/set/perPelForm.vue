<template>
    <div class="cPwd">
        <!-- 个人信息 -->

        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item  ui-border-b">
                    <label>
                        账号
                    </label>
                    <p style="margin-left:10px;">{{perForm.data.user}}</p>
                </div>
                <div class="ui-form-item ui-form-item-link ui-border-b" @click="cSafeCode">
                    <label>
                        安全码
                    </label>
                    <p style="margin-left:10px;">{{perForm.data.safeCode}}</p>
                </div>
                <div class="ui-form-item ui-form-item-link ui-border-b" @click="cGetId">
                    <label>
                        收款账号
                    </label>
                    <p style="margin-left:10px;">{{perForm.data.getId}}</p>
                </div>
                <div class="ui-form-item ui-form-item-link ui-border-b" @click="cPhone">
                    <label>
                        手机号
                    </label>
                    <p style="margin-left:10px;">{{perForm.data.phone}}</p>
                </div>
                <div class="ui-form-item ui-form-item-link ui-border-b" @click="cQQ">
                    <label>
                        QQ号
                    </label>
                    <p style="margin-left:10px;">{{perForm.data.QQ}}</p>
                </div>
                <div class="ui-form-item ui-form-item-link ui-border-b" @click="cEmail">
                    <label>
                        邮箱地址
                    </label>
                    <p style="margin-left:10px;">{{perForm.data.email}}</p>
                </div>

                <!-- 修改 -->
                <!-- <div class="ui-btn-wrap">
                    <button class="ui-btn-lg ui-btn-primary">
                        修改
                    </button>
                </div> -->

            </form>
        </div>


    </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
      showed: false,
      againPwd: null,
      perForm: {
        type: 1001,
        data: {
          user: "asdfasfdas",
          safeCode: "asdfsadfasd",
          getId: "nasdfasfdsafull",
          phone: 18519182257,
          email: null,
          QQ: null
        }
      }
    };
  },
  created() {},
  watch: {},
  methods: {
    cEmail() {
      this.$router.push("/setting/cemail");
    },
    cQQ() {
      this.$router.push("/setting/cQQ");
    },
    cPhone() {
      this.$router.push("/setting/cphone");
    },
    cGetId() {
      this.$router.push("/setting/cGetId");
    },
    cSafeCode() {
      this.$router.push("/setting/cSafeCode");
    },
    clearUser() {
      this.perForm.data.user = null;
    },
    clearSafeCode() {
      this.perForm.data.safeCode = null;
    },
    clearGetId() {
      this.perForm.data.getId = null;
    },
    clearPhone() {
      this.perForm.data.phone = null;
    },
    clearQQ() {
      this.perForm.data.QQ = null;
    },
    clearEmail() {
      this.perForm.data.email = null;
    }
  }
};
</script>
<style lang="less">
</style>
