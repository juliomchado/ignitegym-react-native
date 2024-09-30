import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { gluestackUIConfig } from "../../config/gluestack-ui.config";
import { Box } from "@gluestack-ui/themed";
import { useContext } from "react";
import { AuthRoutes } from "./auth.routes";
import { useAuth } from "@hooks/useAuth";
export function Routes() {
  const theme = DefaultTheme;

  const { user } = useAuth();

  theme.colors.background = gluestackUIConfig.tokens.colors.gray700;

  return (
    <Box flex={1} bg="$gray700">
      <NavigationContainer>
        <AuthRoutes />
      </NavigationContainer>
    </Box>
  );
}
