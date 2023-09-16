import { useEffect, useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View, Image,Alert } from "react-native";
import axios from "axios";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import Loading from "./Loading";
import Login from "./Login";

import CardDetails from "./CardDetails";
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    margin: 5,
    width:650,
    height:680
  },
  image: {
    width: 440,
    height: 640,
  },
  text:{
    fontSize:15,
    fontWeight:"bold",
  }
});
const Home = () => {
  const [api, setApi] = useState([]);
  const navigation = useNavigation(); 
  const [loading,setLoading]=useState(false)


  const fetchApi = async () => {
    try {
      const response = await axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php')
      const jsonData = response.data
      setApi(jsonData.data)
      console.log(api)
      setLoading(True)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchApi()
  }, [])


  const handleImageClick = (card) => {

    navigation.navigate("CardDetails", { card });
  };


  const RenderApi = ({ card }) => {
    return (
      <View style={styles.container}>
      
      <TouchableOpacity onPress={() => handleImageClick(card)}>
        <Image
          style={styles.image}
          source={{
            uri: card.card_images[0].image_url
          }}
        /></TouchableOpacity>
        <View >
        <Text style={styles.text}>
            {card.name}</Text>
        <Text>-{card.type}-</Text>
        </View>
      </View>
    )}
  return (
    <SafeAreaView>
      <StatusBar />
    
      <FlatList
        data={api}
        renderItem={({ item }) => <RenderApi card={item} />}
      />
              {!loading && <Loading/>}
    </SafeAreaView>
    );
}

export default Home;