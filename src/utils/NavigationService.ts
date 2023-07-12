import {
  StackActions,
  CommonActions,
  NavigationContainerRef,
} from '@react-navigation/native';

let _navigator: NavigationContainerRef | null;

function setTopLevelNavigator(navigatorRef: NavigationContainerRef) {
  _navigator = navigatorRef;
}

function navigate(routeName: string, params?: object) {
  _navigator?.navigate(routeName, params);
}

function replace(routeName: string, params?: object) {
  _navigator?.dispatch(StackActions.replace(routeName, params));
}

function push(routeName: string, params?: object) {
  _navigator?.dispatch(StackActions.push(routeName, params));
}

function pop(number: number = 1) {
  _navigator?.dispatch(StackActions.pop(number));
}

function popToTop() {
  _navigator?.dispatch(StackActions.popToTop());
}

function getNavigator() {
  return _navigator;
}

function reset(routeName: string) {
  const resetAction = CommonActions.reset({
    index: 0,
    routes: [{name: routeName}],
  });
  _navigator?.dispatch(resetAction);
}

function getCurrentRoute() {
  let route = _navigator?.getRootState()?.routes[0];
  while (route?.state?.routes) {
    route = route.state.routes[route.state.index];
  }
  return route?.name;
}

export default {
  replace,
  push,
  pop,
  setTopLevelNavigator,
  getCurrentRoute,
  getNavigator,
  navigate,
  reset,
  popToTop,
};
