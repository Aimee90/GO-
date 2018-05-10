// pages/cart/index.js
const Utils = require('../../utils/util.js')
// modal from bottom
const Modal = require('../../template/modal/modal.js')
const Cart = require('../../utils/cart.js')
const slideTouch = require('../../utils/slideTouch.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  removeAll: function(){
    Cart.clear();
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
        item.id == prodId && item.specification.id == specId && ('a' == optype ? item.specification.amount++ : item.specification.amount > 1 && item.specification.amount--);
        return item;
      })
    })
  },
  specSelectHandler: function(e){
      const id = e.target.dataset.id,pid = e.target.dataset.pid;
      const product = this.data.cart.find(prod=>pid==prod.id);
      this.setData({
        specModal: Modal.BModal.init({
          maskHidden: true,
          parentId: product.id,
          selected: id,
          selectItem: product.specifications,
          tapEvent: 'specChoose',
          close: 'specClose'
        })
      })
  },
  specChoose: function(e){
    var chooseId = e.target.dataset.id, 
      specModal = this.data.specModal;
    // 原规格id与产品id
    var selectId = specModal.selected, productId = specModal.parentId;
    const cart = this.data.cart; 
    cart.map(item=>{
      if (item.id == productId && item.specification.id == selectId  && chooseId != selectId){
        Cart.remove(item);
        var specification = item.specifications.find(spec => spec.id == chooseId); 
        specification.amount = item.specification.amount;
        console.log(specification);
        Cart.setCart(Object.assign({}, item, { specification: specification}));
      }
    })
    this.setData({
      cart: Cart.getCart()
    })
    this.specClose();
  },
  specClose: function(){
    var specModal = this.data.specModal;
    this.setData({
      specModal: specModal.close()
    })
  },
  deleteCart: function(e){
    const cartItem = this.data.cart[e.currentTarget.dataset.index];
    Cart.remove(cartItem);
    this.setData({
      cart: Cart.getCart()
    })
    this.reset();
  },
  touchS: slideTouch.touchS,
  touchM: slideTouch.touchM,
  touchE: slideTouch.touchE,
  reset: slideTouch.reset,
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var loc = wx.getStorageSync(Utils.Location.defaultKey);
    loc = !!loc ? loc : {}
    this.setData({
      receiver: loc.userName || '',
      phone: loc.telNumber || '',
      address: {
        provinceName: loc.provinceName || '',
        cityName: loc.cityName || '',
        countyName: loc.countyName || '',
        detailInfo: loc.detailInfo || ''
      },
      cart: Cart.getCart()
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