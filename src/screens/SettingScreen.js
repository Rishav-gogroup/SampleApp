import React from 'react';
import {Text, View} from 'react-native';
import FlatButton from '../components/unit/FlatButton';

const SettingScreen = ({navigation}) => {
  return (
    <View>
      <Text>Setting Screen</Text>
      <FlatButton
        title={'Log out'}
        onPress={() => navigation.navigate('Login')}
        type="secondaryBtn"
      />
    </View>
  );
};
export default SettingScreen;
