import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import Routes from './Routes/index';
// import FlashMessage from 'react-native-flash-message';
import { LogBox, useColorScheme,Platform } from 'react-native';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { PaperProvider } from 'react-native-paper';

LogBox.ignoreAllLogs(true);

export default function App() {
  const theme = useColorScheme();

  useEffect(() => {
  
  }, []);

  return (
    //   <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer theme={theme === 'dark' ? DarkTheme : DefaultTheme}>
          <GestureHandlerRootView>
            {/* <PaperProvider> */}
              <Routes />
            {/* </PaperProvider> */}
          </GestureHandlerRootView>
        {/* <FlashMessage position="bottom" icon="auto" /> */}
        </NavigationContainer>
  );
}
