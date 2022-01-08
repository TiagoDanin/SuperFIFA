import React from 'react';
import {BackHandler} from 'react-native';

import Toast from 'react-native-tiny-toast';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import AuthenticationService from '~/services/AuthenticationService';
import {replace} from '~/services/NavigationService';
import {
  Container,
  ContainerBody,
  LoginText,
  LoginButton,
  LoginInput,
  LoadingIndicator,
  TitleApp,
  TitlePageText,
  DescriptionText,
} from './styles';

const LoginView = () => {
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const [isShowLoading, setShowLoading] = React.useState(false);

  const isFocused = useIsFocused();

  const authenticationApi = new AuthenticationService();

  const isInputValidated = () => {
    if (!email) {
      Toast.show('O campo de email está vazio!');
      return false;
    }

    if (!password) {
      Toast.show('Senha está vazio!');
      return false;
    }

    return true;
  };

  const loginAction = () => {
    setShowLoading(true);
    authenticationApi
      .login({
        email,
        password,
      })
      .then(() => {
        replace('WinnersList');
      })
      .catch(error => {
        onChangePassword('');
        Toast.show(error.toString().replace('Error', '').replace(': ', ''));
      })
      .finally(() => {
        setShowLoading(false);
      });
  };

  const loginButton = () => {
    if (!isInputValidated()) {
      return;
    }

    loginAction();
  };

  const loadAuthentication = async () => {
    const lastUserLogin = await AsyncStorage.getItem('authentication:user');
    if (lastUserLogin) {
      onChangeEmail(lastUserLogin);
    }
  };

  React.useEffect(() => {
    if (isFocused) {
      loadAuthentication();
    }
  }, [isFocused]);

  const onBackPress = () => {
    BackHandler.exitApp();
    return true;
  };

  useFocusEffect(
    React.useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', onBackPress);
      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, [])
  );

  return (
    <Container>
      <TitleApp />
      <ContainerBody>
        {isShowLoading && <LoadingIndicator />}
        {!isShowLoading && (
          <>
            <TitlePageText>Login</TitlePageText>
            <DescriptionText>
              Para verificar o resultado dos ganhadores da FIFA nos últimos
              anos, você deve inserir sua credencial do nosso clube SuperFIFA 
            </DescriptionText>
            <LoginInput
              value={email}
              onChangeText={onChangeEmail}
              label="Email"
            />
            <LoginInput
              value={password}
              onChangeText={onChangePassword}
              label="Senha"
              isPasswordInput
            />
            <LoginButton
              onPress={() => {
                loginButton();
              }}>
              <LoginText>Entrar</LoginText>
            </LoginButton>
          </>
        )}
      </ContainerBody>
    </Container>
  );
};

export default LoginView;
