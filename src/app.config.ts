export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/basicComp/index",
    "pages/test/index",
    "pages/List/index",
    "pages/Form/index",
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    backgroundColor: "#f0f2f5",
    enablePullDownRefresh: true,
  },
  tabBar: {
    custom: true,
    color: "#000000",
    selectedColor: "#1aad19",
    backgroundColor: "#fff",
    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        // iconPath:'',
        // selectedIconPath:''
      },
      // {
      //   pagePath: "pages/basicComp/index",
      //   text: "基础组件",
      // },
      {
        pagePath: "pages/List/index",
        text: "列表",
      },
    ],
  },
  usingComponents: {},
});
