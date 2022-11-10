import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView } from "react-native";
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
import SimpleHeader from "../../components/SimpleHeader";
import { Desc, Heading, Subheading } from "../../Styles/SignIn.style";
import VerifyLoginOTP from "../../components/VerifyLoginOTP";
import Button from "../../components/Button";
import fonts from "../../constants/fonts";
import { colors } from "../../config/Colors";


const VerifyLogin: FC = () => {
    const navigation = useNavigation<Authtype>();

    return (
        <LinearGradient colors={['#e5d5b8', '#d4e4f0']} start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }} locations={[0.0, 1.0]} style={styles.container}>
            <SimpleHeader onPress={() => navigation.goBack()} />
            <ScrollView>    
                <Heading>Verify Account</Heading>
                <View style={{ marginHorizontal: wp('5%') }}>   
                    <Desc>A six digit code has been sent your email address.</Desc>
                </View>       
                <View style={{ marginTop: hp('2%') }}>
                    <Subheading>Submit OTP</Subheading>   
                    <VerifyLoginOTP />   
                </View>
                <View style={{ marginTop: hp('8%') }}>
                    <Button title="verify" />   
                </View>    
                <View style={{ flexDirection: 'row',alignSelf:'center',marginTop:hp('3%') }}>
                    <Text style={styles.desc}>Didn’t receive code?</Text>      

                    <TouchableOpacity >          
                        <Text style={styles.reg}>Request Again</Text>     
                    </TouchableOpacity>          
                </View>

            </ScrollView>
        </LinearGradient>
    )
}
export default VerifyLogin;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    desc: {
        color:colors.lightColor,
        fontSize: 14,
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center'


    },
    reg: {
        color:colors.green,
        fontSize: 14,
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center',
        marginHorizontal: wp('1%')
    }
})