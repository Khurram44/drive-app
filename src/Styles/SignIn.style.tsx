import styled from 'styled-components'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../config/Colors'



export const Heading = styled.Text`
color: ${colors.black};
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 30px;
margin-left: ${wp('5%')};
margin-top: ${hp('2%')};
letter-spacing: 0.5px;


`

export const Subheading = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
color: ${colors.lightColor};
margin-left: ${wp('5%')};
margin-top: ${hp('3%')};
letter-spacing: 0.8px;

`
export const Info = styled.Text`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
margin-top: ${hp('3%')};
letter-spacing: 0.8px;
color: ${colors.lightColor};
text-align: center;



`


