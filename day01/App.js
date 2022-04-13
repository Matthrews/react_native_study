import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
// Views, Text & Styles

export default function App() {
  const [name, setName] = useState("Jason");

  const changeName = (event) => {
    console.log("changeName", event);
    setName("matthew")
  }

  return (
    <View style={styles.container}>
      <Text>My name is {name} </Text>
      <View style={styles.btnContainer}>
        <Button title="update name" onPress={changeName} />
      </View>
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
  btnContainer: {
    marginTop: 32,
  }
});
