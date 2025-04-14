import {StyleSheet} from "react-native";
import { totalSize, width } from "../../Utills/Dimensions";
import AppColors from "../../Utills/AppColors";
import FontFamily from "../../Utills/FontFamily";


const styles = StyleSheet.create({
    container:{
        width:width(90),
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        paddingHorizontal:width(4),
    },
    nameAndBackBtnController:{
        flexDirection:"row",
        alignItems:"center",
        gap:width(3),
    },
    nameText:{
        fontSize:totalSize(2.5),
        color:AppColors.White,
        fontFamily:FontFamily.PoppinsBold,
    },
    idText:{
        fontSize:totalSize(1.5),
        color:AppColors.White,
        fontFamily:FontFamily.PoppinsBold,
    }
});

export default styles;