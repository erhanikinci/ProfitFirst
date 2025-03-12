import { Link, Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={style.container}>
      <Stack.Screen options={{ title: "Allocations" }} />

      <Text>Allocations.</Text>

      <Link href="/allocations/new">New Allocation</Link>
      
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
