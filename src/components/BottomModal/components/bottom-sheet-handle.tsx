import React from 'react';
import {BottomSheetHandleProps} from '@gorhom/bottom-sheet';
import {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {View} from '../../../ui';

interface HandleProps extends BottomSheetHandleProps {
  style?: StyleProp<ViewStyle>;
}

export const BottomSheetHandle: FC<HandleProps> = ({style}) => {
  return (
    <View
      //backgroundColor={'bgLight'}
      style={[styles.header, style]}
      renderToHardwareTextureAndroid={true}>
      {/* <View style={styles.indicator} bg="neutral10" /> */}
    </View>
  );
};

const styles = ScaledSheet.create({
  header: {
    alignContent: 'center',
    alignItems: 'center',
    height: '30@vs',
    paddingTop: '8@vs',
  },
  indicator: {
    width: '30@s',
    height: '3@vs',
    borderRadius: '46@vs',
  },
});
