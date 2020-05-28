import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    listItem: {
        padding: 10,
        fontSize:20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    leftPart: {
        width: '10%'
    },
    centralPart:{
        width: '80%'
    },
    rightPart:{
        width: '10%'
    },
    textNormal:{
        fontSize: 20
    },
    textDone:{
        fontSize: 20,
        color: '#dadada',
        textDecorationLine: 'line-through',
    },
    renderNoItems:{
        fontSize: 20,
        textAlign:'center'
    },
    icon:{
        width:20,
        height:20
    },
    deleteIcon: {
        height:14,
        width:14,
        marginTop: 7
    }
})
