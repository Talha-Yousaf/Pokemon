import { StyleSheet } from "react-native";
import { width,height,totalSize } from "../../../../Utills/Dimensions";
import AppColors from "../../../../Utills/AppColors";
import FontFamily from "../../../../Utills/FontFamily";
const styles = StyleSheet.create({
   container:{
    width:width(85),
    alignSelf:"center",
    gap:height(1),
    marginTop:height(3),
    // backgroundColor:"red",
   },
   statLabelText:{
    fontSize:totalSize(1.3),
    fontFamily:FontFamily.PoppinsExtraBold,
    width:width(10),
   },
   statRow:{
    flexDirection:"row",
    alignItems:"center",
    gap:width(4),
   },
   progressRow:{
    flexDirection:"row",
    alignItems:"center",
    gap:width(2),
   },
   barBackground: {
    height: 10,
    width: '81%',
    borderRadius: 5,
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
    borderRadius: 6,
  },
  line:{
    height: "100%",
    borderWidth: StyleSheet.hairlineWidth + 0.5,
    borderColor: AppColors.LightGray10,
    position:"absolute",
    left:width(10),
  },
});

export default styles;