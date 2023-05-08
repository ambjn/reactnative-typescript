import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Welcome from "./components/Welcome";
import Pet from "./components/Pet";
import PetQualities from "./components/PetQualities";

export default function App() {
  const welcome = {
    name: { firstName: "Amber", lastName: "Jain" },
    age: 22,
    gender: true, // represents male
  };
  const pet = {
    name: "Chintu",
    type: "Lizard",
  };
  const qualities = [
    {
      qualOne: pet.type,
      qualTwo: "enormose",
      qualThree:
        "scary as a mother who caught her child eating her secret stash of chocolate",
      age: 17,
    },
    {
      qualOne: "green",
      qualTwo: "sometimes yellow",
      qualThree: "potentially pink",
      age: 17,
    },
  ];
  const [message, setMessage] = useState(
    "Are these things actually true?, No one knows"
  );

  useEffect(() => {
    console.log("useEffect called");
  }, [qualities]);

  return (
    <View style={{ ...styles.container, backgroundColor: "#f5f5f5" }}>
      <Welcome name={welcome.name} age={22} gender={true} />
      <View style={{ padding: 25 }} />
      <Pet petName={pet.name} petType={pet.type} />
      <View style={{ padding: 25 }} />
      <PetQualities qualities={qualities} />
      <View style={{ padding: 25 }} />
      <View style={{ gap: 15 }}>
        <Text>{message}</Text>
        {/* <Text>{finalMessage}</Text> */}
        <Button
          title='Tap to know'
          onPress={() => {
            setMessage(
              "But I'm assuming it's true because I think all lizards change colors. But I'm too lazy to do a Google Search"
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 25,
    padding: 50,
  },
});
