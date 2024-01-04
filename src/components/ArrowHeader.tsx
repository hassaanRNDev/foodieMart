import React from 'react';

import {
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  LayoutProps,
} from '@shopify/restyle';

import {View, PressableScale, Icon} from '../ui';
import {HStack} from '../ui/Atom';
import {Theme} from '../theme';
import {Text} from '../ui/Text';
import {scale} from 'react-native-size-matters';

type Props = SpacingProps<Theme> &
  BorderProps<Theme> &
  LayoutProps<Theme> &
  BackgroundColorProps<Theme> & {
    heading: string;
    onAllPress: () => void;
  };

const ArrowHeader = ({heading, onAllPress, ...rest}: Props) => {
  return (
    <HStack {...rest} alignItems="center" justifyContent={'space-between'}>
      <Text variant={'heading-h4'} color="neutral100">
        {heading}
      </Text>
      <PressableScale onPress={onAllPress}>
        <HStack alignItems="center">
          <Text
            variant={'body-xsmall-medium'}
            color="accent"
            marginRight={'tiny'}>
            See All
          </Text>
          <Icon icon="arrow-forward" size={scale(20)} />
        </HStack>
      </PressableScale>
    </HStack>
  );
};

export default ArrowHeader;
