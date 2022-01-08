import React from 'react';
import PropTypes from 'prop-types';
import {colors} from '~/styles';
import {Container, TextInput} from './styles';

const LoginInput = ({value, onChangeText, label, isPasswordInput, ...rest}) => {
  const [isShowPassword, setPasswordShow] = React.useState(!isPasswordInput);

  return (
    <Container {...rest}>
      <TextInput
        label={label}
        secureTextEntry={!isShowPassword}
        value={value}
        onChangeText={onChangeText}
        placeholder="Digite aqui..."
        right={
          isPasswordInput ? (
            <TextInput.Icon
              name={isShowPassword ? 'eye' : 'eye-off'}
              color={colors.primaryLightColor}
              onPress={() => setPasswordShow(!isShowPassword)}
            />
          ) : (
            <TextInput.Icon name="email" color={colors.primaryLightColor} />
          )
        }
      />
    </Container>
  );
};

LoginInput.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  isPasswordInput: PropTypes.bool,
};

LoginInput.defaultProps = {
  isPasswordInput: false,
};

export default LoginInput;
