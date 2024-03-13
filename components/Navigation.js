import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from Expo

import HomeScreen from "./HomeScreen";
import BookAService from "./BookAService";
import BikeOrderForm from "./BuildABike";

const Tab = createBottomTabNavigator();

const Navigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;

        if (route.name === "Home") {
          iconName = "home-outline";
        } else if (route.name === "Book A Service") {
          iconName = "book-outline";
        } else if (route.name === "Build A Bike") {
          iconName = "bicycle-outline";
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
    tabBarOptions={{
      activeTintColor: "blue",
      inactiveTintColor: "gray",
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Book A Service" component={BookAService} />
    <Tab.Screen name="Build A Bike" component={BikeOrderForm} />
  </Tab.Navigator>
);

export default Navigation;
