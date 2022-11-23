// pages/search/search.js
Page({

    data: {
        value: ''
    },

    onChange(e) {
        this.setData({
            value: e.detail,
        });
    },

    onSearch(e) {
        this.judge_search(e)
    },
    
    onClick(e) {
        this.judge_search(e)
    },

    judge_search(e) {
        let val = this.data.value
        if ( val > 15 || val < 0 ) {
            wx.showToast({
                title: '请重新输入',
                icon: 'none',
                duration: 1500
            })
            return
        }
        this.Toast('搜索' + this.data.value);
        this.search(e);
    },

    Toast(str) {
        wx.showToast({
            title: str,
            icon: 'loading',
            duration: 1000
        })
    },

    //点击开始搜索
    search(e) {
        // console.log('search:', this.data.inputValue);
        // console.log(e.target.dataset.catid)
        wx.navigateTo({
            url: '../xxkdetail/xxk?id=' + e.target.dataset.catid,
        })
    },

})