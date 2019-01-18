const express=require('express');
//const pool=require('./pool');
const cors=require("cors");
const bodyParser=require('body-parser');



var app=express();

//解析字符串中间件
app.use(bodyParser.urlencoded({
  entended:false
}));

//接收来自XX网址的数据请求 解决跨域
app.use(cors({
  origin:["http://127.0.0.1:8080","http://localhost:8080"],
  credentials:true
}));

app.use(express.static(__dirname+"/public"));


app.listen(3001);

app.get('/gettoken',(req,res)=>{
  console.log(req.query);
  res.send({
    getAuthToken:Math.round(Math.random()*5000+1)
  });
});

app.get('/login',(req,res)=>{
  console.log(req.query);
});

app.post('/login',(req,res)=>{
  console.log(req.body);
  let loginData={
    type:201,
    data:{
      msg:'successed'
    }
  }
  res.send(loginData);
});


app.post('/reg',(req,res)=>{
  console.log(req.body);
  let nextData={
    type:101,
    data:{
      authNote:Math.round(Math.random()*100000+100000)
    }
  }
  res.send(nextData);
});

app.post('/regAuth',(req,res)=>{
  console.log(req.body);
  let nextData={
    type:103,
    data:{
      msg:'successed'
    }
  }
  res.send(nextData);
});




app.get('/forPwd',(req,res)=>{
  console.log(req.query);
  res.send({
    data:{
      getAuthToken:Math.round(Math.random()*1000+1000)
    }
  });
});

app.post('/forPwd',(req,res)=>{
  console.log(req.body);
  switch(req.body.type){

    case 205:
      res.send({
        type:206,
        data:{
          AuthToken:Math.round(Math.random()*1000+1000),
          user:req.body.data.user
        }
      });
    break;

    case 207:
      res.send({
        type:208,
        data:{
          sixAuth:Math.round(Math.random()*100000+100000),
          user:req.body.data.user
        }
      });
    break;

    case 209:
      res.send({
        type:210,
        data:{
          msg:'change succeed',
          user:req.body.data.user
        }
      });
    break;
  }
});




app.post('/home',(req,res)=>{
  console.log(res.body);
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
  console.log(res.body);
  let middleData={
    type:401,
    data:{
        service:18,
        haveExpired:12,
        canSale:10,
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

