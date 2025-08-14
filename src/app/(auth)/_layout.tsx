import { useAuth } from "@/src/providers/AuthProvider";
import { Stack } from "expo-router";
import React from "react";

const _layout = () => {
  const { session } = useAuth();

  // if (session) {
  //   return <Redirect href={"/(user)/(menu)"} />;
  // }
  return (
    <Stack
      screenOptions={{
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 28,
          fontWeight: 900,
        },
      }}
    >
      <Stack.Screen name="signin" options={{ title: "Sign In" }} />
      <Stack.Screen name="signup" options={{ title: "Create  Account" }} />
    </Stack>
  );
};

export default _layout;
