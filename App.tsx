import { useFonts } from "expo-font";

import Navigation from "@/navigation";
import { useWelcomeStore } from "@/store";
import { useEffect } from "react";

const App = () => {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
  });

  const { initialize } = useWelcomeStore();

  useEffect(() => {
    initialize();
  }, []);

  if (!fontsLoaded) return null;

  return <Navigation />;
};

export default App;
