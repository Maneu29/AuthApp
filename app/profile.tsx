import { useRouter } from "expo-router";
import { Text, View, TouchableOpacity } from "react-native";
import { useAuth } from "../content/AuthContext";
import { globalStyles } from "./style";

export default function Profile() {
  const router = useRouter();
  const { email, isLoggedIn } = useAuth();

  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.card}>
        
        
        <Text style={globalStyles.title}>Profile</Text>
        
        <View style={globalStyles.statusBadge}>
          <Text style={globalStyles.statusText}>
            {isLoggedIn ? " Online " : " Offline "}
          </Text>
        </View>

        <View style={globalStyles.infoBox}>
          <Text style={[globalStyles.label, { textAlign: 'center', alignSelf: 'center' }]}>Email:</Text>
          <Text style={globalStyles.text}>{email || 'Not logged in'}</Text>
        </View>

        <TouchableOpacity 
          style={[globalStyles.button, { marginTop: 20 }]}
          onPress={() => router.back()}
        >
          <Text style={globalStyles.buttonText}> Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

