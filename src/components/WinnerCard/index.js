import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  IconView,
  TextBoxView,
  CountryText,
  YearText,
} from './styles';

const WinnerCard = ({winner, ...rest}) => {
  return (
    <Container {...rest}>
      <IconView />
      <TextBoxView>
        <CountryText>{winner.country}</CountryText>
        <YearText>{winner.year}</YearText>
      </TextBoxView>
    </Container>
  );
};

WinnerCard.propTypes = {
  winner: PropTypes.shape({
    country: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
};

export default WinnerCard;
