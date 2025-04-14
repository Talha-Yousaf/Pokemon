import React from 'react'
import { View,ActivityIndicator } from 'react-native'
import styles from './styles';
import AppLoadingController from './AppLoading.controller';

// The Purpose of this screen to setup the initial state of the app
// i.e Checking wether the user have loged in.

const AppLoading: React.FC = () => {

  const {} = AppLoadingController(); 
  return (
    <View >
      <ActivityIndicator size={"large"} color={"red"}/>
    </View>
  )
}

export default AppLoading