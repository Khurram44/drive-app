import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AuthStackParamList } from "../navigation/AppNavigator";
type Authtype = StackNavigationProp<AuthStackParamList, "HomeScreen">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from "../config/Colors";
import Images from "../assets/Images";
import fonts from "../constants/fonts";

const SocialLogin :FC =() => {
    return(
        <View style={{flexDirection:'row',justifyContent:'space-around',padding:wp('8%')}}>
           <TouchableOpacity>
            <View style={[styles.back,styles.elevation]}>
                <Image source={Images.Mail}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>

            <View style={[styles.back,styles.elevation]}>
                <Image source={Images.Fb}/>
            </View>
            </TouchableOpacity>
            <TouchableOpacity>

             <View style={[styles.back,styles.elevation]}>
                <Image source={Images.Apple}/>
            </View>
            </TouchableOpacity>
        </View>
    )
}
export default SocialLogin;
const styles =StyleSheet.create({
    back:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        width:wp('16%'),
        height:hp('8%')
    },
    elevation: {
        elevation: 1,
        shadowColor: '#F4F4F4',
    },

})