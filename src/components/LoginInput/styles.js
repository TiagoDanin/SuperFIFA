import styled from 'styled-components/native';
import {TextInput as TextInputPaper} from 'react-native-paper';

import {dimensions} from '~/styles';

export const Container = styled.View`
  width: 100%;
  height: 56px;
  margin-left: ${dimensions.marginHorizontal}px;
  margin-right: ${dimensions.marginHorizontal}px;
  border-radius: 10px;
  align-items: center;
  margin-top: 20px;
`;

export const TextInput = styled(TextInputPaper).attrs({
  mode: 'outlined',
  theme: {
    roundness: 4,
  },
})`
  width: 100%;
  background: white;
`;
