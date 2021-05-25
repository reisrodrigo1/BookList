import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ScrollView, FlatList, Alert, TouchableOpacity } from 'react-native';

import styles from './styles';

import arrow from '../../assets/arrow.png';
import oval from '../../assets/oval.png';
import blueOval from '../../assets/blueOval.png';


import read from '../../assets/read.png';
import headphone from '../../assets/headphone.png';
import upload from '../../assets/upload.png';

export default function Details({navigation}){

    

        const id =  navigation.getParam('namedetail', 'nothing sent')
        const photo =  navigation.getParam('photodetail', 'nothing sent')
        const name =  navigation.getParam('namedetail', 'nothing sent')
        const author =  navigation.getParam('authordetail', 'nothing sent')
        const description =  navigation.getParam('descriptiondetail', 'nothing sent')
    return(
        <View style={styles.container}>
            <View style={styles.top}>            
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Image style={styles.arrow} source={arrow} />
                
                    </TouchableOpacity>
                <Image style={styles.oval} source={oval} />
                
            </View>
            <View style={styles.blueOval}></View>
            <Image style={styles.photo} source={photo} />

            <View style={styles.body}>
                <Text style={styles.name}>
                    {name}
                </Text>
                <Text style={styles.author}>
                    {author}
                </Text>
                <Text style={styles.description}>
                    {description}
                </Text>
            </View>

            <View style={styles.navBar}>
            <View >
                <TouchableOpacity style={styles.item}>
                    <Image source={read} style={styles.imageNavbar}/>
                    <Text>Read</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.item}>
                    <Image source={headphone} style={styles.imageNavbar} />
                    <Text>Listen</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.item}>
                    <Image source={upload} style={styles.imageNavbar}/>
                    <Text>Share</Text>
                </TouchableOpacity>
            </View>   
        </View>
        </View>
    )
}