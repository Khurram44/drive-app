import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React, { FC, useEffect, useState } from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../components/Header';
import { useNavigation } from '@react-navigation/native';
import Images from '../assets/Images';
import { colors } from '../config/Colors';
import fonts from '../constants/fonts';

const Todayride =[
  {
    id:1,
    name:'Devon Lane',
    rides:'4',
    from:'Palava City by lodha',
    to:'Peninsula Business Park',
    price:'150',
    ftime:'07:00 AM',
    ttime:'08:30 PM',
    seats:'04',
    rider:Images.Rider
  },
  {
    id:2,
    name:'Devon Lane',
    rides:'7',
    from:'Palava City by lodha',          
    to:'Peninsula Business Park',
    price:'120',
    ftime:'06:00 AM',
    ttime:'08:30 PM',
    seats:'07',
    rider:Images.Rider

  },

]
const HomeScreen: FC = () => {
  const navigation =useNavigation();
  const [from,setFrom]=useState('Palava City by lodha');
  const [to,setTo]=useState('Peninsula Business Park')


  return (
    <LinearGradient colors={['#e5d5b8', '#d4e4f0']} start={{ x: -1, y: 0 }}
      end={{ x: 1, y: 0 }} locations={[0.0, 1.0]} style={styles.container}>
        <Header title='Find a ride' onPress={() => navigation.goBack()}/>

        <View style={[styles.back,styles.elevation]}>
          <View style={{flexDirection:'row',justifyContent:'space-between'}}>
            <Image source={Images.Green} style={styles.img}/>
            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.texta}>{from}</Text>
            <Image source={Images.Line} style={[styles.img,{marginTop:2}]}/>
            <Image source={Images.Red} style={styles.img}/>
            <Text numberOfLines={1} style={styles.texta}>{to}</Text>

            <TouchableOpacity>    
            <Image source={Images.Edit} style={styles.img}/>
            </TouchableOpacity>


          </View>

        </View>
        <ScrollView 
        showsVerticalScrollIndicator={false}
        >
        <View style={{marginTop:hp('3%')}}>
          <Text style={styles.left}>Today</Text>
          </View>
          <View style={{marginTop:hp('1%')}}>
          {Todayride.map((data) => {
            return(
            <View style={[styles.backcart,styles.elevation]}>
              <View style={{padding:wp('3%')}}>
               <View style={{flexDirection:'row'}}>
                <Image source={data.rider} style={{width:wp('18%'),height:hp('9%')}}/>
                <View style={{flexDirection:'column',marginHorizontal:wp('4%')}}>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.name}>{data.name}</Text>
                    <Image source={Images.Verify} style={{marginHorizontal:wp('3%')}}/>
                  </View>
                  <View style={styles.rideback}>
                    <Text style={styles.rides}>Rides: {data.rides}</Text>
                  </View>
                </View>
                <Text style={styles.price}>${data.price}</Text>
               </View>
               <View>
                <View style={{marginTop:hp('2%')}}>
                  <View style={{flexDirection:'row'}}>
                  <Image source={Images.Flocation} style={{}}/>
                  <Text style={styles.from}>{data.from}</Text>
                  <Text style={styles.time}>{data.ftime}</Text>
                  </View>
                  <Image source={Images.HLine} style={{marginTop:hp('0.5%'),marginHorizontal:wp('2%')}}/>
                  <View style={{flexDirection:'row'}}>
                  <Image source={Images.Tlocation} style={{marginTop:hp('0.5%')}}/>
                  <Text style={styles.from}>{data.to}</Text>
                  <Text style={styles.time}>{data.ttime}</Text>

                  </View>

                </View>

               </View>
            </View>
            <View style={styles.bottomback}>
              <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('3%')}}>
                <Text style={styles.avail}>Available Seat: <Text style={{  fontFamily:fonts.POPPINS_SEMI_BOLD}}>{data.seats}</Text></Text>
                <Image source={Images.Car} style={{alignSelf:'center'}}/>
              </View>
            </View>
            </View>
            )

          })}
          </View>


          <View style={{marginTop:hp('1%')}}>
          <Text style={styles.left}>Tomorrow</Text>
          </View>
          <View style={{marginTop:hp('1%')}}>
          {Todayride.map((data) => {
            return(
            <View style={[styles.backcart,styles.elevation]}>
              <View style={{padding:wp('3%')}}>
               <View style={{flexDirection:'row'}}>
                <Image source={data.rider} style={{width:wp('18%'),height:hp('9%')}}/>
                <View style={{flexDirection:'column',marginHorizontal:wp('4%')}}>
                  <View style={{flexDirection:'row'}}>
                    <Text>{data.name}</Text>
                    <Image source={Images.Verify} style={{marginHorizontal:wp('3%')}}/>
                  </View>
                  <View style={styles.rideback}>
                    <Text style={styles.rides}>Rides: {data.rides}</Text>
                  </View>
                </View>
                <Text style={styles.price}>${data.price}</Text>
               </View>
               <View>
                <View style={{marginTop:hp('2%')}}>
                  <View style={{flexDirection:'row'}}>
                  <Image source={Images.Flocation} style={{}}/>
                  <Text style={styles.from}>{data.from}</Text>
                  <Text style={styles.time}>{data.ftime}</Text>
                  </View>
                  <Image source={Images.HLine} style={{marginTop:hp('0.5%'),marginHorizontal:wp('2%')}}/>
                  <View style={{flexDirection:'row'}}>
                  <Image source={Images.Tlocation} style={{marginTop:hp('0.5%')}}/>
                  <Text style={styles.from}>{data.to}</Text>
                  <Text style={styles.time}>{data.ttime}</Text>

                  </View>

                </View>

               </View>
            </View>
            <View style={styles.bottomback}>
              <View style={{flexDirection:'row',justifyContent:'space-between',padding:wp('3%')}}>
                <Text style={styles.avail}>Available Seat: <Text>{data.seats}</Text></Text>
                <Image source={Images.Car} style={{alignSelf:'center'}}/>
              </View>
            </View>
            </View>
            )

          })}
          </View>
          </ScrollView>
    

    </LinearGradient>
  )
}


export default HomeScreen;
const styles = StyleSheet.create({

  container: {
    flex: 1
  },
  back:{
    alignSelf:'center',
    width:wp('90%'),
    padding:wp('6%'),
    backgroundColor:'#fff',
    borderRadius:12,
    marginTop:hp('2%')
  },
  backcart:{
    alignSelf:'center',
    width:wp('90%'),
    backgroundColor:'#fff',
    borderRadius:12,
    marginBottom:hp('2%'),
    borderTopLeftRadius:12,
    borderTopRightRadius:12,
    borderBottomLeftRadius:5,
    borderBottomRightRadius:5

  },
  img:{
    alignSelf:'center'
    
  },
  texta:{
    fontSize:14,
    color:colors.black,               
    width:wp('20%'),
    fontFamily:fonts.POPPINS_MEDIUM   
       
  },
  elevation: {
    elevation: 1,
    shadowColor: '#F4F4F4',
},
left:{
  marginHorizontal:wp('5%'),
  fontSize:15,
  color:colors.black,
  fontFamily:fonts.POPPINS_MEDIUM     
},      
rideback:{
  backgroundColor:'#F4F4F4',
  padding:wp('2%'),
  borderRadius:12,
  width:wp('20%'),
  justifyContent:'center',
  alignItems:'center',
  marginTop:hp('1%')
},
price:{
  position:'absolute',
  right:5,
  color:colors.black,
  fontSize:18,
  fontFamily:fonts.POPPINS_SEMI_BOLD
},
from:{
  color:colors.lightColor,
  fontSize:14,
  marginHorizontal:wp('3%'),
  fontFamily:fonts.POPPINS_LIGHT    
},                  
rides:{
  color:colors.lightColor,
  fontSize:13,                        
  fontFamily:fonts.POPPINS_MEDIUM

},
time:{
  position:'absolute',
  right:5,               
  color:colors.lightColor,
  fontSize:12,
  fontFamily:fonts.POPPINS_LIGHT



},
bottomback:{
  bottom:0,
  backgroundColor:'#EAFCF0',
},
avail:{
  fontSize:15,
  color:colors.green,
  fontFamily:fonts.POPPINS_LIGHT

},
name:{
  fontSize:17,
  fontFamily:fonts.POPPINS_MEDIUM,
  color:colors.black
}
});
