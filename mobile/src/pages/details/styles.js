import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        alignContent: 'center',
        paddingTop: Constants.statusBarHeight + 20,        
    },
    header:{
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    incident:{
      padding: 24,
      borderRadius: 8,
      backgroundColor: '#FFF',
      marginBottom: 0,
      marginTop: 5 
    },
    incidentProperty:{
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },
    incidentValue: {
       marginTop: 8,
       fontSize: 15,
       marginBottom: 24,
       color: '#737380' 
    },
    detailsButton:{ 
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    detailsButtonText:{
        color: '#E02041',
        fontSize: 15,
        fontWeight: 'bold'
    },
    contactBox:{
        backgroundColor: '#FFF',
        padding: 24,
        borderRadius: 8,
        marginTop: 8,
    },
    heroTitle:{
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 30,
        color: '#13131a'
    },
    heroDescription:{
        marginTop: 16,
        fontSize: 15,
        color: '#737380',
    },
    actions:{
        borderRadius: 8,
        padding: 24,
        marginTop: 0,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    action:{
        borderRadius: 8,
        marginTop: 24,
        backgroundColor: '#E02041',
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    actionText:{
        fontWeight: 'bold',
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold'
    }
});