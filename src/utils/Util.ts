import {MessageBarManager} from 'react-native-message-bar';
import {Platform, StatusBar} from 'react-native';
import _ from 'lodash';

function isPlatformAndroid(): boolean {
  return Platform.OS === 'android';
}

function isPlatformIOS(): boolean {
  return Platform.OS === 'ios';
}

function getPlatform(): string {
  return Platform.OS;
}

function isEmpty(data: any): boolean {
  return _.isEmpty(data);
}

function showMessage(
  message: string,
  alertType = 'error',
  duration: number = 3000,
) {
  MessageBarManager.showAlert({
    message,
    alertType,
    duration,
  });
}

function hideMessageBar() {
  try {
    MessageBarManager.hideAlert();
  } catch (error) {
    console.log('Error');
  }
}

function isNotEmpty(data: any): boolean {
  return !_.isEmpty(data, true);
}

function clone<T>(data: T): T {
  return _.clone(data);
}

function cloneDeep<T>(data: T): T {
  return _.cloneDeep(data);
}

function compareDeep(previous: any, next: any): boolean {
  return !_.isEqual(previous, next);
}

function getRandomString(length: number = 5): string {
  var result = '';
  var characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function setStatusBarBackgroundColor(color: string) {
  StatusBar.setBarStyle(color, true);
}

function generateUUID(digits: number): string {
  let str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVXZ';
  let uuid = [];
  for (let i = 0; i < digits; i++) {
    uuid.push(str[Math.floor(Math.random() * str.length)]);
  }
  return uuid.join('');
}

export default {
  getRandomString,
  showMessage,
  isPlatformAndroid,
  isPlatformIOS,
  getPlatform,
  isEmpty,
  isNotEmpty,
  clone,
  cloneDeep,
  compareDeep,
  hideMessageBar,
  setStatusBarBackgroundColor,
  generateUUID,
};
