import React from 'react';
import {BackHandler} from 'react-native';

import Toast from 'react-native-tiny-toast';
import {useFocusEffect, useIsFocused} from '@react-navigation/native';

import WinnersService from '~/services/WinnersService';
import {replace} from '~/services/NavigationService';

import {
  Container,
  ContainerBody,
  ScrollContainer,
  LoadingIndicator,
  TitleApp,
  WinnerCard,
  TitlePageView,
  TitlePageText,
} from './styles';

const LoginView = () => {
  const [isShowLoading, setShowLoading] = React.useState(true);
  const [list, setList] = React.useState([]);

  const isFocused = useIsFocused();

  const winnersApi = new WinnersService();

  const loadList = async () => {
    setShowLoading(true);
    winnersApi
      .list()
      .then(data => {
        setList(data.winners);
      })
      .catch(error => {
        Toast.show(error.toString().replace('Error', '').replace(': ', ''));
      })
      .finally(() => {
        setShowLoading(false);
      });
  };

  React.useEffect(() => {
    if (isFocused) {
      loadList();
    }
  }, [isFocused]);

  const onBackPress = () => {
    replace('Login');
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
          <ScrollContainer>
            <TitlePageView>
              <TitlePageText>Ganhadores</TitlePageText>
            </TitlePageView>
            {list.map(winner => (
              <WinnerCard key={`winner:year:${winner.year}`} winner={winner} />
            ))}
          </ScrollContainer>
        )}
      </ContainerBody>
    </Container>
  );
};

export default LoginView;
