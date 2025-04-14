import { StyleSheet } from 'react-native';
import AppColors from '../../Utills/AppColors';
import { width,height } from '../../Utills/Dimensions';
import FontFamily from '../../Utills/FontFamily';
const styles = StyleSheet.create({
container: {
},
pokeballIcon:{
  width:width(7),
  height:height(3.5),
  resizeMode:"contain",
},
headingRow:{
  width: width(90),
  flexDirection: 'row',
  alignItems:"center",
  gap:width(5),
},
PokedexText:{
  fontSize:width(7),
  fontFamily:FontFamily.PoppinsBold,
  color:AppColors.White,
},

});

export default styles;