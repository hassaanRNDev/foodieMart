import React from "react";
import { View, Text } from "../../ui";
import { AppFontSizes } from "../../constants/AppFontSizes";
import { TxKeyPath } from "../../language";

const ScreenHeadline = ({ heading }: { heading: TxKeyPath }) => {
  return (
    <View paddingHorizontal={"large"} marginTop={"large"} marginBottom={"medium"}>
      <Text tx={heading} fontSize={AppFontSizes[18]} variant={"700"} color={"textColor"} />
    </View>
  );
};

export default ScreenHeadline;
