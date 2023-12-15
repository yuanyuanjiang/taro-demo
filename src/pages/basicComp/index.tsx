import { View, Text, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
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
    <View className="basic-wrapper">
      <Text>基础组件!</Text>
      {/* <Link></Link> */}
    </View>
  );
}
