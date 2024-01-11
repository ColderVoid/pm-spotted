import { StyleSheet, View, Text, SafeAreaView, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faBell, faEnvelope, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'


export default function head() {
    return (
        <View>
            <View style = {styles.top_container}>
                <Image source={require('../media/pm.png')}
                style={{width: 200, height: 40}}
                />
                    <View style = {styles.lupka}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} size={24} color="white"/>
                    </View>
                    <View style = {styles.profil}>
                      <FontAwesomeIcon icon={faUser} size={24} mask="circle" color="white"/>
                    </View>
                </View>
                <View style = {styles.con_zakladki}>
                    <View  style = {[styles.zakladki_home, styles.zakladki]}>
                      <FontAwesomeIcon icon={faHouse} size={24} color="white"/>
                    </View>
                <View style = {[styles.zakladki_notifications, styles.zakladki]}>
                  <FontAwesomeIcon icon={faBell} size={24} color="white"/>
                </View>
                <View style = {[styles.zakladki_mail, styles.zakladki]}>
                <FontAwesomeIcon icon={faEnvelope} size={24} color="white"/>
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
    height: 50,
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