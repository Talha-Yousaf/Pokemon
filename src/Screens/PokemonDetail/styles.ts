import { Platform, StyleSheet } from 'react-native';
import AppColors from '../../Utills/AppColors';
import { height, totalSize, width } from '../../Utills/Dimensions';
import FontFamily from '../../Utills/FontFamily';


const styles = StyleSheet.create({
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.Primary
  },
  container: {
    width: width(90),
    alignSelf: "center",
  },
  backgroungImage: {
    opacity: 0.1,
    width: width(65),
    height: height(30),
    // resizeMode: "contain",
    position: "absolute",
    right: -width(2),
    top: -height(1),
  },
  characterImageContainer: {
    width: width(80),
    marginTop: height(2),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 1,
  },
  characterImage: {
    alignSelf:"center",
  },

  characterDetailsContainer: {
    width: width(95),
    marginTop: -height(8),
    borderRadius: width(2),
    height: Platform.OS=="ios"?"74%":"76%",
    backgroundColor: AppColors.White,
    alignSelf: "center",
  },
  typesContainer: {
    paddingHorizontal: width(2),
    marginTop: "20%",
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: width(2),
    flexWrap: "wrap",
  },
  types: {
    paddingHorizontal: width(5),
    paddingVertical: height(1),
    borderRadius: width(6),
    justifyContent: "center",
    alignItems: "center",
  },
  typeText: {
    fontSize: totalSize(1.3),
    color: AppColors.White,
    fontFamily: FontFamily.PoppinsBold
  },
  aboutText: {
    fontSize: totalSize(2),
    fontFamily: FontFamily.PoppinsBold,
    marginTop: height(2),
    alignSelf: "center",
  },
  scaleContainer: {
    width: width(80),
    marginTop: height(3),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
  },

  verticalLine: {
    height: "100%",
    borderWidth: StyleSheet.hairlineWidth + 0.5,
    borderColor: AppColors.LightGray10,
  },
  abilityText: {
    fontSize: totalSize(1.3),
    color: AppColors.Black10,
    fontFamily: FontFamily.PoppinsRegular,
    lineHeight:height(2),
    textAlign:"center",
  },
  moveText: {
    fontSize: totalSize(1.3),
    color: AppColors.MediumGrey,
    fontFamily: FontFamily.PoppinsRegular,
    textAlign: "center",
    marginTop:height(1.5),
  },
  flavorText:{
    fontSize:totalSize(1.3),
    color:AppColors.Black10,
    lineHeight:height(2.5),
    fontFamily:FontFamily.PoppinsItalic,
    width:width(95),
    marginTop:height(4),
    paddingHorizontal:width(4),
  },
  statsText:{
    marginTop:height(4),
    textAlign:"center",
  },
});

export default styles;