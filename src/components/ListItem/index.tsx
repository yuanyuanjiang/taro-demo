import { View, Text, Button, Image } from "@tarojs/components";
// import { useLoad } from "@tarojs/taro";
// import React, { useEffect, useState } from "react";
import "./index.scss";
const modeMap = {
  1: "R1-其他",
  2: "R1-寄售",
  4: "R4-大菠萝",
  5: "R5-工厂通",
  8: "R8-POP",
};
export default function Index(props) {
  const { item } = props;
  // let [count, setCount] = useState<number>(1);
  return (
    <View className="item-wrapper">
      <View className="flex-row-between-center">
        <Text className="name">{item?.reportSupName}</Text>
        <Text className="status green">{item?.statusDesc}</Text>
      </View>
      <View style={{ borderTop: "1px solid #f3f3f3" }}>
        <Text className="time">{item?.submitTime}</Text>
      </View>
      <View className="flex-row-between-center item-content">
        <View className="">
          <View className="">
            <Text className="title">经营品牌</Text>
            {item.brand}
          </View>
          <View className="">
            <Text className="title">合作模式</Text>
            {modeMap[item?.cooperationMode]}
          </View>
          <View className="">
            <Text className="title">联系方式</Text>
            {item.phone}
          </View>
        </View>
        {item?.qrCodeUrl && (
          <Image style="width: 80px;height: 80px" src={item.qrCodeUrl} />
        )}
      </View>
    </View>
  );
}
