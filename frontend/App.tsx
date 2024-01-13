import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Head from './components/header.tsx'
import Post from './components/posts.tsx'
import Notss from './components/notifications.tsx'
import LoginScreen from './components/loginScreen.tsx'
import SignupScreen from './components/signupScreen.tsx'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            display: 'none'
          }}}>
          <Tab.Screen name="Home" component={HomeScreen}/>
          <Tab.Screen name="Notifications" component={Nots}/>
          <Tab.Screen name="Login" component={LoginScreen}/>
          <Tab.Screen name="Signup" component={SignupScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

function HomeScreen() {
  return(
    <SafeAreaView style = {{backgroundColor: '#333333', flex: 1}}>
      <Head/>
      <Post/>
    </SafeAreaView>
  )
}

function Nots() {
  return (
    <Notss/>
  )
}