// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navlists:[],
    bind:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  loadMoreBind: function () {
    wx.request({
      url: 'http://127.0.0.1:3000/bind',
      success: (res) => {
        this.setData({
          bind: res.data
        });
      }
    });
  },
  loadMore:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/navlists',
      success: (res) => {
        this.setData({
          navlists: res.data
        });
      }
    });
  },
  onLoad: function (options) {
    this.loadMore();
    this.loadMoreBind();
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