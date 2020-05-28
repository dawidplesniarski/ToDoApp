import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    modalWrapper:{
        position: 'absolute',
        top: '30%',
        left: 0,
        right: 0,
        width: '100%',
        padding: 20
    },
    modalBody:{
        elevation: 5,
        width: '100%',
        padding: 20,
        backgroundColor: '#dadada',
        borderRadius: 15,
    },
    closeIcon:{
        width: 16,
        height: 16,
        alignSelf: 'flex-end',
    }
})
