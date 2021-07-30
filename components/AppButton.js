import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Foundation } from "@expo/vector-icons";

let color = "#019edf";

const AppButton = (props) => {
  return (
    <TouchableOpacity style={styles.touchstyle} onPress={props.onPress}>
      <View style={[styles.appbuttonviewstyle, props.borderstyle]}>
        <Foundation name={props.iconName} size={26} color={color} />
        <Text style={styles.appbuttontext}>{props.buttonName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  touchstyle: {
    // height: "50%",
    // width: "50%",
    flexBasis: "50%",
  },
  appbuttonviewstyle: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderTopColor: color,
    borderTopWidth: 1,
    padding: "5px",
  },
  appbuttontext: {
    fontFamily: "sans-serif",
  },
});

export default AppButton;
