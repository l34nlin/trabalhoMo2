import { useState } from "react";
import { TextInput, View, Text , Button} from "react-native";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()
    const navigation = useNavigation(); 

    const TestLogin= ()=>{
        if (email ==="1" && password==="1"){
        navigation.navigate("Home");
      
        }else{
                alert("email ou sennha incorretos")
        }}
    const styles = StyleSheet.create({
        container2: {
         
          height: 40,
          margin: 6,
          borderWidth: 1,
          borderRadius:8,
          padding: 10,
        },
      });
    return (
        <View >
    <View >
        <Text>LOGiN</Text>
        <TextInput 
        style={styles.container2}
        placeholder="email"
        value={email}
        onChangeText={setEmail}/>
        <TextInput
        style={styles.container2}
        placeholder="senha"
        value={password}
        onChangeText={setPassword}/>
        <Button style={styles.container2} title="login" onPress={TestLogin}/>
    </View>
    </View>
    );
}

export default Login;