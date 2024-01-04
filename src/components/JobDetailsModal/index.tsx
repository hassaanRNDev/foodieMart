// import React from "react";
// import { scale } from "react-native-size-matters";
// import { View, PressableScale, Text, Icon, Button } from "@/ui";
// import { Header } from "../Header";
// import { FlatList } from "react-native-gesture-handler";
// import { AppFontSizes } from "@/constants";
// import { navigate } from "@/navigation/navigationUtilities";

// const DATA = [
//   {
//     id: 1,
//     option: "Handed over to the customer",
//     details: "SUCCESSFUL",
//     icon: "package",
//   },
//   {
//     id: 2,
//     option: "Take Order Picture",
//     details: "SNAP",
//     icon: "package",
//   },
//   {
//     id: 3,
//     option: "Confrim Order",
//     details: "CONFIRMED",
//     icon: "package",
//   },
// ];
// //@ts-ignore
// export const JobDetails = ({ onClosePress, ChatWithCutomer }) => {
//   return (
//     <View flex={1} backgroundColor={"background"}>
//       <View paddingHorizontal={"large"}>
//         <Header
//           leftText={"All Orders"}
//           RightActionComponent={
//             <View flexDirection={"row"}>
//               <Icon icon="close" size={scale(26)} onPress={onClosePress} />
//             </View>
//           }
//         />
//       </View>

//       <View flex={1} marginTop={"large"} paddingHorizontal={"large"}>
//         <FlatList
//           showsVerticalScrollIndicator={false}
//           data={DATA}
//           style={{ flex: 1 }}
//           contentContainerStyle={{
//             paddingBottom: 130,
//           }}
//           renderItem={({ item }) => (
//             //@ts-ignore
//             <View
//               style={{ padding: 20 }}
//               backgroundColor={"backgroundLight"}
//               borderRadius={8}
//               marginVertical={"small"}
//             >
//               <View flexDirection={"row"} justifyContent={"space-between"}>
//                 <Text
//                   fontSize={AppFontSizes[12]}
//                   variant={"500"}
//                   color={"textColor"}
//                   marginBottom={"tiny"}
//                 >
//                   Order#CHZ324235HJ
//                 </Text>
//                 <Icon icon="option" size={scale(19)} onPress={() => null} />
//               </View>

//               <Text
//                 fontSize={AppFontSizes[12]}
//                 variant={"500"}
//                 color={"textColor"}
//                 marginBottom={"tiny"}
//               >
//                 Johar Town Z-Block, Lahore{" "}
//               </Text>
//               <Button
//                 onPress={() => null}
//                 label={"Accept Order"}
//                 variant="secondary"
//                 marginVertical={"small"}
//               />
//             </View>
//           )}
//         />
//       </View>
//       {/* <View position="absolute" bottom={25} width={"100%"}>
//         <Button
//           onPress={ChatWithCutomer}
//           label={"Chat with customer"}
//           variant="primary"
//           marginHorizontal={"large"}
//         />
//       </View> */}
//     </View>
//   );
// };
