import React, { useRef } from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from 'react-native';
import {
  node,
  number,
  bool,
  func,
} from 'prop-types';
import { Feather } from '@expo/vector-icons';

import { COLORS } from '../utils/colors';
import { Title } from './Title';

export function ExtentionSeparator(props) {
  const {
    children,
    isAreaSpreaded,
    setIsAreaSpreaded,
    maxHeight,
  } = props;

  const areaSpreadAnim = useRef(new Animated.Value(isAreaSpreaded ? maxHeight : 0)).current;
  const spinSpreadButtonAnim = useRef(new Animated.Value(isAreaSpreaded ? 3.15 : 0)).current;

  const spreadArea = () => {
    Animated.spring(areaSpreadAnim, {
      toValue: isAreaSpreaded ? 0 : maxHeight,
      duration: maxHeight / 2,
      bounciness: isAreaSpreaded ? 0 : 8,
      useNativeDriver: false,
    }).start();

    Animated.spring(spinSpreadButtonAnim, {
      toValue: isAreaSpreaded ? 0 : 3.15,
      speed: 3,
      bounciness: 15,
      useNativeDriver: false,
    }).start();

    setIsAreaSpreaded(!isAreaSpreaded);
  };

  return (
    <View
      style={styles.container}
    >
      <TouchableOpacity
        style={styles.titleArea}
        onPress={spreadArea}
        activeOpacity={1}
      >
        <Title
          title="オプション・詳細"
        />
        <Animated.View
          style={
            [
              styles.extentionButton,
              { transform: [{ rotate: spinSpreadButtonAnim }] },
            ]
          }
        >
          <Feather
            name="chevron-down"
            size={24}
            color={COLORS.GRAY_D001}
          />
        </Animated.View>
      </TouchableOpacity>
      <Animated.View
        style={
          [
            styles.extentionArea,
            { height: areaSpreadAnim },
          ]
        }
      >
        { children }
      </Animated.View>
    </View>
  );
}

ExtentionSeparator.propTypes = {
  children: node.isRequired,
  maxHeight: number,
  isAreaSpreaded: bool.isRequired,
  setIsAreaSpreaded: func.isRequired,
};

ExtentionSeparator.defaultProps = {
  maxHeight: 200,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  titleArea: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  extentionButton: {
    height: 25,
    marginRight: 20,
  },
  extentionArea: {
    width: '89%',
    overflow: 'hidden',
    alignSelf: 'center',
    marginLeft: 2,
    borderWidth: 0.25,
    backgroundColor: COLORS.BLUE_L003,
    borderColor: COLORS.GRAY_D001,
    borderRadius: 5,
  },
});
