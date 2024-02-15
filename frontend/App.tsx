import { SafeAreaView } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Head from './components/header.tsx'
import Post from './components/posts.tsx'
import Notss from './components/notifications.tsx'
import News from './components/news.tsx'
import LoginScreen from './components/loginScreen.tsx'
import SignupScreen from './components/signupScreen.tsx'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faBell, faEnvelope, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
const Tab = createMaterialTopTabNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Head/>
      <Tab.Navigator 
        initialRouteName='Home'
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {backgroundColor:'#333333'}
          }}>
          <Tab.Screen name="Home" options={{tabBarShowIcon: true, tabBarIcon: () => <FontAwesomeIcon icon={faHouse} size={24} color="white"/>}} component={HomeScreen}/>
          <Tab.Screen name="Notifications" options={{tabBarShowIcon: true, tabBarIcon: () => <FontAwesomeIcon icon={faBell} size={24} color="white"/>}} component={Nots}/>
          <Tab.Screen name="Login"  component={LoginScreen}/>
          <Tab.Screen name="Signup" options={{tabBarShowIcon: true,}} component={SignupScreen}/>
          <Tab.Screen name="News" options={{tabBarShowIcon: true, tabBarIcon: () => <FontAwesomeIcon icon={faEnvelope} size={24} color="white"/>}} component={Newss}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

function HomeScreen() {
  return(
    <SafeAreaView style = {{backgroundColor: '#333333', flex: 1}}>
      <Post/>
    </SafeAreaView>
  )
}

function Nots() {
  return (
    <Notss/>
  )
}

function Newss() {
  return (
    <News/>
  )
}