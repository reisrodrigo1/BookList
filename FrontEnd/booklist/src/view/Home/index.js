import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Image, ScrollView, FlatList, TouchableOpacity } from 'react-native';


import styles from './styles';
import loupe from '../../assets/loupe.png';


import api from '../../services/api';

import home from '../../assets/house.png';
import plus from '../../assets/plus.png';
import user from '../../assets/user.png';

export default function Home({navigation}){

 

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState();

async function loadBooks(){
    if(!search){
    await api.get('/book/all/66.66.66.66')
    .then(response =>{
        setBooks(response.data);
    });}else{
        await api.get(`/book/search/${search}`)
        .then(response =>{
            setBooks(response.data);
        });}
}~

    useEffect(() =>{
        loadBooks();
    })
    
    function Detail(id, name, author, photo, description){
        navigation.navigate('Detail',{iddetail: id, namedetail: name, authordetail: author, photodetail: photo, descriptiondetail: description})
    }


    return (
        <View style={styles.container}>
         <TouchableOpacity onPress={() => navigation.navigate('Search')}>  
             <View style={styles.searchArea}>
                <Image style={styles.searchImage} source={loupe} />
                <TextInput style={styles.searchInput} placeholder={'Search book'}/>
            </View>
            </TouchableOpacity> 
            <View style={styles.userWelcome}>
                <Text style={styles.hi}>Hi,</Text>
                <Text style={styles.userName}  >Rodrigo Reis 👋</Text>
            </View>

            <ScrollView>
            <FlatList
                        data={books}
                        renderItem={({item}) => (
                           <TouchableOpacity onPress={() => Detail(item._id, item.name, item.author, item.photo, item.description)}>
                                <View style={styles.flatlist}>
                                 <Image style={styles.flatlistImage} source={item.photo}/>
                                 <Text style={styles.flatlistName} >{item.name}</Text>
                                 <Text style={styles.flatlistAuthor} >{item.author}</Text>
                                          
                            </View>
                            </TouchableOpacity>
                        )}
                        showsVerticalScrollIndicator={false}
                        numColumns={3}
                    />

            </ScrollView>

            <View style={styles.navBar}>
            <View >
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Home')}>
                    <Image source={home} style={styles.imageNavbar}/>
                    <Text>Home</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Book')}>
                    <Image source={plus} style={styles.imageNavbar} />
                    <Text>Add Boo</Text>
                </TouchableOpacity>
            </View>
            <View >
                <TouchableOpacity style={styles.item}>
                    <Image source={user} style={styles.imageNavbar}/>
                    <Text>Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
        </View>
    )
}