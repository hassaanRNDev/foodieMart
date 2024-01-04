// import React, { useMemo } from "react";
// import { Drawer } from "react-native-drawer-layout";
// import { View, Text, Screen, Button } from "@/ui";
// import { useApp, openDrawer, closeDrawer } from "@/store/App";
// import {
//   drawerRoutesWithBranch,
//   drawerRoutesWithoutBranch,
//   verificationRoutes,
// } from "@/constants";
// import { ScrollView, StyleSheet, Dimensions, Platform, Linking } from "react-native";
// import { LineSeperator, ImageButton, IconButton } from "@/components";
// import { useTheme } from "@shopify/restyle";
// import { Theme } from "@/theme";
// import { scale } from "react-native-size-matters";
// import { useNavigation } from "@react-navigation/native";
// import { useRiderDetails } from "@/store/RiderDetails";
// import { DrawerComponent } from "./DrawerComponent";
// import { AppFontSizes } from "@/constants";
// import { translate } from "@/language";
// import { useOrderTracking } from "@/store/OrderTracking";

// const { width } = Dimensions.get("screen");

// type AppDrawer = {
//   children: React.ReactNode;
// };

// export const AppDrawer = ({ children }: AppDrawer) => {
//   const theme = useTheme<Theme>();
//   const drawerStatus = useApp((state) => state.drawerStatus);
//   let navigation = useNavigation();

//   const riderDetails = useRiderDetails((state) => state?.riderDetails);
//   const riderStatus = useRiderDetails((state) => state?.riderDetails?.status);
//   const orderStatusForBulkOrders = useOrderTracking((state) => state.orderStatusForBulkOrders);

//   const routes = useMemo(() => {
//     if (riderDetails?.isVerified && riderDetails?.isTrained && riderDetails?.branchId) {
//       return drawerRoutesWithBranch;
//     } else if (
//       riderDetails?.isVerified &&
//       riderDetails?.isTrained &&
//       !riderDetails?.branchId
//     ) {
//       return drawerRoutesWithoutBranch;
//     } else {
//       return verificationRoutes;
//     }
//   }, [riderDetails]);

//   return (
//     <Drawer
//       open={drawerStatus}
//       onOpen={openDrawer}
//       onClose={closeDrawer}
//       drawerType="front"
//       drawerStyle={{ width: width * 0.8 }}
//       overlayStyle={{ backgroundColor: "rgba(0,0,0,0.2)" }}
//       renderDrawerContent={() => {
//         return (
//           <Screen statusBarColor={theme.colors.background} edges={["top"]}>
//             <View
//               flexDirection={"row"}
//               alignItems="center"
//               justifyContent={"space-between"}
//               paddingHorizontal="large"
//             >
//               <ImageButton icon="bike" imageSize={scale(35)} onPress={() => null} />
//               <View flexDirection={"row"} alignItems="center">
//                 <IconButton
//                   icon="notification"
//                   size={42}
//                   imageSize={24}
//                   //@ts-ignore
//                   onPress={() => {
//                     closeDrawer();
//                     //@ts-ignore
//                     navigation?.navigate("NotificationScreen");
//                   }}
//                   isGradient={true}
//                 />
//               </View>
//             </View>
//             <View flex={1}>
//               <ScrollView
//                 style={{ flex: 1 }}
//                 showsVerticalScrollIndicator={false}
//                 contentContainerStyle={{
//                   paddingBottom: 130,
//                 }}
//               >
//                 <View paddingHorizontal="large" paddingVertical={"medium"}>
//                   <Text variant={"700"} fontSize={AppFontSizes[18]} color={"textColor"}>
//                     {riderDetails?.firstName} {riderDetails?.lastName}
//                   </Text>
//                   <Text
//                     variant={"500"}
//                     fontSize={AppFontSizes[14]}
//                     marginTop="xSmall"
//                     color="textColor"
//                   >
//                     {riderDetails?.cnic}
//                   </Text>
//                 </View>
//                 <View paddingBottom={"large"} paddingHorizontal="large">
//                   <Button
//                     label={translate("profile.view_profile")}
//                     variant={"secondary"}
//                     //@ts-ignore
//                     onPress={() => {
//                       //@ts-ignore
//                       navigation?.navigate("Profile");
//                       closeDrawer();
//                     }}
//                   />
//                 </View>
//                 <LineSeperator />

//                 {routes?.map((element, index) => {
//                   if (riderStatus === "SUSPEND") return;
//                   if (orderStatusForBulkOrders !== "" && element?.navigationRoute === "Logout")
//                     return;
//                   return <DrawerComponent element={element} index={index} key={index} />;
//                 })}
//               </ScrollView>
//             </View>
//             <View
//               height={scale(60)}
//               backgroundColor="textColor"
//               alignItems={"center"}
//               flexDirection="row"
//               paddingHorizontal={"medium"}
//               justifyContent="space-between"
//             >
//               <View alignItems={"center"} flexDirection="row">
//                 <ImageButton icon="rider-logo" imageSize={scale(28)} onPress={() => null} />
//                 <Text variant={"500"} color="background" marginLeft="small">
//                   A Proud Pakistani Brand
//                 </Text>
//               </View>
//               <View alignItems={"center"} flexDirection="row">
//                 {/* <ImageButton
//                   icon="whats-app"
//                   imageSize={scale(28)}
//                   onPress={() => {
//                     console.log("hello");
//                     Linking.openURL("whatsapp://send?text=&phone=03311001122");
//                   }}
//                 /> */}
//                 <ImageButton
//                   icon="phone-call"
//                   imageSize={scale(28)}
//                   onPress={() => {
//                     console.log("hello");
//                     Linking?.openURL("tel:03311001122");
//                   }}
//                 />
//               </View>
//             </View>
//             <View
//               backgroundColor="textColor"
//               style={{
//                 height: Platform.select({
//                   android: 0,
//                   ios: 10,
//                 }),
//               }}
//             />
//           </Screen>
//         );
//       }}
//     >
//       {children}
//     </Drawer>
//   );
// };

// const styles = StyleSheet.create({
//   image: {
//     width: scale(18),
//     height: scale(18),
//   },
//   logo: {
//     width: scale(32),
//     height: scale(32),
//   },
// });
