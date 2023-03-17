import React, {useEffect, useState} from 'react';
import EncryptedStorage from 'react-native-encrypted-storage';
import {NavigationContainer} from '@react-navigation/native';
import AuthStack from './src/navigation/AuthStack';
import BottomTab from './src/navigation/BottomTab';

function App() {
  const [userToken, setUserToken] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const getToken = async () => {
    const token = await EncryptedStorage.getItem('userToken');
    setUserToken(token);
    console.log('token', token);
  };

  useEffect(() => {
    getToken();
  }, []);

  return (
    <NavigationContainer>
      {userToken ? <BottomTab /> : <AuthStack />}
    </NavigationContainer>
  );
}

export default App;
