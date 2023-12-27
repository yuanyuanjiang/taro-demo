export const licenseTypeMap = [
  { label: "个体工商户", value: 3 },
  { label: "个人独资企业", value: 2 },
  { label: "有限公司", value: 1 },
];
export const licenseTypeObjectMap = {
  3: "个体工商户",
  2: "个人独资企业",
  1: "有限公司",
};

export const cooperateModesMap = [
  { label: "R1-寄售", value: 2 },
  { label: "R1-其他", value: 1 },
  { label: "R4-大菠萝", value: 4 },
  { label: "R5-工厂通", value: 5 },
  { label: "R8-POP", value: 8 },
];
export const cooperateModesObjectMap = {
  2: "R1-寄售",
  1: "R1-其他",
  4: "R4-大菠萝",
  5: "R5-工厂通",
  8: "R8-POP",
};

export const relatedTypeMap = [
  { label: "单独入驻", value: "NONE" },
  { label: "作为担保方入驻", value: "GUARANTEE" },
  { label: "作为指定关联方入驻", value: "RELATED" },
];
export const relatedTypeObjectMap = {
  NONE: "单独入驻",
  GUARANTEE: "作为指定关联方",
  RELATED: "作为担保方",
};
