// import React, { useEffect, useState } from "react";
// import { scale } from "react-native-size-matters";
// import { View, Text, Icon, Button } from "@/ui";
// import { Alert, ScrollView, TouchableOpacity, useWindowDimensions } from "react-native";
// import LinearGradient from "react-native-linear-gradient";
// import { AppFontSizes } from "@/constants";
// import Modal from "react-native-modal";
// import { useJobRequest, setJobRequest } from "@/store/Job";
// import { acceptOrder, getOrderDetails } from "@/services/api/order";
// import { useOrder, setOrder } from "@/store/Order";
// import { LineSeperator } from "../LineSeperator";
// import ActionMenu from "@/screens/ActiveOrders/ActionMenu";
// import { useRiderDetails, setRiderDetails } from "@/store/RiderDetails";
// import { getAssignedOrders } from "@/services/order";
// import { setBulkOrderStatus, setActiveOrders } from "@/store/OrderTracking";
// import { resetMandatorySteps } from "@/store/MandatorySteps";
// import { format } from "date-fns";
// import { navigate } from "@/navigation/navigationUtilities";
// import { palette } from "@/theme";
// import { Audio } from "expo-av";
// import crashlytics from "@react-native-firebase/crashlytics";

// const ListItem = ({
//   showBike = false,
//   label,
//   value,
// }: {
//   showBike?: boolean;
//   label: string;
//   value: string;
// }) => {
//   return (
//     <View
//       flexDirection={"row"}
//       justifyContent={"space-between"}
//       alignItems={"center"}
//       paddingHorizontal={"large"}
//       marginTop={"small"}
//     >
//       <View>
//         <Text variant={"600"} fontSize={AppFontSizes[12]} color={"textColor"}>
//           {label}
//         </Text>
//         <Text
//           variant={"700"}
//           fontSize={AppFontSizes[14]}
//           color={"textColor"}
//           marginTop={"tiny"}
//         >
//           {value}
//         </Text>
//       </View>
//       {showBike ? <Icon icon="bike" size={scale(40)} /> : null}
//     </View>
//   );
// };

// export const JobRequestModal = () => {
//   const { height, width } = useWindowDimensions();

//   const order = useOrder((state) => state.order);

//   const showJobRequest = useJobRequest((state) => state?.showJobRequest);

//   const riderId = useRiderDetails((state) => state?.riderDetails?.id);
//   const riderDetails = useRiderDetails((state) => state?.riderDetails);

//   const [accepting, setIsAccepting] = useState<boolean>(false);
//   const [soundObject, setSoundObject] = useState<any>(null);

//   const [sound, setSound] = useState();

//   const [expanded, setExpanded] = useState(null);

//   const [singleOrder, setSingleOrder] = useState<any>(null);
//   const [orders, setOrders] = useState<any>(null);

//   const [acceptingOrders, setAcceptingOrders] = useState(null);

//   //const insets = useSafeAreaInsets();

//   // a single order details
//   const orderDetails = () => {
//     getOrderDetails({ orderId: order?.orderId })
//       .then((res) => {
//         console.log("res", JSON.stringify(res, null, 2));
//         // @ts-ignore
//         if (res?.status) {
//           // @ts-ignore
//           setSingleOrder(res?.data);
//         }
//       })
//       .catch((error) => {
//         console.log("error", JSON.stringify(error, null, 2));
//         setIsAccepting(false);
//       });
//   };

//   // get assigned orders
//   const getRiderAssignedOrders = () => {
//     crashlytics().log("fetch rider assigned orders");
//     getAssignedOrders({ riderId: riderId })
//       .then((res) => {
//         console.log("getAssignedOrders", JSON.stringify(res, null, 2));
//         // @ts-ignore
//         if (res?.status) {
//           // @ts-ignore
//           setOrders(res?.data?.data);
//         } else {
//           crashlytics().recordError({
//             name: "fetch rider assigned orders",
//             message: JSON.stringify(res),
//           });
//         }
//       })
//       .catch((error) => {
//         console.log("error", JSON.stringify(error, null, 2));
//       });
//   };

//   useEffect(() => {
//     // Load the sound file when the component mounts
//     const loadSound = async () => {
//       const { sound } = await Audio.Sound.createAsync(
//         require("../../assets/notification-sound.wav"),
//         {
//           isLooping: true,
//         }
//       );
//       //@ts-ignore
//       setSound(sound);
//     };

//     loadSound();

//     // Clean up the sound when the component unmounts
//     return () => {
//       if (sound) {
//         //@ts-ignore
//         sound.unloadAsync();
//       }
//     };
//   }, []);

//   useEffect(() => {
//     if (riderId) {
//       getRiderAssignedOrders();
//     }
//   }, [order?.orderId, order?.notificationHasArrived]);

//   const playSound = async () => {
//     if (sound) {
//       //@ts-ignore
//       await sound.playAsync();
//     }
//   };

//   const stopSound = async () => {
//     if (sound) {
//       //@ts-ignore
//       await sound.stopAsync();
//     }
//   };

//   useEffect(() => {
//     if (orders?.length > 0) {
//       playSound();
//     } else {
//       stopSound();
//     }
//   }, [orders]);

//   //accept assigned order.
//   const riderAcceptOrder = (orderId: any) => {
//     crashlytics().log("accept order");

//     setAcceptingOrders(orderId);
//     acceptOrder({ orderId: orderId })
//       .then((res: any) => {
//         console.log("res", JSON.stringify(res, null, 2));

//         if (res?.code === 200) {
//           setOrder({ ...order, accepted: true });
//           setAcceptingOrders(null);

//           let existingOrders = [...orders];
//           let removeOrder = existingOrders?.filter((element) => element?._id !== orderId);
//           setOrders(removeOrder);

//           if (removeOrder?.length === 0) {
//             setJobRequest(false);
//             setBulkOrderStatus("ORDER_PREPARING");
//             stopSound();
//           }
//         } else {
//           setAcceptingOrders(null);
//           Alert.alert("Error", "Order accepting failed");
//           crashlytics().recordError({
//             name: "accept order",
//             message: JSON.stringify(res),
//           });
//         }
//       })
//       .catch((error) => {
//         console.log("error", JSON.stringify(error, null, 2));
//         setAcceptingOrders(null);
//       });
//   };

//   const resetRider = () => {
//     let riderToSet = {
//       ...riderDetails,
//       status: "INACTIVE",
//     };

//     // @ts-ignore
//     setRiderDetails(riderToSet);
//     resetMandatorySteps();
//     setJobRequest(false);
//   };

//   const listHeader = ({ item }: any) => {
//     return (
//       <View>
//         <ListItem
//           showBike={true}
//           label="New Order Request"
//           value={`Order# ${item?.orderNo}`}
//         />
//         <View marginVertical={"small"}>
//           <LineSeperator />
//         </View>
//         <ListItem label="Pick up" value={`${item?.branchId?.name}`} />
//         <View marginVertical={"small"}>
//           <LineSeperator />
//         </View>
//         <ListItem label="Delivery" value={`${item?.address?.location}`} />
//       </View>
//     );
//   };

//   const CheckoutButton = () => {
//     return (
//       <View
//         style={{
//           width: scale(35),
//           height: scale(35),
//           backgroundColor: "#65A9DD",
//           borderRadius: 20,
//           justifyContent: "center",
//           alignItems: "center",
//         }}
//       >
//         <Icon icon="whitetick" size={scale(25)} />
//       </View>
//     );
//   };

//   return (
//     <Modal
//       animationIn="fadeIn"
//       animationOut="fadeOut"
//       animationOutTiming={700}
//       animationInTiming={700}
//       //isVisible={true}
//       isVisible={showJobRequest}
//       style={{
//         backgroundColor: "rgba(0,0,0,0)",
//         margin: 0,
//         padding: 0,
//         height: height,
//         width: width,
//       }}
//       backdropOpacity={0.2}
//     >
//       <View width={width} height={height} backgroundColor="transparent">
//         <LinearGradient
//           colors={["#83D2E6", "#67ACDD", "#64A8DC"]}
//           style={{ flex: 1, paddingTop: 24 }}
//         >
//           <ScrollView>
//             <View alignSelf={"flex-end"}>
//               <TouchableOpacity
//                 onPress={() => {
//                   setJobRequest(false);
//                 }}
//               >
//                 <View
//                   backgroundColor={"backgroundLight"}
//                   height={scale(32)}
//                   width={scale(32)}
//                   borderRadius={60}
//                   justifyContent="center"
//                   alignItems={"center"}
//                   marginRight={"large"}
//                   marginBottom={"large"}
//                 >
//                   <Icon size={scale(14)} icon="cross" onPress={() => null} />
//                 </View>
//               </TouchableOpacity>
//             </View>

//             {orders?.map((item: any, index: any) => {
//               return (
//                 <TouchableOpacity
//                   key={index}
//                   activeOpacity={1}
//                   onPress={() => {
//                     if (expanded) {
//                       setExpanded(null);
//                     }
//                   }}
//                 >
//                   <View alignItems={"center"} paddingVertical={"medium"}>
//                     <View
//                       // height={scale(300)}
//                       width={scale(298)}
//                       borderRadius={8}
//                       backgroundColor={"backgroundLight"}
//                       paddingVertical={"large"}
//                       justifyContent={"space-between"}
//                     >
//                       <View
//                         flexDirection={"row"}
//                         paddingHorizontal={"large"}
//                         justifyContent={"space-between"}
//                         alignItems={"center"}
//                       >
//                         <Text variant={"500"} fontSize={AppFontSizes[14]} color={"textColor"}>
//                           {format(new Date(item?.createdAt), "dd-MMM-yyyy")}
//                         </Text>
//                         <Icon
//                           icon="option"
//                           size={scale(25)}
//                           onPress={() => {
//                             setExpanded(item?._id);
//                           }}
//                         />
//                       </View>
//                       {expanded === item?._id ? (
//                         <ActionMenu
//                           expanded={true}
//                           onButtonPress={() => {
//                             setExpanded(null);
//                             setJobRequest(false);
//                             //@ts-ignore
//                             navigate("CancelJob", {
//                               orderId: item?._id,
//                               from: "JobRequest",
//                             });
//                           }}
//                         />
//                       ) : null}

//                       <View flex={1}>{listHeader({ item })}</View>

//                       <View marginHorizontal={"small"} marginTop={"medium"}>
//                         <Button
//                           onPress={() => riderAcceptOrder(item?._id)}
//                           label="Accept"
//                           loading={acceptingOrders === item?._id}
//                         />
//                       </View>
//                     </View>
//                   </View>
//                 </TouchableOpacity>
//               );
//             })}
//           </ScrollView>
//         </LinearGradient>
//       </View>
//     </Modal>
//   );
// };
