import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useAuth } from "../providers/AuthProvider";

export default function RootLayout() {
  const { session } = useAuth();

  return (
    <>
      {/* <AuthProvider> */}

      <Stack>
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="(user)" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="dark" />
      {/* </AuthProvider> */}
    </>
  );
}
