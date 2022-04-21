import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import { COLORS } from '../utils/colors';

import { Input } from '../components/Input';
import { Title } from '../components/Title';
import { RadioButton } from '../components/RadioButton';
import { DesignRadioButton } from '../components/DesignRadioButton';

import { EDIT_RADIO_OPTIONS } from '../utils/consts';

export default function EditCardScreen() {
  const [choicedDesign, setChoicedDesign] = useState(1);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Title
            title="品目"
          />
          <Input />
        </View>
        <View
          style={styles.radioArea}
        >
          <Title
            title="ストック"
          />
          <View>
            <RadioButton
              radioOptions={EDIT_RADIO_OPTIONS}
              initialOptionId="1"
            />
          </View>
        </View>
        <DesignRadioButton
          choicedDesign={choicedDesign}
          setChoicedDesign={setChoicedDesign}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.BLUE_L002,
    paddingHorizontal: 16,
  },
  radioArea: {
    width: '100%',
    paddingVertical: 16,
    paddingRight: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
