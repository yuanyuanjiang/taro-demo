import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad, useReady, useDidShow } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import Footer from "@/components/commonFooter";
import "./index.scss";

export default function Index() {
  let [count, setCount] = useState<number>(1);
  useLoad(() => {
    console.log("base Page loaded.");
  });
  useReady(() => {
    console.log("base ready."); //页面渲染完成
  });
  useDidShow(() => {
    console.log("base show.");
  });
  const setTitle = () => {
    Taro.setNavigationBarTitle({ title: "js测试" });
    // document.title = "ts测试";
  };
  // onload;
  return (
    <View className="basic-wrapper">
      <Text>基础组件!</Text>
      <Button onClick={setTitle}>动态修改标题</Button>
      <Footer />
      {/* <Link></Link> */}
    </View>
  );
}
