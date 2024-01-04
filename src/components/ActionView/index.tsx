// import React, { useEffect } from "react";
// import { scale } from "react-native-size-matters";
// import { View, Text, Icon } from "../../ui";
// import { AppFontSizes } from "../../constants";
// import { resetMandatorySteps, useMandatorySteps } from "@/store/MandatorySteps";
// import { Pressable } from "react-native";
// import { translate } from "./language";

// export const StartShiftView = ({
//   onPress,
//   riderStatus,
// }: {
//   onPress: () => void;
//   riderStatus: any;
// }) => {
//   let totalSteps = useMandatorySteps((state) => state);
//   let remainingSteps = totalSteps?.MandatorySteps?.filter((element) => !element.completed);

//   // console.log("riderStatus", riderStatus);

//   useEffect(() => {
//     if (riderStatus === "SUSPEND") {
//       resetMandatorySteps();
//     }
//   }, [riderStatus]);

//   return (
//     <View>
//       {riderStatus === "INACTIVE" || riderStatus === "SUSPEND" ? (
//         <View
//           marginTop={"large"}
//           borderRadius={10}
//           marginHorizontal={"large"}
//           backgroundColor={"red"}
//           height={scale(234)}
//           justifyContent={"center"}
//         >
//           <View flexDirection={"row"} alignSelf={"center"} alignItems={"center"}>
//             {/* <Icon icon="point" size={scale(6)} color="white" /> */}
//             <Text
//               tx={remainingSteps.length > 0 ? "dashboard.headline" : "dashboard.headline2"}
//               fontSize={AppFontSizes[14]}
//               marginLeft={"small"}
//               variant="700"
//               color={"backgroundLight"}
//               textTransform={"uppercase"}
//             />
//           </View>

//           <View
//             marginTop={"large"}
//             borderRadius={4}
//             marginHorizontal={"large"}
//             backgroundColor={"backgroundLight"}
//             height={scale(166)}
//           >
//             <View
//               flexDirection={"row"}
//               alignItems={"center"}
//               justifyContent={"center"}
//               marginTop={"large"}
//             >
//               <Icon
//                 icon={remainingSteps.length > 0 ? "warning" : "tickMark"}
//                 size={scale(20)}
//               />
//               <View marginLeft={"small"}>
//                 <Text fontSize={AppFontSizes[14]} variant="600" color={"textColor"}>
//                   {/* Required Actions ({remainingSteps.length}) */}
//                   {translate("dahsboardBox.notice")}({remainingSteps.length})
//                 </Text>
//                 <Text
//                   tx={"dashboard.message"}
//                   fontSize={AppFontSizes[12]}
//                   color={"bodyTextColor"}
//                   variant="500"
//                 />
//               </View>
//             </View>
//             {totalSteps?.MandatorySteps?.map((item, index) => {
//               return (
//                 <Pressable key={index} onPress={item?.completed ? null : onPress}>
//                   <View
//                     key={index}
//                     flexDirection={"row"}
//                     marginHorizontal={"large"}
//                     marginVertical={"small"}
//                   >
//                     <Text fontSize={AppFontSizes[12]} color={"textColor"} variant="500">
//                       {item.id}.
//                     </Text>
//                     <View flex={1} marginLeft={"medium"}>
//                       <Text fontSize={AppFontSizes[12]} color={"textColor"} variant="500">
//                         {item.requiredAction}
//                       </Text>
//                     </View>
//                     {item?.completed ? null : (
//                       <Icon icon="vector" size={scale(12)} onPress={onPress} />
//                     )}
//                   </View>
//                 </Pressable>
//               );
//             })}
//           </View>
//         </View>
//       ) : (
//         <View>
//           <View
//             marginTop={"large"}
//             borderRadius={10}
//             marginHorizontal={"large"}
//             backgroundColor={"lightGreen"}
//             height={scale(34)}
//             justifyContent={"center"}
//             marginBottom={"medium"}
//           >
//             <View flexDirection={"row"} alignSelf={"center"} alignItems={"center"}>
//               {/* <Icon icon="point" size={scale(6)} color="white" /> */}
//               <Text
//                 tx={remainingSteps.length > 0 ? "dashboard.headline" : "dashboard.headline2"}
//                 fontSize={AppFontSizes[14]}
//                 marginLeft={"small"}
//                 variant="700"
//                 color={"backgroundLight"}
//                 textTransform={"uppercase"}
//               />
//             </View>
//           </View>
//         </View>
//       )}
//     </View>
//   );
// };
