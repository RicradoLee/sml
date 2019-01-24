<template>
  <div class='app-complain'>
    <!--顶部页面提示-->
    <div class='mui-row compl'>
      <div class='mui-col-xs-12'>
          <div class='grid-content bg-purple-dark back'>
            <span class='arrow' @click='backToOld'></span>
            <span>投诉</span>
          </div>
      </div>
    </div>

    <ul class='complInfo' v-if='complain'>
      <li>
        <p class='firstT'>交易号:xxxxxxxxxx</p>
      </li>
      <li>
        <div class="mui-input-row" style='border-top:1px solid #ddd;'>
          <label class="mui-navigate-right" href="#">投诉类型</label>
          <select name="select" id="select_k1" style='background-color:#efeff4;'>
            <option value="0"></option>
            <option value="1" selected="true">类型1</option>
            <option value="2">类型2</option>
            <option value="3">类型3</option>
            <option value="4">类型4</option>
            <option value="5">类型5</option>
            <option value="6">类型6</option>
            <option value="7">类型7</option>
          </select>
        </div>
      </li>
      <li>
        <form class="mui-input-group" style='background-color:#efeff4;'>
            <div class="mui-input-row">
                <label>QQ</label>
            <input type="text" class="mui-input-clear" placeholder="请输入QQ号">
            </div>
        </form>
      </li>
      <li>
        <div class='mui-row myProof'>
          <div class='mui-col-xs-3'>
            <p class='firstT'>凭证：</p>
          </div>
          <div class='mui-col-xs-3'>
            <img src="static/img/@3x/$.png">
          </div>
          <div class='mui-col-xs-3'>
            <img src="static/img/@3x/$.png">
          </div>
          <div class='mui-col-xs-3'>
            <img src="static/img/@3x/$.png">
          </div>
        </div>
      </li>
      <li>
        <form class="mui-input-group" style='background-color:#efeff4;'>
            <div class="mui-input-row">
                <label>留言</label>
            <input type="text" class="mui-input-clear" placeholder="请输入留言内容">
            </div>
        </form>
      </li>
      <li>
        <button type="button" class="mui-btn mui-btn-primary" @click='Complain'>确认</button>
      </li>
    </ul>


    
  </div>
</template>

<script>
export default{
  data(){
    return {
      complain:false,//判断投诉页面是否已经被点击过
    }
  },
  methods: {
    Complain(){
      sessionStorage.setItem('complain','true');
    },
    backToOld(){
      this.$router.go(-1);
    }
  },
  created() {
    if(!sessionStorage.getItem('complain'))//若获取不到投诉信息 即第一次进入 否则加载二次页面
    {
      this.complain=true;
    }
    else
    {
      this.complain=false;
      this.$router.push('/tradeDispute');
    }
  }
}
</script>

<style>
.compl .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.compl .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.compl .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.compl .back span:nth-child(1){
  margin-left:5%;
}
.compl .back span:nth-child(2){
  margin:0 auto !important;
}
.app-complain .firstT{
  font-size:18px;
  color:#000;
}
.app-complain .secT{
  color:#000;
  font-size:14px;
}

.myProof{
  display:flex;
  flex-direction:row;
  align-items:start;
  margin-top:2%;
}
.myProof div:nth-child(1) p{
  margin-top:40%;
}

.complInfo li:last-child button{
  width:100%;
}
</style>