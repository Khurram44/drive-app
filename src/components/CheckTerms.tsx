import { NativeBaseProvider ,Checkbox} from "native-base";
import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, TextInput, ScrollView } from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import { Remember } from "../Styles/SignIn.style";






const CheckTerms = () => {
    const [check1, setCheck1] = useState('');

    return (
        <NativeBaseProvider>
            <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop:hp('1%')}}>
                <Checkbox shadow={2} value={check1} colorScheme="green"  style={{borderRadius:50,alignSelf:'center'}}>.</Checkbox>
                <View style={{ marginLeft: wp('2%') }}>
                    <Remember>By creating an account, you agree to our <Text style={{color:colors.green}}>Terms of Service</Text> and <Text style={{color:colors.green}}>Privacy Policy</Text></Remember>
                </View>
            </View>
        </NativeBaseProvider>
    )
}

export default CheckTerms;







