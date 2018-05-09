// pages/detail/index.js
const Utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    specShow: '',
    selected:{
      cart:[],
      num: 1,
      amount: 0,
      spec: 1,
      specName: '奇趣版'
    },
    icon:{
      minusabled: 'disabled',
      addabled: ''
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
    var cart = [];
    this.data.selected.cart.map((value, key)=>{
      var specification = this.data.product.specifications.find((spec)=>{
        return spec.id == key;
      });
      cart.push(Object.assign({}, this.data.product, { amount: value}));
    });
    Utils.redirectTo('../cart/index?cart=' + JSON.stringify(cart));
  },
  addHandler: function(){
    var selected = this.data.selected,
      icon = this.data.icon;
    selected.num = selected.num + 1;
    icon.minusabled = '';
    this.setData({
      selected: selected,
      icon: icon
    })
  },
  minusHandler: function(){
    var selected = this.data.selected,
        icon = this.data.icon;
    if ('disabled' == icon.minusabled) return;
    if (selected.num == 2) icon.minusabled = 'disabled';
    selected.num = selected.num - 1;
    this.setData({
      selected: selected,
      icon: icon
    })
  },
  prodSelectHandler: function(e){
    var specId = e.target.id.substr(5);
    var product = this.data.product,
      selected = this.data.selected;
    var specifications = this.data.product.specifications.map((spec) => {
      if (spec.id == specId) {
        spec.selected = true;//!spec.selected;
        selected.specName = spec.name;
      }else{
        spec.selected = false;
      }
      return spec;
      });
    product.specifications = specifications;
    selected.spec = specId;
    selected.num = 1;
    this.setData({
      product: product,
      selected: selected
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      product: JSON.parse(options.prod),
      initData:{
        selected: this.data.selected
      }
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
    this.setData({
      selected: this.data.initData.selected
    })
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