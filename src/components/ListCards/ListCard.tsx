import React from "react";
import { AppFontSizes } from "../../constants/AppFontSizes";
import { scale } from "react-native-size-matters";
import { View, Text, Icon, IconTypes } from "../../ui";

type ListCardProps = {
  item: {
    title: string;
    subTitle: string;
    status?: string;
  };
  icon: IconTypes;
  rightElement?: React.ReactElement;
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

const ListCard = ({
  item: { title, subTitle, status },
  icon,
  rightElement,
}: ListCardProps) => {
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
            {title}
          </Text>
          <Text
            fontSize={AppFontSizes[14]}
            variant="500"
            color={"bodyTextColor"}
            marginTop={"tiny"}
          >
            {subTitle}
          </Text>
        </View>
      </View>

      {typeof status === "string" ? (
        <View height={scale(17)}>
          <Text
            fontSize={AppFontSizes[14]}
            variant="700"
            //@ts-ignore
            color={backgroundColors[status]}
          >
            {status}
          </Text>
        </View>
      ) : (
        rightElement
      )}
    </View>
  );
};

export default ListCard;
