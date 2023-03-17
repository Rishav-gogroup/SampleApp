import React, {useContext} from 'react';
import {Text, View} from 'react-native';
import Context from '../context/context';
import FlatButton from '../components/unit/FlatButton';

const SettingScreen = ({navigation}) => {
  const ctx = useContext(Context);
  return (
    <View>
      <Text>Setting Screen</Text>
      <FlatButton
        title={'Log out'}
        onPress={() => ctx.signOut()}
        type="secondaryBtn"
      />
    </View>
  );
};
export default SettingScreen;
