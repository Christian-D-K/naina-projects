// Flames
import React from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
} from 'react-native';

// constants
import { TEXT_JP } from '../utils/consts';
import { COLORS } from '../utils/colors';

// components
import { Button } from '../components/Button';
import { CircleButton } from '../components/CircleButton';

const pushButton = () => {
  Alert.alert('OK!');
};

const pushCircleButton = () => {
  Alert.alert('GOT IT!');
};

export default function ConfirmScreen() {
  return (
    <View>
      <Text>{`hi there! ${TEXT_JP.TEST} ;）`}</Text>
      <Button onPress={pushButton} buttonText={TEXT_JP.SAVE_BUTTON_TEXT} />
      <CircleButton
        name="edit-2"
        onPress={pushCircleButton}
        style={styles.circleButtonWhite}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.GRAY_D001,
  },
  circleButtonWhite: {
    backgroundColor: COLORS.WHITE_L001,
    shadowColor: COLORS.GRAY_D001,
    color: COLORS.GRAY_D001,
  },
});
