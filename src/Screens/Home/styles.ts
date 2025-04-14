import { StyleSheet,Platform } from 'react-native';
import AppColors from '../../Utills/AppColors';
import { height, width } from '../../Utills/Dimensions';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: AppColors.Primary,
  },
  container: {
    width: width(90),
    alignSelf: 'center',
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: height(1),
  },
  textInputContainerStyles: {
    borderRadius: width(4),
    width: width(75),
    backgroundColor: AppColors.White,
  },
  sortButton: {
    width: width(10),
    height: width(10),
    borderRadius: width(10) / 2,
    backgroundColor: AppColors.White,
    justifyContent: "center",
    alignItems: "center",
  },
  alphaIcon: {
    width: width(3.5), 
    height: width(3.5),
    resizeMode: "contain",
  },
  tagIcon:{
    width: width(6), 
    height: width(6) 
  },
  listContainer: {
    width: Platform.OS==="ios"? width(98): width(98),
    height: Platform.OS=="ios"? "84.9%":"85.5%",
    marginTop: height(2),
    borderRadius: Platform.OS==="ios"? width(2):width(2),
    alignSelf: 'center',
    backgroundColor:AppColors.White,
    marginVertical:"4%",
    marginHorizontal:"10%",
    zIndex: 1,
  },
  listStyles:{
    width: Platform.OS==="ios"? width(98): width(98),
    height: Platform.OS=="ios"? "83.9%":"85.5%",
    marginTop: height(2),
    borderRadius: Platform.OS==="ios"? width(5):width(2),
    borderTopLeftRadius: width(2),
    borderTopRightRadius: width(2),
    alignSelf: 'center',
    backgroundColor:AppColors.White,
    marginHorizontal:width(2),
    // marginTop: height(2),
  },
  listHeader:{
    marginTop: height(1),
  },
  columnWrapperStyle:{
    justifyContent: 'space-between',
    marginBottom: width(2),
    marginHorizontal: width(2),
  },



  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  sprite: { width: 50, height: 50, marginRight: 10 },
  itemText: { fontSize: 18 },
});

export default styles;