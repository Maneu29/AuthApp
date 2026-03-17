import { Stack } from "expo-router";
import { StatusBar, View } from "react-native";
import { AuthProvider } from "../content/AuthContext";
import { colors } from "./style";

export default function Layout() {
  return (
    <AuthProvider>
      <View style={{ flex: 1, backgroundColor: colors.background }}>
        <StatusBar
          barStyle="dark-content"
          backgroundColor={colors.background}
        />
        <Stack
          screenOptions={{
            headerStyle: {
              backgroundColor: colors.primary,
            },
            headerTintColor: colors.white,
            headerTitleStyle: {
              fontWeight: "bold",
              fontSize: 18,
            },
            headerBackTitle: "Back",
            headerTitleAlign: "center",
            contentStyle: {
              backgroundColor: colors.background,
            },
          }}
        />
      </View>
    </AuthProvider>
  );
}
