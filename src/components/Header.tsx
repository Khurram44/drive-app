import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View ,Text} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AntDesign from 'react-native-vector-icons/AntDesign'
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
                        <AntDesign name="left" color={"#000000"} size={20} style={{ alignSelf: 'center' }} />
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
        height: hp('6%'),
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