// import React from "react";
// import { View, Text, PressableScale } from "@/ui";
// import { StyleSheet } from "react-native";
// import { AppFontSizes } from "@/constants";
// import { scale } from "react-native-size-matters";
// import { Image } from "expo-image";
// import { icons, IconTypes } from "@/assets/icons";
// import { theme } from "@/theme";

// type SelectOptionButtonProps = {
//   isSelected: boolean;
//   icon: IconTypes;
//   selectedText: string;
//   onPress: () => void;
// };

// export const SelectOptionButton = ({
//   isSelected,
//   icon,
//   selectedText,
//   onPress,
// }: SelectOptionButtonProps) => {
//   return (
//     <PressableScale onPress={onPress}>
//       <View
//         //borderColor={isSelected ? "borderColor" : "bodyTextColor"}
//         // paddingVertical="small"
//         //borderWidth={StyleSheet.hairlineWidth * 2}
//         borderRadius={scale(4)}
//         paddingHorizontal="small"
//         flexDirection={"row"}
//         alignItems="center"
//         backgroundColor="backgroundLight"
//         height={scale(52)}
//       >
//         <Text
//           variant={"500"}
//           flex={1}
//           color={isSelected ? "textColor" : "bodyTextColor"}
//           fontSize={14}
//         >
//           {selectedText}
//         </Text>
//         <Image source={icons[icon]} style={styles.icon} />
//       </View>
//     </PressableScale>
//   );
// };

// const styles = StyleSheet.create({
//   icon: {
//     height: scale(20),
//     width: scale(20),
//   },
// });
