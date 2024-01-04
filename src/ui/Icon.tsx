import * as React from "react";
import { ComponentType } from "react";
import {
  Image,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ViewStyle,
} from "react-native";

export type IconTypes = keyof typeof iconRegistry;

interface IconProps extends TouchableOpacityProps {
  /**
   * The name of the icon
   */
  icon: IconTypes;

  /**
   * An optional tint color for the icon
   */
  color?: string;

  /**
   * An optional size for the icon. If not provided, the icon will be sized to the icon's resolution.
   */
  size?: number;

  /**
   * Style overrides for the icon image
   */
  style?: StyleProp<ImageStyle>;

  /**
   * Style overrides for the icon container
   */
  containerStyle?: StyleProp<ViewStyle>;

  /**
   * An optional function to be called when the icon is pressed
   */
  onPress?: TouchableOpacityProps["onPress"];

  resizeMode?: "cover" | "contain";
}

export function Icon(props: IconProps) {
  const {
    icon,
    color,
    size,
    style: $imageStyleOverride,
    containerStyle: $containerStyleOverride,
    resizeMode = "contain",
    ...WrapperProps
  } = props;

  const isPressable = !!WrapperProps.onPress;
  const Wrapper: ComponentType<TouchableOpacityProps> = WrapperProps?.onPress
    ? TouchableOpacity
    : View;

  return (
    <Wrapper
      accessibilityRole={isPressable ? "imagebutton" : undefined}
      {...WrapperProps}
      style={$containerStyleOverride}
    >
      <Image
        style={[
          $imageStyle,
          color && { tintColor: color },
          size && { width: size, height: size },
          $imageStyleOverride,
        ]}
        source={iconRegistry[icon]}
        resizeMode={resizeMode}
      />
    </Wrapper>
  );
}

export const iconRegistry = {
  back: require("../assets/images/ArrowLeft.png"),
  question: require("../assets/images/Question.png"),
  eye: require("../assets/images/EyeSlash.png"),
  oval: require("../assets/images/oval.png"),
  profile: require("../assets/images/profile.png"),
  circle: require("../assets/images/ellipse.png"),
  edit: require("../assets/images/edit.png"),
  camera: require("../assets/images/camera.png"),
  point: require("../assets/images/point.png"),
  id: require("../assets/images/id.png"),
  rider: require("../assets/images/rider.png"),
  play: require("../assets/images/play.png"),
  tickMark: require("../assets/images/tick.png"),
  result: require("../assets/images/result.png"),
  demo: require("../assets/images/demo.png"),
  questionMark: require("../assets/images/questionMark.png"),
  takesnap: require("../assets/images/takesnap.png"),
  switch: require("../assets/images/switch.png"),
  close: require("../assets/images/close.png"),
  capture: require("../assets/images/capture.png"),
  whiteCamera: require("../assets/images/cameraIcon.png"),
  user: require("../assets/images/user.png"),
  headset: require("../assets/images/headset.png"),
  rankings: require("../assets/images/Crown.png"),
  round: require("../assets/images/round.png"),
  eclipse: require("../assets/images/eclipse.png"),
  giftRound: require("../assets/images/blankgift.png"),
  money: require("../assets/images/Money.png"),
  package: require("../assets/images/Package.png"),
  box: require("../assets/images/box.png"),
  bikeRider: require("../assets/images/bikeRider.png"),
  arrowUpDown: require("../assets/images/ArrowsDownUp.png"),
  receipt: require("../assets/images/Receipt.png"),
  calendar: require("@/assets/images/CalendarBlank.png"),
  arrowLeftRight: require("@/assets/images/ArrowsLeftRight.png"),
  cross: require("@/assets/images/cross.png"),
  line: require("@/assets/images/line.png"),
  "user-filled": require("@/assets/images/user-filled.png"),
  "primary-crown": require("@/assets/images/primary-crown.png"),
  "calendar-light": require("@/assets/images/calendarlight.png"),
  right: require("@/assets/images/right.png"),
  biker: require("@/assets/images/biker.png"),
  book: require("@/assets/images/book.png"),
  plus: require("@/assets/images/plus.png"),
  minus: require("@/assets/images/minus.png"),
  chat: require("@/assets/images/chat.png"),
  phone: require("@/assets/images/phone.png"),
  whitetick: require("@/assets/images/tickMark.png"),
  "chevron-right": require("@/assets/images/ChevronRight.png"),
  cnicBack: require("@/assets/images/cnicFront.png"),
  cnicFront: require("@/assets/images/cnicBack.png"),
  bookFront: require("@/assets/images/bookFront.png"),
  bookBack: require("@/assets/images/bookBack.png"),
  lisenceFront: require("@/assets/images/lisenceFront.png"),
  lisenceBack: require("@/assets/images/lisenceBack.png"),
  arrowWhite: require("@/assets/images/arrowWhite.png"),
  pencil: require("@/assets/images/pencil.png"),
  heavyBike: require("@/assets/images/heavyBike.png"),
  star: require("@/assets/images/Star.png"),
  bell: require("@/assets/images/Bell.png"),
  align: require("@/assets/images/align.png"),
  warning: require("@/assets/images/warning.png"),
  vector: require("@/assets/images/vector.png"),
  bike: require("@/assets/images/bike.png"),
  arrowClockwise: require("@/assets/images/arrowClockwise.png"),
  blacktick: require("@/assets/images/blackTick.png"),
  recenter: require("@/assets/images/recenter.png"),
  videoCamera: require("@/assets/images/videocamera.png"),
  stop: require("@/assets/images/stop.png"),
  step: require("@/assets/images/step.png"),
  "store-front": require("@/assets/images/Storefront.png"),
  pizza: require("@/assets/images/pizza.png"),
  drop: require("@/assets/images/drop.png"),
  "check-white": require("@/assets/images/tick-white.png"),
  send: require("@/assets/images/send.png"),
  start: require("@/assets/images/start.png"),
  next: require("@/assets/images/next.png"),
  volume: require("@/assets/images/volume.png"),
  mute: require("@/assets/images/mute.png"),
  cheezy: require("@/assets/images/cheezy.png"),
  "cross-white": require("@/assets/images/cross-white.png"),
  clock: require("@/assets/images/clock.png"),
  "calendar-icon": require("@/assets/images/calendar.png"),
  assistance: require("@/assets/images/assistance.png"),
  "assistance-white": require("@/assets/images/assistanceWhite.png"),
  clipboard: require("@/assets/images/clipboard.png"),
  monitor: require("@/assets/images/monitor.png"),
  location: require("@/assets/images/location.png"),
  docs: require("@/assets/images/docslight.png"),
  training: require("@/assets/images/training.png"),
  option: require("@/assets/images/option.png"),
  power: require("@/assets/images/power.png"),
  chatCircle: require("@/assets/images/ChatsCircle.png"),
};

const $imageStyle: ImageStyle = {
  resizeMode: "contain",
};
