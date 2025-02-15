import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ConsultaCEP from "./ConsultaCEP";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <ConsultaCEP />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f4f4",
  },
  content: {
    width: "100%",
    maxWidth: 800, 
    padding: 50,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
});
