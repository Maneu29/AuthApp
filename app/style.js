import { StyleSheet } from "react-native";

export const colors = {
  primary: "#9B7EBD", // Soft purple
  secondary: "#B8A3D9", // Light purple
  accent: "#D9C2F0", // Pale lavender
  background: "#F8F0FF", // Very light purple
  white: "#FFFFFF",
  text: "#4A3B5E", // Dark purple for text
  inputBackground: "#F0E6FA",
  error: "#FF8A8A",
};

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: colors.white,
    borderRadius: 25,
    padding: 30,
    width: "100%",
    maxWidth: 400,
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
    borderWidth: 2,
    borderColor: colors.secondary,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: colors.primary,
    textAlign: "center",
    marginBottom: 20,
    fontFamily: "System",
  },
  subtitle: {
    fontSize: 18,
    color: colors.secondary,
    textAlign: "center",
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    color: colors.primary,
    marginBottom: 5,
    fontWeight: "600",
  },
  text: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    backgroundColor: colors.inputBackground,
    borderRadius: 15,
    padding: 15,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: colors.secondary,
    fontSize: 16,
    color: colors.text,
    width: "100%",
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
    width: "100%",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonSecondary: {
    backgroundColor: colors.secondary,
  },
  statusBadge: {
    backgroundColor: colors.accent,
    borderRadius: 20,
    padding: 10,
    marginVertical: 10,
    alignSelf: "center",
  },
  statusText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "600",
  },
  infoBox: {
    width: "100%",
    marginVertical: 12,
    padding: 12,
    backgroundColor: colors.inputBackground,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.secondary,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  emoji: {
    fontSize: 50,
    marginBottom: 10,
  },
});
