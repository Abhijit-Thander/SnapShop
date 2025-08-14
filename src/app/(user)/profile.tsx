import { supabase } from "@/src/lib/supabase";
import { Redirect } from "expo-router";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

const profile = () => {
  const handelSignOut = async () => {
    await supabase.auth.signOut();
    <Redirect href="/(auth)/signin" />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.generalView}>
        <Text style={styles.title}>General</Text>
      </View>
      <Text onPress={handelSignOut} style={styles.title}>
        Log Out
      </Text>

      <View>
        <Text style={styles.title}>Settings</Text>
      </View>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
  generalView: {
    marginTop: 20,
    height: "50%",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
