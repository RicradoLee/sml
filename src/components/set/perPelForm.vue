<template>
    <div class="app-cPwd">
        <!--顶部页面提示-->
        <div class='mui-row cCode'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow' @click='backToOld'></span>
                    <span>查看个人信息</span>
                </div>
            </div>
        </div>
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
            </form>
        </div>

        <router-link to='/updataProfile'><button type="button" class="mui-btn mui-btn-danger updata">修改个人信息</button></router-link>


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
    backToOld(){
        this.$router.go(-1);
    },
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

.updata{
  width:100%;
}
</style>
