const express=require('express');
//const pool=require('./pool');
const cors=require("cors");
const bodyParser=require('body-parser');
const fs=require('fs');//文件系统模块 管理文件
const multer=require('multer');
const qs=require('qs');



var app=express();

//解析字符串中间件
app.use(bodyParser.urlencoded({
	extended: false
}));

//接收来自XX网址的数据请求 解决跨域
app.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}));

app.use(express.static(__dirname+"/public"));


app.listen(3001);

app.get('/gettoken',(req,res)=>{
  res.send({
    getAuthToken:Math.round(Math.random()*5000+1)
  });
});

app.get('/login',(req,res)=>{
});

app.post('/login',(req,res)=>{
	/*链接数据库查询用户信息并得到返回结果*/
  let loginData={
		type:200,
		data:{
			id:1,
			user:'测试@qq.com'
		}
	};
  res.send(loginData);
});


app.post('/reg',(req,res)=>{
  let nextData={
    type:101,
    data:{
      authNote:Math.round(Math.random()*100000+100000)
    }
  }
  res.send(nextData);
});

app.post('/regAuth',(req,res)=>{
  let nextData={
    type:103,
    data:{
      msg:'successed'
    }
  }
  res.send(nextData);
});




app.get('/forPwd',(req,res)=>{
  res.send({
    data:{
      getAuthToken:Math.round(Math.random()*1000+1000)
    }
  });
});

app.post('/forPwd',(req,res)=>{
	var temp=qs.parse(req.body);
	console.log(temp);
	/*处理密码修改*/
	res.send({
		type:206,
		msg:'密码修改成功'
	});
});




app.post('/home',(req,res)=>{
  let homdData={
    type:301,
    data:{
      totalAssets:521,
      balance:250,
      yesEarnings:521,
      addEarnings:521,
      invitation:{
        num:0,
        isCode:false,
        invUser:"asdfsadf",
        money:1324,
        invDate:new Date()
      },
      dealArr:[
        {
          invAmount:521524,
          dealId:25125521252,
          statusCode:'申购中',
          expireDate:new Date(),
          proData:'七天',
          estAmount:1254.85
        },
        {
          saleAmount:521524,
          dealId:25125521252,
          statusCode:'已完成',
          expireDate:new Date(),
          saleType:'提现',
          reaAmount:1254.85
        }
      ]
    }
  }
  res.send(homdData);
});


app.post('/middle',(req,res)=>{
  let middleData={
    type:401,
    data:{
        service:18,//运行中
        haveExpired:12,//已到期
        canSale:10,//可售出
        todayAmount:226.00,
        myAmount:338.08,
        serviceForm:[
            {
                sId:9527,
                slode:"运行中",
                createDate:new Date(),
                delDate:new Date(),
                haveAmount:155
            }
        ]
    }
  }
  res.send(middleData);
});

//创建multer对象并指定上传文件目录
var upload=multer({dest:'upload/'});
//创建处理上传请求 /upload 上传单个文件
app.post('/upload',upload.single('mypic'),(req,res)=>{//'mypic'指定上传文件表单name='mypic'
	//获取文件大小
	var size=req.file.size/1024/1024;
	if(size>2)
	{
		res.send({code:-1,msg:'上传文件过大 文件限制为2MB'});
		return;
	}
	//获取文件类型
	var type=req.file.mimetype;
	if(type.indexOf('image') == -1)
	{
		res.send({code:-1,msg:'只能上传图片文件'});
		return;
	}
	//为文件创建新文件名
	var src=req.file.originalname;//获取原文件名
	var des=`./upload/${new Date().getTime()}${Math.floor(Math.random()*9999)}.${src.split('.')[src.split('.').length-1]}`;//将时间戳+四位随机数作为新的文件名 按照.截取源文件名并取其文件类型与新文件名组合
	//将临时文件移动到upload目录下
	fs.renameSync(req.file.path,des);
	//返回上传成功信息
	res.send({code:1,msg:'上传成功'});
})

app.post('/profile',(req,res)=>{
	console.log(req.body);
	/*根据用户ID查询出用户所有信息*/
	res.send({type:200,data:{
          user: "测试@qq.com",
          safeCode: "asdfsadfasd",
          getId: "xxxxxxxxxxx",
          phone: 18519182257,
          email: null,
          QQ: null
        }});
})