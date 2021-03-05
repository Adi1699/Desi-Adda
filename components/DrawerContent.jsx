import React, { useState } from 'react'
import { View, StyleSheet, Platform } from 'react-native'
import {
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
    Switch,
    TouchableRipple
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem,
} from '@react-navigation/drawer'
import Icon from "react-native-vector-icons/Ionicons"

import { SvgXml } from 'react-native-svg'
import appstyles from "../styles/appstyles"
import AvImage from '../assets/images/dynamo.jpg'
import xml from './svgxml';

import { AuthContext } from "../components/context"

export function DrawerContent(props) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    }
    const { signOut } = React.useContext(AuthContext);
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfo}>
                    <Avatar.Image
                        source={AvImage}
                        size={80}
                    />
                    <View style={{ marginLeft: 10 }}>
                        <Title style={{ color: appstyles.white, fontFamily: 'Roboto-Regular' }}>Varun Dev</Title>
                        <Caption style={{ color: appstyles.white, fontFamily: 'Roboto-Regular' }}>varundev1007@gmail.com</Caption>
                    </View>
                    <TouchableRipple onPress={() => props.navigation.closeDrawer()} rippleColor="rgba(0, 0, 0, .32)" style={styles.closeBox}>
                        <Icon name="close-outline" color={appstyles.primaryRed} size={25} />
                    </TouchableRipple>
                </View>
                <View style={styles.darkToggle}>
                    <Text style={[styles.white, { fontFamily: 'Roboto-Regular', marginRight: 5 }]}>Dark Mode</Text>
                    <Switch color={appstyles.primaryRed} value={isDarkTheme} onValueChange={toggleTheme} />
                </View>
                <DrawerContentScrollView style={styles.mainContent} {...props}>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <SvgXml
                                    height={size}
                                    width={size}
                                    fill={color}
                                    xml={xml.controller}
                                />
                            )}
                            label="My Matches"
                            labelStyle={{ color: '#fff', fontFamily: 'Roboto-Light', fontSize: 18 }}
                            style={{ borderColor: '#4A3F3F', borderBottomWidth: 1 }}
                            onPress={() => props.navigation.navigate("My Matches")}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <SvgXml
                                    height={size}
                                    width={size}
                                    fill={color}
                                    xml={xml.chats}
                                />
                            )}
                            label="My Chats"
                            labelStyle={{ color: '#fff', fontFamily: 'Roboto-Light', fontSize: 18 }}
                            style={{ borderColor: '#4A3F3F', borderBottomWidth: 1 }}
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <SvgXml
                                    height={size}
                                    width={size}
                                    fill={color}
                                    xml={xml.walletWhite}
                                />
                            )}
                            label="Credits Earned"
                            labelStyle={{ color: '#fff', fontFamily: 'Roboto-Light', fontSize: 18 }}
                            style={{ borderColor: '#4A3F3F', borderBottomWidth: 1 }}
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <SvgXml
                                    height={size}
                                    width={size}
                                    fill={color}
                                    xml={xml.rating}
                                />
                            )}
                            label="Rate Us"
                            labelStyle={{ color: '#fff', fontFamily: 'Roboto-Light', fontSize: 18 }}
                            style={{ borderColor: '#4A3F3F', borderBottomWidth: 1 }}
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <SvgXml
                                    height={size}
                                    width={size}
                                    fill={color}
                                    xml={xml.feedback}
                                />
                            )}
                            label="Feedback"
                            labelStyle={{ color: '#fff', fontFamily: 'Roboto-Light', fontSize: 18 }}
                            style={{ borderColor: '#4A3F3F', borderBottomWidth: 1 }}
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <SvgXml
                                    height={size}
                                    width={size}
                                    fill={color}
                                    xml={xml.share}
                                />
                            )}
                            label="Share"
                            labelStyle={{ color: '#fff', fontFamily: 'Roboto-Light', fontSize: 18 }}
                            style={{ borderColor: '#4A3F3F', borderBottomWidth: 1 }}
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <SvgXml
                                    height={size}
                                    width={size}
                                    fill={color}
                                    xml={xml.setting}
                                />
                            )}
                            label="Settings"
                            labelStyle={{ color: '#fff', fontFamily: 'Roboto-Light', fontSize: 18 }}
                            style={{ borderColor: '#4A3F3F', borderBottomWidth: 1 }}
                            onPress={() => { }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <SvgXml
                                    height={size}
                                    width={size}
                                    fill={color}
                                    xml={xml.logout}
                                />
                            )}
                            label="Logout"
                            labelStyle={{ color: '#fff', fontFamily: 'Roboto-Light', fontSize: 18 }}
                            style={{ borderColor: '#4A3F3F', borderBottomWidth: 1 }}
                            onPress={() => { signOut() }}
                        />
                    </Drawer.Section>
                </DrawerContentScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
    },
    userInfo: {
        flexDirection: 'row',
        paddingVertical: 30,
        paddingTop: Platform.OS === "ios" ? 60 : 30,
        backgroundColor: '#393939',
        alignItems: 'flex-end',
        paddingLeft: 10,
        elevation: 10,
        position: 'relative'
    },
    closeBox: {
        position: 'absolute',
        top: Platform.OS === "ios" ? 45 : 15,
        right: 15,
        borderColor: appstyles.primaryRed,
        borderRadius: 5,
        borderWidth: 1,
        overflow: 'hidden'
    },
    darkToggle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 10,
        backgroundColor: '#413131',
        paddingRight: 10
    },
    mainContent: {
        flex: 1,
        backgroundColor: '#413131',
    },
    white: {
        color: "#fff"
    },
    drawerSection: {
        marginTop: 0,
        borderColor: "#4D3A3A"
    },
})
