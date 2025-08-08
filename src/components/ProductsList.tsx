import AntDesign from "@expo/vector-icons/AntDesign";
import React, { memo, useState } from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductsList = memo(({ item }: any) => {
  const [liked, setLiked] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={styles.heartButton}
        >
          <AntDesign
            name={liked ? "heart" : "hearto"}
            size={20}
            color={liked ? "red" : "#949191"}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.details}>
        <Text style={styles.name} numberOfLines={1}>
          {item.name}
        </Text>

        <View style={styles.priceContainer}>
          <Text style={styles.price}>₹{item.price}</Text>
          <View style={styles.rating}>
            <AntDesign name="star" size={12} color="black" />
            <Text style={styles.ratingText}>{item.rating}</Text>
          </View>
        </View>
      </View>
    </View>
  );
});

export default ProductsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 0.4,
    overflow: "hidden",
    // elevation:.1,
  },
  imageWrapper: {
    position: "relative",
  },
  image: {
    width: "100%",
    height: 120,
  },
  heartButton: {
    position: "absolute",
    right: 5,
    borderRadius: 50,
    padding: 5,
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
    fontWeight: "700",
    marginTop: 4,
    color: "#4a4a4a",
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  ratingText: {
    fontSize: 12,
    marginLeft: 4,
    color: "#4a4a4a",
    fontWeight: "600",
  },
});
