import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './src/screens/Login';
import {Feather} from '@expo/vector-icons'

const {Navigator,Screen}= createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
    <Navigator>
        <Screen
        name='home'
        component={Login}
        options={{
          tabBarIcon:({size})=><Feather name="home" size={size}/>
        }}/>
        <Screen
        name='lista'
        component={Login}
        options={{
          tabBarIcon:({size})=><Feather name="user" size={size}/>
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
