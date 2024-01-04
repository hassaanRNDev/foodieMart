import { palette } from "../../theme";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { scale } from "react-native-size-matters";

export type DropDownItemProps = {
  label: string;
  value: string;
};

export type DropdownProps = {
  placeholder?: string;
  onChange: (data: any) => void;
  data: DropDownItemProps[];
  error?: string;
  search?: boolean;
  searchPlaceholder?: string;
};

export const DropdownComponent = ({
  placeholder,
  onChange,
  data = [],
  error,
  search,
  searchPlaceholder,
}: DropdownProps) => {
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  return (
    <View style={styles.container}>
      <Dropdown
        style={[
          styles.dropdown,
          error ? { borderColor: palette.negativeRed, borderWidth: 1 } : {},
          value !== null && { borderColor: palette.backgroundLight },
        ]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        itemTextStyle={styles.selectedTextStyle}
        searchPlaceholder={searchPlaceholder}
        inputSearchStyle={{
          color: palette.black,
        }}
        iconStyle={styles.iconStyle}
        search={search}
        data={data}
        maxHeight={300}
        labelField="label"
        valueField="value"
        // fontFamily={AppFonts.APP_FONT÷REGULAR}
        // @ts-ignore
        placeholder={!isFocus ? placeholder : "..."}
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item) => {
          // @ts-ignore
          setValue(item.value);
          setIsFocus(false);
          onChange && onChange(item);
        }}
        renderLeftIcon={() => null}
        containerStyle={styles.containerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.backgroundLight,
  },
  dropdown: {
    height: 52,
    borderRadius: scale(4),
    paddingHorizontal: 8,
    color: palette.black,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: scale(16),
    color: palette.borderColor,
  },
  selectedTextStyle: {
    fontSize: scale(16),
    color: palette.black,
  },
  iconStyle: {
    width: scale(20),
    height: scale(20),
  },
  containerStyle: {
    backgroundColor: palette.backgroundLight,
    borderRadius: scale(4),
  },
});
