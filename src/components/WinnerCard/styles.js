import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {colors} from '~/styles';

export const Container = styled.View`
  border-radius: 15px;
  margin-bottom: 10px;
  background: #f5f5f6;
  flex-direction: row;
  padding: 6px;
`;

export const IconView = styled(Icon).attrs({
  name: 'trophy',
})`
  color: ${colors.primaryDarkColor};
  font-size: 42px;
`;

export const TextBoxView = styled.View`
  margin-left: 10px;
`;

export const CountryText = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const YearText = styled.Text`
  font-size: 22px;
`;
