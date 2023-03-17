import React, {useEffect, useState, useContext} from 'react';
import {View} from 'react-native';
import EncryptedStorage from 'react-native-encrypted-storage';
import {ScaledSheet} from 'react-native-size-matters';
import InputField from '../components/unit/Input';
import FlatButton from '../components/unit/FlatButton';
import LoginValidation from '../helper/formValidator/LoginValidation';
import Context from '../context/context';

function LoginScreen({navigation}) {
  const ctx = useContext(Context);
  const [formState, setFormState] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState({});
  const [errorText, setErrorText] = useState({});

  const handleOnChange = (e, id) => {
    setFormState(state => ({...state, [id]: e}));
    setError({...error, [id]: false});
  };

  const handleLogin = () => {
    const validation = LoginValidation(
      formState,
      setError,
      setErrorText,
      error,
      errorText,
    );
    if (validation) {
      //set all error to initial state
      setError({});
      // all validation is passed you can make a api call for login to BE and navigate to HomeScreen from here
      const res = 'eeettt12430294';
      EncryptedStorage.setItem('userToken', res);
      ctx.signIn(res);
      console.log('signed in successfull', formState);
    }
  };

  return (
    <View>
      <InputField
        label={'Email'}
        type="email"
        onChange={e => handleOnChange(e, 'email')}
        keyboardType="email-address"
        error={error['email']}
        errorText={errorText['email']}
        placeholder="Enter Username/Email"
      />
      <InputField
        label={'Password'}
        type="password"
        onChange={e => handleOnChange(e, 'password')}
        error={error['password']}
        errorText={errorText['password']}
        placeholder="Enter Username/Email"
      />
      <FlatButton
        title={'Log In'}
        style={styles.loginBtn}
        onPress={handleLogin}
        type="primaryBtn"
      />
      <FlatButton
        title={'Sign Up'}
        onPress={() => navigation.navigate('Signup')}
        type="secondaryBtn"
      />
    </View>
  );
}

export default LoginScreen;

const styles = ScaledSheet.create({
  loginBtn: {
    marginVertical: '8@vs',
    height: '44@vs',
  },
});
