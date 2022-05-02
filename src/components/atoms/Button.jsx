import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { func, string } from 'prop-types';
import { COLORS } from '../../utils/colors';

export function Button(props) {
  const { onPress, buttonText } = props;
  return (
    <TouchableOpacity style={[styles.buttonCantainer]} onPress={onPress}>
      <Text style={[styles.buttonLabel]}>{buttonText}</Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  onPress: func,
  buttonText: string.isRequired,
};

Button.defaultProps = {
  onPress: null,
};

const styles = StyleSheet.create({
  buttonCantainer: {
    backgroundColor: COLORS.GRAY_D001,
    borderRadius: 4,
    height: 40,
  },
  buttonLabel: {
    fontSize: 24,
    paddingVertical: 5,
    paddingHorizontal: 32,
    color: '#ffffff',
  },
});
