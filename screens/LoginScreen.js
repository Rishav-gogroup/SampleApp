import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import InputField from '../components/unit/Input';
import FlatButton from '../components/unit/FlatButton';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Home');
  };

  return (
    <View>
      <InputField
        label={'Email'}
        type="email"
        onChange={setEmail}
        keyboardType="email-address"
        // error={error['email']}
        // errorText={errorText['email']}
        // placeholder="Enter Username/Email"
      />
      <InputField
        label={'Password'}
        type="password"
        onChange={setPassword}
        // error={error['email']}
        // errorText={errorText['email']}
        // placeholder="Enter Username/Email"
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
