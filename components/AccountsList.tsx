import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import AccountListItem from "./AccountListItem";

export default function AccountsList() {
  return (
    // <>
    //   <AccountListItem />
    //   <AccountListItem />
    //   <AccountListItem />
    // </>

    <FlatList
      data={[1, 2, 3]}
      contentContainerStyle={{ gap: 5 }}
      renderItem={() => <AccountListItem />}
    />
  );
}

const styles = StyleSheet.create({});
