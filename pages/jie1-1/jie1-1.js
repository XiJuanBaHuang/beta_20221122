// pages/jie1-1/jie1-1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: "/pages/08.png"//拍照图片路径
  },

  jumpPage(){
    wx.navigateTo({
      url: '/pages/jie1/jie1',
    })
  },
  //点击发布图片与配文
  sent(){

  },
  //点击查看照片详情
  detail(){

  },
})