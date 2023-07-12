import {StyleSheet, ViewStyle, Platform} from 'react-native';
import Colors from './Colors';

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 20 : 0,
  },
});
