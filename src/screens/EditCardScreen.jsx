import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// firebase操作メソッド
import {
  collection,
  addDoc,
  doc,
  updateDoc,
} from 'firebase/firestore';
import { db, cardDocInfo } from '../plugin/firebase';
// 画面遷移を司るプラグイン

import { COLORS } from '../utils/colors';

import { Input } from '../components/atoms/Input';
import { Title } from '../components/atoms/Title';
import { RadioButton } from '../components/atoms/RadioButton';
import { DesignRadioButton } from '../components/atoms/DesignRadioButton';
import { ExtentionSeparator } from '../components/atoms/ExtentionSeparator';
import { Button } from '../components/atoms/Button';

import { EDIT_RADIO_OPTIONS } from '../utils/consts';

// カードの作成・編集コンポーネント
export default function EditCardScreen() {
  // 画面遷移機能のインスタンス化
  const navigation = useNavigation();

  // 選択された背景デザインを保持、設定する
  const [choicedDesign, setChoicedDesign] = useState(1);
  // 拡張エリアの開閉状態を保持、設定する
  const [isAreaSpreaded, setIsAreaSpreaded] = useState(false);
  // 品目名を保持、設定する
  const [inputProductText, setInputProductText] = useState('');
  // 在庫状況を保持、設定する
  const [inputIsProductHas, setInputIsProductHas] = useState();
  // 備考情報を保持、設定する
  const [inputDescription, setInputDescription] = useState();

  // ラジオボタンのデフォルト設定（現在は”NAI”に設定されている）
  const initialOptionId = '1';

  const onPressHandler = async () => {
    // 保存ボタンの押下でドキュメントを作成
    const addedDoc = await addDoc(collection(db, cardDocInfo), {
      cardId: '',
      cardTitle: inputProductText,
      background: {
        // icon: 0 image: 1
        type: '1',
        data: '',
      },
      // ストック状況 何も選ばれていない（デフォルト設定）の場合は、undefinedがかえされるので、ラジオボタンの変更イベントをデフォルトで設定する
      isProductHas: inputIsProductHas ?? radioChangeHandler(initialOptionId),
      category: 'none',
      option: {
        // 何も入力されていない場合は、空文字を設定
        description: inputDescription ?? '',
        buyingLocations: [
          'none',
        ],
        isPrivate: false,
        tags: [
          'none',
        ],
      },
    });

    // firebaseによって採番されたカードIDをドキュメント内の情報として改めて保持する。ここを設定しておくことで、ドキュメント操作が何かと楽
    updateDoc(doc(db, cardDocInfo, addedDoc.id), {
      cardId: addedDoc.id,
    });

    // 保存後、自動でメイン画面へ遷移
    navigation.goBack();
  };

  // ラジオボタンの変更イベント
  const radioChangeHandler = (choicedOption) => {
    // 選択されたオプションIDによって、ストック情報を変更している
    setInputIsProductHas(choicedOption === '0');
    // onPressHandler内でラジオボタンが何も選択されなかった際に強制的にデフォルト設定をfirebaseに登録するために返却
    return choicedOption === '0';
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View
          style={styles.contentRow}
        >
          <Title
            title="品目"
          />
          <Input
            inputValue={inputProductText}
            inputValueSet={setInputProductText}
          />
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
              initialOptionId={initialOptionId}
              onChange={radioChangeHandler}
            />
          </View>
        </View>
        <DesignRadioButton
          choicedDesign={choicedDesign}
          setChoicedDesign={setChoicedDesign}
        />
        <View
          style={styles.contentRow}
        >
          <ExtentionSeparator
            isAreaSpreaded={isAreaSpreaded}
            setIsAreaSpreaded={setIsAreaSpreaded}
            maxHeight={200}
          >
            <View>
              <Title
                title="備考"
              />
              <Input
                multiline
                inputValue={inputDescription}
                inputValueSet={setInputDescription}
              />
            </View>
          </ExtentionSeparator>
        </View>
        <View
          style={
            [
              styles.contentRow,
              { alignItems: 'center' },
            ]
          }
        >
          <Button
            buttonText="保存"
            onPress={onPressHandler}
          />
        </View>
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
  contentRow: {
    marginVertical: 20,
    width: '100%',
  },
});
