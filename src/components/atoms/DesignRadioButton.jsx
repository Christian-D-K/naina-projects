import React from 'react';
import { number, func } from 'prop-types';
import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

import { COLORS } from '../../utils/colors';
import { Title } from './Title';

// ラジオボタンのラインナップ
const selection = [
  {
    id: 0,
    design: 'carrot',
  },
  {
    id: 1,
    design: 'pump-soap',
  },
  {
    id: 2,
    design: 'toilet-paper',
  },
  {
    id: 3,
    design: 'baby',
  },
  {
    id: 4,
    design: 'pills',
  },
  {
    id: 5,
    design: 'spray-can',
  },
  {
    id: 6,
    design: 'dog',
  },
  {
    id: 7,
    design: 'shopping-cart',
  },
];

export function DesignRadioButton(props) {
  const { choicedDesign, setChoicedDesign } = props;

  // 画像を背景に設定する場合の処理
  const onPressSetImage = () => {
    // idを999に設定
    setChoicedDesign(999);
  };

  const renderItem = ({ item }) => {
    const onPress = () => {
      setChoicedDesign(item.id);
    };

    return (
      <TouchableOpacity
        style={
          [
            styles.selections,
            { backgroundColor: choicedDesign === item.id ? COLORS.GRAY_D001 : COLORS.GRAY_M001 },
          ]
        }
        onPress={onPress}
        activeOpacity={1}
      >
        <Icon
          name={item.design}
          size={36}
          color={choicedDesign === item.id ? COLORS.GRAY_L001 : COLORS.GRAY_D001}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Title
        title="背景デザイン"
      />
      <View style={styles.designSelectBox}>
        <FlatList
          numColumns={4}
          data={selection}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        <TouchableOpacity
          style={
            [
              styles.setImage,
              { backgroundColor: choicedDesign === 999 ? COLORS.GRAY_D001 : COLORS.GRAY_M001 },
            ]
          }
          onPress={onPressSetImage}
          activeOpacity={1}
        >
          <Text
            style={
              [
                styles.setImageText,
                { color: choicedDesign === 999 ? COLORS.GRAY_L001 : COLORS.GRAY_D001 },
              ]
            }
          >
            背景に画像を選択する
          </Text>
          <Icon
            name="image"
            size={40}
            color={choicedDesign === 999 ? COLORS.GRAY_L001 : COLORS.GRAY_D001}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  designSelectBox: {
    // 要素の折り返し
    alignSelf: 'center',
    width: 320,
  },
  selections: {
    marginHorizontal: 10,
    marginTop: 4,
    marginBottom: 6,
    paddingVertical: 10,
    height: 60,
    width: 60,
    borderRadius: 10,
    alignItems: 'center',
  },
  setImage: {
    marginHorizontal: 10,
    marginTop: 8,
    height: 50,
    width: 300,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  setImageText: {

    fontSize: 16,
    marginHorizontal: 8,
  },
});

DesignRadioButton.propTypes = {
  setChoicedDesign: func.isRequired,
  choicedDesign: number.isRequired,
};
