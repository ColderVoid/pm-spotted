import React from 'react'
import {
    View,
    StyleSheet,
    Text
} from 'react-native'

export default function Upper_Logo() {
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>PM SPOTTED</Text>
          <Text style={styles.heading1}>PM SPOTTED</Text>
          <Text style={styles.heading2}>PM SPOTTED</Text>
          <Text style={styles.heading3}>PM SPOTTED</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
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