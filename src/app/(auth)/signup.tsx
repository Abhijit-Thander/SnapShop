import CustomButton from "@/src/components/CustomButton";
import CustomSocialButton from "@/src/components/CustomSocialBtn";
import { router } from "expo-router";
import React from "react";
import { Alert, StyleSheet, Text, TextInput, View } from "react-native";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TextInput
        placeholder=" Confirm Password"
        secureTextEntry
        style={styles.input}
      />

      <CustomButton title="Sign Up" onPress={() => Alert.alert("Sign Up")} />
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
        <Text style={styles.title}>Already have an account?</Text>
        <Text
          style={styles.signUpText}
          onPress={() => {
            router.replace("/signin");
          }}
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
