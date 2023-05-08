import { View, Text, StyleSheet } from "react-native";
import React from "react";

interface WelcomeProps {
  name: { firstName: string; lastName: string };
  age: number;
  gender: boolean;
}

const Welcome = (props: WelcomeProps) => {
  const {firstName, lastName} = props.name;
  return (
    <View style={styles.container}>
      <Text>
        Hello, {firstName} {lastName}!
      </Text>
      <Text> You are {props.age}</Text>
      <Text> You are a {props.gender ? "man" : "woman"}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Welcome;
