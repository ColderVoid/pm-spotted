import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import Upper_Logo from './components/upper_Logo'

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={isDarkMode ? styles.darkScreen : styles.whiteScreen}>
        <View>
          <Upper_Logo/>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  darkScreen: {
    backgroundColor: '#222222',
    flex: 1,
    alignItems: 'center'
  },
  whiteScreen: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center'
  }
})

export default App;