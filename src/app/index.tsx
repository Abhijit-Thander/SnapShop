// import { Link, Redirect } from "expo-router";
// import {
//   ActivityIndicator,
//   Pressable,
//   StyleSheet,
//   Text,
//   View,
// } from "react-native";
// import { useAuth } from "../providers/AuthProvider";

// const Index = () => {
//   const { session, loading } = useAuth();

//   if (loading) {
//     return (
//       <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//         <ActivityIndicator size={"large"} />
//       </View>
//     );
//   }

//   if (!session) {
//     return <Redirect href={"/(auth)/signin"} />;
//   }

//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>Choose Your Type</Text>

//       <Link href="/(admin)" asChild>
//         <Pressable style={styles.btn} onPress={() => {}}>
//           <Text style={styles.adminTxt}>Go To Admin</Text>
//         </Pressable>
//       </Link>

//       <Text>Or</Text>

//       <Link href={"/(user)/(home)"} asChild>
//         <Pressable style={styles.btn} onPress={() => {}}>
//           <Text style={styles.adminTxt}>Go To User</Text>
//         </Pressable>
//       </Link>

//       <Pressable
//         onPress={() => {
//           console.log("logout");
//         }}
//         style={styles.logOutBtn}
//       >
//         <Text style={styles.adminTxt}>Logout</Text>
//       </Pressable>
//     </View>
//   );
// };

// export default Index;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#fff",
//   },
//   text: {
//     fontSize: 20,
//     marginBottom: 20,
//     fontWeight: "bold",
//   },
//   btn: {
//     padding: 12,
//     borderRadius: 8,
//     backgroundColor: "#000",
//     marginVertical: 10,
//   },
//   adminTxt: {
//     color: "#fff",
//     fontSize: 16,
//     fontWeight: "bold",
//   },
//   logOutBtn: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 8,
//     marginTop: 20,
//     backgroundColor: "#e83939ff",
//   },
// });

import { LinearGradient } from "expo-linear-gradient";
import { Link, Redirect } from "expo-router";
import React, { useRef } from "react";
import {
  ActivityIndicator,
  Animated,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from "react-native";
import { supabase } from "../lib/supabase";
import { useAuth } from "../providers/AuthProvider";

// Props for ScaleButton
interface ScaleButtonProps {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const ScaleButton: React.FC<ScaleButtonProps> = ({
  children,
  style,
  onPress,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.96,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      friction: 3,
      tension: 40,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View style={{ transform: [{ scale }] }}>
      <Pressable
        style={style}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
      >
        {children}
      </Pressable>
    </Animated.View>
  );
};

const Index: React.FC = () => {
  const { session, loading } = useAuth(); // make sure `useAuth` returns { session: Session|null, loading: boolean }

  if (loading) {
    return (
      <LinearGradient
        colors={["#14CF93", "#0c9b6b"]}
        style={styles.loadingContainer}
      >
        <ActivityIndicator size="large" color="#fff" />
      </LinearGradient>
    );
  }

  if (!session) {
    return <Redirect href={"/(auth)/signin" as any} />;
  }

  return (
    <LinearGradient
      colors={["#cf14c9", "#3ea6e3"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Choose Your Access</Text>
        <Text style={styles.subtitle}>Select your portal to continue</Text>

        <Link href={"/(admin)" as any} asChild>
          <ScaleButton style={[styles.btn, styles.adminBtn]}>
            <Text style={styles.btnText}>Go To Admin Panel</Text>
          </ScaleButton>
        </Link>

        <Text style={styles.orText}>OR</Text>

        <Link href={"/(user)/(home)" as any} asChild>
          <ScaleButton style={[styles.btn, styles.userBtn]}>
            <Text style={styles.btnText}>Go To User Dashboard</Text>
          </ScaleButton>
        </Link>

        <ScaleButton
          style={styles.logoutBtn}
          onPress={() => supabase.auth.signOut()}
        >
          <Text style={styles.logoutText}>Logout</Text>
        </ScaleButton>
      </View>
    </LinearGradient>
  );
};

export default Index;

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#000000",
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: "#f1f1f1",
    marginBottom: 30,
  },
  btn: {
    width: "80%",
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    marginVertical: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  adminBtn: {
    backgroundColor: "rgba(255, 255, 255, 0.15)",
  },
  userBtn: {
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  orText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#e6e6e6",
    marginVertical: 8,
  },
  logoutBtn: {
    marginTop: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "transparent",
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
