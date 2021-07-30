import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AppHeader = () => {
  return (
    <View style={styles.appheaderstyle}>
      <Text style={styles.pagetitle}>AimOrder</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appheaderstyle: {
    backgroundColor: "#019edf",
    flexBasis: "8%",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  pagetitle: {
    fontFamily: "sans-serif",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
  },
});

export default AppHeader;
