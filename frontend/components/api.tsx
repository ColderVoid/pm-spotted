import React, { useEffect, useState} from 'react';
import  { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    // Pobranie wszystkich postów
    fetch('http://192.168.1.52:8000/posts/?format=json')
      .then(response => response.json())
      .then(postsData => {
        // Zapisanie wszystkich postów
        setPosts(postsData);

        // Pobranie danych użytkownika dla każdego postu
        const promises = postsData.map(post => {
          return fetch(`http://192.168.1.52:8000/users/${post.user}/?format=json`)
            .then(userResponse => userResponse.json());
        });

        Promise.all(promises)
          .then(userDataArray => {
            // Zapisanie danych użytkownika dla każdego postu
            const userDetailsMap = {};
            userDataArray.forEach((userData, index) => {
              userDetailsMap[postsData[index].user] = userData;
            });
            setUserDetails(userDetailsMap);
          })
          .catch(error => console.error('Błąd pobierania danych użytkownika', error));
      })
      .catch(error => console.error('Błąd pobierania postów', error));
  }, []);

return (
  <View>
    {posts && posts.length > 0 ? (
      posts.map(post => (
        <View style={styles.con_post} key={post.id}>
          <View>
            {userDetails[post.user] && userDetails[post.user].avatar && (
              <View>
                {/* <Text>Avatar URI: {`${userDetails[post.user].avatar}`}</Text> */}
                <Image
                  source={{ uri: `${userDetails[post.user].avatar}` }}
                  style={{ width: 50, height: 50 }}
                />
              </View>
            )}
          </View>
          <View style={styles.wiad}>
            <View style={styles.post_header}>
              {userDetails[post.user] && (
                <Text style={styles.header_content}>{userDetails[post.user].firstname} {userDetails[post.user].lastname} {post.post_date.substring(0, 10)}</Text>
              )}
            </View>
            <View style={styles.post_content}>
              <Text>{post.content}</Text>
            </View>
            <View style={styles.con_action_bar}>
              <View style={styles.action_bar}>
                <View>
                    <Text>{post.like_count}</Text>
                  </View>
                <View style={styles.reaction_icon}>
                  <Text>r</Text>
                </View>
                <View>
                    <Text>{post.comment_count}</Text>
                  </View>
                <View style={styles.comment_icon}>
                  <Text>Com</Text>
                </View>
                <View style={styles.more_icon}>
                  <Text>...</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      ))
    ) : (
      <Text>Ładowanie...</Text>
    )}
  </View>
);
    };

export default Posts;

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