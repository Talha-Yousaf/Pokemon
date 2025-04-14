import { StyleSheet } from "react-native";
import { width,height,totalSize } from "../../../../Utills/Dimensions";
import AppColors from "../../../../Utills/AppColors";
import FontFamily from "../../../../Utills/FontFamily";
const styles = StyleSheet.create({
    smallRow:{
        flexDirection:"row",
        alignItems:"center",
        gap:width(2),
      },  
      scaleIcon:{
        width:width(6),
        height:width(6),
      },
      scaleText:{
        fontSize:totalSize(1.3),
        color:AppColors.Black10,
        fontFamily:FontFamily.PoppinsRegular,
      },
      scaleUnitText:{
        fontSize:totalSize(1.3),
        color:AppColors.MediumGrey,
        fontFamily:FontFamily.PoppinsRegular,
        textAlign:"center",
        marginTop:height(3),
      },
});

export default styles;