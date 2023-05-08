import { View, Text,StyleSheet } from "react-native";
import React from "react";
interface PetQualitiesProps  {
  qualities: {
    qualOne: string;
    qualTwo: string;
    qualThree: string;
    age: number;
  }[]; // array full of objects
};
const PetQualities = (props: PetQualitiesProps) => {
  return (
    <View style={styles.container}>
      {
      props.qualities.map((e, i) => {
        if (i == 0)
          return (
            <Text style={{...styles.container,columnGap:12}} key={i}>
              Your pet is {e.qualOne},{e.qualTwo},{e.qualThree}, and is {e.age}{" "}
              years old.
            </Text>
          );
        return (
          <Text key={i}>
            Your pet is {e.qualOne},{e.qualTwo},{e.qualThree}, and is still{" "}
            {e.age} years old.
          </Text>
        );
      })}
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

export default PetQualities;
