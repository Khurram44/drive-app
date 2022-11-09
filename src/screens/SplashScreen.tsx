import React, { FC, useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text, Image } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from 'react-native-vector-icons/AntDesign'
import fonts from "../constants/fonts";
import LinearGradient from 'react-native-linear-gradient';
import Images from "../assets/Images";
import { colors } from "../config/Colors";
import { AuthStackParamList } from "../navigation/AppNavigator";
type Authtype = StackNavigationProp<AuthStackParamList, "SplashScreen">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';


const SplashScreen: FC = () => {
    const navigation = useNavigation<Authtype>();

    useEffect(() => {
        setTimeout(() => {
          navigation.navigate('onBoardingScreen');
        }, 3500);
      }, []);
    return (
        <LinearGradient colors={['#e5d5b8', '#d4e4f0']} start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }} locations={[0.0, 1.0]} style={styles.container}>
                <View>
                    <Image source={Images.Logo} style={styles.logo}/>
                    <Text style={styles.texta}>Welcome to {'\n'}<Text style={styles.textb}>humble ride</Text></Text>
                </View>
                <View style={{bottom:0,position:'absolute'}}>
                    <Image source={Images.Bottom} style={{resizeMode:'cover'}}/>
                </View>

        </LinearGradient>
    )
}
export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo:{
        alignSelf:'center',
        marginTop:hp('8%'),
        width:wp('40%'),
        height:hp('20%')
    },
    texta:{
        textAlign:'center',
        marginTop:hp('2%'),
        fontSize:28,
        color:colors.black,
        fontFamily:fonts.POPPINS_SEMI_BOLD
    },
    textb:{
        textTransform:'uppercase',
        color:colors.darkgreen
    }
})