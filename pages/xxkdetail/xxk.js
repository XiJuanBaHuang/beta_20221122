 
const CatMessage = getApp()


Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    Cat_Img: CatMessage.globalData.FzuCatHeadshots,//头像
    Cat_Name: CatMessage.globalData.FzuCat_Name,//姓名
    Cat_Gender: CatMessage.globalData.FzuCat_Gender,//性别
    Cat_Character: CatMessage.globalData.FzuCat_Character,//性格
    Cat_Variety: CatMessage.globalData.FzuCat_Variety,//品种
    Cat_Bodytyp: CatMessage.globalData.FzuCat_Bodytype,//体型
    Cat_Hauntedplace: CatMessage.globalData.FzuCat_Hauntedplace,//出没地点
    Cat_People: CatMessage.globalData.FzuCat_People,//是否亲人
    Cat_Condition: CatMessage.globalData.FzuCat_Condition,//状态

    cat_like: 0,
    Cat_Like_Connect: getApp().globalData.FzuCatLike,
    FzuCatImg: getApp().globalData.FzuCatImg,

    islike: false,

    like_img: 'https://img-blog.csdnimg.cn/4e39af3602cc437fab637013977f7f63.png#pic_center',
    like_img2: 'https://img-blog.csdnimg.cn/1aae38a989dc4f27a7023e9cbb436d58.png#pic_center',
  },

  /**
   * 生命周期函数--监听页面加载
   */
   
  jump_button:function(e){

   var url="/pages/xxklist/xxklist"
          wx.redirectTo({url});
  },

  onLoad: function (options) {
    this.setData({// 把从index页面获取到的属性值赋给详情页的my，供详情页使用
      id:options.id,
      cat_like: getApp().globalData.FzuCatLike[options.id],
    })
    
  },

  praiseThis:function (e) {
    const that = this;
    var islike = that.data.islike;
    var id = that.data.id;
    this.setData({
      islike: !islike,
      cat_like: islike?1:0
    })
    var cat_like = this.data.cat_like;
    getApp().globalData.FzuCatLike[id] = cat_like;
  },

  //跳转
  

  jump_photo:function(e) {
    var id = this.data.id;
    var url="/pages/xxkphoto/xxkphoto?id=" + id
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

  },
})