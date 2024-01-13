import { StyleSheet, View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Api from './api.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faComment, faEllipsis} from '@fortawesome/free-solid-svg-icons'

export default function Posts() {
    return (
        <ScrollView style= {{backgroundColor:'#262626'}}>
          <View style = {styles.con_post}>
          <View style = {styles.post_prof_pic}>
              <Image source={require('../media/user2.png')}
              style={styles.avatarimage}/>
            </View>
            <View style = {styles.wiad}>
              <View style = {styles.post_header}>
                <Text style = {styles.header_content}>Kasia Nowak, Informatyka, I</Text>
              </View>
              <View style = {styles.post_content}>
                <Text>Hej #PMspotted! Chciałam podziękować tajemniczemu dobrze ubranemu programiście, który zawsze ratuje mi skórę na wykładach z algorytmów! Bez niego bym pewnie już dawno zemdlała przy tym kodzie. Ktoś wie, kto to może być? 💻👩‍💻 #ŻycieNaInformatyce</Text>
              </View>
              <View style = {styles.con_action_bar}>
                <View style = {styles.action_bar}>
                  <View style = {styles.reaction_icon}>
                    <FontAwesomeIcon icon={faHeart} color="white"/>
                  </View>
                 <View style = {styles.comment_icon}>
                    <FontAwesomeIcon icon={faComment} color='#003d76'/>
                  </View>
                  <View style = {styles.more_icon}>
                    <FontAwesomeIcon icon={faEllipsis} color="white"/>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style = {styles.con_post}>
            <View style = {styles.post_prof_pic}>
              <Image source={require('../media/user3.png')}
              style={styles.avatarimage}/>
            </View>
            <View style = {styles.wiad}>
              <View style = {styles.post_header}>
                <Text style = {styles.header_content}>Tomasz Wójcik, Zarządzanie i Inżynieria Produkcji, III</Text>
              </View>
              <View style = {styles.post_content}>
                <Text>Cześć #PMspotted! Dziś spotkałem kogoś na korytarzu, kto świetnie zorganizował prezentację na seminariach z zarządzania projektami. Chciałbym się dowiedzieć, kto to był, bo chciałbym podziękować za ciekawą i pouczającą prezentację! 📊🙌 #ZarządzanieProdukcją</Text>
              </View>
              <View style = {styles.con_action_bar}>
                <View style = {styles.action_bar}>
                  <View style = {styles.reaction_icon}>
                    <FontAwesomeIcon icon={faHeart} color="white"/>
                  </View>
                 <View style = {styles.comment_icon}>
                    <FontAwesomeIcon icon={faComment} color='#003d76'/>
                  </View>
                  <View style = {styles.more_icon}>
                    <FontAwesomeIcon icon={faEllipsis} color="white"/>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style = {styles.con_post}>
          <View style = {styles.post_prof_pic}>
              <Image source={require('../media/user1.png')}
              style={styles.avatarimage}/>
            </View>
            <View style = {styles.wiad}>
              <View style = {styles.post_header}>
                <Text style = {styles.header_content}>Marta Szymańska, Psychologia, II</Text>
              </View>
              <View style = {styles.post_content}>
                <Text>Hej #PMspotted! Dzisiaj miałam sesję z psychologii klinicznej, a moja koleżanka z roku okazała się niesamowicie pomocna i zrozumiała. Ktoś zna Paulinę Kowalską z semestru 4? Chciałabym jej osobiście podziękować za wsparcie! 🧠💙 #PsychologiaUczelni</Text>
              </View>
              <View style = {styles.con_action_bar}>
                <View style = {styles.action_bar}>
                  <View style = {styles.reaction_icon}>
                    <FontAwesomeIcon icon={faHeart} color="white"/>
                  </View>
                 <View style = {styles.comment_icon}>
                    <FontAwesomeIcon icon={faComment} color='#003d76'/>
                  </View>
                  <View style = {styles.more_icon}>
                    <FontAwesomeIcon icon={faEllipsis} color="white"/>
                  </View>
                </View>
              </View>
            </View>
          </View>
          {/* <Api/> */}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    con_post: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
      },
      wiad: {
        marginLeft: 10,
        marginRight: 5,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        width: '80%',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      post_prof_pic: {
        height: 50,
        width: 50,
        marginTop: 1,
        marginLeft: 4,
        borderColor: 'white',
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      },
      avatarimage: {
        borderColor:'white',
        borderRadius: 500,
        borderWidth:1,
        width: 50,
        height: 50,
    },
      post_header: {
        padding: 5,
      },
      header_content: {
        fontSize: 18,
        borderColor: 'white',
        borderRadius: 5,
        padding: 2,
        borderWidth: 1,
        backgroundColor: '#06446b',
      },
      post_content: {
        paddingHorizontal: 5,
        paddingTop: 3,
        height: 'auto',
      },
      con_action_bar: {
        height: 40,
        padding: 5,
        
      },
      action_bar: {
        borderTopColor: '#121212',
        borderTopWidth: 1,
        flex: 1,
        flexDirection: 'row',
      },
      reaction_icon: {
        backgroundColor: '#003d76',
        borderWidth: 1,
        borderRadius: 60,
        borderColor: 'white',
        margin: 5,
        width: 25,
        height: 25,
        padding: 3
      },
      comment_icon: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 60,
        borderColor: '#003d76',
        margin: 5,
        width: 25,
        height: 25,
        padding: 3
      },
      more_icon: {
        backgroundColor: '#003d76',
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: 60,
        borderColor: 'white',
        marginTop: 5,
        right: 0,
        position: 'absolute'
      },
})