const User = {
  key: 'USER_INFO',
  getUser: ()=> wx.getStorageSync(User.key),
  setUser: (us)=>{
    wx.setStorageSync(User.key, us)
  }
}
module.exports = User