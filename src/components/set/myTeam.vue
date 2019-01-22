<template>
    <div class="app-mySups">
        <!--顶部页面提示-->
        <div class='mui-row sups'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow' @click='backToOld'></span>
                    <span>我的团队</span>
                </div>
            </div>
        </div>
        <!-- 我的团队 -->
        <div class="ui-form ui-border-t" >
            <form action="">
                <div class="ui-form-item ui-form-item-link ui-border-b"  v-for="(item,i) of jsonP" @click="toIndexPage(i);">
                    <label>
                        第{{i}}级
                    </label>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      jsonP: [{}, {}, {}, {}],
      getTeam: {
        type: 800,
        data: {
          user: null,
          token: null
        }
      }
    };
  },
  created() {
      
  },
  watch: {},
  methods: {
    backToOld(){
      this.$router.go(-1);
    },
    toIndexPage(i) {
        this.$router.push('/setting/myTeam/team/?page' + i);
    },
    getTeams() {
      let url = sessionStorage.getItem('serverIp')+"/getTeam";
      this.axios
        .post(url, this.qs.stringify(this.getSup), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        })
        .then(res => {
          console.log(res.data);
          if (res.data.type == 801) {
            this.Sup = res.data.data.Sup;
          }
        });
    }
  }
};
</script>
<style lang="less">
.sups .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.sups .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.sups .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.sups .back span:nth-child(1){
  margin-left:5%;
}
.sups .back span:nth-child(2){
  margin:0 auto !important;
}
</style>
