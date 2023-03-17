import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SettingScreen from '../screens/SettingScreen';

const Stack = createNativeStackNavigator();

function SettingTabStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Setting"
        component={SettingScreen}
        options={{
          header: () => null,
        }}
      />
    </Stack.Navigator>
  );
}

export default SettingTabStack;
