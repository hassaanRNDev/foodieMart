import React from "react";
import { scale } from "react-native-size-matters";
import { View, PressableScale } from "../../ui";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme } from "../../theme";
import { IconTypes, icons } from "../../assets/icons";

type ImageButtonProps = {
  icon: IconTypes;
  onPress: () => void;
  size?: number;
  imageSize?: number;
};

export const ImageButton = ({
  icon,
  size = scale(34),
  imageSize = scale(18),
  onPress,
}: ImageButtonProps) => {
  const theme = useTheme<Theme>();

  return (
    <PressableScale onPress={onPress}>
      <View style={[styles.container, { height: size, width: size, borderRadius: size / 2 }]}>
        <Image
          source={icons[icon]}
          style={{
            height: imageSize,
            width: imageSize,
            borderRadius: imageSize / 2,
          }}
          contentFit="contain"
        />
      </View>
    </PressableScale>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: scale(18),
    width: scale(18),
  },
});
