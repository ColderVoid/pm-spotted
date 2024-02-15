import { View, Image } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHouse, faBell, faEnvelope, faMagnifyingGlass, faUser} from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'
import { styles } from './style'


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

