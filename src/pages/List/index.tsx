import { View, Text, Image, Input } from "@tarojs/components";
import Taro, {
  useDidShow,
  useLoad,
  useReachBottom,
  useReady,
} from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import ListItem from "@/components/ListItem";
import { reportList } from "@/api/test";
import noContentImg from "@/assets/images/no-content.png";
import createIcon from "@/assets/images/create_icon.png";
import "./index.scss";

export default function Index() {
  let [dataSource, setDataSource] = useState<any[]>([]);
  const [hasMore, setHasMore] = useState(false); //是否还有更多
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const size = 10;
  useLoad(() => {
    console.log("list load."); //页面加载
    getList(1);
  });
  useReady(() => {
    console.log("list ready."); //页面渲染完成
  });
  useDidShow(() => {
    console.log("list show.");
  });

  useReachBottom(() => {
    if (hasMore) {
      getList(page);
    }
  });

  const getList = async (page: number) => {
    const params = {
      pageSize: size,
      pageIndex: page,
      reportSupName: inputValue,
    };
    Taro.showLoading({ title: "请稍等...", mask: true });
    try {
      const res: any = await reportList(params);
      Taro.hideLoading();
      const { content = [], totalElements = 0, page: currentPage } = res;
      const total = totalElements;
      const data = content.map((item) => {
        return {
          ...item,
          statusDesc: "已提报",
          id_key: Math.random().toString(36).substring(2),
        };
      });
      let newList = data;
      if (currentPage > 1) {
        newList = [...dataSource, ...data];
      }
      setDataSource(newList);
      if (currentPage * size >= total) {
        setHasMore(false);
      } else {
        setHasMore(true);
        setPage(currentPage + 1);
      }
    } catch (e) {
      Taro.hideLoading();
      setHasMore(false);
      Taro.showToast({ title: e.message, icon: "none" });
    }
  };

  const onSearch = () => {
    setDataSource([]);
    setHasMore(false);
    setPage(1);
    getList(1);
  };

  const bindKeyInput = (e) => {
    const value = e.detail.value.trim();
    setInputValue(value);
  };

  const goForm = () => {
    Taro.navigateTo({
      url: "/pages/Form/index",
    });
  };
  // 暂无内容
  const noContent: any = () => {
    let tips = "当前暂无提报数据";
    return (
      <div className="flex-col-center-center list-no-content">
        <img src={noContentImg} width={120} />
        <span className="tips">{tips}</span>
      </div>
    );
  };
  // onload;
  return (
    <View className="list-page-wrapper">
      <View className="flex-row-between-center search-bar">
        <Input
          type="text"
          className="search-input"
          placeholder="请输入公司名称"
          focus
          confirmType="search"
          onInput={bindKeyInput}
          onConfirm={onSearch}
          placeholderStyle="fontSize:0.5rem"
        />
      </View>
      <View className="list-content">
        {dataSource.length == 0 ? (
          noContent()
        ) : (
          <>
            {dataSource.map((item: any, index: number) => (
              <ListItem item={item} key={index} />
            ))}
          </>
        )}
      </View>
      <View className="create-img">
        <Image
          style="width: 80px;height: 80px"
          src={createIcon}
          onClick={goForm}
        />
      </View>
    </View>
  );
}
