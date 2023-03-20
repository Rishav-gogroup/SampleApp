import React, {useEffect, useState, useContext} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import BottomTab from './src/navigation/BottomTab';
import Context from './src/context/context';
import {useTranslation} from 'react-i18next';
import './src/language/IMLocalize';
function App() {
  const ctx = useContext(Context);
  const {t, i18n} = useTranslation();
  const getToken = async () => {
    const token = await EncryptedStorage.getItem('userToken');
    token && ctx.restoreToken(token);
    console.log('token', ctx.userToken, token);
  };

  useEffect(() => {
    i18n.changeLanguage('de');
    getToken();
  }, []);

  return (
    <NavigationContainer>
      {ctx.userToken ? <BottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
