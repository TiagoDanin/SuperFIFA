import styled from 'styled-components/native';
import LoginInputComponent from '~/components/LoginInput';

import {
  LoadingIndicator as LoadingIndicatorComponent,
  ContainerBody as ContainerBodyComponent,
  Container as ContainerComponent,
  ScrollContainer as ScrollContainerComponent,
  dimensions,
} from '~/styles';

import TitleAppComponent from '~/components/TitleApp';

import WinnerCardComponent from '~/components/WinnerCard';

export const TitlePageView = styled.View`
  border-radius: 15px;
  margin-bottom: 10px;
  background: #f5f5f6;
  flex-direction: row;
  padding: 6px;
`;

export const TitlePageText = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const Container = ContainerComponent;

export const TitleApp = TitleAppComponent;

export const ContainerBody = styled(ContainerBodyComponent)`
  padding-top: 0px;
  padding-left: 0px;
  padding-right: 0px;
`;

export const ScrollContainer = styled(ScrollContainerComponent)`
  padding-top: 20px;
  padding-left: ${dimensions.marginHorizontal}px;
  padding-right: ${dimensions.marginHorizontal}px;
`;

export const LoginInput = LoginInputComponent;

export const LoadingIndicator = styled(LoadingIndicatorComponent)`
  margin-top: 20px;
`;

export const WinnerCard = WinnerCardComponent;
