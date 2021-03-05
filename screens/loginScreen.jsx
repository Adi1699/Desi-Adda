import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Dimensions,
    Image,
    TextInput,
    ScrollView,
    TouchableWithoutFeedback,
    Platform
} from 'react-native';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import { SvgXml } from 'react-native-svg'

// app styles
import appstyles from '../styles/appstyles'
import xml from "../components/svgxml"

// Context
import { AuthContext } from "../components/context"

// constants
const dimensions = Dimensions.get('window')

const loginScreen = ({ navigation }) => {
    const [logindata, setlogindata] = React.useState({
        email: "",
        password: ""
    })
    const { signIn } = React.useContext(AuthContext);

    const loginHandle = (username, password) => {
        signIn(username, password);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageBackground}>
                <Image blurRadius={2} style={styles.backImage} source={require("../assets/images/loginback.jpg")} />
                <View style={styles.mask}>
                    <Image source={require("../assets/logo/logo.png")} />
                </View>
            </View>
            <ScrollView style={styles.loginForm}>
                <Text style={styles.screenTitle}>Login</Text>
                <View style={styles.FormElement}>
                    <View style={[appstyles.flexrow]}><Text style={{ fontFamily: appstyles.fontLight, marginBottom: 6, color: '#fff' }}>Username</Text><Text style={styles.important}>*</Text></View>
                    <View style={styles.textInputIcon}>
                        <Icon name="mail-outline" size={25} color="#999999" />
                    </View>
                    <TextInput autoCompleteType="email" placeholder="Email" placeholderTextColor={appstyles.colorGrey} style={styles.textInput} onChangeText={text => setlogindata({ ...logindata, email: text })} value={logindata.email} />
                </View>
                <View style={styles.FormElement}>
                    <View style={[appstyles.flexrow]}><Text style={{ fontFamily: appstyles.fontLight, marginBottom: 6, color: '#fff' }}>Password</Text><Text style={styles.important}>*</Text></View>
                    <View style={styles.textInputIcon}>
                        <Icon name="key-outline" size={25} color="#999999" />
                    </View>
                    <TextInput autoCompleteType="password" placeholderTextColor={appstyles.colorGrey} placeholder="Password" secureTextEntry={true} style={styles.textInput} onChangeText={text => setlogindata({ ...logindata, password: text })} value={logindata.password} />
                </View>
                <View style={styles.actionContainer}>
                    <TouchableWithoutFeedback>
                        <Text style={{ fontFamily: appstyles.fontLight, color: appstyles.colorGrey, marginVertical: 20 }}>Forgot password ?</Text>
                    </TouchableWithoutFeedback>
                    <Button onPress={() => { loginHandle(logindata.email, logindata.password) }} color={appstyles.white} style={styles.siginButton} labelStyle={styles.siginLabel}>
                        Sign in
                    </Button>
                    <View style={styles.positionedOrContainer}>
                        <Text style={styles.positionedOr}>Or</Text>
                    </View>
                </View>
                <View style={styles.thirdPartyAuthContainer}>
                    <Text style={styles.tpauthtitle}>Login with</Text>
                    <View style={[appstyles.flexrow, styles.socialauths]}>
                        <TouchableWithoutFeedback>
                            <SvgXml
                                xml={xml.facebook}
                                width={40}
                                height={40}
                                style={styles.svgContainer}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <SvgXml
                                xml={xml.google}
                                width={40}
                                height={40}
                                style={styles.svgContainer}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <SvgXml
                                xml={xml.discord}
                                width={40}
                                height={40}
                                style={styles.svgContainer}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    <View style={appstyles.flexrow}>
                        <Text style={{ color: appstyles.colorGrey, fontFamily: appstyles.fontLight, fontSize: 16 }}>Don't have an account ?</Text>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('register')}>
                            <Text style={styles.signNavigation}>Sign up</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appstyles.darkThemeColor,
        alignItems: 'center',
    },
    imageBackground: {
        width: dimensions.width,
        height: dimensions.height / 3,
        position: 'relative'
    },
    mask: {
        height: '100%',
        width: '100%',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    backImage: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: -1,
    },
    loginForm: {
        flex: 1,
        width: dimensions.width,
        paddingHorizontal: 30,
        borderColor: appstyles.colorGrey,
        borderTopWidth: 1,
        paddingTop: 10,
    },
    screenTitle: {
        fontSize: 20,
        fontFamily: "Roboto-Regular",
        marginVertical: 10,
        color: appstyles.white
    },
    FormElement: {
        marginTop: 15,
        width: '100%',
        position: 'relative'
    },
    important: {
        color: appstyles.primaryRed,
        opacity: .5,
        marginLeft: 5
    },
    textInput: {
        borderColor: appstyles.borderColorlightGrayE,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: Platform.OS === "ios" ? 12 : 5,
        fontFamily: appstyles.fontLight,
        paddingRight: 10,
        paddingLeft: 45,
        color: appstyles.white
    },
    textInputIcon: {
        position: 'absolute',
        top: Platform.OS === "ios" ? 30 : 32,
        left: 10,
        flexDirection: 'row',
    },
    actionContainer: {
        alignItems: 'flex-end',
        borderBottomWidth: 1,
        borderColor: appstyles.colorGrey,
        paddingBottom: 25,
        position: 'relative'
    },
    siginButton: {
        backgroundColor: appstyles.buttonColor,
        borderRadius: 5,
        elevation: 5,
        width: '100%'
    },
    siginLabel: {
        textTransform: 'none',
        fontFamily: 'Roboto-Bold',
        fontSize: 18,
        letterSpacing: 0
    },
    positionedOrContainer: {
        position: 'absolute',
        bottom: -25,
        height: 50,
        right: ((dimensions.width) * 50) / 100 - 65,
        width: 60,
        borderRadius: 50,
        zIndex: 10,
        backgroundColor: appstyles.darkThemeColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    positionedOr: {
        color: appstyles.colorGrey,
        fontSize: 18,
        fontFamily: appstyles.fontLight
    },
    thirdPartyAuthContainer: {
        marginTop: 30,
        alignItems: 'center',
        marginBottom: 30,
    },
    tpauthtitle: {
        color: appstyles.colorGrey,
        fontFamily: appstyles.fontLight,
        fontSize: 18
    },
    socialauths: {
        marginVertical: 25
    },
    svgContainer: {
        marginHorizontal: 18
    },
    signNavigation: {
        color: appstyles.colorGrey,
        fontFamily: 'Roboto-Bold',
        fontSize: 16,
        marginLeft: 4,
    }
});

export default loginScreen
