import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View ,Text} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Entypo from 'react-native-vector-icons/Entypo'
import fonts from "../constants/fonts";


interface Props {
    onPress: () => void;
    style?: any;
}

const SimpleHeader: FC<Props> = (props) => {  
    return (
            <View style={{ marginTop: hp('3%'),marginHorizontal:wp('5%') }}>  
                <TouchableOpacity onPress={props.onPress}>
                    <View style={styles.backicon}>         
                        <Entypo name="chevron-left" color={"#043016"} size={22} style={{ alignSelf: 'center' }} />
                    </View>    
                </TouchableOpacity>           
              
            </View>  
    )
}
export default SimpleHeader;
const styles = StyleSheet.create({
    backicon: {   
        width: wp('12%'),     
        height: hp('5.8%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 15,
        elevation: 0.5,
        backgroundColor:'#fff'
    },
    
})