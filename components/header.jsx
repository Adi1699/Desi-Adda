import React from 'react';
import { View, StyleSheet, Dimensions, StatusBar, Text, TouchableWithoutFeedback } from 'react-native';
import appstyles from '../styles/appstyles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Svg, Path, SvgXml } from 'react-native-svg'
import xml from "./svgxml"

const header = (props) => {
    return (
        <View style={styles.container}>
            <View>
                {
                    props.context ?
                        <View style={styles.iconHolder}>
                            <Icon name="arrow-left" size={30} color={appstyles.colorGrey} />
                            <Text style={[styles.headTxtsc, { marginLeft: 20 }]}>{props.headTxt}</Text>
                        </View>
                        :
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <TouchableWithoutFeedback onPress={() => props.navigation.openDrawer()}>
                                <SvgXml
                                    xml={xml.menu}
                                    width={40}
                                    height={40}
                                    style={{ marginTop: 5 }}
                                />
                            </TouchableWithoutFeedback>
                            <Text style={styles.headTxt}>{props.headTxt}</Text>
                        </View>
                }
            </View>
            {
                (!props.context) ?
                    <View style={styles.iconHolder}>
                        <TouchableWithoutFeedback>
                            <SvgXml
                                xml={xml.bell}
                                width={25}
                                height={25}
                                style={{ marginLeft: 0 }}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <SvgXml
                                xml={xml.wallet}
                                width={25}
                                height={25}
                                style={{ marginLeft: 15 }}
                            />
                        </TouchableWithoutFeedback>
                        <TouchableWithoutFeedback>
                            <SvgXml
                                xml={xml.chatic}
                                width={25}
                                height={25}
                                style={{ marginLeft: 15 }}
                            />
                        </TouchableWithoutFeedback>
                    </View>
                    :
                    <View style={styles.iconHolder}>
                        <Text style={{ color: '#fff' }}>Something</Text>
                    </View>
            }
            <StatusBar barStyle="light-content" backgroundColor={appstyles.darkThemeColor} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('window').width,
        paddingRight: 20,
        paddingLeft: 5,
        paddingTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: appstyles.darkThemeColor,
    },
    iconHolder: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    headTxt: {
        color: '#fff',
        fontFamily: 'Roboto-Medium',
        fontSize: 24,
        marginLeft: 5
    },
    headTxtsc: {
        color: '#fff',
        fontFamily: 'Roboto-Medium',
        fontSize: 20
    }
})

export default header
