import React from "react";
import { View, Text, Icon, Button } from "../ui";
import { scale } from "react-native-size-matters";
import { AppFontSizes } from "../constants/AppFontSizes";

type ItemProps = {
  details: string;
  status: string;
};

const TicketsList = ({ details, status }: ItemProps) => {
  return (
    <View
      height={scale(60)}
      width={scale(320)}
      backgroundColor={"backgroundLight"}
      marginTop={"medium"}
      borderRadius={7}
      shadowOpacity={0.01}
      shadowRadius={5}
      paddingHorizontal={"large"}
      alignItems={"center"}
      flexDirection={"row"}
    >
      <View
        backgroundColor={"secondary"}
        height={scale(32)}
        width={scale(32)}
        borderRadius={60}
        justifyContent="center"
        alignItems={"center"}
      >
        <Icon icon={"bikeRider"} size={scale(19)} />
      </View>
      <View marginLeft={"small"} flex={1}>
        <Text
          tx={"ticket.description"}
          fontSize={AppFontSizes[12]}
          variant="600"
          color="textColor"
        />
        <Text
          fontSize={AppFontSizes[10]}
          variant="500"
          color={"bodyTextColor"}
          marginTop={"tiny"}
        >
          {details}
        </Text>
      </View>
      <View marginLeft={"small"}>
        <View
          height={scale(16)}
          width={scale(50)}
          backgroundColor={"primary"}
          borderRadius={6}
          alignItems={"center"}
        >
          <Text fontSize={AppFontSizes[10]} variant="500" color={"background"}>
            {status}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TicketsList;
