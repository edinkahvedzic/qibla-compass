import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { StatusBar } from "expo-status-bar";

import { useWelcomeStore } from "@/store";

import styles from "./styles";

export const WelcomeScreen = () => {
  const { setShowWelcome } = useWelcomeStore();

  return (
    <View style={styles.screen}>
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.heading}>
          {`Welcome to the \nQibla Compass
           `}
        </Text>
        <Text style={styles.description}>
          Discover the direction of the Qibla with our intuitive compass,
          ensuring you pray with confidence wherever you are.
        </Text>
        <Image source={require("@/assets/welcome.png")} style={styles.image} />
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => {
            setShowWelcome(false);
          }}
        >
          <Text style={styles.buttonText}>Continue to the App</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </View>
  );
};
