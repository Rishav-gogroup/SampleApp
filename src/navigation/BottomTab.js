import React, {useState} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeTabStack from './HomeTabStack';
import SettingTabStack from './SettingTabStack';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTabStack} />
      <Tab.Screen name="Setting" component={SettingTabStack} />
    </Tab.Navigator>
  );
}

export default BottomTab;
