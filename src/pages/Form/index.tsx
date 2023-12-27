import {
  View,
  Text,
  Button,
  Image,
  Form,
  Input,
  Picker,
  Checkbox,
  RadioGroup,
  Radio,
  Label,
} from "@tarojs/components";
import Taro, { useDidShow, useLoad, useReady } from "@tarojs/taro";
import React, { useEffect, useState } from "react";
import suggestIcon from "@/assets/images/suggect-icon.png";
import leaf from "@/assets/images/leaf.png";
import {
  licenseTypeMap,
  licenseTypeObjectMap,
  cooperateModesMap,
  cooperateModesObjectMap,
  relatedTypeMap,
  relatedTypeObjectMap,
} from "./data";
import "./index.scss";
export default function Index() {
  let [formValues, setFormValues] = useState<any>({});
  useLoad(() => {
    console.log("test Page loaded.");
  });
  const onSubmit = (e) => {
    const values = e.detail.value;
    const {
      corpName,
      relatedLicense,
      periodMachine,
      periodParts,
      period,
      periodR4,
    } = values;

    const {
      cooperateModes,
      cooperationType,
      licenseType,
      relatedType,
      shopType,
      ensureAmount,
      time,
    } = formValues;
    const reportData = {
      2: {
        periodMachine,
        periodParts,
      },
      1: { period },
      4: {
        shopType,
        period: periodR4,
        ensureAmount,
        time,
        warehouse: shopType === "PLATFORM" ? "上海分仓" : undefined,
      },
    };
    const params = {
      cooperationMode: cooperateModes, //合作模式
      cooperationType, //合作属性
      licenseType, //营业执照类型
      relatedType, //公司入驻类型
      relatedLicense,
      relatedMerchant: "MC16A9B57FDEAF00003578",
      reportData: JSON.stringify(reportData[cooperateModes]),
    };
    // console.log("commit-data:", params);
    //新建提报（自主提报 && 新增）
    handleSubmit({ ...params, companyName: corpName });
  };
  const handleSubmit = (params) => {
    // 您确定要提报吗？
    //  const handler = Toast.show({
    //    icon: "loading",
    //    content: "加载中...",
    //    maskClickable: false,
    //    duration: 0,
    //  });
    //  try {
    //    const res =
    //       await reportAuto(params)
    //    handler && handler.close();
    //    // 提报成功，跳转到提报tab页
    //    if (res) {
    //      Toast.show("创建成功！");
    //      history.push("/list");
    //    }
    //  } catch (error) {
    //    handler && handler.close();
    //    Toast.show({
    //      icon: "fail",
    //      content: "创建提报失败:" + error.message,
    //    });
    //  }
  };
  const onReset = (e) => {
    // console.log("reset-e:", e);
    history.go(-1);
  };
  // console.log("formValues---:", formValues);

  /* 公司关系 */
  const corpRelation = (
    <View className="chanxiao-wrap fs-16">
      <View className="fs-16 bold flex-row-start-center chanxiao-title">
        <Image style="width: 16px;" src={leaf} />
        <Text>公司关系</Text>
      </View>
      <View className="flex-row-between-center example-body">
        <Text className="form-label">入驻类型</Text>
        <View>
          <Picker
            mode="selector"
            range={relatedTypeMap}
            rangeKey="label"
            onChange={(e) => {
              setFormValues({
                ...formValues,
                relatedType: relatedTypeMap[e.detail.value]?.value,
              });
            }}
          >
            <Text className="place-holder">
              {relatedTypeObjectMap[formValues?.relatedType] || "请选择 >"}
            </Text>
          </Picker>
        </View>
      </View>
      {(formValues?.relatedType == "GUARANTEE" ||
        formValues?.relatedType == "RELATED") && (
        <>
          <View className="flex-row-between-center example-body">
            <View
              style={{ textAlign: "left", color: "#ED7B2F", fontSize: "14px" }}
            >
              *请补充贵司
              {formValues?.relatedType === "GUARANTEE"
                ? "指定关联方(即担保的对象)"
                : "担保方"}
              信息
            </View>
          </View>
          <View className="flex-row-between-center example-body">
            <Input
              name="relatedLicense"
              className="w-100 text-left"
              placeholder={`请输入${
                formValues?.relatedType === "GUARANTEE"
                  ? "指定关联方"
                  : "担保方"
              }统一社会信用代码`}
            />
          </View>
        </>
      )}
    </View>
  );

  /* 寄售 */
  const channelJS = (
    <View className="chanxiao-wrap fs-16">
      <div className="fs-16 bold flex-row-start-center chanxiao-title">
        <Image src={leaf} style="width: 16px;" />
        <span>寄售提报信息</span>
      </div>
      <View className="flex-row-between-center example-body">
        <Text className="form-label w-5rem">整机结算账期</Text>
        <View className="flex-row-end-center">
          <Input
            type="text"
            placeholder="请输入数字,例如:7"
            name="periodMachine"
            placeholderStyle="color:#ccc"
          />

          <Text className="c-999 form-unit">天</Text>
        </View>
      </View>
      <View className="flex-row-between-center example-body">
        <Text className="form-label w-5rem">配件结算账期</Text>
        <View className="flex-row-end-center">
          <Input
            type="text"
            placeholder="请输入数字,默认30天"
            name="periodParts"
            placeholderStyle="color:#ccc"
          />
          <Text className="c-999 form-unit">天</Text>
        </View>
      </View>
    </View>
  );
  /* 现采 */
  const channelXC = (
    <View className="chanxiao-wrap fs-16">
      <View className="fs-16 bold flex-row-start-center chanxiao-title">
        <Image src={leaf} style={{ width: "16px" }} />
        <span>现采提报信息</span>
      </View>
      <View className="flex-row-between-center example-body">
        <Text className="form-label">结算账期</Text>
        <View className="flex-row-end-center">
          <Input
            type="text"
            placeholder="请输入数字,例如:7"
            name="period"
            placeholderStyle="color:#ccc"
          />
          <Text className="c-999 form-unit">天</Text>
        </View>
      </View>
    </View>
  );
  /* 大菠萝店铺 */
  const channelR4 = (
    <View className="chanxiao-wrap fs-16">
      <View className="fs-16 bold flex-row-start-center chanxiao-title">
        <Image src={leaf} style={{ width: "16px" }} />
        <span>大菠萝提报信息</span>
      </View>
      <View className="flex-row-between-center example-body">
        <Text className="form-label">合作属性</Text>
        <RadioGroup
          onChange={(e) => {
            setFormValues({
              ...formValues,
              shopType: e.detail.value,
            });
          }}
        >
          <Label>
            <Radio value={"FACTORY"} checked={formValues.shopType == "FACTORY"}>
              工厂
            </Radio>
          </Label>
          <Label>
            <Radio
              value={"DIRECT_SHIPMENT"}
              checked={formValues.shopType == "DIRECT_SHIPMENT"}
            >
              直发
            </Radio>
          </Label>
          <Label>
            <Radio
              value={"PLATFORM"}
              checked={formValues.shopType == "PLATFORM"}
            >
              平台
            </Radio>
          </Label>
        </RadioGroup>
      </View>
      <View className="flex-row-between-center example-body">
        <Text className="form-label">结算账期</Text>
        <View className="flex-row-end-center">
          <Input
            type="text"
            placeholder="请输入数字,例如:7"
            name="periodR4"
            placeholderStyle="color:#ccc"
          />
          <Text className="c-999 form-unit">天</Text>
        </View>
      </View>
      <View className="flex-row-between-center example-body">
        <Text className="form-label">保证金</Text>
        <Input
          type="text"
          placeholder="请输入"
          name="ensureAmount"
          placeholderStyle="color:#ccc"
        />
      </View>
      <View className="flex-row-between-center example-body">
        <Text className="form-label">截单时间</Text>
        <View>
          <Picker
            mode="date"
            value=""
            onChange={(e) => {
              const h = new Date().getHours();
              const m = new Date().getMinutes();
              const s = new Date().getSeconds();
              console.log("时间：", h, m, s);
              const time = `${e.detail.value} ${h < 10 ? "0" + h : h}:${
                m < 10 ? "0" + m : m
              }:${s < 10 ? "0" + s : s}`;
              setFormValues({
                ...formValues,
                time,
              });
            }}
          >
            <Text className="place-holder">
              {formValues?.time || "请选择 >"}
            </Text>
          </Picker>
        </View>
      </View>
    </View>
  );

  return (
    <View className="create-wrapper">
      <View className="flex-row-start-center">
        <Image style="width: 42px;height: 42px" src={suggestIcon} />
        <Text className="create-title">提报信息</Text>
      </View>
      <View className="create-content m-t-16">
        <Form onSubmit={onSubmit} onReset={onReset}>
          <View className="flex-row-between-center example-body no-border">
            <Text className="form-label">公司名称</Text>
            <Input
              type="text"
              placeholder="请输入公司名称"
              name="corpName"
              placeholderStyle="color:#ccc"
            />
          </View>
          <View className="flex-row-between-center example-body">
            <Text className="form-label">营业执照企业类型</Text>
            <View>
              <Picker
                mode="selector"
                range={licenseTypeMap}
                rangeKey="label"
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    licenseType: licenseTypeMap[e.detail.value]?.value,
                  });
                }}
              >
                <Text className="place-holder">
                  {licenseTypeObjectMap[formValues?.licenseType] || "请选择 >"}
                </Text>
              </Picker>
            </View>
          </View>
          <View className="flex-row-between-center example-body">
            <Text className="form-label">合作模式</Text>
            <View>
              <Picker
                mode="selector"
                range={cooperateModesMap}
                rangeKey="label"
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    cooperateModes: cooperateModesMap[e.detail.value]?.value,
                  });
                }}
              >
                <Text className="place-holder">
                  {cooperateModesObjectMap[formValues?.cooperateModes] ||
                    "请选择 >"}
                </Text>
              </Picker>
            </View>
          </View>
          <View className="flex-row-between-center example-body">
            <Text className="form-label">合作属性</Text>
            <RadioGroup
              onChange={(e) => {
                setFormValues({
                  ...formValues,
                  cooperationType: e.detail.value,
                });
              }}
            >
              <Label>
                <Radio value={"2"} checked={formValues.cooperationType == 2}>
                  平台
                </Radio>
              </Label>
              <Label>
                <Radio value={"1"} checked={formValues.cooperationType == 1}>
                  贸易
                </Radio>
              </Label>
            </RadioGroup>
          </View>
          {corpRelation}
          {formValues?.cooperateModes === 2 && channelJS}
          {formValues?.cooperateModes === 1 && channelXC}
          {formValues?.cooperateModes === 4 && channelR4}
          <View className="opt-btn-wrap">
            <Button plain className="btn" formType="reset">
              取消
            </Button>
            <Button
              plain
              type="primary"
              formType="submit"
              className="btn"
              style={{ marginLeft: "1rem", marginRight: "1rem" }}
            >
              提交
            </Button>
          </View>
        </Form>
      </View>
    </View>
  );
}
