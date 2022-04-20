import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import {
  string,
  bool,
  func,
  arrayOf,
} from 'prop-types';
import { Feather } from '@expo/vector-icons';

import { CardStyles as styles } from '../utils/styles';
import { COLORS } from '../utils/colors';

export function Card(props) {
  const {
    cardTitle,
    description,
    isProductHas,
    isMainMode,
    cardId,
    checkHandler,
    checkCards,
    background,
  } = props;
  const [isProductHasState, setIsProductHasState] = useState(isProductHas);
  const onPress = () => {
    if (isMainMode) {
      setIsProductHasState(!isProductHasState);
    } else {
      // Write edit-mode method
    }
  };

  return (
    <TouchableOpacity
      style={
        [
          styles.cardContainer,
          { backgroundColor: isProductHasState ? COLORS.GRAY_M002 : COLORS.RED_D002 },
          !isMainMode ? styles.editCardContainer : null,
        ]
      }
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
            source={{ uri: '' }}
            style={[styles.image, styles.visualArea]}
          />
          <View
            style={
              [
                styles.cover,
                styles.visualArea,
                { backgroundColor: isProductHasState ? COLORS.BLACK_D001 : COLORS.RED_D003 },
              ]
            }
          />
          {isMainMode ? <View style={styles.checkUnVisible} />
            // eslint-disable-next-line react/jsx-wrap-multilines
            : <TouchableOpacity
                activeOpacity={1}
                style={styles.checkArea}
                onPress={() => checkHandler(cardId)}
              >
                <View
                  style={[styles.check, checkCards.includes(cardId) ? styles.checked : styles.unChecked]}
                >
                  <Feather
                    name="check"
                    size={20}
                    color={COLORS.WHITE_L001}
                  />
                </View>
              </TouchableOpacity>}
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
        style={
          [
            styles.titleArea,
            { backgroundColor: isProductHasState ? COLORS.GRAY_D002 : COLORS.RED_D001 },
          ]
        }
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
Card.propTypes = {
  cardTitle: string.isRequired,
  description: string,
  isProductHas: bool.isRequired,
  isMainMode: bool,
  checkHandler: func,
  cardId: string.isRequired,
  checkCards: arrayOf.isRequired,
  background: string.isRequired,
};

Card.defaultProps = {
  description: null,
  isMainMode: true,
  checkHandler: null,
};
