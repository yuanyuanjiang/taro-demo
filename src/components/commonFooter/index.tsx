import { View, Text, Button } from "@tarojs/components";
import { useLoad } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import "./index.scss";

export default function Index() {
  let [count, setCount] = useState<number>(1);
  useLoad(() => {
    console.log("当前环境变量：", process.env.TARO_ENV); //编译的是h5，所以打印出来的是"h5"
  });

  const add = () => {
    count += 1;
    setCount(count);
  };
  // onload;
  return (
    <View className="basic-wrapper">
      <Text>页脚</Text>
    </View>
  );
}
