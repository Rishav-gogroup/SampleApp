import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import InputField from '../components/unit/Input';
import FlatButton from '../components/unit/FlatButton';

function SignupScreen({navigation}) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {};

  return (
    <ScrollView>
      <InputField
        label={'First Name'}
        type="text"
        onChange={setFirstName}
        // error={error['email']}
        // errorText={errorText['email']}
        // placeholder="Enter Username/Email"
      />
      <InputField
        label={'Last Name'}
        type="text"
        onChange={setLastName}
        // error={error['email']}
        // errorText={errorText['email']}
        // placeholder="Enter Username/Email"
      />
      <InputField
        label={'Email'}
        type="email"
        onChange={setLastName}
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
      <InputField
        label={'Confirm Password'}
        type="password"
        onChange={setConfirmPassword}
        // error={error['email']}
        // errorText={errorText['email']}
        // placeholder="Enter Username/Email"
      />
      <FlatButton
        title={'Sign Up'}
        onPress={handleSignup}
        type="secondaryBtn"
      />
    </ScrollView>
  );
}

export default SignupScreen;
