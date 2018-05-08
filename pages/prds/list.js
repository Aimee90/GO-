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
    sort:{
      price: 'none',
      volume: 'none'
    }
  },
  go2Detail: function(){
    Utils.redirectTo('../detail/index')
  },
  sortHandler: function(e){
    const targetId = e.target.id;
    var sort = this.data.sort;
    switch(sort[targetId]){
      case 'none':
      sort[targetId] = 'asc';
      break;
      case 'asc':
      sort[targetId] = 'desc';
      break;
      case 'desc':
      sort[targetId] = 'none';
      break;
    }
    this.setData({
      sort: sort
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
    var ctx = wx.createCanvasContext('magnifier');
      ctx.setStrokeStyle = '#f00';
      ctx.setLineWidth = 1;
      ctx.beginPath();
      ctx.clearRect(0, 0, 19, 19);
      ctx.arc(9, 9, 8, 0.37 * Math.PI, 2.27 * Math.PI, false);
      ctx.lineTo(19, 19);
      ctx.stroke();
      ctx.draw();
    // context.setStrokeStyle("#00ff00")
    // context.setLineWidth(5)
    // context.rect(0, 0, 200, 200)
    // context.stroke()
    // context.setStrokeStyle("#ff0000")
    // context.setLineWidth(2)
    // context.moveTo(160, 100)
    // context.arc(100, 100, 60, 0, 2 * Math.PI, true)
    // context.moveTo(140, 100)
    // context.arc(100, 100, 40, 0, Math.PI, false)
    // context.moveTo(85, 80)
    // context.arc(80, 80, 5, 0, 2 * Math.PI, true)
    // context.moveTo(125, 80)
    // context.arc(120, 80, 5, 0, 2 * Math.PI, true)
    // context.stroke()
    // context.draw()
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