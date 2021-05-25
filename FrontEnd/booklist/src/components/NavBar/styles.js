import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
    home:{
        flexDirection:'column',
        alignItems: 'center',
        marginTop: 10
    }
})

export default styles;