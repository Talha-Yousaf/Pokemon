import { StyleSheet } from 'react-native';
import { width, height, totalSize } from '../../Utills/Dimensions';
import AppColors from '../../Utills/AppColors';
import FontFamily from '../../Utills/FontFamily';
const styles = StyleSheet.create({
  container: {
    width: width(46),
    height: height(20),
    borderRadius: width(2),
    backgroundColor: AppColors.White,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 6,

    // Android shadow
    elevation: 10,
    // boxShadow: "3px 3px 3px rgba(0, 0, 0, 0.18)",

  },
  idText: {
    fontSize: totalSize(1.5),
    marginRight: width(3),
    marginTop: "6%",
    fontFamily: FontFamily.PoppinsRegular,
    color: AppColors.MediumGrey,
    alignSelf: 'flex-end',
  },
  background: {
    position: 'absolute',
    width: width(46),
    borderTopLeftRadius: width(2),
    borderTopRightRadius: width(2),
    height: "40%",
    bottom: 0,
    backgroundColor: AppColors.OffWhite,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyles:{
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: "2%",
    zIndex: 1,
  },
  nameText:{
    fontSize: totalSize(1.3),
    fontFamily: FontFamily.PoppinsMedium,
    color: AppColors.Black10,
    textTransform: 'capitalize',
    marginTop: "25%",
    alignSelf: 'center',
  },
});

export default styles;