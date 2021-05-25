import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FBF6F1',
    },
    top:{
        backgroundColor: '#FFF6E5',
        width: '100%',
        height: 282,
        borderBottomRightRadius: 100,
        flexDirection: 'row',
        justifyContent: 'space-between'
        
    },
    arrow:{
        width: 20,
        height:20,
        alignSelf:'flex-start',
        marginTop: 55,
        marginLeft: 33

    },
    oval:{
        width: 100,
        height:100,
        alignSelf:'flex-end',
        marginBottom:200
    },
    blueOval:{
        width: 100,
        height:100,
        backgroundColor: '#00173D',
        borderRadius: 50,
        alignSelf:'flex-start',
        position: 'absolute',
        marginTop:115,
        marginLeft: 74
    },
    photo:{
        width:151,
        height:254,
        position: 'absolute',
        alignSelf:'center',
        marginTop: 84
    },
    body:{
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',        
        marginTop: 84,
        width: '95%',
        marginLeft: 25
    },
    name:{
        fontSize: 24,
        lineHeight: 28,
        fontWeight: 'bold',
        color: '#36383A'
    },
    author:{
        fontSize: 16,
        lineHeight: 19,
        color: '#FF6978'
    },
    description:{
        fontSize: 14,
        lineHeight: 25,
        color: '#31313199'
    },
    navBar:{
        width: '85%',
        height: 59,
        backgroundColor: '#FFFFFF',
        alignSelf:'center',
        marginTop:'70%',
        flexDirection: 'row',
        justifyContent:'space-around',
        borderRadius: 2
        
     },
     imageNavbar:{
         width:20,
         height: 20,
         marginHorizontal: 5,
         alignItems: 'center'
     },
     item:{
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'space-around',
        marginTop: 20
    },
 
})

export default styles;