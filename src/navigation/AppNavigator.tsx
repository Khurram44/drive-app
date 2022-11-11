import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import SplashScreen from '../screens/SplashScreen';
import onBoardingScreen from '../screens/onBoardingScreen';
import LoginStack from './LoginStck';
import Register from '../screens/RegisterFlow/Register';





export type AuthStackParamList = {

    HomeScreen: undefined
    SplashScreen: undefined
    onBoardingScreen:undefined
    LoginStack:undefined
    Register:undefined

}


const { Navigator, Screen } = createStackNavigator<AuthStackParamList>();

const AppNavigator = () => (
    <Navigator screenOptions={{ headerShown: false ,}} >

        <Screen name='SplashScreen' component={SplashScreen} />      
        <Screen name='onBoardingScreen' component={onBoardingScreen} />  
        <Screen name='LoginStack' component={LoginStack} />  
        <Screen name='Register' component={Register} />  
                
        <Screen name='HomeScreen' component={HomeScreen} />  
                   


    </Navigator>
);
export default AppNavigator;
