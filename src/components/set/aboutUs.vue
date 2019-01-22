<template>
    <div class="app-aboutUs">
        <!--顶部页面提示-->
        <div class='mui-row about'>
            <div class='mui-col-xs-12'>
                <div class='grid-content bg-purple-dark back'>
                    <span class='arrow' @click='backToOld'></span>
                    <span>关于我们</span>
                </div>
            </div>
        </div>
        <!-- 关于我们 -->
        <div class="ui-form ui-border-t">
            <form action="">
                <div class="ui-form-item  ui-border-b">
                    <label>
                        版本号
                    </label>
                    <p style="margin-left:10px;">{{vesion}}</p>
                </div>
                <div class="ui-form-item  ui-border-b">
                    <label>
                        联系我们：
                    </label>
                    <p style="margin-left:10px;">{{phone}}</p>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
        vesion:"1.0.0",
        phone:189897897
    };
  },
  created() {},
  watch: {},
  methods: {
      backToOld(){
          this.$router.go(-1);
      }
  }
};
</script>
<style lang="less">
.about .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.about .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.about .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.about .back span:nth-child(1){
  margin-left:5%;
}
.about .back span:nth-child(2){
  margin:0 auto !important;
}
</style>
