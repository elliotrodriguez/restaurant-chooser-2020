import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, Text} from 'react-native';

const CustomButton = props => {
  const {text, onPress, buttonStyle, textStyle, width, disabled} = props;

  return (
    <TouchableOpacity
      style={[
        {
          padding: 10,
          height: 60,
          borderRadius: 8,
          margin: 10,
          width,
          backgroundColor: disabled ? '#e0e0e0' : '#303656',
        },
        buttonStyle,
      ]}
      onPress={() => {
        if (!disabled) {
          onPress();
        }
      }}>
      <Text
        style={[
          {
            fontSize: 20,
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign: 'center',
            paddingTop: 8,
          },
          textStyle,
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

CustomButton.propTypes = {
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  buttonStyle: PropTypes.object,
  textStyle: PropTypes.object,
  width: PropTypes.string,
  disabled: PropTypes.bool,
};

CustomButton.defaultProps = {
  disabled: false,
};

export default CustomButton;
