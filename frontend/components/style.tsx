import { StyleSheet } from 'react-native'

const colors = {
    "gray": "#262626",
    "blue": "#06446b",
}

const styles = StyleSheet.create({
    // header.tsx
    top_container: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 4,
    height: 50,
    width: '100%',
  },
  heading: {
      color: '#FFFFFF',
      fontSize: 24,
      letterSpacing: 1,
  },
  lupka: {
    right : 0,
    position: 'absolute',
    marginRight: 40,
    marginTop: 2
  },
  profil: {
    position: 'absolute',
    right : 0,
    marginRight: 1,
    marginTop: 2
  },
  con_zakladki: {
    flexDirection: 'row',
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

  // notifications.tsx
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

    // api.tsx

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

    // LoginScreen.tsx

    backgroundContainer:{
        backgroundColor: '#11141D',
    },
    mainContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        width: '80%',
        height: '100%',
        backgroundColor: '#11141D',
    },
    imgFlexbox: {
        flex: 8,
        width:'100%',
    },
    logoImg:{
        flex: 1,
        width:'100%',
    },
    switchSignOptionBox:{
        flex: 1,
        flexDirection: 'row',
        width: '100%',
    },
    switchSignOptionSubBoxSelected:{
        flex: 1,
        borderBottomWidth: 5,
        borderBottomColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    switchSignOptionSubBoxUnselected:{
        flex: 1,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signLabels:{

    },
    loginRegisterSection: {
        flex: 10,
        width: '100%',
    },
    inputOuterFlexbox:{
        height: 150,
        width: '100%',
        marginBottom: 10,
    },
    inputInnerBox:{
        height: 60,
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 20,
        borderColor: 'white',
        padding: 20,
        width:'100%',
        marginTop: 20,
    },
    inputLeftSign:{
        width: 40,
        height:40,
    },
    inputRightSign:{
        width: 40,
        height:40,
    },
    inputText:{

    },
    rememberOuterBox:{
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 20,
    },
    rememberInnerBox:{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    rememberText:{

    },
    switchButton:{
        width: 50,
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    forgetInnerBox:{
        alignItems: 'flex-end',
        justifyContent: 'center',
        flex: 1,
    },
    forgetText:{
        textDecorationLine: 'underline',
    },
    LoginBox:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#D1722A',
        width:'100%',
        borderRadius: 10,
    },
    loginLabel:{

    },
    loginOptionBox:{
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftLine:{
        flex: 1, 
        height: 1, 
        backgroundColor: 'white',
    },
    loginOptionLabel:{
        width: 'auto',
        marginLeft:10, 
        marginRight:10, 
        textAlign: 'center',
    },
    rightLine:{
        flex: 1, 
        height: 1, 
        backgroundColor: 'white',
    },
    loginOptionIconBox:{
        width: '100%',
        flex: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    loginImg: {
        height: 50,
        width: 50,
        marginRight:10,
        marginLeft:10,
    },

    // Posts.tsx

    con_post1: {
        marginTop: 20,
        flex: 1,
        flexDirection: 'row',
      },
      wiad1: {
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
      post_prof_pic1: {
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
      avatarimage1: {
        borderColor:'white',
        borderRadius: 500,
        borderWidth:1,
        width: 50,
        height: 50,
    },
      post_header1: {
        padding: 5,
      },
      header_content1: {
        fontSize: 18,
        borderColor: 'white',
        borderRadius: 5,
        padding: 2,
        paddingLeft: 5,
        borderWidth: 1,
        backgroundColor: '#06446b',
      },
      post_content1: {
        paddingHorizontal: 5,
        paddingTop: 3,
        height: 'auto',
      },
      con_action_bar1: {
        height: 40,
        padding: 5,
        
      },
      action_bar1: {
        borderTopColor: '#121212',
        borderTopWidth: 1,
        flex: 1,
        flexDirection: 'row',
      },
      reaction_icon1: {
        backgroundColor: '#003d76',
        borderWidth: 1,
        borderRadius: 60,
        borderColor: 'white',
        margin: 5,
        width: 25,
        height: 25,
        padding: 3
      },
      comment_icon1: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 60,
        borderColor: '#003d76',
        margin: 5,
        width: 25,
        height: 25,
        padding: 3
      },
      more_icon1: {
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

    // singupScreen.tsx
    inputOuterFlexbox1:{
        height: 350,
        width: '100%',
        marginBottom: 10,
    },
    LoginBox1:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#D1722A',
        width:'100%',
        borderRadius: 10,
        marginBottom:20,
        marginTop:20,
    },
})

export { styles }