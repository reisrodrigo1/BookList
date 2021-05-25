import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './styles';

import home from '../../assets/house.png';
import plus from '../../assets/plus.png';
import user from '../../assets/user.png';
import api from '../../services/api';


export default function Book({navigation}){

    const [macaddress , setMacaddress] = useState('66.66.66.66');
    const [name , setName] = useState();
    const [author , setAuthor] = useState();
    const [photo , setPhoto] = useState();
    const [description , setDescription] = useState();

    async function New(){
        if(!name)
        return alert('Set a name for the book')
        if(!author)
        return alert('Set a author for the book')
        if(!photo)
        return alert('Set a photo for the book')
        if(!description)
        return alert('Set a description for the book')

        await api.post('/book', {
            macaddress,
            name,
            author,
            photo,
            description
        }).then(()=>{
            navigation.navigate('Home');
        });
    }
    
 

    return(
       <View style={styles.container}>
           <Text style={styles.text}>Add a new book</Text>

           <View style={styles.form}>
               <Text style={styles.formText}>Name</Text>
               <TextInput style={styles.formInput} onChangeText={(text) => setName(text)} value={name} />
                <Text style={styles.formText}>Author</Text>
                <TextInput style={styles.formInput}  onChangeText={(text) => setAuthor(text)} value={author} />
                <Text style={styles.formText}>Photo URL</Text>
               <TextInput style={styles.formInput}  onChangeText={(text) => setPhoto(text)} value={photo}/>
               <Text style={styles.formText}>Description</Text>
                <TextInput style={styles.formInputDescription} multiline={true}  onChangeText={(text) => setDescription(text)} value={description} />
                <TouchableOpacity style={styles.button} onPress={New}>
               <Text style={styles.buttonText}>Add new book</Text>
           </TouchableOpacity>
           </View>

           

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