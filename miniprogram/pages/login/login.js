// miniprogram/pages/login/login.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    redirect_url:''
  },
  login:function(e){
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      redirect_url: decodeURIComponent(options.redirec_url)
    })
  },
  login:function(e){
    let that = this;
    if (e.detail.userInfo){
      wx.navigateTo({
        url: '/'+that.data.redirect_url,
      })
    }else{
      //用户拒绝了授权
    }
  },
  getUserInfo:function(e){
    wx.getUserInfo({
      success(res) {
        console.log(res.userInfo)
      }
    })
  },
  check:function(e){
    wx.request({
      url: 'https://www.kklei.com/date',
      header: app.globalData.header
    })
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