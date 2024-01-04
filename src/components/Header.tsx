import React, { ReactElement } from "react";
import {
  StyleProp,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";

import { isRTL, translate } from "../language";
import { Icon } from "../ui/Icon";
import { IconTypes } from "../assets/icons";
import { Text, TextProps } from "../ui/Text";
import { scale } from "react-native-size-matters";
import { palette } from "../theme";

export interface HeaderProps {
  /**
   * The layout of the title relative to the action components.
   * - `center` will force the title to always be centered relative to the header. If the title or the action buttons are too long, the title will be cut off.
   * - `flex` will attempt to center the title relative to the action buttons. If the action buttons are different widths, the title will be off-center relative to the header.
   */
  titleMode?: "center" | "flex";
  /**
   * Optional title style override.
   */
  titleStyle?: StyleProp<TextStyle>;
  /**
   * Optional outer title container style override.
   */
  titleContainerStyle?: StyleProp<ViewStyle>;
  /**
   * Optional inner header wrapper style override.
   */
  style?: StyleProp<ViewStyle>;
  /**
   * Optional outer header container style override.
   */
  containerStyle?: StyleProp<ViewStyle>;
  /**
   * Background color
   */
  backgroundColor?: string;
  /**
   * Title text to display if not using `tx` or nested components.
   */
  title?: TextProps["text"];
  /**
   * Title text which is looked up via i18n.
   */
  titleTx?: TextProps["tx"];
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  titleTxOptions?: TextProps["txOptions"];
  /**
   * Icon that should appear on the left.
   * Can be used with `onLeftPress`.
   */
  leftIcon?: IconTypes;
  /**
   * An optional tint color for the left icon
   */
  leftIconColor?: string;
  /**
   * Left action text to display if not using `leftTx`.
   * Can be used with `onLeftPress`. Overrides `leftIcon`.
   */
  leftText?: TextProps["text"];
  /**
   * Left action text text which is looked up via i18n.
   * Can be used with `onLeftPress`. Overrides `leftIcon`.
   */
  leftTx?: TextProps["tx"];
  /**
   * Left  text color.
   */
  leftTextColor?: TextProps["color"];
  /**
   * Left action custom ReactElement if the built in action props don't suffice.
   * Overrides `leftIcon`, `leftTx` and `leftText`.
   */
  LeftActionComponent?: ReactElement;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  leftTxOptions?: TextProps["txOptions"];
  /**
   * What happens when you press the left icon or text action.
   */
  onLeftPress?: TouchableOpacityProps["onPress"];
  /**
   * Icon that should appear on the right.
   * Can be used with `onRightPress`.
   */
  rightIcon?: IconTypes;
  /**
   * An optional tint color for the right icon
   */
  rightIconColor?: string;
  /**
   * Right text color.
   */
  rightTextColor?: TextProps["color"];
  /**
   * Right action text to display if not using `rightTx`.
   * Can be used with `onRightPress`. Overrides `rightIcon`.
   */
  rightText?: TextProps["text"];
  /**
   * Right action text text which is looked up via i18n.
   * Can be used with `onRightPress`. Overrides `rightIcon`.
   */
  rightTx?: TextProps["tx"];
  /**
   * Right action custom ReactElement if the built in action props don't suffice.
   * Overrides `rightIcon`, `rightTx` and `rightText`.
   */
  RightActionComponent?: ReactElement;
  /**
   * Optional options to pass to i18n. Useful for interpolation
   * as well as explicitly setting locale or translation fallbacks.
   */
  rightTxOptions?: TextProps["txOptions"];
  /**
   * What happens when you press the right icon or text action.
   */
  onRightPress?: TouchableOpacityProps["onPress"];
  /**
   * Override the default edges for the safe area.
   */
}

interface HeaderActionProps {
  backgroundColor?: string;
  icon?: IconTypes;
  iconColor?: string;
  text?: TextProps["text"];
  textColor: TextProps["color"];
  tx?: TextProps["tx"];
  txOptions?: TextProps["txOptions"];
  onPress?: TouchableOpacityProps["onPress"];
  ActionComponent?: ReactElement;
}

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 * The Header is meant to be used with the `screenOptions.header` option on navigators, routes, or screen components via `navigation.setOptions({ header })`.
 *
 */
export function Header(props: HeaderProps) {
  const {
    backgroundColor = palette.background,
    LeftActionComponent,
    leftIcon,
    leftIconColor,
    leftText,
    leftTextColor,
    leftTx,
    leftTxOptions,
    onLeftPress,
    onRightPress,
    RightActionComponent,
    rightIcon,
    rightIconColor,
    rightText,
    rightTx,
    rightTextColor,
    rightTxOptions,
    title,
    titleMode = "center",
    titleTx,
    titleTxOptions,
    titleContainerStyle: $titleContainerStyleOverride,
    style: $styleOverride,
    titleStyle: $titleStyleOverride,
    containerStyle: $containerStyleOverride,
  } = props;

  const titleContent = titleTx ? translate(titleTx, titleTxOptions) : title;

  return (
    <View style={[$container, { backgroundColor }, $containerStyleOverride]}>
      <View style={[$wrapper, $styleOverride]}>
        <HeaderAction
          tx={leftTx}
          text={leftText}
          icon={leftIcon}
          iconColor={leftIconColor}
          textColor={leftTextColor}
          onPress={onLeftPress}
          txOptions={leftTxOptions}
          backgroundColor={backgroundColor}
          ActionComponent={LeftActionComponent}
        />

        {!!titleContent && (
          <View
            style={[
              titleMode === "center" && $titleWrapperCenter,
              titleMode === "flex" && $titleWrapperFlex,
              $titleContainerStyleOverride,
            ]}
            pointerEvents="none"
          >
            <Text text={titleContent} style={[$title, $titleStyleOverride]} />
          </View>
        )}

        <HeaderAction
          tx={rightTx}
          text={rightText}
          icon={rightIcon}
          iconColor={rightIconColor}
          textColor={rightTextColor}
          onPress={onRightPress}
          txOptions={rightTxOptions}
          backgroundColor={backgroundColor}
          ActionComponent={RightActionComponent}
        />
      </View>
    </View>
  );
}

function HeaderAction(props: HeaderActionProps) {
  const {
    backgroundColor,
    icon,
    text,
    tx,
    txOptions,
    onPress,
    ActionComponent,
    iconColor,
    textColor = "textColor",
  } = props;

  const content = tx ? translate(tx, txOptions) : text;

  if (ActionComponent) return ActionComponent;

  if (content && !icon) {
    return (
      <TouchableOpacity
        style={[$actionTextContainer, { backgroundColor }]}
        onPress={onPress}
        disabled={!onPress}
        activeOpacity={0.8}
      >
        <Text text={content} variant="header" color={textColor} />
      </TouchableOpacity>
    );
  }

  if (icon && !content) {
    return (
      <Icon
        size={42}
        icon={icon}
        color={iconColor}
        onPress={onPress}
        containerStyle={[$actionIconContainer, { backgroundColor }]}
        style={isRTL ? { transform: [{ rotate: "180deg" }] } : {}}
      />
    );
  }

  if (icon && content) {
    return (
      <View style={$iconRowContainer}>
        <Icon
          size={scale(22)}
          icon={icon}
          color={iconColor}
          onPress={onPress}
          //containerStyle={[$actionIconContainer, { backgroundColor }]}
          style={isRTL ? { transform: [{ rotate: "180deg" }] } : {}}
        />
        <Text
          text={content}
          marginLeft="small"
          variant="header"
          color={textColor}
          marginBottom="tiny"
        />
      </View>
    );
  }

  return <View style={[$actionFillerContainer, { backgroundColor }]} />;
}

const $wrapper: ViewStyle = {
  height: 56,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};

const $container: ViewStyle = {
  width: "100%",
};

const $title: TextStyle = {
  textAlign: "center",
};

const $actionTextContainer: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  zIndex: 2,
};

const $actionText: TextStyle = {};

const $actionIconContainer: ViewStyle = {
  flexGrow: 0,
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  // paddingHorizontal: 14,
  zIndex: 2,
};

const $actionFillerContainer: ViewStyle = {
  width: 16,
};

const $titleWrapperCenter: ViewStyle = {
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  width: "100%",
  position: "absolute",
  paddingHorizontal: 12,
  zIndex: 1,
};

const $titleWrapperFlex: ViewStyle = {
  justifyContent: "center",
  flexGrow: 1,
};

const $iconRowContainer: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
};
