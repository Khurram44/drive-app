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
import Entypo from 'react-native-vector-icons/Entypo'
import { NativeBaseProvider } from "native-base";
import CheckTerms from "../../components/CheckTerms";


const validationSchema = Yup.object().shape({
    password: Yup.string()
        .required()
        .min(8)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            "Password with minimum eight characters, one uppercase, one lowercase, one number and one symbol"
        )
        .label("Password"),
    confirmpass: Yup.string().required("Confirm Password is Required").oneOf([Yup.ref('password'), null], 'Passwords must match'),
    fname: Yup.string().required("Enter Your First Name"),
    lname: Yup.string().required("Enter your Last name"),
    email: Yup.string().required("Enter your Email"),
    phone: Yup.string().required("Enter your Phone Number"),


})

const Register: FC = () => {
    const navigation = useNavigation<Authtype>();

    const [isSecureEntry, setIsSecureEntry] = useState(true);
    const [isSecureEntry1, setIsSecureEntry1] = useState(true);
    const [show, setShow] = useState(false);
    const [countryCode, setCountryCode] = useState('+1');
    const [countryFlag, setCountryFlag] = useState('');

    return (
        <LinearGradient colors={['#e5d5b8', '#d4e4f0']} start={{ x: -1, y: 0 }}
            end={{ x: 1, y: 0 }} locations={[0.0, 1.0]} style={styles.container}>
            <View style={{ marginTop: hp('5%') }}>
                <Heading>Register</Heading>
               
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >

                    <Formik
                        initialValues={{
                            password: "",
                            confirmpass: "",
                            fname: "",
                            lname: "",
                            email: "",
                            phone: "",
                            mname:""


                        }}
                        onSubmit={(values) => {

                            // navigation.navigate("PasswordSuccess")



                        }}

                        validationSchema={validationSchema}
                    >
                        {({ handleSubmit, values, errors, touched, handleChange }) => (
                            <>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: hp('3%') }}>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ flexDirection: 'row', alignSelf: 'flex-start', right: 10 }}>
                                            <Subheading>First name</Subheading>
                                            <Text style={{ color: 'red', marginHorizontal: wp('1%') }}>*</Text>
                                        </View>
                                        <TextInput
                                            style={[styles.input1, styles.elevation]}
                                            placeholder="First Name"
                                            placeholderTextColor={colors.lightColor}
                                            onChangeText={handleChange('fname')}
                                            value={values.fname}

                                        />
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: "red",
                                                marginTop: 5

                                            }}
                                        >
                                            {errors.fname}
                                        </Text>
                                    </View>
                                    <View style={{ flexDirection: 'column' }}>
                                        <View style={{ alignSelf: 'flex-start', right: 10 }}>
                                            <Subheading>Middle name</Subheading>
                                        </View>
                                        <TextInput
                                            style={[styles.input1, styles.elevation]}
                                            placeholder="Middle Name"
                                            placeholderTextColor={colors.lightColor}
                                            onChangeText={handleChange('mname')}
                                            value={values.mname}

                                        />

                                    </View>

                                </View>
                                <View style={{ marginTop: hp('1%') }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Subheading>Last name</Subheading>
                                        <Text style={{ color: 'red', marginHorizontal: wp('1%') }}>*</Text>
                                    </View>
                                    <TextInput
                                        style={[styles.input, styles.elevation]}
                                        placeholder="Last Name"
                                        placeholderTextColor={colors.lightColor}
                                        onChangeText={handleChange('lname')}
                                            value={values.lname}

                                    />
                                    <Text
                                        style={{
                                            fontSize: 13,
                                            color: "red",
                                            marginLeft: wp('5%'),
                                            marginTop: 5

                                        }}
                                    >
                                        {errors.lname}
                                    </Text>

                                </View>
                                <View style={{ marginTop: hp('0%') }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <Subheading>Email address</Subheading>
                                        <Text style={{ color: 'red', marginHorizontal: wp('1%') }}>*</Text>
                                    </View>
                                    <TextInput
                                        style={[styles.input, styles.elevation]}
                                        placeholder="abc@gmail.com"
                                        placeholderTextColor={colors.lightColor}
                                        onChangeText={handleChange('email')}
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
                                <View style={{ marginTop: hp('0%') }}>
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
                                            <Entypo name="chevron-down" size={25} color={colors.lightColor} style={{ position: 'absolute', right: -12 }} />
                                        </View>
                                    </TouchableOpacity>
                                    <View>
                                        <TextInput
                                            style={[styles.input3, styles.elevation]}
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
                                    onBackdropPress={() => { setShow(false) }}
                                    inputPlaceholder={'Select Country'}
                                    pickerButtonOnPress={(item) => {
                                        setCountryCode(item.dial_code);
                                        setCountryFlag(item.flag);


                                        setShow(false);
                                    }}

                                />
                                <View style={{ marginTop: hp('0%') }}>
                                    <Subheading>Password</Subheading>
                                    <View style={styles.ViewContainer}>
                                        <TextInput
                                            style={styles.inputStyle}
                                            placeholder="*********"

                                            placeholderTextColor={colors.lightColor} value={values.password} onChangeText={handleChange('password')}

                                            secureTextEntry={isSecureEntry}

                                        />
                                        <TouchableOpacity onPress={() => { setIsSecureEntry((prev) => !prev) }}>
                                            <Feather style={{}} size={20} color={colors.black} name={isSecureEntry ? 'eye-off' : 'eye'} />
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
                                <View style={{ marginTop: hp('0%') }}>
                                    <Subheading>Confirm Password</Subheading>
                                    <View style={styles.ViewContainer}>
                                        <TextInput
                                            style={styles.inputStyle}
                                            placeholder="*********"

                                            placeholderTextColor={colors.lightColor} value={values.confirmpass} onChangeText={handleChange('confirmpass')}

                                            secureTextEntry={isSecureEntry1}

                                        />
                                        <TouchableOpacity onPress={() => { setIsSecureEntry1((prev) => !prev) }}>
                                            <Feather style={{}} size={20} color={colors.black} name={isSecureEntry1 ? 'eye-off' : 'eye'} />
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
                                        {errors.confirmpass}
                                    </Text>
                                </View>
                                <CheckTerms/>
                                <View style={{ marginTop: hp('2%') ,marginBottom:hp('-15%')}}>
                                    <Button title="Register" onPress={handleSubmit}/>
                                </View>
                            </>
                        )
                        }
                    </Formik>
                    <ImageBackground source={Images.BottomL} style={{ width: wp('100%'), height: hp('50%') }} imageStyle={{resizeMode:'contain',bottom:0,position:'absolute'}}>
                    <View style={{ bottom:60, position: 'absolute', alignSelf: 'center' }}>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.desc}>Already have account?</Text>

                                <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                                    <Text style={styles.reg}>Login</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </ScrollView>

            </View>

        </LinearGradient>
        
    )
}

export default Register;
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
    input1: {
        backgroundColor: '#fff',
        width: wp('44%'),
        padding: wp('3%'),
        alignSelf: 'center',
        borderRadius: 10,
        fontFamily: fonts.POPPINS_MEDIUM,

        marginTop: hp('1%')

    },
    ViewContainer: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: wp('90%'),
        padding: wp('0%'),
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: hp('1%'),
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: wp('2%'),
    },
    inputStyle: {
        flex: 1,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
        fontSize: 18,




    },
    backdrop: {
        width: wp('32%'),
        backgroundColor: '#fff',
        padding: wp('4%'),
        borderRadius: 10,
        alignSelf: 'center',

    },
    input3: {
        backgroundColor: '#fff',
        width: wp('55%'),
        padding: wp('4%'),
        alignSelf: 'center',
        borderRadius: 10,
        fontFamily: fonts.POPPINS_MEDIUM,
        paddingBottom: hp("1%"),

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
    }


})