import React, {useEffect, useState, useContext} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import BottomTab from './src/navigation/BottomTab';
import Context from './src/context/context';
function App() {
  const ctx = useContext(Context);

  const getToken = async () => {
    const token = await EncryptedStorage.getItem('userToken');
    token && ctx.restoreToken(token);
    console.log('token', ctx.userToken, token);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      {ctx.userToken ? <BottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
