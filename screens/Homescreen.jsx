import React from 'react';
import { 
    Dimensions, 
    View, 
    StyleSheet, 
    Image, 
    Text, 
    SafeAreaView, 
    Animated, 
    ScrollView
} from 'react-native';
import appstyles from '../styles/appstyles';
import Header from '../components/header';

import Card from '../components/challangecard';
import { SvgXml } from 'react-native-svg';
import xml from '../components/svgxml';

const challanges = [
    {
        id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
        uri: require('../assets/images/797562-pubg-1.jpg'),
        name: "PUBG"
    },
    {
        id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
        uri: require('../assets/images/fortnite1twitter-5bfc2eb446e0fb0083c1094a.jpg'),
        name: "FORTNITE"
    },
    {
        id: "58694a0f-3da1-471f-bd96-145571e29d72",
        uri: require('../assets/images/Garena-Free-Fire.jpg'),
        name: "FREEFIRE"
    },
]

const {width, height} = Dimensions.get('window')
const Item = ({id, uri, name, index, scrollx}) => {
    const inputRange = [(index - 1) * width, index * width, (index+1) * width]
    const scale = scrollx.interpolate({
        inputRange,
        outputRange: [0.7,1,0.7],
    });
    return(
        <Animated.View style={[styles.imgcontainer,{
            transform: [{scale}]
        }]}>
            <Image source={uri} style={styles.image}/>
        </Animated.View>
    )
}

const HomeScreen = ({navigation}) => {
    const scrollX = React.useRef(new Animated.Value(0)).current
    return (
        <SafeAreaView style={[styles.container,{backgroundColor: appstyles.darkThemeColor}]}>
            <Header headTxt="DesiAdda" context={false} navigation={navigation}/>
            <View style={styles.container}>
                {/* flat list for challanges */}
                <Animated.FlatList
                    data={challanges}
                    renderItem={({item, index}) => <Item {...item} index={index} scrollx={scrollX}/>}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{nativeEvent: {contentOffset: {x: scrollX}}}],
                        {useNativeDriver: true}
                    )}
                    pagingEnabled={true}
                    style={styles.flatList}
                    showsHorizontalScrollIndicator={false}
                />
                <View style={styles.matchContainer}>
                    {/* component header */}
                    <View style={styles.componentHeader}>
                        <Text style={[styles.filterText,{color: '#a1a1a1', fontSize: 20}]}>All Matches</Text>
                        <View style={styles.filterContainer}>
                            <View style={[styles.filter,{marginRight: 15}]}>
                                <SvgXml 
                                    height={20}
                                    width={20}
                                    xml={xml.filter}
                                />
                                <Text style={styles.filterText}>Filters</Text>
                            </View>
                            <View style={styles.filter}>
                                <SvgXml 
                                    height={20}
                                    width={20}
                                    xml={xml.sort}
                                />
                                <Text style={styles.filterText}>Sort</Text>
                            </View>
                        </View>
                    </View>
                    {/* card */}
                    <ScrollView showsVerticalScrollIndicator={false} style={{marginVertical: 10}}>
                        <Card source={require("../assets/images/images.png")} title="PUBG Erangle - Solo Battle" date="11 Aug at 11:00 AM" price="₹5,000" rewardperkill="₹50" chcontext={true}/>
                        <Card source={require("../assets/images/freefire.jpg")} title="Free Fire - Solo Battle" date="11 Aug at 11:00 AM" price="₹5,000" rewardperkill="₹50" chcontext={true}/>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000'
    },
    imgcontainer: {
        height: height/3.25,
        width: width,
        borderRadius: 10,
        overflow: 'hidden'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    matchContainer: {
        flex: 1,
        width: width - 30,
    },
    componentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
    },
    flatList: {
        maxHeight: height/3,
    },
    filter: {
        flexDirection: 'row',
        backgroundColor: appstyles.darkThemeColor,
        paddingHorizontal: 10,
        borderRadius: 20,
        alignItems: 'center',
        paddingVertical: 5,
    },  
    filterText: {
        textTransform: 'capitalize', 
        color: '#fff', 
        marginLeft: 10, 
        fontSize: 16,
        fontFamily: 'Roboto-Light',
    }
})

export default HomeScreen