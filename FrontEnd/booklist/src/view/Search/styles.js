import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#FBF6F1',
        alignItems: 'center',
        paddingTop:50,
    },
    searchArea:{
        backgroundColor: '#FDFCFC',
        width: 336,
        height: 48,
        flexDirection:'row'
    },
    searchImage:{
        width:16,
        height:16,
        marginTop:15,
        marginLeft:7
    },
    searchInput:{
        backgroundColor: '#FDFCFC',
        width: 336,
        height: 48,
        marginLeft: 20
    },
    userWelcome:{
       flexDirection: 'row',
       marginTop: 20,
       alignSelf:'flex-start',
       marginLeft:65,
    },
    hi: {
        fontSize: 24,
    },
    userName: {
        fontSize: 24,
        color: '#FE6978'
    },
    bookCard:{
        flex: 1
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
     },
     flatlist:{
        flex: 1,
        justifyContent:'space-around',
        alignItems: 'center'
     },
     flatlistImage :{
         width:105,
         height:153,
         marginTop:36,
         marginHorizontal:10
        
     },
     flatlistName :{
        fontSize: 12     
    },
    flatlistAuthor :{
        fontSize: 10       
    }
})

export default styles;