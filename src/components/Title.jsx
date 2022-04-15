import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { string } from 'prop-types';

import { COLORS } from '../utils/colors';

export function Title(props) {
  const { title } = props;

  return (
    <View style={styles.inputContainer}>
      <Text
        style={styles.title}
      >
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
  },
  title: {
    marginHorizontal: 8,
    fontSize: 18,
    color: COLORS.GRAY_D001,
    height: 32,
  },
});

Title.propTypes = {
  title: string.isRequired,
};
