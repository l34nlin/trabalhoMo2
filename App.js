import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import {Feather,MaterialCommunityIcons} from '@expo/vector-icons'
import Home from './src/screens/Home';
import CardDetails from './src/screens/CardDetails';
import Lista from './src/screens/Lista';
import ListDetails from './src/screens/ListDetails';

const {Navigator,Screen}= createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Navigator>
        <Screen
        name='login'
        component={Login}
        options={{
          tabBarIcon:({size})=><Feather name="user" size={size}/>
        }}/>
        <Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon:({size})=><Feather name="menu" size={size}/>
        }}/>
        
        <Screen
        name='Listas'
        component={Lista}
        options={{
          tabBarIcon:({size})=><Feather name="menu" size={size}/>
        }}/>
        <Screen
        name='ListDetails'
        component={ListDetails}
        options={{
          tabBarIcon:({size})=><Feather name="menu" size={size}/>
        }}/>
                <Screen
        name='CardDetails'
        component={CardDetails}
        options={{
          tabBarIcon:({size})=><Feather name="menu" size={size}/>
        }}/>
    </Navigator>
</NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
