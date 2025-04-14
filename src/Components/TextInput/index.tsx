import React from 'react';
import { View, Text, TextInput, StyleProp, ViewStyle } from 'react-native';
import styles from './styles';
import AppColors from '../../Utills/AppColors';
interface TextInputComponentProps {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
  LeftIcon?: React.JSX.Element;
  RightIcon?: React.JSX.Element;
  containerStyle?: StyleProp<ViewStyle>;
  textInputStyle?: StyleProp<ViewStyle>;
}
const TextInputComponent = ({containerStyle,textInputStyle, value, placeholder, LeftIcon, RightIcon, onChangeText}: TextInputComponentProps): React.JSX.Element => {
  return (
    <View style={[styles.container,containerStyle]}>
      {LeftIcon &&
        <View>{LeftIcon}</View>
      }
      <TextInput
        style={[styles.textInput,textInputStyle]}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={AppColors.MediumGrey}
        onChangeText={onChangeText}
      />
      {RightIcon && <View>{RightIcon}</View>}
    </View>
  );
};

export default TextInputComponent