import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import ItemList from '../../components/ItemList'
import InputBar from '../../components/InputBar';
import EditItemModal from '../../components/EditItemModal';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
    deleteItem,
    editItem,
    saveItem,
    markDone,
    changeText,
    buttonPress,
    clearFinished,
    getItems,
}
    from '../../store/actions';
import Counter from '../../components/Counter';
import ClearFinished from '../../components/CleanFinished';


class Main extends Component {

    render(){
        return (
            <>
                <View style={styles.container}>
                    <ClearFinished handleClear={this.props.clearFinishedAction}/>
                    <View>
                        <InputBar
                            textValue={this.props.textValue}
                            onChangeTextInput = {this.props.actionChangeText}
                            onButtonPress = {this.props.buttonPressAction}
                        />
                        <Counter counter={this.props.list.length}/>
                    </View>
                    <ItemList
                        list={this.props.list}
                        onPressItem={this.props.actionMarkDone}
                        onEditItem={this.props.actionEditItem}
                        onDeleteItem={this.props.actionDeleteItem}
                    />
                </View>
                <EditItemModal
                    isVisible={this.props.modalIsVisible}
                    onSave={this.props.actionSaveItem}
                    onClose={() => this.setState({modalIsVisible: false})}
                    text={this.props.modalText}
                    onChangeTextInput={text => this.props.actionChangeText(text)}
                />
            </>
        );
    }
    componentDidMount() {
        this.props.getItemsAction();
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        textValue: state.textValue,
        modalIsVisible: state.modalIsVisible,
        modalText: state.modalText,
        currentKey: state.currentKey,
    };
};

const mapDispatchToProps = dispatch =>{
    return bindActionCreators(
        {
            actionDeleteItem: deleteItem,
            actionEditItem: editItem,
            actionSaveItem: saveItem,
            actionMarkDone: markDone,
            actionChangeText: changeText,
            buttonPressAction: buttonPress,
            clearFinishedAction: clearFinished,
            getItemsAction: getItems,
    },
    dispatch
    );
};
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);


const styles= StyleSheet.create({
    container: {
        flex:1,
        paddingTop:70,
        padding: 12,
        backgroundColor: '#fcfcfc'
    }
})

