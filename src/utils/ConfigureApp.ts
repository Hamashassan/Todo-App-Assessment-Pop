import {Text, StatusBar, LogBox, TextInput} from 'react-native';
import {DefaultTheme} from '@react-navigation/native';

import {
  yellowBox,
  allowTextFontScaling,
  allowIQKeyboardManager,
  allowIQKeyboardManagerToolbar,
} from '../config/AppConfig';

import {Util, IQKeyboardManager} from '.';
import {Colors} from '../theme';

export default () => {
  if (__DEV__) {
    LogBox.ignoreAllLogs(true);
    LogBox.ignoreLogs([
      'Non-serializable values were found in the navigation state',
    ]);
  }

  if (Util.isPlatformIOS()) {
    IQKeyboardManager.setEnable(allowIQKeyboardManager);
    IQKeyboardManager.setToolbarPreviousNextButtonEnable(
      allowIQKeyboardManagerToolbar,
    );
  }

  if (Util.isPlatformAndroid()) {
    StatusBar.setTranslucent(true);
    StatusBar.setBarStyle('dark-content');
  }

  DefaultTheme.colors.background = Colors.mainColor;

  Text.defaultProps = Text.defaultProps || {};
  Text.defaultProps.allowFontScaling = allowTextFontScaling;
  TextInput.defaultProps.selectionColor = Colors.primary;
};
