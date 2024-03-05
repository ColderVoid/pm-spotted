import React, { useEffect, useState} from 'react';
import  { Image, Text, View, } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faComment, faEllipsis, faHeart} from '@fortawesome/free-solid-svg-icons'
import { styles } from './apiStyle.tsx'

const ip = "192.168.0.94" //IP adress of backend
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