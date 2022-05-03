import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Home from "./screens/Home/Home/Home";
import Result from "./screens/Result/Result/Result";

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home"
          screenOptions={{ tabBarStyle: { height: 0 } }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Result" component={Result} />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
};
