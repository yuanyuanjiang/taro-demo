import { View, Text, Button, Image } from "@tarojs/components";
import Taro, { useDidShow, useLoad } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import InspectionIcon from "@/assets/images/inspection.png";
import ListIcon from "@/assets/images/icon2.png";
import "./index.scss";

export default function Index() {
  useDidShow(() => {
    // const pageObj = Taro.getCurrentInstance().page;
    // const tabbar = Taro.getTabBar(pageObj);
    // console.log("bar:", tabbar);
  });

  const goBasic = () => {
    // Taro.navigateTo({
    //   url: "/pages/basicComp/index",
    // });
  };
  const goTest = () => {
    // Taro.navigateTo({
    //   url: "/pages/test/index",
    // });
  };
  // onload;
  return (
    <View className="index-wrapper">
      <View className="inner-wrapper">
        <View className="text-center border-bottom-title">模块划分</View>
        <View className="">
          <View className="comp-item flex-col-center-center">
            <Image src={InspectionIcon} className="module-logo m-b-10" />
            <Text onClick={goBasic}>基础组件</Text>
          </View>
          <View className="comp-item flex-col-center-center">
            <Image src={InspectionIcon} className="module-logo m-b-10" />
            <Text onClick={goTest}>Test</Text>
          </View>
          <View className="comp-item flex-col-center-center no-border">
            <Image src={ListIcon} className="module-logo m-b-10" />
            <Text
              onClick={() => {
                Taro.navigateTo({
                  url: "/pages/List/index",
                });
              }}
            >
              列表
            </Text>
          </View>
          <View
            className="comp-item flex-col-center-center no-border"
            onClick={() => {
              Taro.navigateTo({
                url: "/pages/Form/index",
              });
            }}
          >
            <Image src={InspectionIcon} className="module-logo m-b-10" />
            <Text>表单</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
