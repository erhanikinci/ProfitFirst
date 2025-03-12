import { View, Text, StyleSheet, Button, TextInput } from "react-native";
import React, { useState } from "react";
import AccountsList from "@/components/AccountsList";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function AccountsScreen() {

  const [name, setName] = useState('')
  const [cap, setCap] = useState('')
  const [tap, setTap] = useState('')

  const createAccount = () => {
    console.warn('Create account')
  }
  return (
    <View style={{ gap: 5, padding: 5 }}>
      <View style={styles.header}>
        <Text>Name</Text>
        <Text>CAP</Text>
        <Text>TAP</Text>
      </View>

      <AccountsList />

      <View style={styles.inputRow}>
        <TextInput placeholder="Name" style={styles.input} value={name} onChangeText={setName} />
        <TextInput placeholder="CAP %" style={styles.input} value={cap} onChangeText={setCap} />
        <TextInput placeholder="TAP %" style={styles.input} value={tap} onChangeText={setTap} />
        {/* <AntDesign name="check" size={20} color="green" /> */}
      </View>

      <Button title="Add account" onPress={createAccount} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
  },
  inputRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "white",
  },
  input: {
    flex: 1,
  }
});
