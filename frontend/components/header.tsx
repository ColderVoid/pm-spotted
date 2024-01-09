import { StyleSheet, View, Text, SafeAreaView } from 'react-native'
import React from 'react'

export default function head() {
    return (
        <View>
            <View style = {styles.top_container}>
                    <Text style = {styles.heading}>PM SPOTTED</Text>
                    <View style = {styles.lupka}>
                        <Text>lupka</Text>
                    </View>
                    <View style = {styles.profil}>
                        <Text>prof</Text>
                    </View>
                </View>
                <View style = {styles.con_zakladki}>
                    <View style = {[styles.zakladki_home, styles.zakladki]}>
                        <Text>a</Text>
                    </View>
                <View style = {[styles.zakladki_notifications, styles.zakladki]}>
                    <Text>a</Text>
                </View>
                <View style = {[styles.zakladki_mail, styles.zakladki]}>
                    <Text>a</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    // górna część apki
  top_container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 2,
    height: 30,
    width: '100%',
  },
  heading: {
      color: '#FFFFFF',
      fontSize: 24,
      letterSpacing: 1,
  },
  lupka: {
    backgroundColor: 'green',
    right : 0,
    width: 50,
    position: 'absolute',
    marginRight: '5%' 
  },
  profil: {
    position: 'absolute',
    backgroundColor: 'green',
    width: 50,
    right : 0,
    marginRight: '1%' 
  },
  con_zakladki: {
    flexDirection: 'row',
    marginTop: 2
  },
  zakladki: {
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: 50
  },
  zakladki_home: {
    borderBottomColor: 'blue',
    borderBottomWidth: 3

  },
  zakladki_notifications: {
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
  zakladki_mail: {
    borderBottomColor: 'white',
    borderBottomWidth: 1
  },
})