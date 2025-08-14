import React from "react";
import { StyleSheet, Text, View } from "react-native";

const profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.generalView}>
        <Text style={styles.title}>General</Text>
      </View>
      <View>
        <Text style={styles.title}>Settings</Text>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  generalView: {
    marginTop: 20,
    height: "50%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
