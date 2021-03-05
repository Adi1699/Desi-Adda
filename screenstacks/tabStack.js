import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import appstyles from "../styles/appstyles";
import { Button, Platform } from "react-native";
import xml from '../components/svgxml'

const Tab = createBottomTabNavigator();

// screens
import HomeScreen from "../screens/matchesResult";
//import HomeScreen from "../screens/matchesResult";
import MatchesScreen from "../screens/matchesScreen";
import ResultsScreen from "../screens/statScreen";
import { SvgXml } from "react-native-svg";

const TabStack = ({ navigation }) => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? xml.homeicRed : xml.homeic;
          } else if (route.name === "My Matches") {
            iconName = focused ? xml.controllerRed : xml.controller;
          } else if (route.name === "Statistics") {
            iconName = focused ? xml.statsicRed : xml.statsic;
          } 
          return <SvgXml xml={iconName} height={size} width={size} color={color}/>;
        }
      })}
      tabBarOptions={{
        activeTintColor: appstyles.primaryRed,
        inactiveTintColor: appstyles.white,
        style: {
          height: Platform.OS === "android" ? 65 : 90,
          backgroundColor: appstyles.darkThemeColor,
          borderTopColor: appstyles.primaryRed,
          borderTopWidth: 2,
          paddingTop: 5
        },
        labelStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 13,
          marginTop: 0,
          marginBottom: 8
        },
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen}  />
      <Tab.Screen name="My Matches" component={MatchesScreen} />
      <Tab.Screen name="Statistics" component={ResultsScreen} />
    </Tab.Navigator>
  );
};

export default TabStack;
