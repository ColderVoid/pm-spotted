import { StyleSheet, View, Image, TouchableOpacity, Button } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faBell, faEnvelope, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'

export default function head() {
  const navigation = useNavigation();
    return (
        <View>
            <View style = {styles.top_container}>
                <Image source={require('../media/pm.png')}
                style={{width: 200, height: 40}}
                />
                    <View style = {styles.lupka}>
                      <FontAwesomeIcon icon={faMagnifyingGlass} size={28} color="white"/>
                    </View>
                    <View style = {styles.profil}>
                      <FontAwesomeIcon icon={faUser} size={28} mask="circle" color="white"/>
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
    marginTop: 4,
    height: 50,
    width: '100%',
  },
  heading: {
      color: '#FFFFFF',
      fontSize: 24,
      letterSpacing: 1,
  },
  lupka: {
    right : 0,
    position: 'absolute',
    marginRight: 40,
    marginTop: 2
  },
  profil: {
    position: 'absolute',
    right : 0,
    marginRight: 1,
    marginTop: 2
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