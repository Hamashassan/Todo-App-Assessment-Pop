import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import {NavigationService} from '../utils';
import Home from '../containers/Home';
import Calendar from '../containers/Calendar';
import {Colors} from '../theme';

const Stack = createStackNavigator();

const App: React.FC<{initialRouteName: string}> = ({
  initialRouteName = 'Login',
}) => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}
      theme={{
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          // background: Colors.mainColor,
        },
      }}>
      <Stack.Navigator
        initialRouteName={initialRouteName}
        screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Calendar"
          component={Calendar}
          options={{title: 'Add Todo'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
