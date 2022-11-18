 // pages/gr/gr.js
Page({
  data: {
    key1: true,//是否未授权登录
    mylike: 1,
    userInfo:''//用户信息
  },
  onLoad(){
    //获取本地缓存
    let user=wx.getStorageSync('user')
    this.setData({
        userInfo:user
    })
  },
  //跳转到打卡--jie1页面
  jumpPage(){
    wx.navigateTo({
      url: '/pages/jie1/jie1',
    })
  },
  //跳转到收藏页面
  jump_Page(){
    const mylike = this.data.mylike;
    wx.navigateTo({
      url: '../xxklist/xxklist?mylike=' + mylike,
    })
  },
  //获取用户信息
  getProfile(){
    wx.getUserProfile({
      desc:'必须授权后才能继续使用',
      success:res=>{
        let user=res.userInfo
        //设置本地缓存,把用户信息缓存到本地
        wx.setStorageSync('user',user)
        this.setData({
            userInfo:user,
            key1:false
        })
      }
    })
  },
})