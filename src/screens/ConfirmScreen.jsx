// Flames
import React, { useState } from 'react';
import {
  View,
  Alert,
  StyleSheet,
  ScrollView,
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

const pushButton = () => {
  Alert.alert('OK!');
};

const pushCircleButton = () => {
  Alert.alert('GOT IT!');
};

export default function ConfirmScreen() {
  const [inputProductValue, setInputProductValue] = useState('');
  const [inputDescriptionValue, setInputDescriptionValue] = useState('');
  return (
    <View style={styles.container}>
      <ScrollView>
        <Button onPress={pushButton} buttonText={TEXT_JP.SAVE_BUTTON_TEXT} />
        <Title
          title="品目"
        />
        <Input
          inputValueSet={setInputProductValue}
          inputValue={inputProductValue}
        />
        <Title
          title="説明"
        />
        <Input
          multiline
          inputValueSet={setInputDescriptionValue}
          inputValue={inputDescriptionValue}
        />
        <RadioButton
          radioOptions={RADIO_OPTIONS}
        />
        <Card
          cardTitle="醤油"
          expiryDate="2020/01/01"
          description="説明説明説明説明説明"
          isProductHas
        />
      </ScrollView>
      <CircleButton
        name="edit-2"
        onPress={pushCircleButton}
        layoutStyle={styles.editCircle}
        designStyle={styles.circleButtonWhite}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_L001,
  },
  editCircle: {
    position: 'absolute',
    right: 50,
    bottom: 80,
  },
  circleButtonWhite: {
    backgroundColor: COLORS.WHITE_L001,
    shadowColor: COLORS.GRAY_D001,
    color: COLORS.GRAY_D001,
  },
});
