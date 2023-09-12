import { View, Text, Image, StyleSheet } from "react-native";
import { useState } from "react";
import Loading from "./Loading";

const styles2 = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:"#33ff77",
    },
    image: {
      width: 300,
      height: 300,
      borderRadius:20,
    
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
  
const ListDetails = ({ route }) => {
  
    const { card } = route.params;

    return (
        
    <View style={styles2.container}>
  
    <Image
      style={styles2.image}
      source={{
        uri: card.image
      }}
    />
    <Text style={styles2.text}>Name: {card.name}</Text>
    <Text style={styles2.text}>Status</Text>
    <Text >Name: {card.status}</Text>
    <Text style={styles2.text}>Species</Text>
    <Text >Name: {card.species}</Text>


  </View>
    );
}

export default ListDetails;