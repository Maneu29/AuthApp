import { useRouter } from "expo-router";
import { useEffect } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useAuth } from "../content/AuthContext";
import { globalStyles } from "./style";

export default function Dashboard() {
  const router = useRouter();
  const { email, isLoggedIn, setIsLoggedIn } = useAuth();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
    }
  }, [isLoggedIn, router]);

  const handleLogout = () => {
    setIsLoggedIn(false);
    router.replace("/login");
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Welcome!</Text>

        <View style={globalStyles.statusBadge}>
          <Text style={globalStyles.statusText}> You&apos;re logged in </Text>
        </View>

        <View style={globalStyles.infoBox}>
          <Text style={globalStyles.text}>{email}</Text>
        </View>

        <TouchableOpacity
          style={[globalStyles.button, { marginTop: 20 }]}
          onPress={() => router.push("/profile")}
        >
          <Text style={globalStyles.buttonText}> View Profile </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[globalStyles.button, globalStyles.buttonSecondary]}
          onPress={handleLogout}
        >
          <Text style={globalStyles.buttonText}> Logout </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
