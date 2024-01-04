import React from "react";
import { View, Text, Icon } from "../ui";
import { scale } from "react-native-size-matters";
import { AppFontSizes } from "../constants/AppFontSizes";
import { Pressable } from "react-native";

type ItemProps = {
  title: string;
  imageSource?: string;
  status: "INITIAL" | "PENDING" | "APPROVED" | "REJECTED";
  documentType:
    | "CNICFRONT"
    | "CNICBACK"
    | "DRIVINGLICENSEFRONT"
    | "DRIVINGLICENSEBACK"
    | "VEHICLEREGISTRATIONFRONT"
    | "VEHICLEREGISTRATIONBACK";
  documentId: string;
  reason?: string;
  onPress: (data: {
    documentType: string;
    title?: string;
    imageSource?: string;
    status: string;
    documentId?: string;
  }) => void;
};

const IconType = {
  PENDING: "clock",
  APPROVED: "whitetick",
  REJECTED: "cross-white",
};

const Description = {
  PENDING: "Pending",
  APPROVED: "Approved",
  REJECTED: "Re-upload, Document not readable",
  INITIAL: "Document upload karain",
};

const BackgroundColor = {
  PENDING: "bodyTextColor",
  APPROVED: "lightGreen",
  REJECTED: "negativeRed",
  INITIAL: "textColor",
};
const ReasonColor = {
  PENDING: "textColor",
  APPROVED: "textColor",
  REJECTED: "negativeRed",
  INITIAL: "textColor",
};
const TitleColor = {
  PENDING: "textColor",
  APPROVED: "textColor",
  REJECTED: "negativeRed",
  INITIAL: "textColor",
};
const UserInfo = ({
  documentType,
  title,
  onPress,
  imageSource,
  status,
  documentId,
  reason,
}: ItemProps) => {
  return (
    <View
      // marginVertical={"medium"}
      paddingHorizontal="xLarge"
      borderBottomColor={"borderColor"}
      borderBottomWidth={1}
      paddingVertical={"medium"}
    >
      <Pressable
        onPress={() => {
          status === "INITIAL" || status === "REJECTED"
            ? onPress({ documentType, title, imageSource, status, documentId })
            : null;
        }}
      >
        <View flexDirection={"row"} alignItems={"center"}>
          {status !== "INITIAL" ? (
            <View
              // @ts-ignore
              backgroundColor={BackgroundColor[status]}
              height={scale(25)}
              width={scale(25)}
              borderRadius={60}
              justifyContent="center"
              alignItems={"center"}
              alignSelf={"center"}
            >
              <Icon icon={IconType[status]} size={scale(15)} />
            </View>
          ) : null}

          <View justifyContent={"center"} marginLeft={"small"} flex={1}>
            <Text
              fontSize={AppFontSizes[14]}
              variant={"500"}
              marginTop="tiny"
              //@ts-ignore
              color={TitleColor[status]}
            >
              {title}
            </Text>
            <Text
              fontSize={AppFontSizes[12]}
              variant={"200"}
              marginTop="tiny"
              //@ts-ignore
              color={ReasonColor[status]}
            >
              {status === "REJECTED" ? reason : Description[status]}
            </Text>
          </View>

          {status === "INITIAL" || status === "REJECTED" ? (
            <Icon icon={"chevron-right"} size={scale(15)} />
          ) : null}
        </View>
      </Pressable>
    </View>
  );
};

export default UserInfo;
