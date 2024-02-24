import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NATIVE_STACK_SCREEN_NAME } from "@/constants";
import { WelcomeScreen } from "@/screens";
import { useWelcomeStore } from "@/store";

import { BottomTabNavigator } from "./bottom-tab-navigator";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  const { showWelcome } = useWelcomeStore();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {showWelcome ? (
          <Stack.Screen
            name={NATIVE_STACK_SCREEN_NAME.WELCOME}
            component={WelcomeScreen}
          />
        ) : (
          <Stack.Screen
            name={NATIVE_STACK_SCREEN_NAME.BOTTOM_TAB}
            component={BottomTabNavigator}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
