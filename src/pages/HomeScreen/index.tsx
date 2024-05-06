import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList, ScrollView, TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons'
import Data from '../../assets/dummy/movies.json'
import MovieCard from '../../components/Card/CardHome'



const HomeScreen = ({ route,navigation }: any) => {
    const [data, setData] = useState<any>()

    // const {otherParams} = route.params



    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <TouchableOpacity style={styles.buttonSearch} activeOpacity={0.9} onPress={() => navigation.navigate('Search')}>
                <View style={styles.areaButton}>
                    <View style={styles.areaInButton}>
                        <Ionicons name='search-outline' size={24} color='black' />
                        <TextInput style={styles.fontButton} placeholder='Search' />
                    </View>
                    <View style={styles.filter}>
                        <Ionicons name='filter-circle' size={24} color='black' />
                    </View>
                </View>
            </TouchableOpacity>

            <View>
                <ScrollView>
                    {Data?.map((x, k) => (
                        <MovieCard movie={x} />
                    ))}
                </ScrollView>
            </View>

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    areaContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 50, marginHorizontal: 30 },
    location: { flexDirection: 'row', alignItems: 'center' },
    fontLoc: { color: '#8c9896' },
    city: { marginTop: 5, flexDirection: 'row', alignItems: 'center' },
    buttonSearch: { marginHorizontal: 30, marginVertical: 20 },
    areaButton: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 5, elevation: 5, shadowColor: 'black' },
    areaInButton: { flexDirection: 'row', alignItems: 'center' },
    fontButton: { color: 'grey', fontSize: 12 },
    filter: { borderRadius: 10, paddingHorizontal: 10, paddingVertical: 10 }
})