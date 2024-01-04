import { useWindowDimensions } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import { View } from "@/ui";
import { AppOverlayContent } from "./LoaderContent";
import { useLoading } from "@/store/Loader";

export const AppOverlayLoader = () => {
  const { width, height } = useWindowDimensions();

  const isLoading = useLoading((state) => state?.isLoading);

  return (
    <Modal
      isVisible={isLoading}
      animationIn={"fadeIn"}
      animationOut={"fadeOut"}
      animationInTiming={500}
      animationOutTiming={500}
      backdropOpacity={0.2}
      onBackdropPress={() => null}
      deviceHeight={height}
      deviceWidth={width}
      style={{
        flex: 1,
        margin: 0,
        padding: 0,
      }}
    >
      <View width={width} height={height} backgroundColor="transparent">
        <AppOverlayContent />
      </View>
    </Modal>
  );
};
