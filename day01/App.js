import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";
// Views, Text & Styles

export default function App() {
  const [name, setName] = useState("Jason");
  const [age, setAge] = useState("25");
  const [address, setAddress] = useState("Shanghai");

  const changeName = (event) => {
    console.log("changeName", event);
    setName("matthew");
  };

  return (
    <View style={styles.container}>
      <Text>Enter your address: </Text>
      <TextInput
        style={styles.inputWrapper}
        value={address}
        autoFocus
        placeholder="e.g. Florida"
        onChangeText={(text) => setAddress(text)}
      />
      <Text>Enter your age: </Text>
      <TextInput
        style={styles.inputWrapper}
        value={age}
        keyboardType="numeric"
        placeholder="e.g. 24"
        onChangeText={(text) => setAge(text)}
      />
      <Text>
        My name is {name}, I am { age } years old, and I live in { address }
      </Text>
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
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: "#777",
    borderRadius: 4,
    padding: 8,
    margin: 10,
    width: 200,
  },
});
