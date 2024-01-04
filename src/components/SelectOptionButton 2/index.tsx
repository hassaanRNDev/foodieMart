// import React from "react";
// import { View, Text, PressableScale } from "@/ui";
// import { StyleSheet } from "react-native";
// import { AppFontSizes } from "@/constants";
// import { scale } from "react-native-size-matters";
// import { Image } from "expo-image";
// import { icons, IconTypes } from "@/assets/icons";

// type SelectOptionButtonProps = {
//     isSelected: boolean;
//     icon: IconTypes;
//     selectedText: string;
//     onPress: () => void;
// };

// export const SelectOptionButton = ({
//     isSelected,
//     icon,
//     selectedText,
//     onPress,
// }: SelectOptionButtonProps) => {
//     return (
//         <PressableScale onPress={onPress}>
//             <View
//                 borderColor={isSelected ? "transparent" : "transparent"}
//                 paddingVertical="small"
//                 backgroundColor={"backgroundLight"}
//                 borderWidth={StyleSheet.hairlineWidth * 2}
//                 borderRadius={scale(4)}
//                 paddingHorizontal="small"
//                 flexDirection={"row"}
//                 alignItems="center"
//             >
//                 <Text
//                     variant={"500"}
//                     flex={1}
//                     color={isSelected ? "textColor" : "bodyTextColor"}
//                     fontSize={AppFontSizes[14]}
//                 >
//                     {selectedText}
//                 </Text>
//                 <Image source={icons[icon]} style={styles.icon} />
//             </View>
//         </PressableScale>
//     );
// };

// const styles = StyleSheet.create({
//     icon: {
//         height: scale(20),
//         width: scale(20),
//     },
// });
