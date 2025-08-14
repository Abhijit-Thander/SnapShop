// import { products } from "@/assets/data/Products";
// import CustomButton from "@/src/components/CustomButton";
// import AntDesign from "@expo/vector-icons/AntDesign";
// import { router, Stack, useLocalSearchParams } from "expo-router";
// import React, { useState } from "react";
// import {
//   Image,
//   Pressable,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
// } from "react-native";

// const ItemSize = ["S", "M", "L", "XL"];

// const ProductDetailsScreen = () => {
//   const { id } = useLocalSearchParams();
//   const product = products.find((p) => p.id === Number(id));

//   const [liked, setLiked] = useState(false);
//   const [selectedSize, setSelectedSize] = useState("M");

//   if (!product) {
//     return (
//       <View style={styles.center}>
//         <Text>Product not found</Text>
//       </View>
//     );
//   }

//   return (
//     <View style={styles.container}>
//       {/* <ScrollView showsVerticalScrollIndicator={false}> */}
//       <Stack.Screen options={{ title: "Product Details" }} />

//       {/* Image Section */}
//       <View style={styles.imageContainer}>
//         <Image
//           source={{ uri: product.image }}
//           style={styles.image}
//           resizeMode="cover"
//         />
//         <TouchableOpacity
//           onPress={() => setLiked(!liked)}
//           style={styles.heartButton}
//           accessibilityLabel={
//             liked ? "Remove from favorites" : "Add to favorites"
//           }
//         >
//           <AntDesign
//             name={liked ? "heart" : "hearto"}
//             size={22}
//             color={liked ? "red" : "#949191"}
//           />
//         </TouchableOpacity>
//       </View>

//       {/* Name */}
//       <Text style={styles.nameText}>{product.name}</Text>

//       {/* Price & Rating */}
//       <View style={styles.priceContainer}>
//         <Text style={styles.priceText}>₹{product.price}</Text>
//         <View style={styles.ratingContainer}>
//           <AntDesign name="star" size={14} color="#f5c518" />
//           <Text style={styles.ratingText}>{product.rating}</Text>
//         </View>
//       </View>

//       {/* Description */}
//       <Text style={styles.descriptionText}>{product.description}</Text>

//       <View style={styles.sizeContainer}>
//         {ItemSize.map((size) => (
//           <Pressable
//             key={size}
//             onPress={() => setSelectedSize(size)}
//             style={[
//               styles.sizeButton,
//               selectedSize === size && styles.activeSizeButton,
//             ]}
//           >
//             <Text
//               style={[
//                 styles.sizeText,
//                 selectedSize === size && { color: "#fff" },
//               ]}
//             >
//               {size}
//             </Text>
//           </Pressable>
//         ))}
//       </View>
//       {/* </ScrollView> */}
//       <CustomButton title="Add to Cart" onPress={() => router.push("/cart")} />
//     </View>
//   );
// };

// export default ProductDetailsScreen;

// const styles = StyleSheet.create({
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: "#fff",
//   },
//   imageContainer: {
//     width: "100%",
//     height: 300,
//     borderRadius: 12,
//     overflow: "hidden",
//     marginBottom: 16,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//   },
//   heartButton: {
//     position: "absolute",
//     top: 10,
//     right: 10,
//     backgroundColor: "rgba(255,255,255,0.8)",
//     borderRadius: 50,
//     padding: 6,
//   },
//   nameText: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 8,
//   },
//   priceContainer: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   ratingContainer: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   ratingText: {
//     marginLeft: 4,
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   priceText: {
//     fontSize: 20,
//     fontWeight: "bold",
//   },
//   descriptionText: {
//     fontSize: 15,
//     color: "#626262",
//     lineHeight: 22,
//   },
//   sizeContainer: {
//     flexDirection: "row",
//     // alignItems: "center",
//     justifyContent: "space-between",
//     // marginVertical: 16,
//     // paddingHorizontal: 12,
//     // flexWrap: "wrap",
//     gap: 8,
//     marginTop: 16,
//     marginBottom: 16,
//   },
//   activeSizeButton: {
//     backgroundColor: "#000",
//     // elevation: 20,
//   },
//   sizeButton: {
//     borderWidth: 0.6,
//     borderColor: "#ccc",
//     borderRadius: 50,
//     height: 40,
//     width: 40,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   sizeText: {
//     fontSize: 16,
//     fontWeight: "500",
//   },
//   cartBtn: {
//     marginTop: 16,
//   },
//   sizeRow: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     gap: 12,
//     marginTop: 10,
//   },
// });

import { products } from "@/assets/data/Products";
import CustomButton from "@/src/components/CustomButton";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router, Stack, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const ItemSize = ["S", "M", "L", "XL"];

const ProductDetailsScreen = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id === Number(id));

  const [liked, setLiked] = useState(false);
  const [selectedSize, setSelectedSize] = useState("M");

  if (!product) {
    return (
      <View style={styles.center}>
        <Text>Product not found</Text>
      </View>
    );
  }

  const handleSizePress = (size: string) => {
    setSelectedSize(size);
  };

  const handleCartPress = () => {
    router.push("/cart");
  };

  return (
    <View style={styles.container}>
      {/* <ScrollView showsVerticalScrollIndicator={false}> */}
      <Stack.Screen options={{ title: "Product Details" }} />

      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity
          onPress={() => setLiked(!liked)}
          style={styles.heartButton}
          accessibilityLabel={
            liked ? "Remove from favorites" : "Add to favorites"
          }
        >
          <AntDesign
            name={liked ? "heart" : "hearto"}
            size={22}
            color={liked ? "red" : "#949191"}
          />
        </TouchableOpacity>
      </View>

      {/* Name */}
      <Text style={styles.nameText}>{product.name}</Text>

      {/* Price & Rating */}
      <View style={styles.priceContainer}>
        <Text style={styles.priceText}>₹{product.price}</Text>
        <View style={styles.ratingContainer}>
          <AntDesign name="star" size={14} color="#f5c518" />
          <Text style={styles.ratingText}>{product.rating}</Text>
        </View>
      </View>

      {/* Description */}
      <Text style={styles.descriptionText}>{product.description}</Text>

      <View style={styles.sizeContainer}>
        {ItemSize.map((size) => (
          <Pressable
            key={size}
            onPress={() => handleSizePress(size)}
            style={[
              styles.sizeButton,
              selectedSize === size && styles.activeSizeButton,
            ]}
          >
            <Text
              style={[
                styles.sizeText,
                selectedSize === size && { color: "#fff" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      {/* </ScrollView> */}
      <CustomButton title="Add to Cart" onPress={handleCartPress} />
    </View>
  );
};

export default ProductDetailsScreen;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  imageContainer: {
    width: "100%",
    height: 300,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  heartButton: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 50,
    padding: 6,
  },
  nameText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    marginLeft: 4,
    fontSize: 14,
    fontWeight: "500",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 15,
    color: "#626262",
    lineHeight: 22,
  },
  sizeContainer: {
    flexDirection: "row",
    // alignItems: "center",
    justifyContent: "space-between",
    // marginVertical: 16,
    // paddingHorizontal: 12,
    // flexWrap: "wrap",
    gap: 8,
    marginTop: 16,
    marginBottom: 16,
  },
  activeSizeButton: {
    backgroundColor: "#000",
    // elevation: 20,
  },
  sizeButton: {
    borderWidth: 0.6,
    borderColor: "#ccc",
    borderRadius: 50,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "500",
  },
  cartBtn: {
    marginTop: 16,
  },
  sizeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    marginTop: 10,
  },
});
