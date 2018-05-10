// 购物车
const Cart = {
  defaultKey: 'CART_KEY',
  getCart: () => wx.getStorageSync(Cart.defaultKey) || [],
  setCart: (data) => {
    /**
     * single entry
     * data contains product id and specification id and specific quantity
     */
    var cart = Cart.getCart(), exists = false;
    const newCart = cart.map(c => {
      if (data.specification.id == c.specification.id && data.id == c.id) {
        exists = true;
        c.specification.amount += data.specification.amount;
      }
      return c;
    })
    if (!exists) {
      newCart.push(data);
    }
    wx.setStorageSync(Cart.defaultKey, newCart);
  },
  remove: (data) => {
    var cart = Cart.getCart();
    var cartIndex = cart.findIndex(cart => cart.specification.id == data.specification.id && cart.id == data.id);
    cart.splice(cartIndex, 1); 
    console.log('after remove', cart);
    wx.setStorageSync(Cart.defaultKey, cart);
  },
  clear: () => {
    wx.setStorageSync(Cart.defaultKey, []);
  }
}

module.exports = {
  getCart: Cart.getCart,
  setCart: Cart.setCart,
  remove: Cart.remove,
  clear: Cart.clear
}