import { products } from "@/assets/data/Products";
import ProductsList from "@/src/components/ProductsList";
import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import Carousel from "react-native-reanimated-carousel";

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const data = [
    { image: require("../../../assets/images/banner5.jpg") },
    { image: require("../../../assets/images/banner4.jpg") },
    { image: require("../../../assets/images/banner2.jpg") },
    { image: require("../../../assets/images/banner3.jpg") },
    { image: require("../../../assets/images/banner1.jpg") },
  ];

  const categories = [
    "All",
    "Clothing",
    "Electronics",
    "Fashion",
    "Shoes",
    "Accessories",
  ];
  const { width } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
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

      <ScrollView horizontal style={styles.categories}>
        <View style={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <View key={index} style={styles.categoryItem}>
              <Text style={styles.categoryText}>{category}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Carousel and card container */}
      <View style={styles.offerContainer}>
        <Carousel
          loop
          width={width}
          height={180}
          autoPlay
          data={data}
          scrollAnimationDuration={2500}
          onSnapToItem={(index) => setCurrentIndex(index)}
          renderItem={({ item }) => (
            <View style={[styles.card]}>
              <Image
                source={item.image}
                style={styles.image}
                resizeMode="cover"
              />
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

      <FlatList
        numColumns={2}
        contentContainerStyle={{ gap: 10, paddingBottom: 20 }}
        columnWrapperStyle={{ gap: 10 }}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        data={products}
        renderItem={({ item }) => <ProductsList item={item} />}
      />
    </View>
  );
};
export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  searchContainer: {
    marginBottom: 16,
    // backgroundColor: "#d66b6b",
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
    // marginTop: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    height: 180,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  card: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
  pagination: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#ccc",
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: "#1b1c1c",
  },

  categoriesContainer: {
    marginBottom: 16,
    flexDirection: "row",
    paddingVertical: 5,
    gap: 16,
  },

  categoryItem: {
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },

  categoryText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#000000", // darker so it's visible
  },
  categories: {
    height: 130,
  },
});
