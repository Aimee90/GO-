const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const redirectTo = (url,param) =>{
  wx.navigateTo({
    url: url
  })
}
const Location = {
  defaultKey: 'DEFAULT_RECEIVING_ADDRESS',
  // 定位
  locate: function(callback){
    wx.chooseAddress({
      success: function (res) {
        // 默认收货地址修改
        
        callback(res)
      }
    })
  }
}

const showModal = (msg,title) =>{
  wx.showModal({
    title: title||'提示',
    content: msg,
  })
}
const showToast = (msg, info) =>{
  wx.showToast({
    title: msg,
    image:'none',
    duration: 1000,
    mask: true
  })
}
module.exports = {
  formatTime: formatTime,
  redirectTo: redirectTo,
  showModal: showModal,
  showToast: showToast,
  Location: Location
}
