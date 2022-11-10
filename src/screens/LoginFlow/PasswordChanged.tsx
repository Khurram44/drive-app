import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AuthStackParamList } from "../../navigation/AppNavigator";
type Authtype = StackNavigationProp<AuthStackParamList, "HomeScreen">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import Images from "../../assets/Images";
import LinearGradient from 'react-native-linear-gradient';
import fonts from "../../constants/fonts";
import { colors } from "../../config/Colors";
import Button from "../../components/Button";

const PasswordSuccess :FC =() => {
    const navigation = useNavigation<Authtype>();

    return(
        <LinearGradient colors={['#e5d5b8', '#d4e4f0']} start={{ x: -1, y: 0 }}
        end={{ x: 1, y: 0 }} locations={[0.0, 1.0]} style={styles.container}>
            <Image source={Images.Check}/>
            <Text style={styles.texta}>Password Change {'\n'} Successfully!</Text>
            <View style={{marginTop:hp('3%')}}>
                <Button title="Back to login" onPress={() => navigation.navigate('Login')}/>
            </View>
            </LinearGradient>
    )
}
export default PasswordSuccess;
const styles =StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    texta:{
        fontSize:28,
        fontFamily:fonts.POPPINS_SEMI_BOLD,
        alignSelf:'center',
        textAlign:'center',
        lineHeight:hp('5%'),
        letterSpacing:0.5,
        marginTop:hp('3%'),
        color:colors.black

    }
})