import CustomButton from "@/src/components/CustomButton";
import CustomSocialButton from "@/src/components/CustomSocialBtn";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUpScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      Alert.alert("Error", "Passwords do not match");
      return;
    }
    Alert.alert("Success", "Account created!");
    // Sign-up logic here
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      {/* Password Field */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconContainer}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={22}
            color="#aca9a9"
          />
        </TouchableOpacity>
      </View>

      {/* Confirm Password Field */}
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={!showPassword}
          style={styles.passwordInput}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity
          onPress={() => setShowPassword(!showPassword)}
          style={styles.iconContainer}
        >
          <Ionicons
            name={showPassword ? "eye" : "eye-off"}
            size={22}
            color="#aca9a9"
          />
        </TouchableOpacity>
      </View>

      <CustomButton title="Sign Up" onPress={handleSignUp} />

      {/* OR separator */}
      <View style={styles.separatorContainer}>
        <View style={styles.separator}></View>
        <Text style={styles.separateText}>OR</Text>
        <View style={styles.separator}></View>
      </View>

      {/* Social Buttons */}
      <CustomSocialButton
        text="Continue with Google"
        logo={require("../../../assets/images/google-logo.jpg")}
        backgroundColor="#ffffff"
        textColor="#676767"
        onPress={() => Alert.alert("Google Login")}
      />

      <CustomSocialButton
        text="Continue with Facebook"
        logo={require("../../../assets/images/facebok-logo.jpg")}
        backgroundColor="#ffffff"
        textColor="#676767"
        onPress={() => Alert.alert("Facebook Login")}
      />

      {/* Sign In Link */}
      <View style={styles.bottomText}>
        <Text style={styles.title}>Already have an account?</Text>
        <Text
          style={styles.signUpText}
          onPress={() => router.replace("/signin")}
        >
          Sign In
        </Text>
      </View>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
    fontSize: 16,
    width: "100%",
  },
  passwordContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
    paddingRight: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  iconContainer: {
    paddingLeft: 10,
  },
  separatorContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 30,
  },
  separateText: {
    marginHorizontal: 10,
    fontSize: 14,
  },
  separator: {
    height: 1,
    width: "40%",
    backgroundColor: "#cdcdcdd5",
  },
  bottomText: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30,
  },
  title: {
    marginRight: 8,
    fontSize: 14,
    color: "#676767",
    letterSpacing: 0.5,
  },
  signUpText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#000",
  },
});
