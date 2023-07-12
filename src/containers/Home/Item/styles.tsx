import {StyleSheet, ViewStyle, TextStyle, ImageStyle} from 'react-native';

interface ItemStyles {
  container: ViewStyle;
  icon: ImageStyle;
  title: TextStyle;
  date: TextStyle;
  content: ViewStyle;
}

export default StyleSheet.create<ItemStyles>({
  container: {
    marginVertical: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 100,
    backgroundColor: '#ccc',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
  },
  title: {
    fontWeight: '600',
  },
  date: {
    fontSize: 12,
  },
  content: {
    marginLeft: 5,
    flex: 1,
  },
});
