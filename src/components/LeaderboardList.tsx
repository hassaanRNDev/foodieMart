import React from "react";
import { View, Text, Icon, Button } from "../ui";
import { scale } from "react-native-size-matters";
import { AppFontSizes } from "../constants/AppFontSizes";
import { LineSeperator } from "./LineSeperator";


type ItemProps = {
  rank: string;
  order: string;
  person: string;
};

const LeaderboardList = ({ rank, person, order }: ItemProps) => {

  return (
    <View
      marginHorizontal={"large"}
      backgroundColor={"backgroundLight"}
      height={scale(100)}
      borderRadius={10}
      marginTop={"small"}

    >
      <View
        flexDirection={"row"}
        justifyContent={"space-between"}
        padding={"medium"}
      >
        <View flexDirection={"row"} alignItems={"center"}>
          <Icon icon={"profile"} size={scale(28)} />

          <Text
            marginHorizontal={"small"}
            fontSize={AppFontSizes[14]}
            variant={"600"}
            color={"textColor"}
          >
            {person}
          </Text>
        </View>
        <View
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <View
            backgroundColor={"secondary"}
            height={scale(28)}
            width={scale(28)}
            borderRadius={60}
            justifyContent="center"
            alignItems={"center"}
          >
            <Icon icon={"round"} size={scale(19)} />
          </View>
          <Text
            fontSize={AppFontSizes[14]}
            variant={"600"}
            color={"textColor"}
            marginLeft={"tiny"}
          >
            {order}
          </Text>
        </View>
        {/* ....... */}
        <View
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <View
            backgroundColor={"secondary"}
            height={scale(28)}
            width={scale(28)}
            borderRadius={60}
            justifyContent="center"
            alignItems={"center"}
          >
            <Icon icon={"box"} size={scale(19)} />
          </View>
          <Text
            fontSize={AppFontSizes[14]}
            variant={"600"}
            color={"textColor"}
            marginLeft={"tiny"}
          >
            {order}
          </Text>
        </View>
        {/* .......... */}
        <View
          flexDirection={"row"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <View
            backgroundColor={"secondary"}
            height={scale(28)}
            width={scale(28)}
            borderRadius={60}
            justifyContent="center"
            alignItems={"center"}
          >
            <Icon icon={"star"} size={scale(17)} />
          </View>
          <Text
            fontSize={AppFontSizes[14]}
            variant={"600"}
            color={"textColor"}
            marginLeft={"tiny"}
          >
            {order}
          </Text>
        </View>
      </View>
      <LineSeperator />
      <View padding={"medium"}>
        <Text fontSize={AppFontSizes[10]} variant={"700"} color={"green"}>
          #Responsive #FastDelivery #On Time
        </Text>
      </View>
    </View>
  );
};

export default LeaderboardList;
