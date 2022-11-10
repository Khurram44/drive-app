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
import Feather from 'react-native-vector-icons/Feather'
import { Heading, Info, Subheading } from "../../Styles/SignIn.style";
import { CountryPicker } from "react-native-country-codes-picker";
import { Formik } from "formik";
import * as Yup from "yup";
import Button from "../../components/Button";
import SocialLogin from "../../components/SocialLogin";
import SimpleHeader from "../../components/SimpleHeader";

const validationSchema = Yup.object().shape({

    email: Yup.string().email().required('Email is Required'),
    password: Yup.string().required('Password is Required'),

})
const EmailLogin: FC = () => {
    const navigation = useNavigation<Authtype>();
    const [isSecureEntry, setIsSecureEntry] = useState(true);




    return (
        <LinearGradient colors={['#e5d5b8', '#d4e4f0']} start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }} locations={[0.0, 1.0]} style={styles.container}>
            <SimpleHeader onPress={() => navigation.goBack()} />
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Heading>Email Login</Heading>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""


                    }}
                    onSubmit={(values) => {

                        // navigation.navigate("Bottomtab")



                    }}

                    validationSchema={validationSchema}
                >
                    {({ handleSubmit, values, errors, touched, handleChange }) => (
                        <>
                            <View style={{ marginTop: hp('2%') }}>
                                <Subheading>Email address</Subheading>
                                <TextInput
                                    style={[styles.input, styles.elevation]}
                                    placeholder="Enter Your Email"
                                    placeholderTextColor={colors.lightColor} onChangeText={handleChange('email')}
                                    value={values.email}
                                />
                                <Text
                                    style={{
                                        fontSize: 13,
                                        color: "red",
                                        marginLeft: wp('5%'),
                                        marginTop: 5

                                    }}
                                >
                                    {errors.email}
                                </Text>
                            </View>
                            <View style={{ marginTop: hp('0.5%') }}>

                                <Subheading>Password</Subheading>
                                <View style={styles.ViewContainer}>
                                    <TextInput
                                        style={styles.inputStyle}
                                        placeholder="*********"

                                        placeholderTextColor={colors.lightColor} value={values.password} onChangeText={handleChange('password')}

                                        secureTextEntry={isSecureEntry}

                                    />
                                    <TouchableOpacity onPress={() => { setIsSecureEntry((prev) => !prev) }}>
                                        <Feather style={{}} size={20} color={colors.black} name={isSecureEntry ? 'eye-off' : 'eye'}/>
                                    </TouchableOpacity>
                                </View>

                                <Text     
                                    style={{
                                        fontSize: 13,
                                        color: "red",
                                        marginLeft: wp('5%'),
                                        marginTop: 5

                                    }}
                                >
                                    {errors.password}
                                </Text>
                            </View>

                            <Button title="login" onPress={handleSubmit} />

                        </>
                    )}
                </Formik>
                <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
                    <Text style={styles.forget}>Forgot password?</Text>
                </TouchableOpacity>
                <Info>Login with</Info>
                <SocialLogin />
                <ImageBackground source={Images.BottomL} style={{ width: wp('100%'), height: hp('40%'), marginTop: hp('-1%') }} imageStyle={{ bottom: 0, position: 'absolute' }}>
                    <View style={{ bottom: 30, position: 'absolute', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>  
                            <Text style={styles.desc}>Don’t have an account?</Text>

                            <TouchableOpacity >      
                                <Text style={styles.reg}>Register Now</Text>
                            </TouchableOpacity>  
                        </View>
                    </View>
                </ImageBackground>
            </ScrollView>
        </LinearGradient>
    )
}
export default EmailLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    elevation: {
        elevation: 1,
        shadowColor: '#F4F4F4',
    },
    input: {
        backgroundColor: '#fff',
        width: wp('90%'),
        padding: wp('3%'),
        alignSelf: 'center',
        borderRadius: 10,
        fontFamily: fonts.POPPINS_MEDIUM,

        marginTop: hp('1%')

    },
    desc: {
        color: '#fff',
        fontSize: 14,
        fontFamily: fonts.POPPINS_REGULAR,
        alignSelf: 'center'


    },
    reg: {
        color: '#fff',
        fontSize: 14,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
        alignSelf: 'center',
        marginHorizontal: wp('1%')
    },
    ViewContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: wp('90%'),
        padding: wp('0%'),
        alignSelf: 'center',
        borderRadius: 10,
        fontFamily: fonts.POPPINS_MEDIUM,
        marginTop: hp('1%'),
        alignItems:'center',
        justifyContent:'center',
        paddingHorizontal:wp('2%')
    },
    inputStyle: {
        flex: 1,
    },
    forget:{
        color:colors.green,
        fontSize:15,
        fontFamily:fonts.POPPINS_REGULAR,
        textAlign:'center',
        marginTop:hp('2%'),
        marginBottom:hp('-2%')
    }

})