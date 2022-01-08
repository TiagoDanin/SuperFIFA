import styled from 'styled-components/native';
import LoginInputComponent from '~/components/LoginInput';

import {
  colors,
  LoadingIndicator as LoadingIndicatorComponent,
  ContainerBody as ContainerBodyComponent,
  Container as ContainerComponent,
} from '~/styles';

import TitleAppComponent from '~/components/TitleApp';

export const LoginButton = styled.TouchableOpacity`
  background: ${colors.primaryColor};
  border-radius: 8px;
  width: 100%;
  height: 56px;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;

export const LoginText = styled.Text`
  font-size: 18px;
  color: #ffffff;
`;

export const TitlePageText = styled.Text`
  margin-top: 5px;
  margin-bottom: 5px;
  color: ${colors.primaryColor};
  text-align: center;
  font-weight: bold;
  font-size: 44px;
`;

export const DescriptionText = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 19px;
`;

export const Container = ContainerComponent;

export const TitleApp = TitleAppComponent;

export const ContainerBody = ContainerBodyComponent;

export const LoginInput = LoginInputComponent;

export const LoadingIndicator = LoadingIndicatorComponent;
