import React, { FC } from "react";
import { StyleSheet, TouchableOpacity ,Text,View} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { colors } from "../config/Colors";
import fonts from "../constants/fonts";

interface Props {
  title: string;
  onPress: () => void;
  style?: any;
}

const Button: FC<Props> = (props) => {
  return (
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.gradient}>
          <Text style={styles.text}>{props.title}</Text>
        </View>
      </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {},
  text: {
    fontSize: 16,
    fontFamily:fonts.POPPINS_MEDIUM,
    textAlign: "center",
    letterSpacing: 0.8,
    color: "#FFFFFF",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  gradient: {
    width: wp("90%"),
    borderRadius: 12,
    padding: 12,
    marginTop: hp("1.5%"),
    alignSelf: "center",
    backgroundColor:colors.btn
  },
});
