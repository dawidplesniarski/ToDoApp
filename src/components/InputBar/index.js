import {Button, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import styles from './styles'
import {string, func} from 'prop-types';

class InputBar extends Component{
    static propTypes = {
        textValue: string.isRequired,
        onChangeTextInput: func.isRequired,
        onButtonPress: func.isRequired,
    }

    render(){
        return (
            <View>
                <View style={styles.wrapper}>
                    <View style={styles.left}>
                        <TextInput
                            value={this.props.textValue}
                            onChangeText={this.props.onChangeTextInput}
                            style={styles.input}
                        />
                    </View>
                    <View style={styles.right}>
                        <Button title={'+'}
                                onPress={this.props.onButtonPress}
                                style={styles.button}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default InputBar;
