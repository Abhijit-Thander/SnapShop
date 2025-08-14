import React from "react";
import { StyleSheet, Text, View } from "react-native";

const cart = () => {
  return (
    <View style={styles.container}>
      <View style={styles.blankCart}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your Cart is Empty
        </Text>
        <Text style={{ fontSize: 16, marginTop: 8 }}>
          Add items to your cart
        </Text>
      </View>
    </View>
  );
};

export default cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
  blankCart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
