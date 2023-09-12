import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, Image } from "react-native";
import axios from "axios";
import Loading from "./Loading";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
const styles3 = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor:"#44fc77",
  
    },
    image: {
      width: 400,
      height: 400,
      borderRadius:20,
      marginTop:20
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

const Lista = () => {
    const [api2,setApi2]= useState([]);
    const [loading,setLoading]= useState(false)
    const navigation =useNavigation();
    const fetchApi = async () => {
        try {
          const response = await axios.get('https://rickandmortyapi.com/api/character')
          const jsonData = response.data.results
          setApi2(jsonData)
          console.log(api2)
          setLoading(True)
        } catch (error) {
          console.log(error)
        }
      }
      useEffect(() => {
        fetchApi()
      }, [])
      const handleImageClick2 = (card) => {

        navigation.navigate("ListDetails", { card });
      };
    
      const RenderApi = ({ card }) => {
        return (
          <View >
            
          <TouchableOpacity onPress={() => handleImageClick2(card)}>
            <Image
              style={styles3.image}
              source={{
                uri: card.image
              }}
            /></TouchableOpacity>
            <View >
            <Text style={styles3.text}>
                {card.name}</Text>
  
            </View>
          </View>
        )}
    return (
      <View style={styles3.container}>
        <SafeAreaView >
        <StatusBar />
        <FlatList
       data={api2}
       renderItem={({ item }) => <RenderApi card={item} />}
        />
        {!loading && <Loading/>}
      </SafeAreaView>
      </View>
    );
}

export default Lista;