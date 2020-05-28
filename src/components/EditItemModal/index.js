import React, {Component} from 'react';
import {bool, func, string} from 'prop-types';
import {View, Image, TouchableOpacity, Button, TextInput} from 'react-native';
import styles from './styles'
import close from '../../assets/images/close.png'
class EditItemModal extends Component {
    static propTypes ={
        isVisible: bool.isRequired,
        onSave: func.isRequired,
        onClose: func.isRequired,
        text: string.isRequired,
        onChangeInput: func.isRequired,
    };
    render() {
        return(
            <View style={this.props.isVisible ? styles.modalWrapper : {display: 'none'}}>
                <View style={styles.modalBody}>
                    <TouchableOpacity onPress={this.props.onClose}>
                        <Image source={close} style={styles.closeIcon} />
                    </TouchableOpacity>
                    <TextInput value={this.props.text}
                    onChangeText={this.props.onChangeTextInput}
                    />
                    <Button title={'Zapisz'} onPress={this.props.onSave}/>
                </View>
            </View>
        )
    }
}

export default EditItemModal;
