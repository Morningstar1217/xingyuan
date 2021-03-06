App({
  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function() {},

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function(options) {},

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function() {},

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function(msg) {},
  /* 都使用GET方式 */
  globalData: {
    host: "https://www.97youmeitao.com/", //主域名
    getcatelist: "api.php/quan.tao/getcatelist", //淘宝分类
    getGoodsList: "api.php/quan.tao/getGoodsList", //淘宝列表
    getRenqiList: "api.php/quan.tao/getRenqiList", //人气榜
    getCouponUrl: "api.php/quan.tao/getCouponUrl", //淘宝优惠券
    getNineList: "api.php/quan.tao/getNineList", //9.9包邮
    getMiaoList: "api.php/quan.tao/getMiaoList", //秒杀
    getZhiboList: "api.php/quan.tao/getZhiboList", //直播
    getListByKeyword: "api.php/quan.tao/getListByKeyword", //搜索
    favs: [] //添加收藏列表
  }
});
