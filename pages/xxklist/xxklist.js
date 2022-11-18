 
 // document.getElementById('FzuCatImg_1').src=FzuCatImg_1[0];

 const CatMessage = getApp()

 Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentData : 0,
    cat: 0,
    cat_img: CatMessage.globalData.FzuCatHeadshots,
    cat_text: CatMessage.globalData.FzuCat_Name,
    cat_like: [],

    id:'',
    like:'',
    savelike:[],
  },

   //获取当前滑块的index
   bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;
 
    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },

  jump:function(e){

    const id = e.currentTarget.dataset.catid
    var url = '../xxkdetail/xxk?id='+id
    wx.redirectTo({url});
  },
  /**
   * 生命周期函数--监听页面加载
   */

   
  onLoad(options) {
    this.setData({
      cat_like: getApp().globalData.FzuCatLike,
      currentData: options.mylike,
    })
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