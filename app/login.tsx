import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useAuth } from "../content/AuthContext";
import { globalStyles } from "./style";

export default function Login() {
  const router = useRouter();
  const { setEmail, setIsLoggedIn } = useAuth();

  const [emailInput, setEmailInput] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (!emailInput || !password) {
      Alert.alert("Alert", "Please fill in all fields ");
      return;
    }

    setEmail(emailInput);
    setIsLoggedIn(true);
    router.replace("/dashboard");
  };

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.card}>
        <Text style={globalStyles.title}>Welcome Back!</Text>
        <Text style={globalStyles.subtitle}>Login to continue</Text>

        <Text style={globalStyles.label}>Email</Text>
        <TextInput
          style={globalStyles.input}
          value={emailInput}
          onChangeText={setEmailInput}
          placeholder="Enter your email"
          placeholderTextColor="#B8A3D9"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={globalStyles.label}>Password</Text>
        <TextInput
          style={globalStyles.input}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
          placeholder="Enter your password"
          placeholderTextColor="#B8A3D9"
        />

        <TouchableOpacity style={globalStyles.button} onPress={handleLogin}>
          <Text style={globalStyles.buttonText}> Login </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}   
