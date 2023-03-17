import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import ErrorIcon from './Icon/ErrorIcon';
import Eye from './Icon/Eye';
import EyeOff from './Icon/EyeOff';

/**
 * A custom input field which we can use all over app to stay consistent with proper error messages
 * @author Rishav Pathania
 * @param {*} props {label, type, onChange, value, keyboardType, placeholder, secureTextEntry, style, error, errorText, maxLength}
 * all the props that will go a normal input except label, error, errorText
 * - label is to show what input field is for.
 * - error is boolean to show error is occurred
 * - errorText is text value to show what exactly error is occurred
 * @returns {Object} a react native custom  input.
 */

export default function InputField({
  label,
  type,
  onChange,
  value,
  keyboardType,
  placeholder,
  secureTextEntry,
  style,
  error,
  errorText,
  maxLength,
}) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <View>
        <TextInput
          style={[styles.input, error && styles.errorInput, style]}
          type={type}
          onChangeText={onChange}
          placeholder={placeholder}
          value={value}
          keyboardType={keyboardType}
          secureTextEntry={
            label.includes('Password') || label.includes('ConfirmPassword')
              ? !showPassword
              : secureTextEntry
          }
          maxLength={maxLength}
        />
        {(label.includes('Password') || label.includes('ConfirmPassword')) && (
          <TouchableOpacity
            style={[styles.eyeStyle]}
            onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? <Eye /> : <EyeOff />}
          </TouchableOpacity>
        )}
      </View>
      {error && (
        <View style={styles.errorContainer}>
          <ErrorIcon />
          <Text style={styles.errorText}>{errorText}</Text>
        </View>
      )}
    </View>
  );
}
const styles = ScaledSheet.create({
  label: {
    fontSize: '16@s',
    lineHeight: '24@s',
  },
  input: {
    height: '40@vs',
    marginTop: '7@vs',
    marginBottom: '7@vs',
    // width: '150@s',
    borderWidth: 1,
    borderRadius: 2,
    padding: '10@ms',
  },
  eyeStyle: {
    position: 'absolute',
    right: 15,
    bottom: 25,
  },
  FingerprintStyle: {
    position: 'absolute',
    right: 10,
    bottom: 25,
  },
  errorInput: {
    borderColor: '#C90039',
  },
  errorContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(201, 0, 57, 0.1)',
    height: '35@vs',
    borderColor: '#C90039',
    borderLeftWidth: '2@s',
    paddingRight: '2@s',
    paddingLeft: '10@s',
    alignItems: 'center',
  },
  errorText: {
    flexWrap: 'wrap',
    marginLeft: '5@s',
    paddingRight: '5@s',
    color: '#C90039',
    fontSize: '12@s',
  },
});
