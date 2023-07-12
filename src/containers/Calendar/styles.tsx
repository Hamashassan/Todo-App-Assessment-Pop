import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';
import {AppStyles} from '../../theme';

interface CalendarStyles {
  container: ViewStyle;
  topContainer: ViewStyle;
  title: TextStyle;
  input: ViewStyle;
  submitText: TextStyle;
  submitBtn: ViewStyle;
  delete: ImageStyle;
  back: ImageStyle;
}

export default StyleSheet.create<CalendarStyles>({
  container: {
    ...AppStyles.container,
    marginHorizontal: 20,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  title: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: '700',
  },
  input: {
    backgroundColor: '#dfe1e6',
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
  },
  submitText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitBtn: {
    alignItems: 'center',
    backgroundColor: '#000',
    marginTop: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  delete: {
    width: 20,
    height: 20,
  },
  back: {
    width: 20,
    height: 20,
  },
});
