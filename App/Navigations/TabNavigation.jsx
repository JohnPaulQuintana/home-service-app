import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/HomeScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";
import BookingScreen from "../Screens/BookingScreen/BookingScreen";
import Colors from "../Utils/Colors/Colors";
import { FontAwesome, AntDesign } from '@expo/vector-icons';
const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor:Colors.PRIMARYA }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={color}>Home</Text>,
          tabBarIcon:({color,size})=>(<FontAwesome name="home" size={size} color={color} />),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({ color }) => <Text style={color}>Profile</Text>,
          tabBarIcon: ({color,size})=>(<FontAwesome name="user-circle-o" size={size} color={color} />),
        }}
      />
      <Tab.Screen name="Booking" 
        component={BookingScreen} 
        options={{
            tabBarLabel: ({ color }) => <Text style={color}>Booking</Text>,
            tabBarIcon: ({color,size})=>(<FontAwesome name="bookmark" size={size} color={color} />),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
   
})