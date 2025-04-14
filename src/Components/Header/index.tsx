import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Icon,{Icons} from '../../Utills/Icons/Icons';
import styles from './styles';
import AppColors from '../../Utills/AppColors';
import { width } from '../../Utills/Dimensions';

interface HeaderProps {
  id:string;
  name:string;
  onBackPress: ()=> void;
}
const Header = ({id,name,onBackPress}:HeaderProps):React.JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.nameAndBackBtnController}>
        <Pressable onPress={onBackPress}>
        <Icon type={Icons.Ionicons} name='arrow-back' color={AppColors.White} size={width(8)}/>
        </Pressable>
        <Text style={styles.nameText}>{name.charAt(0).toUpperCase() +name.slice(1)}</Text>
      </View>
      <Text style={styles.idText}>#{id.toString().padStart(3, '0')}</Text>
    </View>
  )
}

export default Header