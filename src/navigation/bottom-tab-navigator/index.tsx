import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { BOTTOM_TAB_SCREEN_NAME } from "@/constants";
import { InfoScreen, QiblaCompass } from "@/screens";
import { COLORS, FONTS } from "@/theme";

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: COLORS.PRIMARY,
      },
      tabBarLabelStyle: {
        fontFamily: FONTS.MEDIUM,
        color: COLORS.SLATE_50,
      },
    }}
  >
    <Tab.Screen
      name={BOTTOM_TAB_SCREEN_NAME.QIBLA_COMPASS}
      component={QiblaCompass}
      options={{
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name="compass-outline"
            size={24}
            color={focused ? COLORS.SLATE_50 : COLORS.SLATE_300}
          />
        ),
      }}
    />
    <Tab.Screen
      name={BOTTOM_TAB_SCREEN_NAME.INFO}
      component={InfoScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name="information-outline"
            size={24}
            color={focused ? COLORS.SLATE_50 : COLORS.SLATE_300}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
