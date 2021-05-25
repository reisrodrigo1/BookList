import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FBF6F1',
        alignItems: 'center',
        paddingTop:50,
    },
    text:{
        color: '#FF6978',
        fontSize: 24,
        fontWeight: 'bold',
        marginRight: 100,
        marginBottom:30

    },
    form:{
        flex: 1
    },
    formText:{
        fontSize: 16,
        lineHeight:18,
        marginRight: 200,
        marginVertical: 10
    },
    formInput:{
        width: 336,
        height: 48,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    formInputDescription:{
        width: 336,
        height: 228,
        backgroundColor: 'white',
        borderRadius: 10,
    },
    button:{
        width: 336,
        height: 48,
        backgroundColor: '#FF6978',
        borderRadius: 10,
        justifyContent:'center',
        marginTop:49
    },
    buttonText:{
        color:'white',
        fontWeight: 'bold',
        textAlign:'center',
        fontSize: 24
        
    },
    navBar:{
        width: '100%',
        height: 59,
        backgroundColor: '#FFFFFF',
        marginBottom:10,
        flexDirection: 'row',
        justifyContent:'space-around'
        
     },
     imageNavbar:{
         width:20,
         height: 20
     },
     item:{
         flexDirection:'column',
         alignItems: 'center',
         marginTop: 10
     }
})

export default styles;