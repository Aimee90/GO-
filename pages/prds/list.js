const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['img/b1.png','img/b2.png'],
    products:[{
      id: 1,
      name: '产品1',
      imgUrl: 'img/default.gif',
      description: '说明文字说明文字...',
      price: 120
    },{
      id: 2,
      name: '产品2',
      imgUrl: 'img/default.gif',
      description: '说明文字说明文字...',
      price: 120
    },{
      id: 3,
      name: '产品3',
      imgUrl: 'img/default.gif',
      description: '说明文字说明文字...',
      price: 120
    },{
      id: 4,
      name: '产品4',
      imgUrl: 'img/default.gif',
      description: '说明文字说明文字...',
      price: 120
    },{
      id: 5,
      name: '产品5',
      imgUrl: 'img/default.gif',
      description: '说明文字说明文字...',
      price: 120
    },{
      id: 6,
      name: '产品6',
      imgUrl: 'img/default.gif',
      description: '说明文字说明文字...',
      price: 120
    }]
  },
  toBuy: function (event){
    console.log(event);
  },
  tapName: function (event) {
    console.log(event)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
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