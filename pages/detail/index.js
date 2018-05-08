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
      specifications: [{ id: '1', name: '奇趣版', selected: false }, { id: '2',name: '标准版',selected: false}],
      details:[
        '../imgs/P1.jpg',
        '../imgs/P2.jpg',
        '../imgs/P3.jpg'
      ]
    },
    specShow: 'hide',
    selected:{
      num: 0,
      amount: 0
    }
  },
  specHandler: function(){
    !!this.data.specShow ? this.setData({ specShow: '' }) : this.setData({ specShow: 'hide' })
  },
  add2Cart: function(){
    var selected = this.data.selected;
    if (!selected.spec){
      return;
    }
    selected.amount = selected.amount + selected.num;
    var cart = selected.cart || {};
    cart[selected.spec] = !!cart[selected.spec] ? cart[selected.spec] + selected.num : selected.num;
    selected.cart = cart;
    this.setData({
      selected: selected
    })
  },
  go2Cart: function(){
    Utils.redirectTo('../cart/index')
  },
  addHandler: function(){
    var selected = this.data.selected;
    selected.num = selected.num + 1;
    this.setData({
      selected: selected
    })
  },
  minusHandler: function(){
    var selected = this.data.selected;
    if (selected.num <= 0) {
      Utils.showToast('亲,不能再少了啦~');
      return;
    }
    selected.num = selected.num - 1;
    this.setData({
      selected: selected
    })
  },
  prodSelectHandler: function(e){
    var specId = e.target.id.substr(5);
    var specifications = this.data.product.specifications.map((spec) => { 
      spec.selected = spec.id == specId?  !spec.selected : false;
      return spec;
      });
    var product = this.data.product,
        selected = this.data.selected;
    product.specifications = specifications;
    selected.spec = specId;
    this.setData({
      product: product,
      selected: selected
    })
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