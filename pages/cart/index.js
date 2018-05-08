// pages/cart/index.js
const Utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address: "南京市玄武区前湖后村1号中山陵园风景区",
    cart:[]
  },
  removeAll: function(){
    this.setData({
      cart: []
    })
  },
  addressEdit: function(){
    Utils.showModal('','地址编辑');
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cart = JSON.parse(options.cart);
    this.setData({
      cart: cart
    })
    console.log(this.data);
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