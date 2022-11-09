import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import onBoardingScreen from '../screens/onBoardingScreen';
import Login from '../screens/LoginScreen';





export type AuthStackParamList = {

    HomeScreen: undefined
    SplashScreen: undefined
    onBoardingScreen:undefined
    Login:undefined

}


const { Navigator, Screen } = createStackNavigator<AuthStackParamList>();

const AppNavigator = () => (
    <Navigator screenOptions={{ headerShown: false }}>

        <Screen name='SplashScreen' component={SplashScreen} />
        <Screen name='onBoardingScreen' component={onBoardingScreen} />
        <Screen name='Login' component={Login} />



        <Screen name='HomeScreen' component={HomeScreen} />



    </Navigator>
);
export default AppNavigator;
