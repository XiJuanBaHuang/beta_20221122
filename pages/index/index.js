// index.js
Page({
    data: {

    },
    jumpPage1() {
        wx.navigateTo({
            url: '/pages/jie1/jie1',
        })
    },
    jumpPage2() {
        wx.navigateTo({
            url: '/pages/xxklist/xxklist',
        })
    },
    jumpPage3() {
        wx.navigateTo({
            //   url: '/pages/jie3/jie3',
            url: '/pages/search/search',
        })
    },
    jumpPage4() {
        wx.navigateTo({
            url: '/pages/jie4/jie4',
        })
    }
})