import { SafeAreaView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'

export default function App() {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <SafeAreaView style={isDarkMode ? styles.darkScreen : styles.whiteScreen}>
        <View style={styles.container}>
          <Text style={styles.heading}>PM SPOTTED</Text>
          <Text style={styles.heading1}>PM SPOTTED</Text>
          <Text style={styles.heading2}>PM SPOTTED</Text>
          <Text style={styles.heading3}>PM SPOTTED</Text>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center'
  },
  darkScreen: {
    backgroundColor: '#222222',
    flex: 1,
    alignItems: 'center'
  },
  whiteScreen: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center'
  },
  heading: {
    color: '#004076',
    fontSize: 28,
    letterSpacing: 1,
    position: 'absolute',
    textShadowColor: '#FFFFFF',
    fontWeight: 'bold',
    textShadowOffset: {
      width: 1,
      height: 1,
    },
    textShadowRadius: 1
  },
  heading1: {
    color: '#004076',
    fontSize: 28,
    letterSpacing: 1,
    fontWeight: 'bold',
    position: 'absolute',
    textShadowColor: '#FFFFFF',
    textShadowOffset: {
      width: -1,
      height: 1,
    },
    textShadowRadius: 1
  },
  heading2: {
    color: '#004076',
    fontSize: 28,
    letterSpacing: 1,
    fontWeight: 'bold',
    position: 'absolute',
    textShadowColor: '#FFFFFF',
    textShadowOffset: {
      width: -1,
      height: -1,
    },
    textShadowRadius: 1
  },
  heading3: {
    color: '#004076',
    fontSize: 28,
    letterSpacing: 1,
    fontWeight: 'bold',
    position: 'absolute',
    textShadowColor: '#FFFFFF',
    textShadowOffset: {
      width: 1,
      height: -1,
    },
    textShadowRadius: 1,
  }
})