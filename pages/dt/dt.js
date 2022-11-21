// pages/dt/dt.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key1: true, //是否未授权登录
    userInfo: '', //用户信息
    text1: "这猫真可爱", //配文，使用时删除样例文字
    photo1: "/pages/08.png", //配图，使用时删除样例路径
    userid1: "世界先生", //其他用户ID，推荐换成数组存储，使用时删除样例ID
    path: "/pages/08.png" //其他用户头像，推荐换成数组存储，使用时删除样例头像
  },

  jumpPage() {
    wx.navigateTo({
      url: '/pages/jie1/jie1',
    })
  },
  //获取用户信息
  getProfile() {
    wx.getUserProfile({
      desc: '必须授权后才能继续使用',
      success: res => {
        let user = res.userInfo
        //设置本地缓存,把用户信息缓存到本地
        wx.setStorageSync('user', user)
        this.setData({
          userInfo: user,
          key1: false
        })
      }
    })
  },
  //展开评论
  comment() {

  },
  //点赞
  like() {

  },
})