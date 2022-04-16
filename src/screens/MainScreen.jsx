import React from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';

// constants
import { TEXT_JP, RADIO_OPTIONS } from '../utils/consts';
import { COLORS } from '../utils/colors';

// components
import { Button } from '../components/Button';
import { CircleButton } from '../components/CircleButton';
import { Input } from '../components/Input';
import { Title } from '../components/Title';
import { RadioButton } from '../components/RadioButton';
import { Card } from '../components/Card';

export default function MainScreen() {
  const pushCircleButton = () => {
    Alert.alert('GOT IT!');
  };

  return (
    <View
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View
          style={styles.radioArea}
        >
          <RadioButton
            radioOptions={RADIO_OPTIONS}
            initialOptionId="1"
          />
        </View>
        <View
          style={styles.cardArea}
        >
          <Card
            cardTitle="醤油"
            description="説明説明説明説明説明"
            isProductHas
            cardId="aaaa"
          />
          <Card
            cardTitle="醤油"
            description="説明説明説明説明説明"
            isProductHas
            cardId="aaab"
          />
        </View>
      </ScrollView>
      <CircleButton
        name="edit-2"
        onPress={pushCircleButton}
        layoutStyle={styles.editCircle}
        designStyle={styles.circleButtonWhite}
      />
      <CircleButton
        name="plus"
        onPress={pushCircleButton}
        layoutStyle={styles.addCircle}
        designStyle={styles.circleButtonWhite}
      />
      <CircleButton
        name="trash-2"
        onPress={pushCircleButton}
        layoutStyle={styles.trashCircle}
        designStyle={styles.circleButtonWhite}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_L001,
    paddingHorizontal: 16,
  },
  radioArea: {
    width: '100%',
    height: 64,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardArea: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  editCircle: {
    position: 'absolute',
    right: 20,
    bottom: 30,
  },
  addCircle: {
    position: 'absolute',
    right: 100,
    bottom: 30,
  },
  trashCircle: {
    position: 'absolute',
    right: 180,
    bottom: 30,
  },
  circleButtonWhite: {
    backgroundColor: COLORS.WHITE_L001,
    shadowColor: COLORS.GRAY_D001,
    color: COLORS.GRAY_D001,
  },
  circleButtonGreen: {
    backgroundColor: COLORS.WHITE_L001,
    shadowColor: COLORS.GRAY_D001,
    color: COLORS.GRAY_D001,
  },
  circleButtonRed: {
    backgroundColor: COLORS.WHITE_L001,
    shadowColor: COLORS.GRAY_D001,
    color: COLORS.GRAY_D001,
  },
});
