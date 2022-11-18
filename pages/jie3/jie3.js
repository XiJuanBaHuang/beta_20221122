// pages/jie3/jie3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key1: false,
    inputValue: ''
  },

  dispy() {
    this.setData({
      key1: !this.data.key1
    })
  },

  // input输入框的bindinput事件
  inputVal(e) {
    this.setData({
      inputValue: e.detail.value
    })
    // console.log(this.data.inputValue);
  },


  //点击开始搜索
  search(e) {
    // console.log('search:', this.data.inputValue);
    // console.log(e.target.dataset.catid)
    wx.navigateTo({
      url: '../xxkdetail/xxk?id=' + e.target.dataset.catid,
    })
  },

  jump: function (e) {

    const id = e.currentTarget.dataset.catid
    var url = '../xxkdetail/xxk?id=' + id
    wx.redirectTo({
      url
    });
  },

})