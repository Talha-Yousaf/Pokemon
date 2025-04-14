import { useEffect } from 'react';
// For Navigation
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteParams, Routes } from '../../Routes/constants';
import { resetRoutes } from '../../Helper';

const AppLoadingController = () => {
  const navigation = useNavigation<StackNavigationProp<RouteParams>>();
  useEffect(() => {
    onLaunch();
  }, []);
  const onLaunch = () => {
  // resetting the Routes to Home Screen, So that hardware press cannot take the user back to this screen
   resetRoutes(navigation,Routes.HOME,undefined);
  };
  return {
  };
};

export default AppLoadingController;
