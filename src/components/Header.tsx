import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View ,Text} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Entypo from 'react-native-vector-icons/Entypo'
import fonts from "../constants/fonts";    


interface Props {
    title: String;
    onPress: () => void;
    style?: any;
}

const Header: FC<Props> = (props) => {
    return (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: wp('4%'), marginTop: hp('0%') }}>
                <TouchableOpacity onPress={props.onPress}>   
                    <View style={styles.backicon}>
                    <Entypo name="chevron-left" color={"#043016"} size={22} style={{ alignSelf: 'center' }} />
                    </View>
                </TouchableOpacity>     
                <View style={{ alignSelf: 'center' }}>
                    <Text style={styles.texta}>{props.title}</Text>
                </View>
                <View></View>
            </View>
    )
}
export default Header;
const styles = StyleSheet.create({
    backicon: {
        width: wp('12%'),
        height: hp('5.8%'),    
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 0.5,
        marginTop: hp('0%'),
        backgroundColor:'#fff'
    },
    texta: {
        fontSize: 19,
        fontFamily:fonts.POPPINS_SEMI_BOLD,
        letterSpacing: 0.2,
        alignSelf: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        color:'black'

    }
})