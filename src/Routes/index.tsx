import React, { useEffect } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Routes} from "./constants";
import {AppRoutes} from "./appRoutes";
const RootStack = createStackNavigator();


export default function RootRoutes() {
  return (
    <RootStack.Navigator
      initialRouteName={Routes.APP_ROUTES}
      screenOptions={{ headerShown: false }}
    >
      <RootStack.Screen name={Routes.APP_ROUTES} component={AppRoutes} />
    </RootStack.Navigator>
  );
}