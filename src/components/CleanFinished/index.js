import React, {Component} from 'react';
import {Button, View} from 'react-native';
import {func} from 'prop-types';
import styles from './styles';
class ClearFinished extends Component {
    static propTypes = {
        handleClear: func.isRequired,
    };
    render(){
        return (
            <View style={styles.wrapper}>
                <Button title={'Clear done'} onPress={this.props.handleClear}/>
            </View>
        );
    }
}

export default ClearFinished;
