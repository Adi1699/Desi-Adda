import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions,Platform } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
// components
import ArrowHeader from "../components/arrowheader";
import Card from "../components/resultChallangeCard"
// appstyles
import appstyles from "../styles/appstyles";


const DATA = [
    {
        rank: '1',
        playerName: 'Player Name',
        kills: 20,
        Winning: 25
    },
    {
        rank: '2',
        playerName: 'Player Name',
        kills: 19,
        Winning: 22
    },
    {
        rank: '3',
        playerName: 'Player Name',
        kills: 15,
        Winning: 21
    },
    {
        rank: '4',
        playerName: 'Player Name',
        kills: 18,
        Winning: 19
    },
    {
        rank: '5',
        playerName: 'Player Name',
        kills: 12,
        Winning: 12
    },
    {
        rank: '6',
        playerName: 'Player Name',
        kills: 11,
        Winning: 11
    },
    {
        rank: '7',
        playerName: 'Player Name',
        kills: 5,
        Winning: 10
    },
    {
        rank: '8',
        playerName: 'Player Name',
        kills: 6,
        Winning: 6
    },
    {
        rank: '9',
        playerName: 'Player Name',
        kills: 8,
        Winning: 5
    },
    {
        rank: '10',
        playerName: 'Player Name',
        kills: 10,
        Winning: 1
    }
]


const matchesResult = ({ navigation }) => {
    const renderItem = (item) => {
        return (
            <View style={styles.dataContainer}>
                <Text style={[styles.dataTxt,{width: 55}]}>{item.rank}</Text>
                <Text style={[styles.dataTxt,{width: Dimensions.get('window').width/2}]}>{item.playerName}</Text>
                <Text style={[styles.dataTxt,{width: 60}]}>{item.kills}</Text>
                <Text style={styles.dataTxt}>{item.Winning}</Text>
            </View>    
        );
    }
    return (
        <SafeAreaView style={[styles.maincontainer, {backgroundColor: appstyles.darkThemeColor }]}>
            <ArrowHeader headTxt="Match Result" context={false} navigation = {navigation} />
            <ScrollView style={styles.maincontainer} showsVerticalScrollIndicator={false}>
            <View style={styles.container}> 
                <Card source={require("../assets/images/images.jpg")} title="Valorant Erangles - Solo Battle" date="14th Feb at 10:00AM" price="₹5,000" rewardperkill="₹60" chcontext={true} />
            </View>
           </ScrollView>  

         <ScrollView style={styles.maincontainer} showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, width: Dimensions.get('window').width, paddingHorizontal: 15}}>
                       <View style={styles.dataContainer}>
                          <Text style={[styles.dataTxt, {color: appstyles.white, width: 40}]}>#</Text>
                          <Text style={[styles.dataTxt, {color: appstyles.white, width: Dimensions.get('window').width/2}]}>Player Name</Text>
                          <Text style={[styles.dataTxt, {color: appstyles.white, width: 55}]}>Kills</Text>
                          <Text style={[styles.dataTxt, {color: appstyles.white}]}>Winning</Text>
                      </View>
                </View>
                 <FlatList
                        data={DATA}
                        renderItem={({item}) => renderItem(item)}
                        keyExtractor={item => item.rank}
                    />
            </ScrollView>  
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
    },
    maincontainer: {
        backgroundColor: '#000',
        alignContent: 'center',
        flex: 1,
    },
    contentView: {
        width: Dimensions.get('window').width,
        maxWidth: Dimensions.get('window').width,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    cattext: {
        color: appstyles.white,
        paddingHorizontal: 12,
        paddingBottom: 10,
        paddingTop: 10,
        backgroundColor: '#111111'
    },
    place: {
        marginVertical: 10,
        backgroundColor: appstyles.darkThemeColor
    },
    match: {
        marginVertical: 10,
        backgroundColor: appstyles.darkThemeColor
    },
    paid: {
        marginVertical: 10,
        backgroundColor: appstyles.darkThemeColor
    },
    won: {
        marginVertical: 10,
        backgroundColor: appstyles.darkThemeColor
    },
    dataContainer: {
        borderBottomColor: appstyles.colorGrey,
        flexDirection: 'row',
        width: '100%', 
        paddingVertical: 5,
        // borderBottomWidth: 0.5,
        // minHeight: 60
    },
    data: {
        color: appstyles.white,
        marginVertical: 10,
        paddingBottom: 15,
        paddingHorizontal: 12,
        fontSize: Platform.OS === "ios" ? 14 : (Dimensions.get('window').height < 650 ? 0.03 * Dimensions.get('window').width : 0.035 * Dimensions.get('window').width)
    },
    dataDate: {
        paddingHorizontal: 12,
        color: appstyles.colorGrey,
        opacity: 0.7,
        marginTop: 2,
        paddingBottom: 5,
        fontSize: 10
    },
    matchDetails: {
        padding: 20,
        width: Dimensions.get('window').width,
        borderBottomColor: appstyles.darkThemeColor,
        borderBottomWidth: 1
    },
    dataTxt: {
        color: appstyles.colorGrey,
        fontFamily: 'Roboto-Light'
    }
});

export default matchesResult;