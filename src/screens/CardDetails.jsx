import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 290,
    height: 420,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 24,
  },
  type: {
    fontSize: 16,
  },
});

const CardDetails = ({ route }) => {
  const { card } = route.params;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: card.card_images[0].image_url,
        }}
      />
      <Text style={styles.text}>Name: {card.name}</Text>
      <Text style={styles.type}>Type: {card.type}</Text>
      <Text style={styles.type}>Descricao: {card.desc}</Text>
    </View>
  );
};

export default CardDetails;
