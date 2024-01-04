import { StyleSheet } from "react-native";
import { View } from "../../ui";

export const LineSeperator = () => {
  return (
    <View
      height={StyleSheet.hairlineWidth}
      width={"100%"}
      backgroundColor={"borderColor"}
    ></View>
  );
};
