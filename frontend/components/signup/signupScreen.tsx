import {  Text, View, Image, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../style'

const logoImgUrl = '../../media/LOGOO.png'
const atSignImgUrl = '../../media/MALPLA.png'
const lockSignImgUrl = '../../media/KLODKA.png'
const eyeSignImgUrl = '../../media/OKO.png'
const FacebookImgUrl = '../../media/fb.png'
const GoogleImgUrl = '../../media/google.png'
const AppleImgUrl = '../../media/APPLE.png'

export default function SignupScreen() {
    const navigation = useNavigation();
    const [isFocused1, setFocused1] = useState(false);
    const [isFocused2, setFocused2] = useState(false);
    const [isFocused3, setFocused3] = useState(false);
    const [isFocused4, setFocused4] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return(
        <View style = {styles.backgroundContainer}>
            <View style={styles.mainContainer}>
                <View style={styles.imgFlexbox}>
                    <Image source={require(logoImgUrl)} style={styles.logoImg}/>
                </View>
                    <View style={styles.switchSignOptionBox}>
                        <TouchableOpacity style={styles.switchSignOptionSubBoxUnselected} onPress={()=>{navigation.navigate('Login');}}>
                            <Text style={styles.signLabels}>Zaloguj się</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.switchSignOptionSubBoxSelected} onPress={()=>{navigation.navigate('Signup');}}>
                            <Text style={styles.signLabels}>Załóż konto</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.loginRegisterSection}>
                        <View style={styles.inputOuterFlexbox1}>
                            <TextInput placeholder='Imię' onFocus={() => setFocused1(true)} onBlur={() => setFocused1(false)} style={[styles.inputInnerBox, {borderColor: isFocused1 ? '#D1722A' : 'white'}]}/>
                            <TextInput placeholder='Nazwisko' onFocus={() => setFocused2(true)} onBlur={() => setFocused2(false)} style={[styles.inputInnerBox, {borderColor: isFocused2 ? '#D1722A' : 'white'}]}/>
                            <TextInput placeholder='Mail' onFocus={() => setFocused3(true)} onBlur={() => setFocused3(false)} style={[styles.inputInnerBox, {borderColor: isFocused3 ? '#D1722A' : 'white'}]}/>
                            <TextInput placeholder='Hasło' onFocus={() => setFocused4(true)} onBlur={() => setFocused4(false)} style={[styles.inputInnerBox, {borderColor: isFocused4 ? '#D1722A' : 'white'}]}/>
                        </View>
                        <TouchableOpacity style={styles.LoginBox1} onPress={()=>{navigation.navigate('Home');}}>
                            <Text style={styles.loginLabel}>
                                Zarejestruj
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
        );
    }