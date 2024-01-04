import React from "react";
import { View, Text, Icon } from "../ui";
import { IconTypes } from "../ui/Icon";
import { scale } from "react-native-size-matters";
import { AppFontSizes } from "../constants/AppFontSizes";
// import { Rating } from "react-native-ratings";
import { palette } from "../theme";

type ItemProps = {
  icon: IconTypes;
  heading: string;
  details: string;
  rightTextUp: string;
  rightTextLow: string;
  rightUpperView: boolean;
  rightUpperText: boolean;
  rightLowerText: boolean;
  rightBlock: boolean;
  ratingValue?: number;
};

const backgroundColors = {
  PENDING: "orange",
  APPROVED: "green",
  Accepted: "green",
  Confirmed: "green",
  Rejected: "error",
  Approved: "green",
  Pending: "orange",
};

const GenericList = ({
  heading,
  details,
  icon,
  rightUpperView,
  rightUpperText,
  rightLowerText,
  rightTextLow,
  rightTextUp,
  rightBlock,
  ratingValue,
}: ItemProps) => {
  return (
    <View
      flexDirection={"row"}
      marginVertical={"medium"}
      paddingHorizontal={"large"}
      justifyContent="space-between"
      flex={1}
    >
      <View flexDirection={"row"}>
        <View
          backgroundColor={"secondary"}
          height={scale(40)}
          width={scale(40)}
          borderRadius={60}
          justifyContent="center"
          alignItems={"center"}
          marginTop={"tiny"}
        >
          <Icon icon={icon} size={scale(20)} />
        </View>
        <View marginLeft={"small"}>
          <Text fontSize={AppFontSizes[16]} variant="600" color={"textColor"}>
            {heading}
          </Text>
          <Text
            fontSize={AppFontSizes[14]}
            variant="500"
            color={"bodyTextColor"}
            marginTop={"tiny"}
          >
            {details}
          </Text>
        </View>
      </View>

      <View paddingHorizontal={"tiny"}>
        {rightBlock && (
          <View
            backgroundColor={"backgroundLight"}
            height={scale(27)}
            width={scale(100)}
            borderRadius={100}
            alignItems={"center"}
            justifyContent={"space-between"}
            flexDirection={"row"}
            paddingHorizontal={"large"}
          >
            <Text fontSize={AppFontSizes[10]} variant={"600"} color={"secondary"}>
              Accept
            </Text>
            <View backgroundColor={"bodyTextColor"} height={scale(27)} width={scale(1)} />

            <Icon icon={"cross"} size={scale(10)} />
          </View>
        )}
        <View>
          {rightUpperView && (
            <View height={scale(17)}>
              <Rating
                type="custom"
                ratingCount={5}
                imageSize={scale(12)}
                tintColor={palette.background}
                ratingBackgroundColor={palette.borderColor}
                ratingColor={palette.yellow}
                readonly={true}
                startingValue={ratingValue}
              />
            </View>
          )}
          {rightUpperText && (
            <View height={scale(17)}>
              <Text
                fontSize={AppFontSizes[14]}
                variant="700"
                //@ts-ignore
                color={backgroundColors[rightTextUp]}
              >
                {rightTextUp}
              </Text>
            </View>
          )}

          {rightLowerText && (
            <View height={scale(17)} alignItems={"flex-end"} justifyContent={"center"}>
              <Text fontSize={AppFontSizes[10]} variant="500" color={"textColor"}>
                {rightTextLow}
              </Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default GenericList;
