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
  // onload;
  return (
    <View className="index-wrapper">
      <Text>Test!</Text>
      <br />
      <View className="flex-row-between-center m-b-16">
        <Text>当前值:{count}</Text>&nbsp;
        <Button plain type="primary" onClick={add} className="add-btn">
          加一
        </Button>
      </View>

      <View className="w-60">
        <Button type="primary">页面主操作 Normal</Button>
        <View className="flex-row-center-center">
          <Button className="mini-btn" type="primary" size="mini">
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
      <View className="flex-row-center-center">
        <Text>按钮1</Text>
        <Text>按钮2</Text>
        <Text>按钮3</Text>
      </View>
    </View>
  );
}
