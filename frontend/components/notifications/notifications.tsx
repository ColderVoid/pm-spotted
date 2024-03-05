import { View, Text, ScrollView, Image} from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faComment} from '@fortawesome/free-solid-svg-icons'
import { styles } from '../style'

export default function Posts() {
    return (
        <ScrollView style={{backgroundColor: colors.gray}}>
          <View style={styles.everything}>
            <View style={styles.bigContainer}>
                <Text style={styles.bigText}>POWIADOMIENIA</Text>
            </View>
            <View style={styles.smallContainer}>
                <Text style={styles.smallText}>NOWE</Text>
            </View>
            <View style={styles.notificationContainer}>
                <View style={styles.avatar}>
                    <Image source={require('../../media/user3.png')} 
                    style={styles.avatarimage}></Image>
                    <View style={styles.reaction_icon}>
                        <FontAwesomeIcon icon={faHeart} color="white"/>
                    </View>
                </View>
                <View style={styles.content}>
                    <Text style={styles.notificationText}>Użytkownik jan_nie_kowalski zaobserwował twój profil.</Text>
                </View>
            </View>
            <View style={styles.smallContainer}>
                <Text style={styles.smallText}>WCZEŚNIEJSZE</Text>
            </View>
            <View style={styles.notificationContainer}>
                <View style={styles.singleNotification}>
                    <View style={styles.avatar}>
                        <Image source={require('../../media/user3.png')} 
                        style={styles.avatarimage}></Image>
                        <View style={styles.reaction_icon}>
                            <FontAwesomeIcon icon={faHeart} color="white"/>
                        </View>

                    </View>
                    <View style={styles.content}>
                        <Text style={styles.notificationText}>Użytkownik jan_nie_kowalski zaobserwował twój profil.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.notificationContainer}>
                <View style={styles.singleNotification}>
                    <View style={styles.avatar}>
                        <Image source={require('../../media/user1.png')} 
                        style={styles.avatarimage}></Image>
                        <View style={styles.reaction_icon}>
                            <FontAwesomeIcon icon={faComment} color="white"/>
                        </View>
                    </View>
                    <View style={styles.content}>
                        <Text style={styles.notificationText}>Użytkownik kysmaster69 dodał komentarz.</Text>
                    </View>
                </View>
            </View> 
          </View>
        </ScrollView>
    )
}

const colors = {
    "gray": "#262626",
    "blue": "#06446b",
}