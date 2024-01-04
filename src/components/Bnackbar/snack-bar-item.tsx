/* eslint-disable react-hooks/exhaustive-deps */

import React, {memo, useEffect, useMemo, useState} from 'react';
import {ViewStyle} from 'react-native';

import Animated, {runOnJS} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
//import AntDesign from 'react-native-vector-icons/AntDesign';

import {sharedTiming} from '../animated';

import {
  BG_ERROR,
  BG_LINK,
  BG_SUCCESS,
  BG_WARN,
  DURATION_ANIMATED,
} from './constants';
import {styles} from './styles';
import {SnackBarItemProps, TYPE_MESSAGE, TypeMessage} from './type';
import {Text} from '@/ui';

const getColor = (typeMessage: TypeMessage): string => {
  switch (typeMessage) {
    case TYPE_MESSAGE.SUCCESS:
      return BG_SUCCESS;
    case TYPE_MESSAGE.LINK:
      return BG_LINK;
    case TYPE_MESSAGE.WARN:
      return BG_WARN;
    case TYPE_MESSAGE.ERROR:
      return BG_ERROR;
    default:
      return BG_SUCCESS;
  }
};

const getIconColor = (typeMessage: TypeMessage): string => {
  switch (typeMessage) {
    case TYPE_MESSAGE.SUCCESS:
      return '#FFB727';

    case TYPE_MESSAGE.ERROR:
      return '#FFB727';
    default:
      return BG_SUCCESS;
  }
};

const getIcon = (typeMessage: TypeMessage) => {
  switch (typeMessage) {
    case TYPE_MESSAGE.SUCCESS:
      return 'heart';
    case TYPE_MESSAGE.LINK:

    case TYPE_MESSAGE.ERROR:
      return 'hearto';

    default:
      return 'heart';
  }
};

export const SnackItem = memo(
  ({item, onPop}: SnackBarItemProps) => {
    // state
    const insets = useSafeAreaInsets();
    const [isShow, setIsShow] = useState<boolean>(true);
    // const message = useErrorMessageTranslation(item.msg);
    // style
    const containStyle = useMemo<ViewStyle>(
      () => ({
        backgroundColor: 'rgba(0,0,0,0.8)', //getColor(item.type),
        //paddingBottom: insets.bottom,
      }),
      [item.type],
    );

    // function
    const CustomEnteringAnimation = (values: any) => {
      'worklet';
      const animations = {
        // your animations
        transform: [
          {translateY: sharedTiming(0, {duration: DURATION_ANIMATED})},
        ],
      };
      const initialValues = {
        // initial values for animations
        transform: [{translateY: -values.targetHeight}],
      };
      const callback = (_: boolean) => {
        // optional callback that will fire when layout animation ends
      };
      return {
        initialValues,
        animations,
        callback,
      };
    };

    const CustomExitAnimation = (values: any) => {
      'worklet';
      const animations = {
        // your animations
        transform: [
          {
            translateY: sharedTiming(values.currentHeight, {
              duration: 100,
            }),
          },
        ],
      };
      const initialValues = {
        // initial values for animations
        transform: [{translateY: 0}],
      };
      const callback = (_: boolean) => {
        runOnJS(onPop)(item);
        // optional callback that will fire when layout animation ends
      };
      return {
        initialValues,
        animations,
        callback,
      };
    };

    // effect
    useEffect(() => {
      const id = setTimeout(() => {
        setIsShow(false);
      }, item.interval + DURATION_ANIMATED);

      return () => {
        clearTimeout(id);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // render
    return isShow ? (
      <Animated.View
        entering={CustomEnteringAnimation}
        exiting={CustomExitAnimation}
        style={[styles.itemBar, containStyle]}>
        {/* <AntDesign color={'#FFB727'} size={18} name={getIcon(item.type)} /> */}
        <Text
          style={[styles.text]}
          //color="warning"
          //variant={'body-xsmall-medium'}
          marginLeft={'medium'}>
          {item.msg}
        </Text>
      </Animated.View>
    ) : null;
  },
  () => true,
);
