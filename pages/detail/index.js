// pages/detail/index.js
const Utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    product:{
      proImg: '../imgs/P1.jpg',
      price: 150,
      name: '产品一',
      description: '产品说明产品说明产品说明产品说明产品说明产品说明产品说明',
      labels: [{ name: '标签1', type: 'hot' }, { name: '标签2', type: 'rec'}],
      specifications:['奇趣版','标准版'],
      details:[
        '../imgs/P1.jpg',
        '../imgs/P2.jpg',
        '../imgs/P3.jpg'
      ]
    },
    specShow: 'hide',
    selected:{
      amount: 0
    }
  },
  specHandler: function(){
    !!this.data.specShow ? this.setData({ specShow: '' }) : this.setData({ specShow: 'hide' })
  },
  add2Cart: function(){
    var amount = this.data.selected.amount;
    this.setData({
      selected:{
        amount: amount+1
      }
    })
  },
  go2Cart: function(){
    Utils.redirectTo('../cart/index')
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