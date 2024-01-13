import { StyleSheet, View, Text, ScrollView, Image} from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faComment} from '@fortawesome/free-solid-svg-icons'

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
                    <Image source={require('../media/user3.png')} 
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
                        <Image source={require('../media/user3.png')} 
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
                        <Image source={require('../media/user1.png')} 
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

const styles = StyleSheet.create({
    everything: {
        // fontFamily: 'Futura LT', nie działa, trzeba robić osobno
    },
    bigContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

        height: 80,
        width: '100%',

        backgroundColor: colors.blue,
    },
    bigText: {
        marginTop: 10,
        fontSize: 40,
        color: 'white',
        fontFamily: 'FuturaLT',
    },
    smallContainer: {
        justifyContent: 'center',

        height: 50,
        marginTop: 1,
        backgroundColor: colors.blue,

        borderTopWidth: 0.5,
        borderTopColor: 'white',
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
    },
    smallText: {
        fontSize: 30,
        color: 'white',
        marginLeft: 10,
        fontFamily: 'FuturaLT',
    },
    notificationContainer: {
        backgroundColor: colors.gray,
        paddingTop: 30,
        paddingBottom:30,
        height: 'auto',
        flex: 1,
        flexDirection: 'row',
        marginTop: 1,
        borderBottomWidth: 0.5,
        borderBottomColor: 'white',
    },
    notificationText: {
        marginTop: 15,
        fontFamily: 'FuturaLT',
        fontSize: 16
    },
    avatar: {
        width: '30%',
    },
    avatarimage: {
        borderRadius: 500,
        width: 75,
        height: 75,
        marginLeft: 20,
        borderWidth:2,
        borderColor:'white',
    },
    content: {
        width: '50%',
    },
    singleNotification: {
        width:'100%',
        flexDirection: 'row',
    },
    reaction_icon: {
        backgroundColor: colors.blue,
        borderWidth: 1,
        borderRadius: 60,
        borderColor: 'white',
        margin: 5,
        position: 'absolute',
        left:65,
        top:50,

        width: 25,
        height: 25,
        padding: 3
      },
})