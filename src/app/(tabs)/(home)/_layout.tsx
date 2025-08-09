import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { router, Stack } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";

const _layout = () => {
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 900,
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "SnapShop",
          headerRight: ({ tintColor }) => {
            return (
              <SimpleLineIcons
                name="handbag"
                size={22}
                color={tintColor}
                style={{ marginRight: 16 }}
                onPress={() => router.push("/cart")}
              />
            );
          },
          headerTintColor: "#000",
        }}
      />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
