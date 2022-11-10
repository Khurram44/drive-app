import React, {FC, useState, useEffect, useCallback, useRef} from 'react';
import {View, ActivityIndicator, StatusBar, Appearance} from 'react-native';
import AppNavigator from './src/navigation/AppNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {colors} from './src/config/Colors';
import {LogBox} from 'react-native';
import {NativeBaseProvider} from 'native-base';



const App : FC = () => {
  
   

  return (
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
  );
};
export default App;


