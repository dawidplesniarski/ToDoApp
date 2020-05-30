import React, {Component} from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import styles from './styles'
import ListItem from '../ListItem';
import {array,func} from 'prop-types';


class ItemList extends Component {
    static propTypes = {
        list: array.isRequired,
        onPressItem: func.isRequired,
        onEditItem: func.isRequired,
        onDeleteItem: func.isRequired,
    }

    constructor(props) {
        super(props);
        this.renderList = this.renderList.bind(this);
        this.renderEmpty = this.renderEmpty.bind(this);
    }


    render() {
           return this.props.list.length ? this.renderList() : this.renderEmpty();
    }
        renderList(){
            return(
                <View>
                    <FlatList
                        data={this.props.list}
                        renderItem={(position) =>
                            <ListItem
                                itemKey={position.item.key}
                                title={position.item.title}
                                onPressItem={this.props.onPressItem ?()=>{
                                    this.props.onPressItem(position.item);
                                }: null
                                }
                                done={position.item.done || false}
                                onEditItem={this.props.onEditItem}
                                onDeleteItem={this.props.onDeleteItem}
                            />
                        }
                    />
                </View>
            );
        }
        renderEmpty(){
        return (
            <View>
                <Text style={styles.renderNoItems}>
                    Brak pozycji na liście
                </Text>
            </View>
        )
        }

}


export default ItemList;
