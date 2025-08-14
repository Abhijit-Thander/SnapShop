import { Stack } from "expo-router";
import AuthProvider from "../providers/AuthProvider";

export default function RootLayout() {
  return (
    <>
      <AuthProvider>
        <Stack>
          <Stack.Screen name="index" options={{ headerShown: false }} />
          <Stack.Screen name="(user)" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        </Stack>
        {/* <StatusBar style="dark" /> */}
      </AuthProvider>
    </>
  );
}
