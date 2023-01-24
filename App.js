import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Notification from "./Notification";

export default function App() {
  return (
    <View style={styles.container}>
      <Notification />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
