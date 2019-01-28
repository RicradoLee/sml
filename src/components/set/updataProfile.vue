<template>
  <div class='app-profile'>
    <!--顶部页面提示-->
    <div class='mui-row profile'>
        <div class='mui-col-xs-12'>
            <div class='grid-content bg-purple-dark back'>
                <span class='arrow' @click='backToOld'></span>
                <span>修改个人信息</span>
            </div>
        </div>
    </div>


    <ul class='revise'>
      <li>
        <p>姓名</p>
        <input type="text" placeholder='请输入您的姓名' />
      </li>
      <li>
        <p>年龄</p>
        <input type="text" placeholder='请输入年龄' />
      </li>
      <li>
        <p>出生日期</p>
        <input type="text" placeholder='请输入出生日期' />
      </li>
      <li>
        <p>家庭住址</p>
        <input type="text" placeholder='请输入家庭住址' />
      </li>
      <li>
        <p>电子邮箱</p>
        <input type="text" placeholder='请输入电子邮箱' />
      </li>
      <li>
        <p>身份证号</p>
        <input type="text" placeholder='请输入人身份证号' />
      </li>
      <li>
        <p>安全码</p>
        <input type="text" placeholder='请输入安全码' />
      </li>
      <li>
        <p>收款账号</p>
        <input type="text" placeholder='请输入收款账号' />
      </li>
      <li>
        <p>QQ号</p>
        <input type="text" placeholder='请输入QQ号' />
      </li>
      <li>
        <p>联系电话</p>
        <input type="text" placeholder='请输入联系电话' />
      </li>
      <li>
        <p>个人收款码</p>
        <div class="file-upload">
          <div class="file-upload-text">选择文件</div>
          <input name="mypic" class="file-upload-input" id="upfile" type="file" accept="image/*" @change='upFile' />
        </div>
        <p :class='upfile?"show":"hide"' class='fileToast'>图片上传完成</p>
      </li>
    </ul>

    <router-link to='/setting/perPelForm'><button type="button" class="mui-btn mui-btn-danger updata">确认提交</button></router-link>

    <div style='height:100px;'></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      upfile:false
    }
  },
  methods: {
    backToOld(){
      this.$router.go(-1);
    },
    upFile(e){
      let url = sessionStorage.getItem('serverIp')+"/upload";

      var formData = new FormData() // 声明一个FormData对象
      var formData = new window.FormData() // vue 中使用 window.FormData(),否则会报 'FormData isn't definded'
      formData.append('mypic', document.querySelector('input[type=file]').files[0]) // 'userfile' 这个名字要和后台获取文件的名字一样;是formData对象的键名
      
      var options = {  // 设置axios的参数
         url:url,
         data: formData,
         method: 'post',
         headers: { 
          'Content-Type': 'multipart/form-data'
         }
      }
      this.axios(options).then((res) => {
        if(res.data.code == 1)
        {
          this.upfile=true;
        }
        else
        {
          this.upfile=false;
        }
      }) // 发送请求
    }
  },
}
</script>

<style lang="">
.profile .arrow{
  display:flex;
  justify-content:space-between;
  align-items:center;
}
.profile .arrow::after{
  content:'';
  width:15px;
  height:15px;
  border-top:3px solid #ccc;
  border-right:3px solid #ccc;
  transform:rotate(225deg);
}
.profile .back{
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:start;
  width:100%;
}
.profile .back span:nth-child(1){
  margin-left:5%;
}
.profile .back span:nth-child(2){
  margin:0 auto !important;
}

.revise{
  width:85%;
  margin:0 auto;
  margin-top:5%;
}
.revise li{
  display:flex;
  flex-direction:column;
  justify-content:end;
  align-items:start;
  margin-bottom:18px;
  position:relative;
}
.revise li>p,.revise li>input{
  margin:0;
  padding:0;
}
.revise li>p{
  font-size:18px;
  margin-bottom:10px;
}
.revise li>input{
  border-radius:10px;
  text-indent:16px;
}

.file-upload {
  width: 60px;
  height: 26px;
  position: relative;
  overflow: hidden;
  border: 1px solid #0F996B ;
  display: inline-block;
  border-radius: 4px;
  font-size: 12px;
  color: #0F996B;
  text-align: center;
  line-height: 26px;
  float:left;
}
.file-upload-input {
  background-color: transparent;
  position: absolute;
  width: 999px;
  height: 999px;
  top: -10px;
  right: -10px;
  cursor: pointer;
}

.app-profile .updata{
  width:100%;
  background-color:#f90;
  border:none;
}
.app-profile .show{
  display:block;
}
.app-profile .hide{
  display:none;
}
.fileToast{
  position:absolute;
  top:36px;
  left:71px;
}
</style>