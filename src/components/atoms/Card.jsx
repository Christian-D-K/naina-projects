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

import { CardStyles as styles } from '../../utils/styles';
import { COLORS } from '../../utils/colors';

export function Card(props) {
  const {
    // 品目名
    cardTitle,
    // 品目の備考
    description,
    // 品目の在庫状況
    isProductHas,
    // メイン（在庫の管理をする）モードの判断。falseで編集モードに
    isMainMode,
    // firebase上で再版される
    cardId,
    // カードが編集モード中にチェックされた際のハンドラー
    checkHandler,
    // チェックされたカードを格納する
    checkCards,
    // カードがメイン・編集モード拘らずクリックされた時のハンドラー
    onPressHandler,
  } = props;
  // 品目の在庫を管理するステート
  const [isProductHasState, setIsProductHasState] = useState(isProductHas);

  const onPress = () => {
    if (isMainMode) {
      // ストック情報を入れ替える
      setIsProductHasState(!isProductHasState);
      // 呼出元で任意のメソッドを作動。カードIDとストック状況を渡す
      onPressHandler(cardId, isProductHasState);
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
            source={{ uri: 'https://raw.githubusercontent.com/Christian-D-K/naina-projects/master/src/media/baby-solid.png' }}
            style={[styles.image, styles.visualArea]}
          />
          <View
            style={
              [
                styles.cover,
                styles.visualArea,
                { backgroundColor: isProductHasState ? COLORS.BLACK_D002 : COLORS.RED_D003 },
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
  onPressHandler: func,
  cardId: string.isRequired,
  checkCards: arrayOf.isRequired,
};

Card.defaultProps = {
  description: null,
  isMainMode: true,
  checkHandler: null,
  onPressHandler: null,
};
