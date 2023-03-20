import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Context from '../context/context';
import FlatButton from '../components/unit/FlatButton';
import {useTranslation} from 'react-i18next';

const SettingScreen = ({navigation}) => {
  const ctx = useContext(Context);
  const {t, i18n} = useTranslation();
  return (
    <View>
      <Text>Setting Screen</Text>
      <Text>Language</Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <FlatButton
          title={'English'}
          onPress={() => {
            i18n.changeLanguage('en');
          }}
          type={i18n.language == 'en' ? 'primaryBtn' : 'outlineBtn'}
        />
        <FlatButton
          title={'German'}
          onPress={() => {
            i18n.changeLanguage('de');
          }}
          type={i18n.language == 'de' ? 'primaryBtn' : 'outlineBtn'}
        />
      </View>
      <FlatButton
        title={'Log out'}
        onPress={() => ctx.signOut()}
        type="secondaryBtn"
      />
    </View>
  );
};
export default SettingScreen;
