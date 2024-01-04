import { Icon, IconTypes, View } from "../../ui";
import React from "react";
import { scale } from "react-native-size-matters";

type BackgroundIconProps = {
  icon: any;
  onPress?: () => void;
};
const BackgroundIcon = ({ icon, onPress }: BackgroundIconProps) => {
  return (
    <View
      backgroundColor={"backgroundLight"}
      height={scale(32)}
      width={scale(32)}
      borderRadius={60}
      justifyContent="center"
      alignItems={"center"}
      marginHorizontal={"tiny"}
    >
      <Icon icon={icon} size={scale(19)} onPress={onPress} />
    </View>
  );
};

export default BackgroundIcon;
