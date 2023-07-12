import {StyleSheet, ViewStyle, TextStyle} from 'react-native';
import {AppStyles} from '../../theme';

interface HomeStyles {
  container: ViewStyle;
  topContainer: ViewStyle;
  title: TextStyle;
  add: TextStyle;
}

export default StyleSheet.create<HomeStyles>({
  container: {
    ...AppStyles.container,
    marginHorizontal: 20,
  },
  topContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  add: {
    fontSize: 40,
    marginTop: -20,
    paddingHorizontal: 10,
  },
});
