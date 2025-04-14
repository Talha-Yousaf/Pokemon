import { StyleSheet,Platform } from 'react-native';
import AppColors from '../../Utills/AppColors';
import FontFamily from '../../Utills/FontFamily';
import { height, totalSize, width } from '../../Utills/Dimensions';
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width(2),
    borderWidth:StyleSheet.hairlineWidth,
    borderColor: AppColors.LightGrey,
    paddingHorizontal:width(2),
    // paddingVertical: Platform.OS=="ios"? height(1):0,
  },
  textInput:{
    width:"75%",
    color: AppColors.MediumGrey,
    fontFamily: FontFamily.PoppinsRegular,
    marginTop: Platform.OS=="android"? height(1):0,
    height:Platform.OS==="android"? height(5):height(5),
    
  },
});

export default styles;