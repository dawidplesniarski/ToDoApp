import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {number} from 'prop-types';
import styles from './styles'

class Counter extends Component {
    static propTypes ={
        counter: number.isRequired,
    };
    render() {
        if(!this.props.counter){
            return null;
        }
        return(
            <View style={styles.wrapper}>
                <Text>Ilość pozycji:</Text>
                <Text> {this.props.counter}</Text>
            </View>
        )
    }
}

export default Counter;
