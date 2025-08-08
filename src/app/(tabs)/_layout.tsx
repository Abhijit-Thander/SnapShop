import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";
import { Tabs } from "expo-router";
import React from "react";

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "#888",
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 60,
        },
        headerTitleStyle: {
          fontSize: 22,
          fontWeight: 900,
        },
        headerStyle: {
          shadowColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
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
              />
            );
          },

          headerTintColor: "#000",

          tabBarIcon: ({ color }) => {
            return <AntDesign name="home" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ color }) => {
            return <AntDesign name="appstore-o" size={22} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="favourite"
        options={{
          title: "Favourites",
          tabBarIcon: ({ color }) => {
            return <AntDesign name="hearto" size={23} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarIcon: ({ color }) => {
            return <SimpleLineIcons name="handbag" size={24} color={color} />;
          },
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "My Account",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="user-o" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default _layout;
