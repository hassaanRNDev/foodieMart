import * as React from "react";
import type { TextInput, TextInputProps } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput as NTextInput } from "react-native";
import { Text } from "./Text";
import { View } from "./View";
import { isRTL } from "../language";
import { useTheme } from "@shopify/restyle";
import { palette, Theme } from "../theme";
import { scale } from "react-native-size-matters";

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const { label, error, rightIcon, ...inputProps } = props;
  const theme = useTheme<Theme>();

  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  return (
    <React.Fragment>
      <View
        backgroundColor={"backgroundLight"}
        borderWidth={1}
        borderColor={
          error ? "error" : isFocussed ? "secondary" : "backgroundLight"
        }
        borderRadius={scale(4)}
        flexDirection="row"
        alignItems={"center"}
        paddingHorizontal="small"
      >
        <NTextInput
          ref={ref}
          placeholderTextColor={theme.colors.bodyTextColor}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
          style={styles.inputContainer}
        />

        {rightIcon ? rightIcon : null}
      </View>
      {error && (
        <Text variant="error" marginTop={"xSmall"}>
          {error}
        </Text>
      )}
    </React.Fragment>
  );
});

const styles = StyleSheet.create({
  inputContainer: {
    height: 52,
    borderRadius: scale(10),
    paddingRight: scale(10),
    fontSize: scale(16),
    flex: 1,
    color: palette.black,
  },
});
