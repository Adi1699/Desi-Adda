import React from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    SafeAreaView, 
    Image, 
    TextInput, 
    TouchableOpacity, 
    Platform,
    Dimensions,
    StatusBar,
    TouchableWithoutFeedback  
} from 'react-native'
import RNPickerSelect from 'react-native-picker-select';
import {Ionicons} from 'react-native-vector-icons'

// appstyles
import appstyles from "../styles/appstyles"

const NewProfile = ({navigation}) => {
    const [profiledata, setprofiledata] = React.useState({
        uname: "",
        age: null,
        gender: {
            M: true,
            F: false,
            O: false
        }
    })

    const setGender = (value) => {
        switch(value){
            case 'Male': 
            setprofiledata({...profiledata, gender: {M: true, F: false, O: false}})
            break;
            case 'Female': 
            setprofiledata({...profiledata, gender: {M: false, F: true, O: false}})
            break;
            case 'Other': 
            setprofiledata({...profiledata, gender: {M: false, F: false, O: true}})
            break;
            default : 
            setprofiledata({...profiledata, gender: {M: true, F: false, O: false}})
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <View style={styles.backarrow}>
                    <Ionicons name="arrow-back-outline" size={40} color={appstyles.primaryRed}/>
                </View>
            </TouchableWithoutFeedback>
            <View style={styles.profilePicContainer}>
                <Image style={styles.profilePic} source={require("../assets/images/dynamo.jpg")} />
                <Ionicons style={styles.Pencilicon} name="pencil-outline" size={25} color={appstyles.white} />
            </View>
            <View>
                <Text style={styles.inputlabel}>Username</Text>
                <TextInput autoCompleteType="email" placeholder="Unique Username" placeholderTextColor={appstyles.colorGrey} style={styles.textInput} onChangeText={text => setprofiledata({...profiledata,uname: text})} value={profiledata.uname}/>
                <Text style={styles.inputlabel}>Age</Text>
                <TextInput keyboardType="numeric" autoCompleteType="email" placeholder="Age" placeholderTextColor={appstyles.colorGrey} style={styles.textInput} onChangeText={text => setprofiledata({...profiledata,age: text})} value={profiledata.age}/>
                <Text style={styles.inputlabel}>Gender</Text>
                <RNPickerSelect
                    onValueChange={(value) => setGender(value)}
                    placeholder={{label: 'Gender', value: null}}
                    useNativeAndroidPickerStyle={false}
                    items={[
                        { label: 'Male', value: 'Male' },
                        { label: 'Female', value: 'Female' },
                        { label: 'Other', value: 'Other' },
                    ]}
                    style={{...pickerSelectStyles,
                        placeholder: {
                            color: appstyles.colorGrey,
                            fontFamily: 'Roboto-Light'
                        },
                        iconContainer: {
                            top: 10,
                            right: 10
                        }
                    }}
                    Icon={() => {
                        return <Ionicons name="chevron-down-outline" size={20} color="gray" />
                    }}
                />
                <TouchableOpacity style={{marginTop: 30}}>
                <View style={styles.button}>
                    <Text style={{color: appstyles.white, fontFamily: 'Roboto-Medium', fontSize: 16}}>Submit</Text>
                </View>
            </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: appstyles.darkThemeColor,
    },
    backarrow: {
        position: 'absolute',
        left: 25,
        top: StatusBar.currentHeight + 20
    },
    profilePicContainer: {
        height: 150,
        width: 150,
        borderColor: appstyles.borderColorlightGrayE,
        borderRadius: 75,
        borderWidth: 1,
        marginTop: 150,
        position: 'relative'
    },
    Pencilicon: {
        position: 'absolute',
        right: 10,
        top: 10,
        borderColor: appstyles.white,
        borderWidth: 0.5,
        padding: 2,
        backgroundColor: '#000',
        borderRadius: 5
    },
    profilePic: {
        height: 150,
        width: 150,
        borderRadius: 75,
    },
    inputlabel: {
        color: appstyles.borderColorlightGrayE,
        marginBottom: 3,
        marginTop: 15,
        fontFamily: 'Roboto-Light'
    },
    textInput: {
        borderColor: appstyles.borderColorlightGrayE,
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: Platform.OS === "ios" ? 12 : 5,
        fontFamily: appstyles.fontLight,
        padding: 10,
        color: appstyles.white
    },
    button: {
        width: Dimensions.get('window').width - 80,
        backgroundColor: appstyles.primaryRed,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
})

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: appstyles.borderColorlightGrayE,
      borderRadius: 4,
      color: appstyles.white,
      fontFamily: 'Roboto-Light',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: 16,
      paddingHorizontal: 10,
      paddingVertical: 5,
      borderWidth: 1,
      borderColor: appstyles.borderColorlightGrayE,
      borderRadius: 5,
      color: appstyles.white,
      fontFamily: 'Roboto-Light',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
  });

export default NewProfile
