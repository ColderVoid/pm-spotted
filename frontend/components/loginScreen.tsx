import { Text, View, Image, TextInput, TouchableOpacity, Switch } from 'react-native'
import React, {useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './style'

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
        <View style = {styles.backgroundContainer}>
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