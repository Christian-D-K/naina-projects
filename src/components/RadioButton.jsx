import React, { useRef } from 'react';
import InsetShadow from 'react-native-inset-shadow';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';
import { arrayOf } from 'prop-types';
import { FlatList } from 'react-native-gesture-handler';

import { COLORS } from '../utils/colors';

export function RadioButton(props) {
  const { radioOptions } = props;
  // Radio-options-size specifies automatic
  const containerWidth = 200;
  const optionWidth = containerWidth / radioOptions.length;
  // const radioOptionsLength = radioOptions.length;
  const swithcRadioAnim = useRef(new Animated.Value(0)).current;

  const switchRadioState = (id) => {
    Animated.spring(swithcRadioAnim, {
      toValue: Number(id) * optionWidth,
      speed: 20,
      bounciness: 100,
      duration: 100,
      useNativeDriver: false,
    }).start();
  };

  const renderOptions = ({ item }) => (
    <TouchableOpacity
      onPress={() => switchRadioState(item.optionId)}
    >
      <Text
        style={styles.option}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  const styles = StyleSheet.create({
    container: {
      height: 40,
      width: containerWidth,
    },
    option: {
      textAlign: 'center',
      lineHeight: 40,
      width: optionWidth,
      color: COLORS.GRAY_D001,
    },
    choicedOptions: {
      color: COLORS.BLACK_D001,
      fontWeight: 'bold',
    },
    optionsContainer: {
      borderRadius: 6,
      backgroundColor: COLORS.GRAY_M001,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cursor: {
      position: 'absolute',
      left: 0,
      width: optionWidth,
      height: 40,
      backgroundColor: '#ffffff',
      borderRadius: 6,
    },
  });

  return (
    <View
      style={styles.container}
    >
      <InsetShadow
        right={false}
        left={false}
        shadowRadius={3}
        shadowOffset={1}
        shadowOpacity={0.1}
      >
        <View
          style={styles.optionsContainer}
        >
          <Animated.View
            style={
              [
                styles.cursor,
                { left: swithcRadioAnim },
              ]
            }
          />
          <FlatList
            data={radioOptions}
            renderItem={renderOptions}
            keyExtractor={(item) => item.optionId}
            horizontal
          />
        </View>
      </InsetShadow>
    </View>
  );
}

RadioButton.propTypes = {
  radioOptions: arrayOf.isRequired,
};
