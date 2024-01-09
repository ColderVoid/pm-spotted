import React, { useEffect, useState} from 'react';
import  { FlatList, Image, SafeAreaView, ScrollView, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faThumbsUp, faComment, faEllipsis, faHeart} from '@fortawesome/free-solid-svg-icons'


const ip = "192.168.1.52" //IP adress of backend
const port = "8000" //Port of backend

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [userDetails, setUserDetails] = useState({});

  useEffect(() => {
    // Pobranie wszystkich postów
    fetch(`http://${ip}:${port}/posts/?format=json`)
      .then(response => response.json())
      .then(postsData => {
        // Zapisanie wszystkich postów
        setPosts(postsData);

        // Pobranie danych użytkownika dla każdego postu
        const promises = postsData.map(post => {
          return fetch(`http://${ip}:${port}/users/${post.user}/?format=json`)
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
                
                <View style={styles.reaction_icon}>
                  <FontAwesomeIcon icon={faHeart} color="white"/>
                </View>
                <View>
                    <Text>{post.like_count}</Text>
                  </View>
                <View style={styles.comment_icon}>
                  <FontAwesomeIcon icon={faComment} color='#003d76'/>
                </View>
                <View>
                    <Text>{post.comment_count}</Text>
                  </View>
                <View style={styles.more_icon}>
                <FontAwesomeIcon icon={faEllipsis} color="white"/>
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

    borderColor: 'white',
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
    marginLeft: 3,
    // borderWidth: 2,
    // borderRadius: 60,

    //Piotrek
    borderColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
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
    backgroundColor: '#003d76',
    borderWidth: 1,
    borderRadius: 60,
    borderColor: 'white',
    margin: 5,

    //Piotrek
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

    //Piotrek
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