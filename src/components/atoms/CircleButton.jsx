import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { string, shape, func } from 'prop-types';

import { Feather } from '@expo/vector-icons';

export function CircleButton(props) {
  const {
    // ボタンのデザインを設定するcss
    designStyle,
    // ボタンの位置やレイアウトを設定するcss
    layoutStyle,
    // iconの名前（アイコンの見た目が変わる）
    name,
    onPress,
  } = props;

  return (
    <TouchableOpacity
      style={[styles.circleButton, designStyle, layoutStyle]}
      onPress={onPress}
      activeOpacity={1}
    >
      <Feather name={name} size={32} color={designStyle.color} />
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  designStyle: shape(),
  layoutStyle: shape(),
  name: string.isRequired,
  onPress: func,
};

CircleButton.defaultProps = {
  designStyle: null,
  layoutStyle: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    // iOSのみ対応しているstyleプロパティ
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // Androidのみ対応しているstyleプロパティ
    elevation: 8,
  },
  circleButtonLabel: {
    fontSize: 40,
    lineHeight: 40,
  },
});
