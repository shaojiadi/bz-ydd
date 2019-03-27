const express=require('express');
const bodyParser=require('body-parser');
const pool=require('./pool')
var app=express();
app.listen(3000,(err)=>{
    console.log('服务器启动');
})
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));

/*给小程序首页返回轮播数据*/
app.get('/imagelist',(req,res)=>{
    var rows=[
        {code:1,img_url:'http://127.0.0.1:3000/img/1.jpg'},
        {code:2,img_url:'http://127.0.0.1:3000/img/2.jpg'},
        {code:3,img_url:'http://127.0.0.1:3000/img/3.jpg'},
        {code:4,img_url:'http://127.0.0.1:3000/img/4.jpg'}
    ];
    res.send(rows);
})

/* 返回小程序九宫格图片列表*/
app.get('/icons',(req,res)=>{
    var rows=[
        {id:1,img_url:'http://127.0.0.1:3000/img/czjlb.png'},
        {id:2,img_url:'http://127.0.0.1:3000/img/dljy.png'},
        {id:3,img_url:'http://127.0.0.1:3000/img/ds.png'},
        {id:4,img_url:'http://127.0.0.1:3000/img/dt.png'},
        {id:5,img_url:'http://127.0.0.1:3000/img/esc.png'},
        {id:6,img_url:'http://127.0.0.1:3000/img/fw.png'},
        {id:7,img_url:'http://127.0.0.1:3000/img/gxh.png'},
        {id:8,img_url:'http://127.0.0.1:3000/img/weixiu.png'}
    ];
    res.send(rows);
})

    /*车主俱乐部轮播图*/
app.get('/navlists',(req,res)=>{
    var rows=[
        {code:1,img_url:'http://127.0.0.1:3000/img/banner1.jpg'},
        {code:2,img_url:'http://127.0.0.1:3000/img/banner2.jpg'},
        {code:3,img_url:'http://127.0.0.1:3000/img/banner3.jpg'},
        {code:4,img_url:'http://127.0.0.1:3000/img/banner4.jpg'}
    ];
    res.send(rows);
})
    /*车主俱乐部导航快*/
app.get('/bind',(req,res)=>{
    var rows=[
        {code:1,img_url:'http://127.0.0.1:3000/img/me-1.jpg'},
        {code:2,img_url:'http://127.0.0.1:3000/img/me-2.jpg'},
        {code:3,img_url:'http://127.0.0.1:3000/img/me-3.jpg'},
        {code:4,img_url:'http://127.0.0.1:3000/img/me-4.jpg'},
        {code:5,img_url:'http://127.0.0.1:3000/img/me-5.jpg'},
        {code:6,img_url:'http://127.0.0.1:3000/img/me-6.jpg'},
        {code:7,img_url:'http://127.0.0.1:3000/img/me-7.png'},
        {code:8,img_url:'http://127.0.0.1:3000/img/me-8.jpg'}
    ];
    res.send(rows);
})