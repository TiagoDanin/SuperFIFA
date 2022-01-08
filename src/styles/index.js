import styled from 'styled-components/native';
import {StatusBar as StatusBarReact, Platform} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ActivityIndicator, Colors as colorsPaper} from 'react-native-paper';

import colorsGlobal from './colors';

import dimensionsGlobal from './dimensions';

export const colors = colorsGlobal;

export const colorsMaterial = colorsPaper;

export const dimensions = dimensionsGlobal;

export const Container = styled(SafeAreaView)`
  flex: 1;
  background: ${colors.primaryDarkColor};
`;

export const ContainerBody = styled.View`
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  align-items: center;
  padding-top: 20px;
  padding-left: ${dimensions.marginHorizontal}px;
  padding-right: ${dimensions.marginHorizontal}px;
  flex: 2.5;
  background: #fff;
`;

export const ScrollContainer = styled.ScrollView.attrs({
  enableOnAndroid: false,
  vertical: true,
  showsVerticalScrollIndicator: false,
  nestedScrollEnabled: true,
  fadingEdgeLength: 30,
  contentContainerStyle: {
    paddingBottom: Platform.OS === 'ios' ? 30 : 5,
  },
})`
  flex: 1;
  padding: 1px;
  height: 100%;
  background: white;
`;

export const ScrollContainerHorizontal = styled.ScrollView.attrs({
  enableOnAndroid: false,
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  fadingEdgeLength: 30,
  nestedScrollEnabled: true,
  contentContainerStyle: {
    paddingRight: Platform.OS === 'ios' ? 30 : 5,
  },
})`
  flex: 1;
  width: 100%;
  background: white;
`;

export const StatusBar = styled(StatusBarReact).attrs({
  barStyle: 'light-content',
  backgroundColor: colors.primaryDarkColor,
})``;

export const StatusBariOS = styled(SafeAreaView)`
  flex: 0;
  background: ${colors.primaryDarkColor};
`;

export const LoadingIndicator = styled(ActivityIndicator).attrs({
  animating: true,
  color: colors.primaryColor,
  size: 'large',
})``;
