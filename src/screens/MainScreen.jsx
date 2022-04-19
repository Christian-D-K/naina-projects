import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Animated,
} from 'react-native';

// constants
import { RADIO_OPTIONS } from '../utils/consts';
import { COLORS } from '../utils/colors';

// components
import { CircleButton } from '../components/CircleButton';
import { RadioButton } from '../components/RadioButton';
import { Card } from '../components/Card';

export default function MainScreen() {
  const [isMainMode, setIsMainMode] = useState(true);
  const [checkCards, setCheckCards] = useState([]);
  const turnUpAddButtonAnim = useRef(new Animated.Value(20)).current;
  const turnUpDeleteButtonAnim = useRef(new Animated.Value(20)).current;
  const turnUpAddButtonOpasityAnim = useRef(new Animated.Value(0)).current;
  const turnUpDeleteButtonOpasityAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    turnUpDeleteButton();
    turnUpDeleteButtonOpasity();
  }, [checkCards]);

  useEffect(() => {
    turnUpAddButton();
    turnUpAddButtonOpasity();
    if (isMainMode) setCheckCards([]);
  }, [isMainMode]);

  const turnUpAddButton = () => {
    Animated.spring(turnUpAddButtonAnim, {
      toValue: isMainMode ? 20 : 100,
      speed: 20,
      bounciness: 8,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const turnUpDeleteButton = () => {
    Animated.spring(turnUpDeleteButtonAnim, {
      toValue: checkCards.length > 0 ? 180 : 20,
      speed: 15,
      bounciness: 6,
      useNativeDriver: false,
    }).start();
  };

  const turnUpAddButtonOpasity = () => {
    Animated.timing(turnUpAddButtonOpasityAnim, {
      toValue: isMainMode ? 0 : 1,
      duration: 120,
      useNativeDriver: false,
    }).start();
  };

  const turnUpDeleteButtonOpasity = () => {
    Animated.timing(turnUpDeleteButtonOpasityAnim, {
      toValue: checkCards.length > 0 ? 1 : 0,
      duration: 120,
      useNativeDriver: false,
    }).start();
  };

  const pushEditButton = () => {
    setIsMainMode(!isMainMode);
    // turnUpAddButton();
  };

  const onCheck = (cardId) => {
    if (checkCards.includes(cardId)) {
      setCheckCards(checkCards.filter((item) => item !== cardId));
    } else {
      setCheckCards([...checkCards, cardId]);
    }
  };

  const pushDeleteButton = () => {
    console.log(`delete ${checkCards}`);
  };

  return (
    <View
      style={
        [
          styles.container,
          { backgroundColor: isMainMode ? COLORS.GRAY_L001 : COLORS.BLUE_L002 },
        ]
      }
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
            isMainMode={isMainMode}
            checkCards={checkCards}
            checkHandler={onCheck}
          />
          <Card
            cardTitle="砂糖"
            description="シュガー"
            isProductHas
            cardId="bbbb"
            isMainMode={isMainMode}
            checkCards={checkCards}
            checkHandler={onCheck}
          />
        </View>
      </ScrollView>
      <CircleButton
        name={isMainMode ? 'edit-2' : 'check'}
        onPress={pushEditButton}
        layoutStyle={styles.editCircle}
        designStyle={styles.circleButtonWhite}
      />
      <Animated.View
        style={
          [
            styles.trashCircle,
            { right: turnUpDeleteButtonAnim },
            { opacity: turnUpDeleteButtonOpasityAnim },
          ]
        }
      >
        <CircleButton
          name="trash-2"
          onPress={pushDeleteButton}
          designStyle={styles.circleButtonRed}
        />
      </Animated.View>
      <Animated.View
        style={
          [
            styles.addCircle,
            { right: turnUpAddButtonAnim },
            { opacity: turnUpAddButtonOpasityAnim },
          ]
        }
      >
        <CircleButton
          name="plus"
          designStyle={styles.circleButtonGreen}
        />
      </Animated.View>
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
    zIndex: 100,
  },
  addCircle: {
    position: 'absolute',
    bottom: 30,
  },
  trashCircle: {
    position: 'absolute',
    bottom: 30,
  },
  circleButtonWhite: {
    backgroundColor: COLORS.WHITE_L001,
    shadowColor: COLORS.GRAY_D001,
    color: COLORS.GRAY_D001,
  },
  circleButtonGreen: {
    backgroundColor: COLORS.GREEN_L001,
    shadowColor: COLORS.GREEN_D002,
    color: COLORS.GREEN_D001,
  },
  circleButtonRed: {
    backgroundColor: COLORS.RED_L001,
    shadowColor: COLORS.RED_D002,
    color: COLORS.RED_D002,
  },
});
