// import React, { useEffect } from "react";
// import { View, Text, PressableScale } from "@/ui";
// import { icons } from "@/assets/icons";
// import { scale } from "react-native-size-matters";
// import { signOut } from "@/store/Auth";
// import { setRiderDetails, useRiderDetails } from "@/store/RiderDetails";
// import { resetCheeziousRider } from "@/store/Rider";
// import { resetCredentials } from "@/store/Credentials";
// import { resetMandatorySteps } from "@/store/MandatorySteps";
// import { closeDrawer } from "@/store/App";
// import { StyleSheet } from "react-native";
// import { Image } from "expo-image";
// import { useNavigation } from "@react-navigation/native";
// import { logoutRider } from "@/services/api/auth";

// export const DrawerComponent = ({ element, index }: { element: any; index: number }) => {
//   let navigation = useNavigation();

//   const riderId = useRiderDetails((state) => state?.riderDetails?.id);

//   return (
//     <PressableScale
//       key={index}
//       onPress={() => {
//         if (element.navigationRoute === "Logout") {
//           logoutRider({ riderId })
//             .then((res) => {
//               setRiderDetails(null);
//               resetCheeziousRider();
//               resetCredentials();
//               resetMandatorySteps();
//               signOut();
//               closeDrawer();
//             })
//             .catch((error) => {
//               console.log("error", error);
//             });

//           return;
//         }
//         // @ts-ignore

//         navigation?.navigate(element.navigationRoute, { from: "Drawer" });
//         closeDrawer();
//       }}
//     >
//       <View
//         borderBottomColor={"borderColor"}
//         borderBottomWidth={StyleSheet.hairlineWidth}
//         paddingHorizontal="large"
//         paddingVertical={"xLarge"}
//         flexDirection="row"
//       >
//         <Image
//           // @ts-ignore
//           source={icons[element.icon]}
//           style={styles.image}
//           contentFit="contain"
//         />
//         <View flex={1}>
//           <Text variant={"drawer-text"} backgroundColor={"primary"} marginLeft="small">
//             {element.route}
//           </Text>
//         </View>
//         <Image
//           source={icons["chevron-right"]}
//           style={{ width: scale(14), height: scale(14) }}
//           contentFit="contain"
//         />
//       </View>
//     </PressableScale>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: scale(24),
//     height: scale(24),
//   },
//   logo: {
//     width: scale(32),
//     height: scale(32),
//   },
// });
