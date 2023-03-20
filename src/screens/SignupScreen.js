import React, {useState, useEffect} from 'react';
import {View, ScrollView} from 'react-native';
import InputField from '../components/unit/Input';
import FlatButton from '../components/unit/FlatButton';
import SignupValidation from '../helper/formValidator/SignupValidation';
import {useTranslation} from 'react-i18next';
import DropDownPicker from 'react-native-dropdown-picker';

function SignupScreen({navigation}) {
  const [formState, setFormState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState({});
  const [errorText, setErrorText] = useState({});
  const {t, i18n} = useTranslation();
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(i18n.language);
  const [items, setItems] = useState([
    {label: 'English', value: 'en'},
    {label: 'German', value: 'de'},
  ]);
  const handleOnChange = (e, id) => {
    setFormState(state => ({...state, [id]: e}));
    setError({...error, [id]: false});
  };

  const handleSignup = () => {
    const validation = SignupValidation(
      formState,
      setError,
      setErrorText,
      error,
      errorText,
    );
    if (validation) {
      //set all error to initial state
      setError({});
      // all validation is passed you can make a api call for sign up to BE and navigate to HomeScreen from here
      console.log('signed in successfull', formState);
    }
  };

  return (
    <ScrollView>
      <InputField
        label={'First Name'}
        type="text"
        onChange={e => handleOnChange(e, 'firstName')}
        error={error['firstName']}
        errorText={errorText['firstName']}
        placeholder="First Name"
      />
      <InputField
        label={'Last Name'}
        type="text"
        onChange={e => handleOnChange(e, 'lastName')}
        error={error['lastName']}
        errorText={errorText['lastName']}
        placeholder="Last Name"
      />
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
      />
      <InputField
        label={'Confirm Password'}
        type="password"
        onChange={e => handleOnChange(e, 'confirmPassword')}
        error={error['confirmPassword']}
        errorText={errorText['confirmPassword']}
      />
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
        style={{borderRadius: 2, marginBottom: 10}}
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
