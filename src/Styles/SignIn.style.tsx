import styled from 'styled-components'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen'
import { colors } from '../config/Colors'

export const Maincontainer = styled.View`
padding-right:${wp(5)};
flex: 1;
`
export const AppText = styled.Text`
color: ${colors.black};
font-size: 16px;
text-align: center;
`
export const AppButton = styled.View`
width: 66px;
height: 24px;
alignSelf: center;

background: #FFFFFF;
box-shadow: 0px 4px 3px rgba(0, 0, 0, 0.25)
border-radius: 14.5px;
`
export const Heading = styled.Text`
font-style: normal;
font-weight: 600;
font-size: 22px;
margin-top: ${hp(5)};
color: ${colors.black};`

export const HeadingDark = styled.Text`
font-style: normal;
font-size: 22px;
margin-top: ${hp(5)};
color: ${colors.White};`

export const SubHeading = styled.Text`
font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 14px;
marginTop: ${hp(2)};
color: #8E8E93;
opacity: 0.6;`

export const Input = styled.TextInput`
box-sizing: border-box;

/* Auto layout */

display: flex;
flex-direction: row;
align-items: center;
padding: 0px 15px;
gap: 12px;

position: absolute;
height: 52.84px;
left: 24.42px;
right: 24.58px;
top: 259px;

/* Colors / White */

background: #FFFFFF;
/* Colors / Grey */

border: 1px solid #BABABA;
border-radius: 10px;`