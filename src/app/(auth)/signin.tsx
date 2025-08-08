import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignInScreen = () => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        keyboardType="email-address"
        style={styles.input}
      />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <TouchableOpacity style={styles.button} activeOpacity={0.8}>
        <Text style={styles.btnText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
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
});
