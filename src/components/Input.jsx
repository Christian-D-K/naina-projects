import React, { useState, useRef } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {
  string,
  bool,
  func,
} from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import { COLORS } from '../utils/colors';

export function Input(props) {
  const {
    multiline,
    inputValueSet,
    inputValue,
  } = props;

  const [clearButtonView, setClearButtonView] = useState(1);

  // 初期値の設定
  const spreadInputBoxAnim = useRef(new Animated.Value(multiline ? 96 : 32)).current;

  // フォーカスイベント
  const onFocus = () => {
    Animated.timing(spreadInputBoxAnim, {
      toValue: multiline ? 110 : 56,
      duration: 200,
      useNativeDriver: false,
    }).start();
    setClearButtonView(0);
  };

  // ブラーイベント
  const onBlur = () => {
    Animated.timing(spreadInputBoxAnim, {
      toValue: multiline ? 96 : 32,
      duration: 200,
      delay: 50,
      useNativeDriver: false,
    }).start();
    setClearButtonView(1);
  };

  const clearInputValue = () => inputValueSet('');

  return (
    <View
      style={styles.inputContainer}
    >
      <Animated.View
        style={[styles.input, { height: spreadInputBoxAnim }]}
        onFocus={onFocus}
        onBlur={onBlur}
      >
        <TextInput
          style={[styles.inputText]}
          value={inputValue}
          multiline={multiline}
          autoFocus
          onChangeText={inputValueSet}
        />
        <TouchableOpacity
          style={styles.clearButton}
          onPress={clearInputValue}
        >
          <Ionicons
            name="close-circle"
            size={24}
            color={COLORS.GRAY_M001}
            style={{ opacity: clearButtonView }}
          />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

Input.propTypes = {
  multiline: bool,
  inputValueSet: func,
  inputValue: string,
};

Input.defaultProps = {
  multiline: false,
  inputValueSet: null,
  inputValue: '',
};

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 16,
  },
  input: {
    marginHorizontal: 8,
    paddingHorizontal: 8,
    backgroundColor: COLORS.WHITE_L001,
    borderBottomWidth: 0.3,
    borderBottomColor: COLORS.GRAY_D001,
    flexDirection: 'row',
  },
  inputText: {
    fontSize: 18,
    paddingVertical: 8,
    color: COLORS.GRAY_D001,
    width: '90%',
  },
  clearButton: {
    fontSize: 18,
    justifyContent: 'flex-end',
    color: COLORS.GRAY_D001,
    alignSelf: 'center',
  },
});
