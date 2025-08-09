import React from "react";
import {
  GestureResponderEvent,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type CustomSocialButtonProps = {
  text: string;
  logo: any; // require() image or URI
  backgroundColor?: string;
  textColor?: string;
  onPress?: (event: GestureResponderEvent) => void;
};

const CustomSocialButton: React.FC<CustomSocialButtonProps> = ({
  text,
  logo,
  backgroundColor,
  textColor = "#000",
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor }]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.content}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
        <Text style={[styles.text, { color: textColor }]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    borderRadius: 50,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 26,
    height: 26,
    marginRight: 30,
    borderRadius: 50,
  },

  text: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default CustomSocialButton;
