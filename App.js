import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StatusBar, SafeAreaView, StyleSheet, Text, View } from "react-native";

console.log(StatusBar.currentHeight);

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.searchViewContainer}>
          <Text style={styles.textStyle}>searching</Text>
        </View>
        <View style={styles.restaurantContainer}>
          <Text style={styles.textStyle}>lists</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
  },
  restaurantContainer: {
    flex: 1,
    backgroundColor: "blue",
    borderColor: "darkblue",
    borderWidth: 2,
    padding: 10,
  },
  searchViewContainer: {
    padding: 10,
    backgroundColor: "green",
  },
  textStyle: {
    // top: 5,
    left: 10,
  },
});
