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
import LinearGradient from 'react-native-linear-gradient';
import { colors } from "../../config/Colors";
import Images from "../../assets/Images";
import fonts from "../../constants/fonts";
import Entypo from 'react-native-vector-icons/Entypo'
import { Heading, Info, Subheading } from "../../Styles/SignIn.style";
import { CountryPicker } from "react-native-country-codes-picker";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import SocialLogin from "../../components/SocialLogin";

const validationSchema = Yup.object().shape({

    phone: Yup.string().required('Phone Number is Required'),
})
const Login: FC = () => {
    const navigation = useNavigation<Authtype>();
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+1');
    const [countryFlag, setCountryFlag] = useState('');


    return (
        <LinearGradient colors={['#e5d5b8', '#d4e4f0']} start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }} locations={[0.0, 1.0]} style={styles.container}>
            <Image source={Images.LogoOne} style={styles.logo} />
            <ScrollView 
            showsVerticalScrollIndicator={false}
            >
            <Heading>Login</Heading>
            <Formik
                initialValues={{
                    phone: ""


                }}
                onSubmit={(values) => {

                    navigation.navigate("VerifyLogin")



                }}

                validationSchema={validationSchema}
            >
                {({ handleSubmit, values, errors, touched, handleChange }) => (
                    <>
                          <View style={{marginTop:hp('3%')}}>
                        <Subheading>Mobile number</Subheading>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('2%') }}>
                            <TouchableOpacity
                                onPress={() => setShow(true)}
                                style={[styles.backdrop, styles.elevation]}
                            >
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{
                                        color: 'black',
                                        fontSize: 16
                                    }}>
                                        {countryFlag} {countryCode}
                                    </Text>
                                    <Entypo name="chevron-down" size={25} color={colors.lightColor} style={{position:'absolute',right:-12}} />
                                </View>
                            </TouchableOpacity>
                            <View>
                                <TextInput
                                    style={[styles.input,styles.elevation]}
                                    placeholder="Mobile Number"
                                    keyboardType="numeric"
                                    placeholderTextColor={colors.lightColor} onChangeText={handleChange('phone')}
                                    value={values.phone}         
                                />
                            </View>
                        </View>
                        <Text
                                        style={{
                                            fontSize: 13,
                                            color: "red",
                                            marginLeft: wp('5%'),
                                            marginTop: 5

                                        }}
                                    >
                                        {errors.phone}
                                    </Text>
                        <CountryPicker
                            show={show}
                            onBackdropPress={() => {setShow(false)}}
                            inputPlaceholder={'Select Country'}
                            pickerButtonOnPress={(item) => {
                                setCountryCode(item.dial_code);
                                setCountryFlag(item.flag);


                                setShow(false);     
                            }}                  

                        />
                        <Button title="login" onPress={handleSubmit}/>       

                    </>
                )}
            </Formik>  
            <Info>Login with</Info>     
            <SocialLogin/>       
            <ImageBackground source={Images.BottomL} style={{width:wp('100%'),height:hp('40%')}}  imageStyle={{bottom:0,position:'absolute'}}>
                <View style={{bottom:30,position:'absolute',alignSelf:'center'}}>
                <View style={{flexDirection:'row'}}>
                <Text style={styles.desc}>Don’t have an account?</Text>     

                <TouchableOpacity onPress={() => navigation.navigate('Register')}>   
                <Text style={styles.reg}>Register Now</Text>    
                </TouchableOpacity>         
                </View>
                </View>       
            </ImageBackground>
            </ScrollView>
        </LinearGradient>
    )
}
export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    logo: {
        marginTop: hp('5%'),    
        marginHorizontal: wp('5%')
    },
    backdrop: {
        width:wp('32%'),
        backgroundColor: '#fff',
        padding: wp('4%'),
        borderRadius: 10,
        alignSelf: 'center',

    },
    elevation: {
        elevation: 1,
        shadowColor: '#F4F4F4',
    },
    input: {
        backgroundColor: '#fff',
        width: wp('55%'),
        padding: wp('4%'),
        alignSelf: 'center',
        borderRadius: 10,
        fontFamily: fonts.POPPINS_MEDIUM,
        paddingBottom: hp("1%"),
      
    },
    desc:{
        color:'#fff',
        fontSize:14,
        fontFamily:fonts.POPPINS_REGULAR,
        alignSelf:'center'


    },
    reg:{
        color:'#fff',
        fontSize:14,
        fontFamily:fonts.POPPINS_SEMI_BOLD,
alignSelf:'center',
marginHorizontal:wp('1%')
    }

})