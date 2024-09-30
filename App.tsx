import { useFonts } from "expo-font";
import { StatusBar, View } from "react-native";
import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { GluestackUIProvider, Text } from "@gluestack-ui/themed";
import { config } from "./config/gluestack-ui.config";
import { Routes } from "./src/routes";
import { AuthContext, AuthContextProvider } from "@contexts/AuthContext";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_700Bold, Roboto_400Regular });

  return (
    <GluestackUIProvider config={config}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <View />}
      </AuthContextProvider>
    </GluestackUIProvider>
  );
}
