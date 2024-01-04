import React from "react";
//import { ActivityIndicator } from "react-native";
import {
  useRestyle,
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  VariantProps,
  createRestyleComponent,
  createVariant,
  composeRestyleFunctions,
} from "@shopify/restyle";
import { PressableScale } from "./MotiPressable";
import { View } from "./View";
import { Theme, palette } from "../theme";
import { TextProps, Text } from "./Text";
import { scale } from "react-native-size-matters";
import ActivityIndicator from "../components/ActivityIndicator";

const buttonVariant = createVariant({ themeKey: "buttonVariants" });

const ButtonContainer = createRestyleComponent<
  VariantProps<Theme, "buttonVariants"> & React.ComponentProps<typeof View>,
  Theme
  //@ts-ignore
>([buttonVariant], View);

const restyleFunctions = composeRestyleFunctions([
  buttonVariant as any,
  spacing,
  border,
  backgroundColor,
]);

type Props = SpacingProps<Theme> &
  VariantProps<Theme, "buttonVariants"> &
  BorderProps<Theme> &
  BackgroundColorProps<Theme> & {
    onPress: () => void;
    label?: string;
    outline?: boolean;
    loading?: boolean;
    buttonTextProps?: TextProps;
  };

export const Button = ({
  onPress,
  label,
  loading = false,
  variant = "primary",
  buttonTextProps,
  ...rest
}: Props) => {
  // @ts-ignore
  const props = useRestyle(restyleFunctions, { ...rest, variant });

  return (
    <PressableScale onPress={onPress} style={{ borderRadius: scale(8) }} disabled={loading}>
      <ButtonContainer {...props}>
        {loading ? (
          <ActivityIndicator
            ///size="small"
            color={variant === "primary" || variant === "small" ? "white" : "black"}
          />
        ) : (
          <Text
            {...buttonTextProps}
            textTransform={"uppercase"}
            // @ts-ignore
            variant={`${variant}Text`}
          >
            {label}
          </Text>
        )}
      </ButtonContainer>
    </PressableScale>
  );
};
