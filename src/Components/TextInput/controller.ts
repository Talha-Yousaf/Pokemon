import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteParams, Routes } from '../../Routes/constants';

const TextInputController = () => {
    const navigation = useNavigation<StackNavigationProp<RouteParams>>();
  // const {theme} = AppLoadingController(); 
  // return {
  //   theme
  // }
}
export default TextInputController;