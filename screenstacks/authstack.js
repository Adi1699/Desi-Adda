import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import splashScreen from "../screens/splashScreen";
import loginScreen from "../screens/loginScreen";
import registerScreen from "../screens/registerScreen";
import accVerificationScreen from "../screens/accVerificationScreen";
import ProfileSetup from "../screens/NewProfile";

const AuthStack = createStackNavigator();

const AuthStackSreens = ({ navigation }) => {
  return (
    <AuthStack.Navigator headerMode="none" initialRouteName="splash">
      <AuthStack.Screen name="splash" component={splashScreen} />
      <AuthStack.Screen name="login" component={loginScreen} />
      <AuthStack.Screen name="register" component={registerScreen} />
      <AuthStack.Screen name="verification" component={accVerificationScreen} />
      <AuthStack.Screen name="profilesetup" component={ProfileSetup} />
    </AuthStack.Navigator>
  );
};

export default AuthStackSreens;
