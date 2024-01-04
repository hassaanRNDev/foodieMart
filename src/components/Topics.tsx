import React from "react";
import { View, Text, Icon } from "../ui";
import { IconTypes } from "../ui/Icon";
import { scale } from "react-native-size-matters";
import { AppFontSizes } from "../constants/AppFontSizes";
import { TouchableOpacity } from "react-native-gesture-handler";
type ItemProps = {
  imageSource: IconTypes;
  title: string;
  description: string;
  iconText: string;
  id: number;
};

const Topics = ({
  title,
  description,
  imageSource,
  iconText,
  onPress,
  id,
}: ItemProps) => {
  return (
    <View marginTop={"large"}>
      <View
        flexDirection={"row"}
        justifyContent={"space-between"}
        paddingHorizontal="xLarge"
      >
        <View flex={1}>
          <Text fontSize={AppFontSizes[14]} variant="600" color="textColor">
            {title}
          </Text>
          <Text
            fontSize={AppFontSizes[14]}
            variant="500"
            color="bodyTextColor"
            marginTop={"small"}
          >
            {description}
          </Text>
        </View>
        <View
          alignSelf={"center"}
          flexDirection={"row"}
          justifyContent={"flex-end"}
          height={scale(17)}
          width={scale(80)}
        >
          {iconText === "Done" ? (
            <View flexDirection={"row"}>
              <View alignSelf={"center"}>
                <Icon icon={imageSource} size={scale(14)} />
              </View>
              <Text
                fontSize={AppFontSizes[12]}
                variant="500"
                color="green"
                marginLeft={"tiny"}
              >
                {iconText}
              </Text>
            </View>
          ) : (
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => {
                onPress(id, iconText);
              }}
            >
              <View alignSelf={"center"} marginRight={"tiny"}>
                <Icon icon={imageSource} size={scale(20)} />
              </View>

              <Text
                fontSize={AppFontSizes[14]}
                variant="600"
                color="secondary"
                marginLeft={"tiny"}
              >
                {iconText}
              </Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <View borderTopWidth={1} borderColor={"bodyTextColor"} marginTop={"large"} />
    </View>
  );
};

export default Topics;
