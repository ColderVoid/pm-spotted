import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import Api from '../api/api.tsx'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faHeart, faComment, faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { styles } from '../style.tsx'

export default function Posts() {
    return (
        <ScrollView style= {{backgroundColor:'#262626'}}>
          <View style = {styles.con_post1}>
          <View style = {styles.post_prof_pic1}>
              <Image source={require('../../media/user2.png')}
              style={styles.avatarimage1}/>
            </View>
            <View style = {styles.wiad1}>
              <View style = {styles.post_header1}>
                <Text style = {styles.header_content1}>Kasia Nowak, Informatyka, I</Text>
              </View>
              <View style = {styles.post_content1}>
                <Text>Hej #PMspotted! Chciałam podziękować tajemniczemu dobrze ubranemu programiście, który zawsze ratuje mi skórę na wykładach z algorytmów! Bez niego bym pewnie już dawno zemdlała przy tym kodzie. Ktoś wie, kto to może być? 💻👩‍💻 #ŻycieNaInformatyce</Text>
              </View>
              <View style = {styles.con_action_bar1}>
                <View style = {styles.action_bar1}>
                  <View style = {styles.reaction_icon1}>
                    <FontAwesomeIcon icon={faHeart} color="white"/>
                  </View>
                 <View style = {styles.comment_icon1}>
                    <FontAwesomeIcon icon={faComment} color='#003d76'/>
                  </View>
                  <View style = {styles.more_icon1}>
                    <FontAwesomeIcon icon={faEllipsis} color="white"/>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style = {styles.con_post1}>
            <View style = {styles.post_prof_pic1}>
              <Image source={require('../../media/user3.png')}
              style={styles.avatarimage1}/>
            </View>
            <View style = {styles.wiad1}>
              <View style = {styles.post_header1}>
                <Text style = {styles.header_content1}>Tomasz Wójcik, Zarządzanie i Inżynieria Produkcji, III</Text>
              </View>
              <View style = {styles.post_content1}>
                <Text>Cześć #PMspotted! Dziś spotkałem kogoś na korytarzu, kto świetnie zorganizował prezentację na seminariach z zarządzania projektami. Chciałbym się dowiedzieć, kto to był, bo chciałbym podziękować za ciekawą i pouczającą prezentację! 📊🙌 #ZarządzanieProdukcją</Text>
              </View>
              <View style = {styles.con_action_bar1}>
                <View style = {styles.action_bar1}>
                  <View style = {styles.reaction_icon1}>
                    <FontAwesomeIcon icon={faHeart} color="white"/>
                  </View>
                 <View style = {styles.comment_icon1}>
                    <FontAwesomeIcon icon={faComment} color='#003d76'/>
                  </View>
                  <View style = {styles.more_icon1}>
                    <FontAwesomeIcon icon={faEllipsis} color="white"/>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style = {styles.con_post1}>
          <View style = {styles.post_prof_pic1}>
              <Image source={require('../../media/user1.png')}
              style={styles.avatarimage1}/>
            </View>
            <View style = {styles.wiad1}>
              <View style = {styles.post_header1}>
                <Text style = {styles.header_content1}>Marta Szymańska, Psychologia, II</Text>
              </View>
              <View style = {styles.post_content1}>
                <Text>Hej #PMspotted! Dzisiaj miałam sesję z psychologii klinicznej, a moja koleżanka z roku okazała się niesamowicie pomocna i zrozumiała. Ktoś zna Paulinę Kowalską z semestru 4? Chciałabym jej osobiście podziękować za wsparcie! 🧠💙 #PsychologiaUczelni</Text>
              </View>
              <View style = {styles.con_action_bar1}>
                <View style = {styles.action_bar1}>
                  <View style = {styles.reaction_icon1}>
                    <FontAwesomeIcon icon={faHeart} color="white"/>
                  </View>
                 <View style = {styles.comment_icon1}>
                    <FontAwesomeIcon icon={faComment} color='#003d76'/>
                  </View>
                  <View style = {styles.more_icon1}>
                    <FontAwesomeIcon icon={faEllipsis} color="white"/>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <Api/>
        </ScrollView>
    )
}