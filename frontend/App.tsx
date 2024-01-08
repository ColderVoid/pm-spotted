import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React,  { useEffect, useState } from 'react'
import api from "./api.tsx"
import Posts from './api.tsx'
export default function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  return (
    <SafeAreaView style={isDarkMode ? styles.darkScreen : styles.whiteScreen}>
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
        <ScrollView>
          {/* <Posts/> */}
          <View style = {styles.con_post}>
            <View style = {styles.post_prof_pic}>
              <Text>Zdu</Text>
            </View>
            <View style = {styles.wiad}>
              <View style = {styles.post_header}>
                <Text style = {styles.header_content}>Imię i Nazwisko, Kierunek, Rok</Text>
              </View>
              <View style = {styles.post_content}>
              </View>
              <View style = {styles.con_action_bar}>
                <View style = {styles.action_bar}>
                  <View style = {styles.reaction_icon}>
                    <Text>r</Text>
                  </View>
                 <View style = {styles.comment_icon}>
                    <Text>Com</Text>
                  </View>
                  <View style = {styles.more_icon}>
                    <Text>...</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style = {styles.con_post}>
            <View style = {styles.post_prof_pic}>
              <Text>Zdu</Text>
            </View>
            <View style = {styles.wiad}>
              <View style = {styles.post_header}>
                <Text style = {styles.header_content}>Imię i Nazwisko, Kierunek, Rok</Text>
              </View>
              <View style = {styles.post_content}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut placerat diam eget ipsum bibendum, eget placerat dolor lobortis. Morbi id enim orci. Sed laoreet odio quis nibh lacinia, vel finibus massa pretium. Nam maximus viverra porttitor. Aenean semper commodo massa fringilla vestibulum. Vivamus nisl odio, interdum ac sapien non, scelerisque rhoncus erat. Etiam finibus porta eros sed viverra. Praesent interdum pharetra vehicula. Praesent ac turpis dictum, tristique metus molestie, eleifend purus. Integer et velit pharetra, molestie nunc ut, aliquam purus. Nullam quis ex ut turpis hendrerit pulvinar.</Text>
              </View>
              <View style = {styles.con_action_bar}>
                <View style = {styles.action_bar}>
                  <View style = {styles.reaction_icon}>
                    <Text>r</Text>
                  </View>
                 <View style = {styles.comment_icon}>
                    <Text>Com</Text>
                  </View>
                  <View style = {styles.more_icon}>
                    <Text>...</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  // ogólny motyw apki, potem do zmiany pod przycisk w ustawieniach
  darkScreen: {
    backgroundColor: '#222222',
    flex: 1,
    color: 'white',
  },
  whiteScreen: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    color: 'black',
  },
  // górna część apki
  top_container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 5,
    height: 30,
  },
  heading: {
      fontSize: 24,
      letterSpacing: 1,
      paddingRight: '25%',
  },
  lupka: {
    backgroundColor: 'green',

    width: 50,
    marginRight: '3%'
  },
  profil: {
    backgroundColor: 'green',
    width: 50,
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
  con_post: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row'
  },
  wiad: {
    marginLeft: 10,
    marginRight: 5,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    width: '85%'
  },
  post_prof_pic: {
    height: 30,
    width: 30,
    marginTop: 1,
    marginLeft: 3,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: 'white'
  },
  post_header: {
    padding: 5,
    
  },
  header_content: {
    fontSize: 18,
    borderBottomColor: '#121212',
    borderBottomWidth: 1
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
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: 'white',
    margin: 5
  },
  comment_icon: {
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: 'white',
    margin: 5,
  },
  more_icon: {
    backgroundColor: 'blue',
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: 60,
    borderColor: 'white',
    marginLeft: '70%',
    marginTop: 5
  },
})