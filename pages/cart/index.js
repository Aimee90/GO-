// pages/cart/index.js
const Utils = require('../../utils/util.js')
// modal from bottom
const Modal = require('../../template/modal/modal.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  removeAll: function(){
    this.setData({
      cart: []
    })
  },
  addressEdit: function(){
    Utils.Location.locate((loc)=>{
      console.log(loc);
      this.setData({
          receiver: loc.userName,
          phone: loc.telNumber,
          address: {
            provinceName: loc.provinceName,
            cityName: loc.cityName,
            countyName: loc.countyName,
            detailInfo: loc.detailInfo
          }
        })
    });
  },
  amountHandler: function(e){
    const prodId = e.target.dataset.prodid,
          specId = e.target.dataset.specid,
          optype = e.target.dataset.type;
    this.setData({
      cart: this.data.cart.map((item) => {
        item.id == prodId && item.specifications.id == specId && ('a' == optype ? item.amount++ : item.amount>1&&item.amount--);
        return item;
      })
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cart = JSON.parse(options.cart);
    var loc = wx.getStorageSync(Utils.Location.defaultKey);
    loc = !!loc ? loc : {}
    this.setData({
      receiver: loc.userName||'',
      phone: loc.telNumber||'',
      address: {
        provinceName: loc.provinceName||'',
        cityName: loc.cityName||'',
        countyName: loc.countyName||'',
        detailInfo: loc.detailInfo||''
      },
      cart: cart
    })
  },
  specSelectHandler: function(e){
      const id = e.target.dataset.id,pid = e.target.dataset.pid;
      const product = this.data.cart.find((item)=>{
        if(item.id==pid){
          return item;
        }
      })
      this.setData({
        specModal: Modal.BModal.init({
          maskHidden: true,
          parendId: product.id,
          selected: id,
          selectItem: product.specifications,
          tapEvent: 'specChoose',
          close: 'specClose'
        })
      })
  },
  specChoose: function(e){
    var specId = e.target.dataset.id, 
        productId = this.data.specModal.parentId;
    this.data.cart.map(item=>{

    })
    this.specClose();
  },
  specClose: function(){
    var specModal = this.data.specModal;
    this.setData({
      specModal: specModal.close()
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