import React, {useContext, useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import Context from '../context/context';
import FlatButton from '../components/unit/FlatButton';
import {useTranslation} from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';
import {ScaledSheet} from 'react-native-size-matters';

const SettingScreen = ({navigation}) => {
  const ctx = useContext(Context);
  const {t, i18n} = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(i18n.language);
  const [items, setItems] = useState([
    {label: 'English', value: 'en'},
    {label: 'German', value: 'de'},
  ]);

  return (
    <View>
      <Text>{t('Setting:title')}</Text>
      <Text style={styles.languageLabel}>{t('Setting:languageTitle')}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onSelectItem={item => {
          i18n.changeLanguage(item.value);
        }}
      />
      <FlatButton
        title={t('Setting:logoutBtn')}
        onPress={() => ctx.signOut()}
        type="secondaryBtn"
        style={styles.logoutBtn}
      />
    </View>
  );
};
export default SettingScreen;

const styles = ScaledSheet.create({
  languageLabel: {
    fontSize: '18@s',
    paddingTop: '5@s',
    paddingBottom: '5@s',
  },

  logoutBtn: {
    marginTop: '5@vs',
  },
});
