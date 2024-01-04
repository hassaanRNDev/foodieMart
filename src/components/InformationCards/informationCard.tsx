import React from "react";
import { AppFontSizes } from "../../constants/AppFontSizes";
import { scale } from "react-native-size-matters";
import { View, Text, Button, Icon, IconTypes } from "../../ui";

type InformationCardProps = {
  title: string;
  subTitle: string;
  icon: IconTypes;
  buttonLabel?: string;
  onButtonPress?: () => void;
};

const InformationCard = ({
  title,
  subTitle,
  buttonLabel,
  onButtonPress,
  icon,
}: InformationCardProps) => {
  return (
    <View
      padding={"large"}
      backgroundColor={"backgroundLight"}
      borderRadius={scale(8)}
      shadowOpacity={0.1}
      elevation={3}
      shadowRadius={5}
      gap={"small"}
    >
      <View flexDirection={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Text fontSize={AppFontSizes[14]} variant={"600"} color={"textColor"}>
          {title}
        </Text>
        <View flexDirection={"row"}>
          <Icon icon={icon} size={scale(22)} />
        </View>
      </View>
      <View>
        <Text fontSize={AppFontSizes[20]} variant={"700"} color={"textColor"}>
          {subTitle}
        </Text>
      </View>

      {buttonLabel ? (
        <View>
          <Button
            label={buttonLabel}
            variant={"secondary"}
            // @ts-ignore
            onPress={onButtonPress}
          />
        </View>
      ) : null}
    </View>
  );
};

export default InformationCard;
