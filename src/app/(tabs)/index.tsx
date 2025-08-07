import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

const index = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    { title: "Category 1", color: "#14CF93" },
    { title: "Category 2", color: "#FFB703" },
    { title: "Category 3", color: "#FB5607" },
    { title: "Category 4", color: "#0bd3e9" },
  ];
  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View>
        <Ionicons name="search" size={20} color="#8f8d8d" style={styles.icon} />
        <TextInput
          placeholder="Search..."
          style={styles.searchInput}
          accessibilityLabel="Search input"
        />
        <Ionicons
          name="camera-outline"
          size={24}
          color="#8f8d8d"
          style={styles.cameraIcon}
        />
      </View>
      {/* Carousel and card container */}
      <View style={styles.offerContainer}>
        <Carousel
          loop
          width={width}
          height={180}
          autoPlay
          data={data}
          scrollAnimationDuration={1500}
          onSnapToItem={(index) => setCurrentIndex(index)}
          renderItem={({ item }) => (
            <View style={[styles.card, { backgroundColor: item.color }]}>
              <Text style={styles.title}>{item.title}</Text>
            </View>
          )}
        />
      </View>

      {/* Pagination Dots should be outside carousel box */}
      <View style={styles.pagination}>
        {data.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, currentIndex === index && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  searchInput: {
    padding: 12,
    paddingLeft: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 14,
  },
  icon: {
    position: "absolute",
    top: 12,
    left: 12,
  },
  cameraIcon: {
    position: "absolute",
    top: 12,
    right: 12,
  },
  offerContainer: {
    marginTop: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    height: 180,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    // borderRadius: 10,
  },
  card: {
    flex: 1,
    // borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    // marginHorizontal: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#14CF93",
  },
});
