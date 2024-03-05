import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
con_post: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
  },
wiad: {
    marginLeft: 10,
    marginRight: 5,
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
export { styles }