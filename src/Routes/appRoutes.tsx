import React, {useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from './constants';
import AppLoading from '../Screens/AppLoading';
import Home from "../Screens/Home";
import Detail from "../Screens/PokemonDetail";


const AppStack = createStackNavigator();

export const AppRoutes: React.FC = () => {
  useEffect(() => {
    const init = async () => {};

    init().finally(async () => {
      // await BootSplash.hide({fade: true});
    });
  }, []);
  return (
    <AppStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={Routes.APPLOADING}>
      <AppStack.Screen name={Routes.APPLOADING} component={AppLoading} />
      <AppStack.Screen name={Routes.HOME} component={Home} />
      <AppStack.Screen name={Routes.DETAIL} component={Detail} />
    </AppStack.Navigator>
  );
};
