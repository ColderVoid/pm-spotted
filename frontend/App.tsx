import { SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Head from './components/header.tsx'
import Post from './components/posts.tsx'


export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={isDarkMode ? styles.darkScreen : styles.whiteScreen}>
        <Head/>
        <Post/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // ogólny motyw apki, potem do zmiany pod przycisk w ustawieniach
  darkScreen: {
    backgroundColor: '#1F1B24',
    flex: 1,
  },
  whiteScreen: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
})