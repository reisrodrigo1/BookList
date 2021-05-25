import React from 'react';
import { View, Text, Button, StyleSheet, TextInput, Image } from 'react-native';

import styles from './styles';
import book from '../../assets/book.jpg';

export default function BookCard(){
    return (
        <View style={styles.container}>
        <Image style={styles.image} source={book}/>               
        </View>
    )
}