const Utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['../imgs/P1.jpg', '../imgs/P2.jpg', '../imgs/P5.jpg','../imgs/P7.jpg'],
    products:[{
      id: 1,
      name: '产品1',
      volume: 100,
      imgUrl: '../imgs/P1.jpg',
      description: '说明文字说明文字说明说明文字说明文字说明文字说明说明文字说明说明文字说明文字说明说明文字说明文字说明说明文字说明文字说明',
      price: 120000
    },{
      id: 2,
      name: '产品2',
      volume: 100,
      imgUrl: '../imgs/P2.jpg',
      description: '说明文字说明文字...',
      price: 1200000
    },{
      id: 3,
      name: '产品3',
      volume: 100,
      imgUrl: '../imgs/P3.jpg',
      description: '说明文字说明文字...',
      price: 120
    },{
      id: 4,
      name: '产品4',
      volume: 100,
      imgUrl: '../imgs/P4.jpg',
      description: '说明文字说明文字...',
      price: 120
    },{
      id: 5,
      name: '产品5',
      volume: 100,
      imgUrl: '../imgs/P5.jpg',
      description: '说明文字说明文字...',
      price: 120
    },{
      id: 6,
      name: '产品6',
      volume: 100,
      imgUrl: '../imgs/P1.jpg',
      description: '说明文字说明文字...',
      price: 120
    }],
    cart:{},
  },
  go2Detail: function(){
    Utils.redirectTo('../detail/index')
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