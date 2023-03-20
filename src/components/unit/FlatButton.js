import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

const STYLE = [
  'primaryBtn',
  'secondaryBtn',
  'outlineBtn',
  'disabledBtn',
  'tryBtn',
];

export default function FlatButton({title, onPress, type, style, disabled}) {
  const buttonStyle = STYLE.includes(type) ? type : STYLE[0];
  return (
    <TouchableOpacity onPress={!disabled && onPress}>
      <View style={[styles.button, styles[buttonStyle], style]}>
        <Text
          style={[
            styles.buttonText,
            type.includes('outline') && styles.darkText,
          ]}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = ScaledSheet.create({
  button: {
    // width: '150@s',
    borderRadius: 2,
    padding: '11@ms', // moderateScale
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
    fontSize: '16@s',
    color: '#FFFFFF',
  },
  darkText: {
    color: '#2F2F2F',
  },
  primaryBtn: {
    backgroundColor: '#599522',
    borderWidth: 2,
    borderColor: '#599522',
  },
  secondaryBtn: {
    backgroundColor: '#2F2F2F',
  },
  tryBtn: {
    backgroundColor: '#C90039',
  },
  outlineBtn: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#2F2F2F',
  },
  disabledBtn: {
    backgroundColor: '#96989A',
  },
});
