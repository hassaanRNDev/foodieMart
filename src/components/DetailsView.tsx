import React from "react";
import { scale } from "react-native-size-matters";
import { View, Text, Icon } from "../ui";
import { TouchableOpacity } from "react-native";
import { AppFontSizes } from "../constants/AppFontSizes";

type DetailsViewProps = {
  onDetailsPress: () => void;
  statusInfo: string;
};

export const DetailsView = ({ onDetailsPress, statusInfo }: DetailsViewProps) => {
  return (
    <View flex={1} justifyContent={"center"}>
      {/* <View
        flexDirection={"row"}
        alignItems={"center"}
        marginBottom={"small"}
        justifyContent={"flex-end"}
        marginHorizontal={"large"}
        backgroundColor={"orange"}
      >
        <View
          backgroundColor={"secondary"}
          height={scale(28)}
          width={scale(28)}
          borderRadius={60}
          justifyContent="center"
          alignItems={"center"}
        >
          <Icon icon="recenter" size={scale(19)} />
        </View>
      </View> */}
      <View
        //height={scale(94)}
        width={scale(298)}
        borderRadius={8}
        backgroundColor={"backgroundLight"}
        paddingVertical={"large"}
        marginHorizontal={"4xl"}
      >
        {/* <View flexDirection={"row"} alignSelf={"center"} alignItems={"center"}>
          <Icon icon="point" size={scale(6)} />
          <Text
            fontSize={AppFontSizes[12]}
            marginLeft={"small"}
            variant="500"
            color={"textColor"}
          >
            {statusInfo}
          </Text>
        </View> */}
        <TouchableOpacity onPress={onDetailsPress}>
          <View
            height={scale(38)}
            width={scale(265)}
            borderRadius={8}
            backgroundColor={"timerBackground"}
            marginHorizontal={"large"}
            marginTop={"tiny"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={"row"}
            paddingHorizontal={"small"}
          >
            <Text
              // tx={"dashboard.details"}
              text={"Click to view order details"}
              fontSize={AppFontSizes[12]}
              marginLeft={"small"}
              variant="500"
              color={"textColor"}
            />
            <Icon icon="chevron-right" size={scale(6)} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
