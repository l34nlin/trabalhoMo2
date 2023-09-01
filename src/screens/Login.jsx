import { useState } from "react";
import { TextInput, View, Text , Button} from "react-native";
import { StyleSheet } from "react-native";

const Login = () => {
    const [email,setEmail]= useState()
    const [password,setPassword]= useState()

    const TestLogin= ()=>{
        if (email ==="seila@gmail.com" && password==="12345678"){
                alert("email e senha corretos")
        }else{
                alert("email ou sennha incorretos")
        }}
    const styles = StyleSheet.create({
        container2: {
          backgroundColor:"#0fc",
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