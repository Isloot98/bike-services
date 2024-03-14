import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    weight: 70,
    backgroundColor: "#6e0804",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
  },
  title: {
    color: "#225aa8",
    fontWeight: "bold",
    fontSize: 50,
    marginBottom: 20,
  },
});
