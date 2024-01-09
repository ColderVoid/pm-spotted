import { StyleSheet, View, Text, ScrollView } from 'react-native'
import React from 'react'

export default function head() {
    return (
        <ScrollView>
          <View style = {styles.con_post}>
            <View style = {styles.post_prof_pic}>
              <Text>Zdu</Text>
            </View>
            <View style = {styles.wiad}>
              <View style = {styles.post_header}>
                <Text style = {styles.header_content}>Imię i Nazwisko, Kierunek, Rok</Text>
              </View>
              <View style = {styles.post_content}>
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec feugiat mauris. Duis a iaculis ex</Text>
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
        marginTop: 5,
        right: 0,
        position: 'absolute'
      },
})