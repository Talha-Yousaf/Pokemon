import React from 'react'
import { View, Text,Image } from 'react-native'
import styles from './styles';
import WeightIcon from "../../../../assets/Images/weight.png";
import HeightIcon from "../../../../assets/Images/height.png";

interface ScaleProps{
  scaleValue:number ;
  label:string;
  unit:string;
  isHeight?:boolean;
}
const Scale = ({scaleValue,label,unit,isHeight}:ScaleProps):React.JSX.Element => {
  return (
    <View>
      {/* Weight */}
      <View style={styles.smallRow}>
        <Image source={isHeight? HeightIcon: WeightIcon} style={styles.scaleIcon} />
        <Text style={styles.scaleText}>{scaleValue} {unit}</Text>
      </View>
      <Text style={styles.scaleUnitText}>{label}</Text>
    </View>
  )
}

export default Scale