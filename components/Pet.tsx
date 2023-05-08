import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type PetProps = {
  petName: string;
  petType: string;
};

const Pet = (props:PetProps) => {
  return (
    <View style={styles.container}>
      <Text>You own a pet named {props.petName} </Text>
      <Text>The pet is a {props.petType}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Pet