import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const ProductsList = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: item.image }}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.price}>₹{item.price}</Text>
      </View>
    </View>
  );
};

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: 6,
    borderRadius: 10,
    borderWidth: 0.4,
    // height: 180,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 120,
  },
  details: {
    padding: 8,
  },
  name: {
    fontSize: 14,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    fontWeight: "500",
    marginTop: 4,
    color: "#4a4a4a",
  },
});
