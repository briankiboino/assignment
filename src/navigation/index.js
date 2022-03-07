import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard, Statistics } from "../screens";

const Stack = createNativeStackNavigator();

const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName={"Dashboard"}
      >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Statistics" component={Statistics} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
