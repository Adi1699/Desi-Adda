import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

import appstyles from "./styles/appstyles";
import { AuthContext } from "./components/context";

// screens
import AuthStackSreens from "./screenstacks/authstack";
import MainStackScreens from "./screenstacks/mainstack";
import { Easing } from "react-native-reanimated";

export default function App() {
  let [fontsLoaded] = useFonts({
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Light": require("./assets/fonts/Roboto-Light.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
  });

  const initialLoginState = {
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "LOGIN":
        return {
          ...prevState, 
          userName: action.id,
          userToken: action.token,
        };
      case "LOGOUT":
        return {
          ...prevState,
          userName: null,
          userToken: null,
        };
      case "REGISTER":
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
        };
      case "RETRIEVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: (userName, password) => {
        let userToken;
        userToken = null;
        axios
          .post("http://www.desiaddaes.com/api/auth/login/", {
            "username": `${userName}`,
            "password": `${password}`,
          },{
            headers: {"Content-Type":"application/json"},
            responseType: "json"
          })
          .then(async function (response) {
            if (response.status === 200) {
              try {
                userToken = response.data.key;
                await AsyncStorage.setItem("userToken", userToken);
                dispatch({ type: "LOGIN", id: userName, token: userToken });
              } catch (e) {
                console.log(e);
              }
            }
          })
          .catch(err => {
            console.log(err.message);
          });
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
      signUp: async (username, email, password, password2, firstname, lastname) => {
        let userToken = null
        axios.post("http://www.desiaddaes.com/api/auth/registration/",{
          "username": `${username}`,
          "email": `${email}`,
          "password1": `${password}`,
          "password2": `${password2}`,
          "first_name": `${firstname}`,
          "last_name": `${lastname}`
        },{
          headers: {"Content-Type": "application/json"}
        }).then(async(res) => {
          if(res.status === 201){
            console.log("Created Successfully")
            try {
              userToken = res.data.key;
              await AsyncStorage.setItem("userToken", userToken);
              dispatch({ type: "LOGIN", id: username, token: userToken });
            } catch (e) {
              console.log(e);
            }
          } else {
            console.log(res)
          }
        }).catch(err => {
          console.log(err.message);
        })
      },
    }),
    []
  );

  React.useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem("userToken");
        dispatch({ type: "RETRIEVE_TOKEN", token: userToken });
      } catch (e) {
        console.log(e);
      }
    }, 1000);
  }, []);

  if (!fontsLoaded) {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: appstyles.primaryColor,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "black" }}>Fonts not Loaded</Text>
      </SafeAreaView>
    );
  } else {
    return (
      <AuthContext.Provider value={authContext}>
        <SafeAreaProvider>
          <NavigationContainer>
            {loginState.userToken !== null ? (
              <MainStackScreens />
            ) : (
              <AuthStackSreens />
            )}
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthContext.Provider>
    );
  }
}
