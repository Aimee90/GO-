const Utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ['../imgs/P1.jpg', '../imgs/P2.jpg', '../imgs/P5.jpg','../imgs/P7.jpg'],
    products:[{
      id: 1,
      proImg: '../imgs/P1.jpg',
      price: 150,
      volume: 100,
      name: '产品一',
      description: '产品说明产品说明产品说明产品说明产品说明产品说明产品说明',
      labels: [{ name: '满99包邮', type: 'hot' }, { name: '闪电发货', type: 'rec' }],
      specifications: [{ id: '1', name: '奇趣版', selected: true }, { id: '2', name: '标准版', selected: false }],
      details: [
        '../imgs/P1.jpg',
        '../imgs/P2.jpg',
        '../imgs/P3.jpg'
      ]
    },{
        id: 2,
        proImg: '../imgs/P2.jpg',
        price: 110,
        volume: 10,
        name: '产品二',
        description: '产品说明2',
        labels: [{ name: '满99包邮', type: 'hot' }, { name: '闪电发货', type: 'rec' }],
        specifications: [{ id: '1', name: '奇趣版', selected: true }, { id: '2', name: '标准版', selected: false }],
        details: [
          '../imgs/P1.jpg',
          '../imgs/P2.jpg',
          '../imgs/P3.jpg'
        ]
    },{
        id: 3,
        proImg: '../imgs/P3.jpg',
        price: 98,
        volume: 12,
        name: '产品三',
        description: '产品说明3',
        labels: [{ name: '满99包邮', type: 'hot' }, { name: '闪电发货', type: 'rec' }],
        specifications: [{ id: '1', name: '奇趣版', selected: true }, { id: '2', name: '标准版', selected: false }],
        details: [
          '../imgs/P1.jpg',
          '../imgs/P2.jpg',
          '../imgs/P3.jpg'
        ]
    },{
        id: 4,
        proImg: '../imgs/P4.jpg',
        price: 14,
        volume: 30,
        name: '产品四',
        description: '产品说明4',
        labels: [{ name: '满99包邮', type: 'hot' }, { name: '闪电发货', type: 'rec' }],
        specifications: [{ id: '1', name: '奇趣版', selected: true }, { id: '2', name: '标准版', selected: false }],
        details: [
          '../imgs/P1.jpg',
          '../imgs/P2.jpg',
          '../imgs/P3.jpg'
        ]
    },{
        id: 5,
        proImg: '../imgs/P5.jpg',
        price: 88,
        volume: 10,
        name: '产品5',
        description: '产品说明5',
        labels: [{ name: '满99包邮', type: 'hot' }, { name: '闪电发货', type: 'rec' }],
        specifications: [{ id: '1', name: '奇趣版', selected: true }, { id: '2', name: '标准版', selected: false }],
        details: [
          '../imgs/P1.jpg',
          '../imgs/P2.jpg',
          '../imgs/P3.jpg'
        ]
    },{
        id: 6,
        proImg: '../imgs/P6.jpg',
        price: 160,
        volume: 16,
        name: '产品二',
        description: '产品说明6',
        labels: [{ name: '满99包邮', type: 'hot' }, { name: '闪电发货', type: 'rec' }],
        specifications: [{ id: '1', name: '奇趣版', selected: true }, { id: '2', name: '标准版', selected: false }],
        details: [
          '../imgs/P1.jpg',
          '../imgs/P2.jpg',
          '../imgs/P3.jpg'
        ]
    }],
    cart:{},
    sort:{
      price: 'none',
      volume: 'none'
    }
  },
  go2Detail: function(e){
    Utils.redirectTo('../detail/index?prod=' + JSON.stringify(this.data.products.find((prod) => {
      return prod.id == e.currentTarget.dataset.prid;
    })))
  },
  sortHandler: function(e){
    const targetId = e.target.id;
    var sort = this.data.sort;
    switch(sort[targetId]){
      case 'none':
        sort = {price: 'none',volume: 'none'};
        sort[targetId] = 'asc';
      break;
      case 'asc':
        sort = { price: 'none', volume: 'none' };
        sort[targetId] = 'desc';
      break;
      case 'desc':
        sort = { price: 'none', volume: 'none' };
        sort[targetId] = 'asc';
      break;
    }
    this.productSort(targetId, sort[targetId]);
    this.setData({
      sort: sort
    })
  },
  productSort: function (sortItem, sort){
    var products = this.data.products;
    products.sort(function(prev, next){
      return 'asc' == sort ? (Number(prev[sortItem]) - Number(next[sortItem])) : (Number(next[sortItem]) - Number(prev[sortItem]));
    })
    this.setData({
      products: products
    })

    console.log(this.data);
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