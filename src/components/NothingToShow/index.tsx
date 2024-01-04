// import React from "react";
// import { Text, View } from "@/ui";
// import { useWindowDimensions, StyleSheet } from "react-native";
// import { Image } from "expo-image";
// import { scale } from "react-native-size-matters";

// type NothingToShowProps = {
//   description: string;
// };

// export const NothingToShow = ({ description }: NothingToShowProps) => {
//   const { height } = useWindowDimensions();

//   return (
//     <View height={height * 0.5} alignItems={"center"} justifyContent={"center"}>
//       <Image
//         source={require("@/assets/images/empty-item.png")}
//         contentFit="contain"
//         style={styles.image}
//       />
//       <Text variant={"700"} color={"textColor"} paddingTop={"small"}>
//         {description ?? "Nothing to show"}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: scale(240),
//     height: scale(100),
//   },
// });
