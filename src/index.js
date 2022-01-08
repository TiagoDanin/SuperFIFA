import React from 'react';

import {Platform} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import 'react-native-gesture-handler';

import Routes from '~/routes';

import {StatusBar, StatusBariOS, colors} from '~/styles';

import {navigationReference} from '~/services/NavigationService';

import ContextView from '~/contexts';

const paperTheme = {
  ...DefaultTheme,
  dark: false,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primaryColor,
    accent: colors.secondaryColor,
  },
};

export default () => (
  <PaperProvider theme={paperTheme}>
    <StatusBar />
    {Platform.OS === 'ios' && <StatusBariOS />}
    <SafeAreaProvider>
      <NavigationContainer ref={navigationReference}>
        <ContextView>
          <Routes />
        </ContextView>
      </NavigationContainer>
    </SafeAreaProvider>
  </PaperProvider>
);
