// pages/temp/temp.js

let app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {
        hasUserInfo: false, //是否未授权登录
        userInfo: '', //用户信息
        // text1: "这猫真可爱", //配文，使用时删除样例文字
        // photo1: "/pages/08.png", //配图，使用时删除样例路径
        // userid1: "世界先生", //其他用户ID，推荐换成数组存储，使用时删除样例ID
        // path: "/pages/08.png", //其他用户头像，推荐换成数组存储，使用时删除样例头像
        dataList: []
    },

    onLoad() {
        let user = wx.getStorageSync('user')
        this.setData({
            userInfo: user
        })
        let that = this;
        wx.cloud.database().collection('lcy-timeline')
            .orderBy('createTime', 'desc') //按发布视频排序
            .get({
                success(res) {
                    console.log("请求成功", res)
                    that.setData({
                        dataList: res.data
                    })
                },
                fail(res) {
                    console.log("请求失败", res)
                }
            })
        
    },

    onReady() {
        this.setData({
            hasUserInfo: app.globalData.hasUserInfo
        })
    },

    //获取用户信息
    getProfile() {
        // 不允许多次登录
        if (this.data.hasUserInfo === true)
            return
        wx.getUserProfile({
            desc: '必须授权后才能继续使用',
            success: res => {
                let user = res.userInfo
                //设置本地缓存,把用户信息缓存到本地
                wx.setStorageSync('user', user)
                this.setData({
                    userInfo: user,
                    hasUserInfo: true
                })
                app.globalData.hasUserInfo = true
            }
        })
    },

    // 预览图片
    previewImg: function (e) {
        let imgData = e.currentTarget.dataset.img;
        console.log("eeee", imgData[0])
        console.log("图片s", imgData[1])
        wx.previewImage({
            //当前显示图片
            current: imgData[0],
            //所有图片
            urls: imgData[1]
        })
    },

    //展开评论
    comment() {

    },
    //点赞
    like() {

    },

    onReachBottom() {
        
    },
})