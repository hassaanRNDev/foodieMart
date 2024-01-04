import { scale } from "react-native-size-matters";
import { palette } from "../../theme";
import { StyleSheet } from "react-native";

const primary = palette.secondary; // "rgb(0, 122, 255)";

const DIMENSIONS = { width: scale(16), height: scale(16) };
export const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    paddingVertical: 4,
    alignSelf: "flex-start",
  },
  outline: {
    ...DIMENSIONS,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: primary,
    borderRadius: 2,
  },
  fill: {
    ...DIMENSIONS,
    backgroundColor: primary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    // padding: 2,
  },
  label: {
    paddingLeft: 8,
  },
});
