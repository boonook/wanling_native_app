import React from "react";
import {View, ScrollView, StatusBar, Text, StyleSheet} from 'react-native';
import Headers from "@/Components/header/Headers";

export default class InTheJoinTaskScreen extends React.Component<any,any> {
    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
    }

    onClickRightBtn=()=>{
        this.props.navigation.push('wardRecord')
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <Headers
                    leftIcon={'left'}
                    leftColor={'#666'}
                    border={true}
                    backgroundColor={'#fff'}
                    title={'已参与任务'}
                    onClickRightBtn={()=>this.onClickRightBtn()}
                    centerColor={'#666'}
                    rightColor={'#666'}
                    rightTitle={'领奖记录'}
                    {...this.props}
                />
                <ScrollView style={{flex:1}}>
                    <Text>已参与任务</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

