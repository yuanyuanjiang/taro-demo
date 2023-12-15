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
  // onload;
  return (
    <View className="index-wrapper">
      <Text>Hello world!</Text>
      <br />
      <View>
        <Text>这是第一个Taro小程序:{count}</Text>
      </View>
      <Button plain type="primary" onClick={add}>
        加一
      </Button>
      <View className="w-60">
        <Button type="primary">页面主操作 Normal</Button>
        <View className="flex-row-between-center">
          <Button className="mini-btn small-btn" type="primary">
            按钮1
          </Button>
          <Button className="mini-btn" type="default" size="mini">
            按钮
          </Button>
          <Button className="mini-btn" type="warn" size="mini">
            按钮
          </Button>
        </View>
      </View>
      <View style={{ color: "blue", textAlign: "center", marginTop: "20px" }}>
        <Text onClick={goBasic}>跳转到基础组件页面</Text>
      </View>
    </View>
  );
}
