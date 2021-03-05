import React from 'react'
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    Image,
    Dimensions,
    TextInput,
    TouchableWithoutFeedback,
    ScrollView,
    Platform
} from 'react-native'
import { Button, Checkbox } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons'
import { SvgXml } from 'react-native-svg'

// appstyles
import appstyles from '../styles/appstyles'
import xml from "../components/svgxml"
// context
import { AuthContext } from '../components/context'

const dimensions = Dimensions.get('window')

const registerSceen = ({ navigation }) => {
    const [regdata, setregdata] = React.useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        cpassword: ""
    })
    const [checked, setChecked] = React.useState(Platform.OS === 'ios' ? true : false);
    const { signUp } = React.useContext(AuthContext)

    const registerHandle = (username, email, password, password2) => {
        signUp(username, email, password, password2);
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageBackground}>
                <Image blurRadius={2} style={styles.backImage} source={require("../assets/images/loginback.jpg")} />
                <View style={styles.mask}>
                    <Image source={require("../assets/logo/logo.png")} />
                </View>
            </View>
            <ScrollView style={styles.registerForm}>
                <Text style={styles.formTitle}>Signup</Text>
                <View style={styles.FormElement}>
                    <View style={[appstyles.flexrow]}><Text style={{ fontFamily: appstyles.fontLight, marginBottom: 6, color: '#fff' }}>First Name</Text><Text style={styles.important}>*</Text></View>
                    <View style={styles.textInputIcon}>
                        <Icon name="person-outline" size={25} color="#999999" />
                    </View>
                    <TextInput autoCompleteType="email" placeholder="First Name" placeholderTextColor={appstyles.colorGrey} style={styles.textInput} onChangeText={text => setregdata({ ...regdata, fname: text })} value={regdata.fname} />
                </View>
                <View style={styles.FormElement}>
                    <View style={[appstyles.flexrow]}><Text style={{ fontFamily: appstyles.fontLight, marginBottom: 6, color: '#fff' }}>Last Name</Text><Text style={styles.important}>*</Text></View>
                    <View style={styles.textInputIcon}>
                        <Icon name="person-outline" size={25} color="#999999" />
                    </View>
                    <TextInput autoCompleteType="email" placeholder="Last Name" placeholderTextColor={appstyles.colorGrey} style={styles.textInput} onChangeText={text => setregdata({ ...regdata, lname: text })} value={regdata.lname} />
                </View>
                <View style={styles.FormElement}>
                    <View style={[appstyles.flexrow]}><Text style={{ fontFamily: appstyles.fontLight, marginBottom: 6, color: '#fff' }}>Email</Text><Text style={styles.important}>*</Text></View>
                    <View style={styles.textInputIcon}>
                        <Icon name="mail-outline" size={25} color="#999999" />
                    </View>
                    <TextInput autoCompleteType="email" placeholder="Email" placeholderTextColor={appstyles.colorGrey} style={styles.textInput} onChangeText={text => setregdata({ ...regdata, email: text })} value={regdata.email} />
                </View>
                <View style={styles.FormElement}>
                    <View style={[appstyles.flexrow]}><Text style={{ fontFamily: appstyles.fontLight, marginBottom: 6, color: '#fff' }}>Password</Text><Text style={styles.important}>*</Text></View>
                    <View style={styles.textInputIcon}>
                        <Icon name="key-outline" size={25} color="#999999" />
                    </View>
                    <TextInput autoCompleteType="email" secureTextEntry={true} placeholder="Password" placeholderTextColor={appstyles.colorGrey} style={styles.textInput} onChangeText={text => setregdata({ ...regdata, password: text })} value={regdata.password} />
                </View>
                <View style={styles.FormElement}>
                    <View style={[appstyles.flexrow]}><Text style={{ fontFamily: appstyles.fontLight, marginBottom: 6, color: '#fff' }}>Confirm Password</Text><Text style={styles.important}>*</Text></View>
                    <View style={styles.textInputIcon}>
                        <Icon name="key-outline" size={25} color="#999999" />
                    </View>
                    <TextInput autoCompleteType="email" secureTextEntry={true} placeholder="Confirm Password" placeholderTextColor={appstyles.colorGrey} style={styles.textInput} onChangeText={text => setregdata({ ...regdata, cpassword: text })} value={regdata.cpassword} />
                </View>
                <View style={styles.actionContainer}>
                    <View style={[appstyles.flexrow, { alignItems: 'center', marginVertical: 10 }]}>
                        <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)} uncheckedColor={appstyles.primaryRed} color={appstyles.primaryRed} />
                        <Text style={{ color: appstyles.white, marginRight: 5 }}>I accept</Text>
                        <Text style={{ color: appstyles.primaryRed, fontSize: 16 }}>Terms and Condition</Text>
                    </View>
                    <Button onPress={() => registerHandle(regdata.email, regdata.email, regdata.password, regdata.cpassword, regdata.fname, regdata.lname)} color={appstyles.white} style={styles.siginButton} labelStyle={styles.siginLabel}>
                        Register
                    </Button>
                    <View style={styles.positionedOrContainer}>
                        <Text style={styles.positionedOr}>Or</Text>
                    </View>
                </View>
                <View style={styles.thirdPartyAuthContainer}>
                    <Text style={styles.tpauthtitle}>Signup with</Text>
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
                    <View style={[appstyles.flexrow, { marginBottom: 50 }]}>
                        <Text style={{ color: appstyles.colorGrey, fontFamily: appstyles.fontLight, fontSize: 16 }}>Already have an account ?</Text>
                        <TouchableWithoutFeedback onPress={() => navigation.navigate('login')}>
                            <Text style={styles.signNavigation}>Sign in</Text>
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
        alignItems: 'center',
        backgroundColor: appstyles.darkThemeColor
    },
    imageBackground: {
        width: dimensions.width,
        height: dimensions.height / 3,
        position: 'relative'
    },
    backImage: {
        width: "100%",
        height: "100%",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        zIndex: -1,
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
    registerForm: {
        flex: 1,
        width: dimensions.width,
        paddingHorizontal: 30,
        borderColor: appstyles.colorGrey,
        borderTopWidth: 1,
        paddingTop: 10,
    },
    formTitle: {
        fontSize: 20,
        fontFamily: "Roboto-Regular",
        marginVertical: 10,
        marginBottom: 0,
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
    textInputIcon: {
        position: 'absolute',
        top: Platform.OS === "ios" ? 30 : 32,
        left: 10,
        flexDirection: 'row',
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
    actionContainer: {
        borderBottomWidth: 1,
        borderColor: appstyles.colorGrey,
        paddingBottom: 25,
        position: 'relative'
    },
    siginButton: {
        backgroundColor: appstyles.buttonColor,
        borderRadius: 5,
        elevation: 5,
        width: "100%",
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
        alignItems: 'center'
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
        marginLeft: 5
    }
})

export default registerSceen
