import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";

const favourite = () => {
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
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.item}>
          <View style={styles.imgBox}></View>
          <View style={styles.contentBox}>
            <Text style={styles.name}>Product Name</Text>
            <Text style={styles.price}>Product Price</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.imgBox}></View>
          <View style={styles.contentBox}>
            <Text style={styles.name}>Product Name</Text>
            <Text style={styles.price}>Product Price</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.imgBox}></View>
          <View style={styles.contentBox}>
            <Text style={styles.name}>Product Name</Text>
            <Text style={styles.price}>Product Price</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.imgBox}></View>
          <View style={styles.contentBox}>
            <Text style={styles.name}>Product Name</Text>
            <Text style={styles.price}>Product Price</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.imgBox}></View>
          <View style={styles.contentBox}>
            <Text style={styles.name}>Product Name</Text>
            <Text style={styles.price}>Product Price</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.imgBox}></View>
          <View style={styles.contentBox}>
            <Text style={styles.name}>Product Name</Text>
            <Text style={styles.price}>Product Price</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.imgBox}></View>
          <View style={styles.contentBox}>
            <Text style={styles.name}>Product Name</Text>
            <Text style={styles.price}>Product Price</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.imgBox}></View>
          <View style={styles.contentBox}>
            <Text style={styles.name}>Product Name</Text>
            <Text style={styles.price}>Product Price</Text>
          </View>
        </View>
        <View style={styles.item}>
          <View style={styles.imgBox}></View>
          <View style={styles.contentBox}>
            <Text style={styles.name}>Product Name</Text>
            <Text style={styles.price}>Product Price</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
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
  item: {
    flexDirection: "row",
    marginBottom: 16,
  },
  imgBox: {
    width: 80,
    height: 80,
    backgroundColor: "#ccc",
    marginRight: 16,
    borderRadius: 10,
    overflow: "hidden",
  },
  contentBox: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  price: {
    fontSize: 14,
    color: "#8f8d8d",
    marginTop: 4,
  },
});
