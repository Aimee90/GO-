
const Utils = require('../../utils/util.js')

// pages/login/index.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    form:{
      username: '',
      password: '',
      loading: false
    },
    view: {
      username: {},
      password: {}
    }
  },
  inputFocus: function(e){
    const shadow = '0px 0px 1px 1px #528B8B';
    const view = this.data.view;
    var tar = e.target.id;
    view[tar].shadow = shadow;
    this.setData({
      view: view
    });
  },
  inputBlur:function(e){
    this.setData({
      view: { username: {}, password:{}}
    });
  },
  valueChange: function(e){
    var value = e.detail.value, prop = e.target.id;
    var data = this.data.form;
    data[prop] = value;
  },
  login: function(){
    var form = this.data.form;
    if(this.checkValid()){
      // form.loading = true;
      Utils.redirectTo('../prds/list')
    }
  },
  checkValid: function(){
    var form = this.data.form;
    if (!form.username){
      this.setData({ loginMsg: '请输入用户名' })
      return;
    }
    if (!form.password || form.password.length<6){
      this.setData({ loginMsg: '请输入有效密码' })
      return;
    }
    this.setData({ loginMsg: '' })
    return true;
  },
  resetHandler: function(){
    this.setData({ 
      view: { 
        modal: 'show'
      }
    });
  },
  resetCancelHandler: function(){
    this.setData({
      view: {
        modal: 'hide'
      }
    });
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