import React from "react";
import {View, ScrollView, StatusBar, Text, StyleSheet} from 'react-native';
import Headers from "@/Components/header/Headers";
import theme from "@/theme/theme";

export default class MerchantScreen extends React.Component<any,any> {

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <Headers
                    border={true}
                    backgroundColor={'#fff'}
                    title={'商城'}
                    centerColor={'#666'}
                    {...this.props}
                />
                <ScrollView style={{flex:1}}>
                    <Text>商城</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

