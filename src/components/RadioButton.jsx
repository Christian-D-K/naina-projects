import React, { useRef } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Animated,
} from 'react-native';
import { arrayOf, string } from 'prop-types';
import { FlatList } from 'react-native-gesture-handler';

import { RaddioButtonStyles as styles } from '../utils/styles';

export function RadioButton(props) {
  const { radioOptions, initialOptionId } = props;
  // Radio-options-size specifies automatic
  const containerWidth = 200;
  const optionWidth = containerWidth / radioOptions.length;
  // const radioOptionsLength = radioOptions.length;
  const swithcRadioAnim = useRef(new Animated.Value(Number(initialOptionId) * optionWidth)).current;

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
        style={[styles.option, { width: optionWidth }]}
      >
        {item.title}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View
      style={[styles.container, { width: containerWidth }]}
    >
      <View
        style={styles.optionsContainer}
      >
        <Animated.View
          style={
            [
              styles.cursor,
              { left: swithcRadioAnim },
              { width: optionWidth - 8 },
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
    </View>
  );
}

RadioButton.propTypes = {
  radioOptions: arrayOf.isRequired,
  initialOptionId: string.isRequired,
};
