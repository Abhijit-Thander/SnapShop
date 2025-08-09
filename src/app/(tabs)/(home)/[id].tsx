import { Stack, useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Product Details" }} />
      <Text>Product Details:{id}</Text>
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
});
