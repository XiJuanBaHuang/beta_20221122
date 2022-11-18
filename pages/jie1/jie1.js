// pages/jie1/jie1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    path: "",//预览图片路径，使用时删除样例路径
    cameraPosition: "back"
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {
    //查询是否已授权
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.camera']) {
          //请求摄像头授权
          wx.authorize({
            scope: 'scope.camera',
            success () {
              // 用户已经同意小程序使用摄像头功能，后续调用 wx. 接口不会弹窗询问
              
            },
            // fail(){
            //   wx.switchTab({
            //     url: '/pages/index/index'
            //   })
            // }
          })
        }
      }
    })
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.writePhotosAlbum']) {
          wx.authorize({
            scope: 'scope.writePhotosAlbum',
            success () {
              // 用户已经同意小程序使用添加相册功能，后续调用 wx. 接口不会弹窗询问
              
            }
          })
        }
      }
    })
  },
  //点击拍照
  takePhoto() {
    const ctx = wx.createCameraContext()
    ctx.takePhoto({
        quality: 'high',
        success: (res) => {
            this.setData({
                path: res.tempImagePath
            })
            // console.log(this.data.src)
        }
    })
  },
  //点击前后置摄像头反转
  reversal() {
    this.setData({
        cameraPosition: this.data.cameraPosition=="back" ? "front" : "back"
    })
  },
  // 发布动态
  publishDynamic() {
        
  },
})