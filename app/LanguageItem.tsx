import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

interface LanguageItemProps {
  name: string;
  experience: string;
  logo: string;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ name, experience, logo }) => {
  console.log(logo);
  return (
    <View style={styles.card}>
      <Image source={{ uri: logo }} style={styles.logo} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.experience}><Text><b>Опыт:</b></Text> {experience}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    display: "flex",
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    backgroundColor: "white",
    width: 300,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  textContainer: {
    display: "flex",
    alignItems: "center"
  },
  name: {
    fontSize: 18,
    color: '#666',
    fontWeight: 'bold',
  },
  experience: {
    fontSize: 14,
    color: '#666',
  },
});

export default LanguageItem;
