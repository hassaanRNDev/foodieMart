// import React from "react";
// import { StyleSheet } from "react-native";
// import { View, Text } from "@/ui";
// import { AppFontSizes } from "@/constants";

// type ItemProps = {
//   heading1: string;
//   description1: string;
//   heading2: string;
//   description2: string;
// };

// export const ProfileOptions = ({
//   heading1,
//   description1,
//   heading2,
//   description2,
// }: ItemProps) => {
//   return (
//     <View flexDirection={"row"}>
//       <View flex={1} alignItems={"center"} paddingVertical={"medium"}>
//         <Text variant={"500"} fontSize={AppFontSizes[14]} color={"textColor"}>
//           {heading1}
//         </Text>

//         <Text
//           variant={"500"}
//           fontSize={AppFontSizes[14]}
//           color={"bodyTextColor"}
//           marginTop={"tiny"}
//         >
//           {description1}
//         </Text>
//       </View>
//       <View borderLeftWidth={StyleSheet.hairlineWidth} borderColor={"bodyTextColor"} />
//       <View flex={1} alignItems={"center"} paddingVertical={"medium"}>
//         <Text variant={"500"} fontSize={AppFontSizes[14]} color={"textColor"}>
//           {heading2}
//         </Text>
//         <Text
//           variant={"500"}
//           fontSize={AppFontSizes[14]}
//           color={"bodyTextColor"}
//           marginTop={"tiny"}
//         >
//           {description2}
//         </Text>
//       </View>
//     </View>
//   );
// };
