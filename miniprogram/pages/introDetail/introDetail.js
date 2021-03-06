// miniprogram/pages/introDetail/introDetail.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    introInfo: null,
    likeNum: 0,
    phone: '',
    introId: '',
    needAd:false,//是否弹出广告

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let needAdv = false
    if (options.needAd && options.needAd == 'true'){
      needAdv = true
    }
    /**接收参数 */
    this.setData({
      introId: options.introId,
      needAd: needAdv
    })
    this.getIntro()
  },
  /**
   * 根据id查询简历
   */
  getIntro: function () {
    wx.showLoading({
      title: '加载中',
    })
    let _this = this;
    wx.request({
      url: 'https://www.kklei.com/intro_info',
      data: {
        id: _this.data.introId
      },
      header: app.globalData.header,
      success: (result) => {
        //console.log(result)
        _this.setData({
          phone: result.data.obj.phone,
          introInfo: JSON.parse(result.data.obj.introInfo),
          likeNum: result.data.obj.likeNum,
        })
        
        wx.hideLoading()
      },
      fail: (err) => {
        wx.showToast({
          title: '加载失败',
          icon: 'none',
        });
      }
    })
  },
  closeAdvDialog:function(){
    this.setData({
      needAd:false,
    })
  }
})