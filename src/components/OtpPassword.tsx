import React, { FC, useState,useEffect } from "react";
import {SafeAreaView, Text, View,StyleSheet,Button, TouchableOpacity} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import fonts from "../constants/fonts";


const CELL_COUNT = 6;
     
const OtpCodePassword: FC = () => {
  
         
  const [value, setValue] = useState('');                
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,    
  });

 
 
  return (
    <View style={styles.container}>   
    <SafeAreaView style={styles.root}>
      <CodeField
        ref={ref}   
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
             onLayout={getCellOnLayoutHandler(index)}          
            key={index}           
            style={[styles.cellRoot, isFocused && styles.focusCell]}>        
            <Text style={styles.cellText}>      
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          </View>
        )}
      />
    


    </SafeAreaView>
    </View>
  );
};

export default OtpCodePassword;
const styles=StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        width: wp('90%'),
        alignSelf: 'center',
        borderRadius: 8,
        fontFamily: fonts.POPPINS_SEMI_BOLD,
       marginTop: hp('1%'),
       padding:wp('1%')
    },
    root: {alignSelf:'center'},
  title: {textAlign: 'center', fontSize: 20},
  codeFieldRoot: {
  
  },
  cellRoot: {
    width: wp('14.5%'),
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#fff',
    borderWidth:0.75,
    borderColor:'#F3F3F3',
    
  },
  cellText: {
    color: '#000',
    fontSize: 22,
    textAlign: 'center',
    fontFamily: fonts.POPPINS_SEMI_BOLD,

  },
  focusCell: {
    // borderColor:Theme.color.buttoncolor,
    borderWidth: 2,
  },
  

})