import React from "react";
import {View, ScrollView, StatusBar, Text, StyleSheet} from 'react-native';
import Headers from "@/Components/header/Headers";
import theme from "@/theme/theme";

export default class AcceptNewcreen extends React.Component<any,any> {
    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor(theme.backgroundColor)
        });
    }

    _onClickRightBtn=()=>{
        this.props.navigation.push('inTheJoinTask')
    }

    render() {
        return(
            <View style={{ flex: 1}}>
                <Headers
                    border={true}
                    backgroundColor={'#EB5B62'}
                    title={'任务中心'}
                    centerColor={'#fff'}
                    rightColor={'#fff'}
                    onClickRightBtn={()=>this._onClickRightBtn()}
                    rightTitle={'已参与任务'}
                    {...this.props}
                />
                <ScrollView style={{flex:1}}>
                    <Text>任务中心</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({

})

