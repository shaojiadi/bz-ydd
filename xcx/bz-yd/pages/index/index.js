//index.js
//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    navlist:[]
  },
  loadMoreNav: function () {
    //创建ajax请求 imagelist
    wx.request({
      url: 'http://127.0.0.1:3000/icons',
      success: (res) => {
        this.setData({
          navlist:res.data
        });
      }
    });
  },
  click:function(e){
   var id=e.target.dataset.id;
   if(id==1){
     wx:wx.navigateTo({
       url: "/pages/me/me",
     })
   }
  },
  loadMore:function(){
    //创建ajax请求 imagelist
    wx.request({
      url:'http://127.0.0.1:3000/imagelist',
      success:(res)=>{
        this.setData({
          list:res.data
        });
      }
    });
    //获取数据保存list
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore();
    this.loadMoreNav();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})