import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Switch } from 'react-native'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';

const logoImgUrl = '../media/LOGOO.png'
const atSignImgUrl = '../media/MALPLA.png'
const lockSignImgUrl = '../media/KLODKA.png'
const eyeSignImgUrl = '../media/OKO.png'
const FacebookImgUrl = '../media/fb.png'
const GoogleImgUrl = '../media/google.png'
const AppleImgUrl = '../media/APPLE.png'

export default function LoginScreen() {
    const navigation = useNavigation();
    const [isFocuseda, setFocuseda] = useState(false);
    const [isFocusedb, setFocusedb] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
    <View style={styles.backgroundContainer}>
        <View style={styles.mainContainer}>
            <View style={styles.imgFlexbox}>
                <Image source={require(logoImgUrl)} style={styles.logoImg}/>
            </View>
                <View style={styles.switchSignOptionBox}>
                    <TouchableOpacity style={styles.switchSignOptionSubBoxSelected} onPress={()=>{navigation.navigate('Login');}}>
                        <Text style={styles.signLabels}>Zaloguj się</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.switchSignOptionSubBoxUnselected} onPress={()=>{navigation.navigate('Signup');}}>
                        <Text style={styles.signLabels}>Załóż konto</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.loginRegisterSection}>
                    <View style={styles.inputOuterFlexbox}>
                        <TextInput placeholder='Twój mail' onFocus={() => setFocuseda(true)} onBlur={() => setFocuseda(false)} style={[styles.inputInnerBox, {borderColor: isFocuseda ? '#D1722A' : 'white'}]}/>
                        <TextInput placeholder='Hasło' onFocus={() => setFocusedb(true)} onBlur={() => setFocusedb(false)} style={[styles.inputInnerBox, {borderColor: isFocusedb ? '#D1722A' : 'white'}]}/>
                    </View>
                    <View style={styles.rememberOuterBox}>
                        <Switch
                                style={styles.switchButton}
                                trackColor={{false: '#767577', true: '#D1722A'}}
                                thumbColor={isEnabled ? 'white' : '#f4f3f4'}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                            />
                        <View style={styles.rememberInnerBox}>
                            <Text style={styles.rememberText}>
                                Zapamiętaj mnie
                            </Text>
                        </View>
                        <View style={styles.forgetInnerBox}>
                            {/* Text linking to ForgetPasswordScreen */} 
                            <Text style={styles.forgetText}>Zapomniałem hasła?</Text>
                        </View>
                    </View>
                    <TouchableOpacity style={styles.LoginBox} onPress={()=>{navigation.navigate('Home');}}>
                        <Text style={styles.loginLabel}>
                            Login
                        </Text>
                    </TouchableOpacity>
                    <View style={styles.loginOptionBox}>
                        <View style={styles.leftLine}/>
                        <Text style={styles.loginOptionLabel}>
                            Lub zaloguj się za pomocą
                        </Text>
                        <View style={styles.rightLine}/>
                    </View>
                    <View style={styles.loginOptionIconBox}>
                        <TouchableOpacity>
                            <Image style={styles.loginImg} source={require(FacebookImgUrl)}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.loginImg} source={require(GoogleImgUrl)}/>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image style={styles.loginImg} source={require(AppleImgUrl)}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    backgroundContainer:{
        backgroundColor: '#11141D',
    },
    mainContainer:{
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
        width: '80%;',
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
})