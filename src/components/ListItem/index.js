import React, {Component} from 'react';
import styles from '../ListItem/styles';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import IconCircle from '../../assets/images/undone.png'
import IconDone from '../../assets/images/done.png'
import IconDelete from '../../assets/images/close.png'
import {number, func, bool, string} from 'prop-types';


class ListItem extends Component {

    static propTypes = {
        onPressItem: func.isRequired,
        onEditItem: func.isRequired,
        itemKey: number.isRequired,
        done: bool.isRequired,
        title: string.isRequired,
        onDeleteItem: func.isRequired,
    }
    constructor(props) {
        super(props);

        this.renderIcon = this.renderIcon.bind(this);
    }
    render () {
        return (
            <View style={styles.listItem}>
                <View style={styles.leftPart}>
                    <TouchableOpacity onPress={() => {
                        if(!this.props.onPressItem){
                            return null;
                        }
                        this.props.onPressItem(this.props.itemKey)
                    }}>
                        {this.renderIcon()}
                    </TouchableOpacity>
                </View>
                <View style={styles.centralPart}>
                    <TouchableOpacity onPress={() => {
                        this.props.onEditItem(this.props.itemKey, this.props.title);
                    }}>
                        <Text
                            key={this.props.itemKey}
                            style={this.props.done ? styles.textDone : styles.textNormal}>
                            {this.props.title}
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.rightPart}>
                    <TouchableOpacity onPress={()=>{this.props.onDeleteItem(this.props.itemKey)}}>
                        <Image source={IconDelete} style={styles.deleteIcon}/>
                    </TouchableOpacity>
                </View>

            </View>
        );
    }

    renderIcon(){
        if(this.props.done){
            return <Image style={styles.icon} source={IconDone}/>
        }
        return <Image style={styles.icon} source={IconCircle}/>
    }
}

export default ListItem;
