 // pages/photo/photo.js

const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    FzuCatImg: app.globalData.FzuCatImg,
  },

 

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({// 把从index页面获取到的属性值赋给详情页的my，供详情页使用
      id:options.id,
    })
  },

  jump_button:function (e) {
    var id = this.data.id;
    var url = '/pages/xxkdetail/xxk?id='+id;
    wx.redirectTo({url});
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})