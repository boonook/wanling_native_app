import React from "react";
import {View, ScrollView, StatusBar, Text, StyleSheet} from 'react-native';
import Headers from "@/Components/header/Headers";

export default class MessageCenterScreen extends React.Component<any,any> {
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
                    leftIcon={'left'}
                    leftColor={'#666'}
                    border={true}
                    backgroundColor={'#fff'}
                    title={'最新公告'}
                    centerColor={'#666'}
                    {...this.props}
                />
                <ScrollView style={{flex:1}}>
                    <Text>最新公告</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

