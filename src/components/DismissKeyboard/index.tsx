import { TouchableWithoutFeedback, Keyboard } from "react-native";
import React from "react";
const DismissKeyboardContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={{ flex: 1 }}
    >
      {children}
    </TouchableWithoutFeedback>
  );
};
export default DismissKeyboardContainer;
