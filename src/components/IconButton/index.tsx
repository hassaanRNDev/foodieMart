import React, { useMemo } from "react";
import LinearGradient from "react-native-linear-gradient";
import { scale } from "react-native-size-matters";
import { View, PressableScale } from "../../ui";
import { Image } from "expo-image";
import { StyleSheet } from "react-native";
import { useTheme } from "@shopify/restyle";
import { Theme, palette } from "../../theme";
import { IconTypes, icons } from "../../assets/icons";

type IconButtonProps = {
  icon: IconTypes;
  isGradient?: boolean;
  onPress: () => void;
  size?: number;
  imageSize?: number;
};

export const IconButton = ({
  icon,
  isGradient,
  size = scale(34),
  imageSize = scale(18),
  onPress,
}: IconButtonProps) => {
  const theme = useTheme<Theme>();

  let COLORS = useMemo(() => {
    let colors = [theme.colors.borderColor, theme.colors.borderColor];

    if (isGradient) {
      // colors = [palette.gradientPrimaryOne, palette.gradientPrimaryTwo];
      colors = [palette.backgroundLight, palette.backgroundLight];
    }

    return colors;
  }, [isGradient]);

  return (
    <PressableScale onPress={onPress}>
      <LinearGradient
        colors={COLORS}
        style={[styles.container, { height: size, width: size, borderRadius: size / 2 }]}
      >
        <Image
          source={icons[icon]}
          style={{
            height: imageSize,
            width: imageSize,
            borderRadius: imageSize / 2,
          }}
          contentFit="contain"
        />
      </LinearGradient>
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
