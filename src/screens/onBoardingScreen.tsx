import React, { FC, useState } from "react";
import { View, Text, StyleSheet, Image, ImageBackground ,TouchableOpacity} from "react-native";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AuthStackParamList } from "../navigation/AppNavigator";
type Authtype = StackNavigationProp<AuthStackParamList, "HomeScreen">
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from "../config/Colors";
import Images from "../assets/Images";
import fonts from "../constants/fonts";
import AntDesign from 'react-native-vector-icons/AntDesign'

const Slide1 = [
    {
        id: 1,
        sub: 'Save money'
    },
    {
        id: 2,
        sub: 'Save commute'
    },
    {
        id: 3,
        sub: 'Sustainable environment'       
    }
]
const Slide2 = [        
    {
        id: 1,
        sub: 'Avoid scams'   
    },
    {
        id: 2,
        sub: 'Confirmed rides'
    },
    {
        id: 3,
        sub: 'Hassle free payments'
    },
    {
        id: 4,
        sub: 'Verified drivers'
    }
]




const onBoardingScreen: FC = () => {
    const navigation = useNavigation<Authtype>();

    const [state, setState] = React.useState('0');


    function MyonBoarding() {

        if (state === "0") {
            return (
                <LinearGradient colors={['#e5d5b8', '#d4e4f0']} start={{ x: -1, y: 0 }}
                    end={{ x: 1, y: 0 }} locations={[0.0, 1.0]} style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginStack')} style={{position:'absolute',alignSelf:'flex-end',right: 25,zIndex:5}}>
                        <Text style={styles.skip}>Skip</Text>
                    </TouchableOpacity>

                    <View >
                        <ImageBackground source={Images.RightLine} style={{ width: wp('18%'), height: hp('100%'), position: 'absolute', right: 0 }}>

                        </ImageBackground>

                    </View>
                    <Image source={Images.Slide1} style={styles.img} />
                    <View>
                        <Text style={styles.heading}>Why Humble Ride?</Text>
                        {Slide1.map((data) => {
                            return (
                                <View style={{ flexDirection: 'row', marginHorizontal: wp('4%') }}>
                                    <View style={styles.dot} />
                                    <Text style={styles.sub}>{data.sub}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: wp('4%'), marginTop: hp('3%'), position: 'relative' }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: wp('4%') }}>
                            {state === '0' ?
                                <View style={styles.backnew} />

                                :
                                <View style={styles.back} />
                            }

                            {state === '1' ?
                                <View style={styles.backnew} />

                                :
                                <View style={styles.back} />
                            }

                            {state === '2' ?
                                <View style={styles.backnew} />

                                :
                                <View style={styles.back} />
                            }

                        </View>
                        <TouchableOpacity onPress={() => (setState('1'))}>
                       <Image source={Images.Circle} style={styles.circle}/>
                        </TouchableOpacity>
                    </View>





                </LinearGradient>




            )
        }

        if (state === "1") {

            return (
                <LinearGradient colors={['#e5d5b8', '#d4e4f0']} start={{ x: -1, y: 0 }}
                    end={{ x: 1, y: 0 }} locations={[0.0, 1.0]} style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginStack')} style={{position:'absolute',alignSelf:'flex-end',right: 25,zIndex:5}}>
                        <Text style={styles.skip}>Skip</Text>
                    </TouchableOpacity>                  
                      <View >
                        <ImageBackground source={Images.RightLine} style={{ width: wp('18%'), height: hp('100%'), position: 'absolute', right: 0 }}>

                        </ImageBackground>

                    </View>
                    <Image source={Images.Slide2} style={styles.img} />    
                    <View>     
                        <Text style={[styles.heading, { marginTop: hp('-3%') }]}>Why book online?</Text>
                        {Slide2.map((data) => {    
                            return (
                                <View style={{ flexDirection: 'row', marginHorizontal: wp('4%') }}>
                                    <View style={styles.dot} />
                                    <Text style={styles.sub}>{data.sub}</Text>
                                </View>
                            )
                        })}
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: wp('4%'), marginTop: hp('2.5%') }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: wp('4%') }}>
                            {state === '0' ?
                                <View style={styles.backnew} />   

                                :
                                <View style={styles.back} />
                            }

                            {state === '1' ?
                                <View style={styles.backnew} />

                                :
                                <View style={styles.back} />
                            }

                            {state === '2' ?
                                <View style={styles.backnew} />

                                :
                                <View style={styles.back} />
                            }

                        </View>
                        <TouchableOpacity onPress={() => (setState('2'))}>
                        <Image source={Images.Circle} style={styles.circle}/>
                        </TouchableOpacity>
                    </View>





                </LinearGradient>
            )   
        }

        if (state === "2") {
            return (
                <LinearGradient colors={['#e5d5b8', '#d4e4f0']} start={{ x: -1, y: 0 }}
                    end={{ x: 1, y: 0 }} locations={[0.0, 1.0]} style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('LoginStack')} style={{position:'absolute',alignSelf:'flex-end',right: 25,zIndex:5}}>
                        <Text style={styles.skip}>Skip</Text>
                    </TouchableOpacity>    
                    <View >
                        <ImageBackground source={Images.RightLine} style={{ width: wp('18%'), height: hp('100%'), position: 'absolute', right: 0 }}>

                        </ImageBackground>

                    </View>
                    <Image source={Images.Slide2} style={styles.img} />
                    <View>
                        <Text style={[styles.heading, { marginTop: hp('-3%') }]}>Everyone’s time is important, please be on time.</Text>

                    </View>    
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: wp('4%'), marginTop: hp('12%'), position: 'relative' }}>
                        <View style={{ flexDirection: 'row', marginHorizontal: wp('4%') }}>
                            {state === '0' ?
                                <View style={styles.backnew} />

                                :
                                <View style={styles.back} />
                            }

                            {state === '1' ?
                                <View style={styles.backnew} />

                                :
                                <View style={styles.back} />  
                            }

                            {state === '2' ?
                                <View style={styles.backnew} />

                                :
                                <View style={styles.back} />
                            }

                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('LoginStack')}>
                        <Image source={Images.Circle} style={styles.circle}/>  
                        </TouchableOpacity>    
                    </View>





                </LinearGradient>
            )
        }
    }
    return (
        <View style={styles.container}>


            {MyonBoarding()}
        </View>
    )
}
export default onBoardingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },



    back: {
        borderRadius: 2,
        width: wp('2.5%'),
        height: hp('1.25%'),
        alignSelf: 'center',
        opacity: 0.4,
        marginHorizontal: 4,
        backgroundColor: '#043016'

    },
    backnew: {
        borderRadius: 2,
        width: wp('2.5%'),
        height: hp('1.25%'),
        marginHorizontal: 4,

        alignSelf: 'center',
        backgroundColor: '#043016'


    },
    right: {
        backgroundColor: '#17C141',
        height: hp('100%'),
        width: wp('3%'),
        position: 'absolute',
        right: 0
    },
    img: {
        alignSelf: 'center',
        resizeMode: 'contain',
        width: wp('120%'),
        height: hp('60%'),
        marginTop: hp('4%')
    },
    heading: {
        marginHorizontal: wp('4%'),
        fontSize: 22,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
        color: colors.black
    },
    dot: {
        width: wp('1%'),
        height: hp('0.5%'),
        borderRadius: 50,
        backgroundColor: colors.black,
        alignSelf: 'center'

    },
    sub: {
        fontSize: 13,
        fontFamily: fonts.POPPINS_REGULAR,
        marginHorizontal: wp('3%'),
        color: colors.black,
        marginTop: hp('0.5%')
    },
    backbtn: {
        backgroundColor: '#17C141',
        width: wp('18%'),
        height: hp('8%'),
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 90,
        borderBottomLeftRadius: 90,
    },
    skip: {
        color: '#17C141',
        fontSize: 14,
        fontFamily: fonts.POPPINS_MEDIUM,
        marginTop: hp('3%')
    },
    circle:{
        width:wp('12%'),
        height:hp('6%')
    }




})
