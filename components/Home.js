import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppButtons from "./AppButtons";

const Home = ({ navigation }) => {
  return (
    <View style={styles.view}>
      <View style={styles.body}>
        <Text>Content goes here</Text>
      </View>
      <AppButtons navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: "100%",
    flex: 1,
  },
  body: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
