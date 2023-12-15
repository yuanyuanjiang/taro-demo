import { View, Text, Button } from "@tarojs/components";
import Taro, { useLoad } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import "./index.scss";

export default function Index() {
  let [count, setCount] = useState<number>(1);
  useLoad(() => {
    console.log("Page loaded.");
  });
  const add = () => {
    count += 1;
    setCount(count);
  };
  const goBasic = () => {
    Taro.navigateTo({
      url: "/pages/basicComp/index",
    });
  };
  const goTest = () => {
    Taro.navigateTo({
      url: "/pages/test/index",
    });
  };
  // onload;
  return (
    <View className="index-wrapper">
      <Text>Hello world!</Text>
      <View style={{ color: "blue", textAlign: "center", marginTop: "20px" }}>
        <Text onClick={goBasic}>跳转到基础组件页面</Text>
      </View>
      <View style={{ color: "blue", textAlign: "center", marginTop: "20px" }}>
        <Text onClick={goTest}>跳转Test页面</Text>
      </View>
    </View>
  );
}
