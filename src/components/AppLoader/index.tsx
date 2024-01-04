import React from "react";
import { View, Text } from "../../ui";
import ActivityIndicator from "../ActivityIndicator";

const AppLoader = () => {
  return (
    <View flex={1} justifyContent={"center"} alignItems={"center"}>
      <View>
        <ActivityIndicator size={"large"} />
        <Text variant={"body-text"} paddingTop={"large"}>
          Loading
        </Text>
      </View>
    </View>
  );
};

export default AppLoader;
