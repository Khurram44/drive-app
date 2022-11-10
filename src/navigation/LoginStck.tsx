import React, { FC } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "../screens/LoginFlow/LoginScreen";
import EmailLogin from "../screens/LoginFlow/EmailLogin";
import ForgotPassword from "../screens/LoginFlow/ForgotPassword";
import ResetPassword from "../screens/LoginFlow/ResetPassword";
import PasswordSuccess from "../screens/LoginFlow/PasswordChanged";
import VerifyLogin from "../screens/LoginFlow/VerifyLogin";


export type AuthStackParamList = {
    Login: undefined;
    EmailLogin: undefined;
    ForgotPassword:undefined;
    ResetPassword:undefined;
    PasswordSuccess:undefined;
    VerifyLogin:undefined


}
const { Navigator, Screen } = createStackNavigator<AuthStackParamList>();


const LoginStack: FC = () => {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >

            <Screen name='Login' component={Login} />
            <Screen name='EmailLogin' component={EmailLogin} />   
            <Screen name='ForgotPassword' component={ForgotPassword} />
            <Screen name='ResetPassword' component={ResetPassword} />
            <Screen name='PasswordSuccess' component={PasswordSuccess} />
            <Screen name='VerifyLogin' component={VerifyLogin} />   













        </Navigator>
    );
};

export default LoginStack;
