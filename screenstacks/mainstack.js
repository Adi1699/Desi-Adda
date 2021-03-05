import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerContent } from "../components/DrawerContent";

import TabStack from "../screenstacks/tabStack";
import appstyles from "../styles/appstyles";

const Drawer = createDrawerNavigator();

const MainStackScreens = () => {
  return (
    <Drawer.Navigator
      drawerStyle={{
        width: "80%",
        borderRightColor: appstyles.primaryRed,
        borderRightWidth: 3,
      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <Drawer.Screen
        name="HomeStack"
        component={TabStack}
        options={{
          swipeEnabled: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainStackScreens;
