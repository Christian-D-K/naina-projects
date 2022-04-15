import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {
  string,
  bool,
} from 'prop-types';
// import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../utils/colors';

export function Card(props) {
  const {
    cardTitle,
    expiryDate,
    description,
    isProductHas,
    isMainMode,
  } = props;
  const [isProductHasState, setIsProductHasState] = useState(isProductHas);

  const onPress = () => {
    if (isMainMode) {
      setIsProductHasState(!isProductHasState);
    } else {
      // Write edit-mode method
    }
  };

  const styles = StyleSheet.create({
    cardContainer: {
      width: 176,
      height: 144,
      backgroundColor: isProductHasState ? COLORS.GRAY_M002 : COLORS.RED_D002,
      marginHorizontal: 8,
      marginVertical: 8,
      borderRadius: 4,
    },
    visualArea: {
      height: 96,
      width: 176,
      borderTopStartRadius: 4,
      borderTopEndRadius: 4,
    },
    titleArea: {
      height: 48,
      backgroundColor: isProductHasState ? COLORS.GRAY_D002 : COLORS.RED_D001,
      borderBottomEndRadius: 4,
      borderBottomStartRadius: 4,
    },
    visualAreaTop: {
      height: 40,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    visualAreaBottom: {
      height: 56,
    },
    title: {
      marginHorizontal: 8,
      marginTop: 14,
      fontSize: 16,
      color: COLORS.WHITE_L001,
      fontWeight: 'bold',
    },
    check: {
      backgroundColor: COLORS.WHITE_L001,
      opacity: 0.5,
      borderWidth: 2,
      borderStyle: 'dotted',
      borderColor: COLORS.GRAY_D001,
      margin: 8,
      width: 24,
      height: 24,
      borderRadius: 12,
    },
    checkUnVisible: {
      margin: 8,
      width: 24,
      height: 24,
    },
    expiryDate: {
      fontSize: 16,
      marginTop: 8,
      marginRight: 8,
      color: COLORS.WHITE_L001,
      fontWeight: 'bold',
    },
    description: {
      width: 140,
      marginLeft: 8,
      fontSize: 14,
      fontWeight: '500',
      color: COLORS.WHITE_L001,
    },
    cover: {
      position: 'absolute',
      backgroundColor: isProductHasState ? COLORS.BLACK_D001 : COLORS.RED_D003,
      opacity: 0.4,
    },
    image: {
      position: 'absolute',
    },
  });

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={onPress}
    >
      <View
        style={styles.visualArea}
      >
        <View
          style={styles.visualAreaTop}
        >
          <Image
            // eslint-disable-next-line global-require
            source={require('../media/sample.jpg')}
            style={[styles.image, styles.visualArea]}
          />
          <View
            style={[styles.cover, styles.visualArea]}
          />
          <View
            style={styles.cover}
          />
          {isMainMode ? <View style={styles.checkUnVisible} />
            : <TouchableOpacity activeOpacity={0.5} style={styles.check} />}
          <Text
            style={styles.expiryDate}
          >
            {expiryDate}
          </Text>
        </View>
        <View
          style={styles.visualAreaBottom}
        >
          <Text
            style={styles.description}
          >
            {description}
          </Text>
        </View>
      </View>
      <View
        style={styles.titleArea}
      >
        <Text
          style={styles.title}
        >
          {cardTitle}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
Card.propYypes = {
  cardTitle: string.isRequired,
  expiryDate: string.isRequired,
  description: string,
  isProductHas: bool.isRequired,
  isMainMode: bool,
};

Card.defaultProps = {
  description: null,
  isMainMode: true,
};
