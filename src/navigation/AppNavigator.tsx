import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';





export type AuthStackParamList = {

    HomeScreen: undefined
    SplashScreen: undefined

}


const { Navigator, Screen } = createStackNavigator<AuthStackParamList>();

const AppNavigator = () => (
    <Navigator screenOptions={{ headerShown: false }}>

        <Screen name='SplashScreen' component={SplashScreen} />

        <Screen name='HomeScreen' component={HomeScreen} />



    </Navigator>
);
export default AppNavigator;
