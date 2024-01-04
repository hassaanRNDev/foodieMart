import {StyleSheet} from 'react-native';
import {scale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    minHeight: scale(24),
    marginHorizontal: scale(24),
    alignItems: 'center',
  },
  itemBar: {
    paddingHorizontal: scale(15),
    paddingVertical: scale(8),
    position: 'absolute',
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    bottom: 20,
    backgroundColor: 'red',
    borderRadius: scale(5),
  },
  text: {
    flex: 1,
  },
});
