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
import Images from "../assets/Images";

const SocialLogin :FC =() => {
    const navigation = useNavigation<Authtype>();

    return(
        <View style={{flexDirection:'row',justifyContent:'space-around',padding:wp('8%'),marginBottom:hp('-8%')}}>
           <TouchableOpacity onPress={() => navigation.navigate('EmailLogin')}>
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
                <Image source={Images.Apple} style={{resizeMode:'contain'}}/>
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
        height:hp('7.5%')
    },
    elevation: {
        elevation: 1,
        shadowColor: '#F4F4F4',
    },

})