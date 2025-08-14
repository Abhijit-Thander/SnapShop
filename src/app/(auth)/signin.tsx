import CustomButton from "@/src/components/CustomButton";
import CustomSocialButton from "@/src/components/CustomSocialBtn";
import { supabase } from "@/src/lib/supabase";
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

const SignInScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function signInWithEmail() {
    setIsLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) Alert.alert("Error", error.message);
    setIsLoading(false);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <View style={styles.passwordContainer}>
        <TextInput
          placeholder="Password"
          secureTextEntry={!showPassword}
          style={styles.input}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity
          style={styles.iconContainer}
          onPress={() => setShowPassword(!showPassword)}
        >
          <Ionicons
            name={!showPassword ? "eye-off" : "eye"}
            size={24}
            color="#aca9a9"
          />
        </TouchableOpacity>
      </View>

      <CustomButton
        title={isLoading ? "Signing In..." : "Sign In"}
        onPress={signInWithEmail}
        disabled={isLoading}
      />
      <View style={styles.separatorContainer}>
        <View style={styles.separator}></View>
        <Text style={styles.separateText}>OR</Text>
        <View style={styles.separator}></View>
      </View>
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
      <View style={styles.bottomText}>
        <Text style={styles.title}>Don't have an account?</Text>
        <Text
          style={styles.signUpText}
          onPress={() => {
            router.replace("/signup");
          }}
        >
          Sign Up
        </Text>
      </View>
    </View>
  );
};

export default SignInScreen;

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
    borderRadius: 8,
  },
  iconContainer: {
    padding: 5,
    position: "absolute",
    right: 12,
    zIndex: 1,
    top: 5,
  },
  button: {
    backgroundColor: "#000",
    paddingVertical: 14,
    borderRadius: 10,
  },
  btnText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
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
    marginVertical: 10,
  },
  bottomText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
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
