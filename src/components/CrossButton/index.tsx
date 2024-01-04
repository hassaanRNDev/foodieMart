import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Icon } from "../../ui";
import { scale } from "react-native-size-matters";

type CrossButtonProps = {
  onClose: () => void;
};

const CrossButton = ({ onClose }: CrossButtonProps) => {
  return (
    <TouchableOpacity onPress={onClose}>
      <View
        backgroundColor={"backgroundLight"}
        height={scale(32)}
        width={scale(32)}
        borderRadius={60}
        justifyContent="center"
        alignItems={"center"}
      >
        <Icon size={scale(14)} icon="cross" onPress={() => null} />
      </View>
    </TouchableOpacity>
  );
};

export default CrossButton;
