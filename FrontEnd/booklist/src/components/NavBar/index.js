import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, FlatList } from 'react-native';


import home from '../../assets/house.png';
import plus from '../../assets/plus.png';
import user from '../../assets/user.png';

import styles from './styles';

export default function NavBar({navigation}){
    return(
        <View style={styles.navBar}>
            <View >
                <TouchableOpacity style={styles.home} onPress={() => navigation.navigate('Home')}>
                    <Image source={home} style={styles.image}/>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.home} onPress={() => navigation.navigate('Book')}>
                    <Image source={plus} style={styles.image} />
                    <Text>Add Boo</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.home} >
                    <Image source={user} style={styles.image}/>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}