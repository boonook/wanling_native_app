import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class ChildrenSolt extends Component<any,any>{
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
        };
    }

    render() {
        return(
            <View>
                <Text>ceshi</Text>
                {this.props.renderContent}
            </View>
        )
    }
}

const styles = StyleSheet.create({

});
