import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// PAGES
import LoginView from '~/pages/LoginView';
import WinnersListView from '~/pages/WinnersListView';

const paths = [
  {
    path: 'Login',
    title: 'LoginView',
    screen: LoginView,
  },
  {
    path: 'WinnersList',
    title: 'WinnersListView',
    screen: WinnersListView,
  },
];

export default () => {
  const Stack = createStackNavigator();

  const renderRoutes = () => {
    return paths.map(item => {
      return (
        <Stack.Screen
          key={item.path}
          name={item.path}
          component={item.screen}
          options={{
            title: item.title,
            headerShown: false,
            animationEnabled: false,
          }}
        />
      );
    });
  };

  return (
    <Stack.Navigator initialRouteName="Login">{renderRoutes()}</Stack.Navigator>
  );
};
