import { View, Text, StyleSheet, ScrollView,SafeAreaView } from "react-native";
import React from "react";
import Header from "./Header";
import Slider from "./Slider";
import Categories from "./Categories";
import BusinessList from "./BusinessList";
export default function HomeScreen() {
  return (
    // <SafeAreaView>
      
        <View>
        <ScrollView>
          {/* Header */}
          <Header />
          <View style={{ padding: 20 }}>
            {/* Slider */}
            <Slider />
            {/* category */}
            <Categories />
            {/* business list */}
            <BusinessList />
          </View>
          </ScrollView>
        </View>
     
    // </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  homeContainer: {
    marginTop: 20,
    marginLeft: 10,
  },
});
