import {Dimensions, Platform, StatusBar} from 'react-native';
import {isIphoneX} from 'react-native-iphone-x-helper';

const {width, height} = Dimensions.get('window');

const screenWidth = width < height ? width : height;
const screenHeight = width < height ? height : width;

const isKitKatAbove = Platform.OS === 'android' && Platform.Version >= 19;

const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

const scale = (size: number): number =>
  (screenWidth / guidelineBaseWidth) * size;
const scaleVertical = (size: number): number =>
  (screenHeight / guidelineBaseHeight) * size;

const ratio = (
  iosSize: number,
  androidSize?: number | null,
  doScale = false,
): number =>
  Platform.select({
    ios: doScale ? scaleVertical(iosSize) : iosSize,
    android: doScale
      ? scaleVertical(androidSize || iosSize)
      : androidSize || iosSize,
  });

const generatedFontSize = (
  iosFontSize: number,
  androidFontSize?: number | null,
): number =>
  Platform.select({
    ios: iosFontSize,
    android: androidFontSize || iosFontSize,
  });

const hitSlop = {top: 10, bottom: 10, left: 10, right: 10};

const NAVBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
const NAVBAR_HEIGHT2 = Platform.OS === 'ios' ? (isIphoneX() ? 56 : 56) : 56;
const STATUSBAR_HEIGHT_IOS = isIphoneX() ? 44 : 20;
const STATUSBAR_HEIGHT =
  Platform.OS === 'ios' ? STATUSBAR_HEIGHT_IOS : StatusBar.currentHeight;
const BOTTOM_SPACE_IPHONE_X = ratio(34);
const navBarHeight = NAVBAR_HEIGHT + STATUSBAR_HEIGHT;

const BOTTOM_SPACING = isIphoneX() ? BOTTOM_SPACE_IPHONE_X : ratio(20);
const BOTTOM_SPACING_TUTORIAL = isIphoneX() ? BOTTOM_SPACE_IPHONE_X : 0;
const SIDE_MENU_BOTTOM_SPACING =
  Platform.OS === 'ios' ? (isIphoneX() ? 70 : 50) : 50;

const MESSAGE_BAR_HEIGHT =
  Platform.OS === 'ios' ? (isIphoneX() ? 44 : 20) : StatusBar.currentHeight;

export default {
  BOTTOM_SPACING_TUTORIAL,
  MESSAGE_BAR_HEIGHT,
  BOTTOM_SPACING,
  SIDE_MENU_BOTTOM_SPACING,
  ratio,
  scale,
  scaleVertical,
  screenWidth,
  screenHeight,
  generatedFontSize,
  isIphoneX,
  isKitKatAbove,
  marginMinus: ratio(-10),
  extraSmallMargin: ratio(4),
  extraaSmallMargin: ratio(3),
  smallMargin: ratio(8),
  lineHeight: Platform.OS === 'ios' ? ratio(18) : ratio(23),
  bigSmallMargin: ratio(12),
  baseMargin: ratio(16),
  mediumMargin: ratio(20),
  largeMargin: ratio(24),
  doubleBaseMargin: ratio(32),
  bottomSpaceIphoneX: BOTTOM_SPACE_IPHONE_X,
  statusBarHeightIos: STATUSBAR_HEIGHT_IOS,
  statusBarHeight: STATUSBAR_HEIGHT,
  navBarHeight,
  navBarHeightWithoutStatus: NAVBAR_HEIGHT,
  navBarHeightWithoutStatus2: NAVBAR_HEIGHT2,
  tabBarHeight: BOTTOM_SPACE_IPHONE_X + (isIphoneX() ? ratio(50) : ratio(30)),
  separatorHeight: ratio(1),
  multilineHeight: ratio(103),
  imagesSwiperHeight: screenHeight / 2.25,
  borderWidth: ratio(3),
  borderRadius12: ratio(12),
  borderRadius: ratio(8),
  backdropOpacity: 0.4,
  hitSlop,
  NAVBAR_HEIGHT2,
};
