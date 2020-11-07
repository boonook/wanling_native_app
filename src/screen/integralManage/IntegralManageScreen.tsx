import React from "react";
import {View, Text, StyleSheet} from "react-native";
import Headers from "@/Components/header/Headers";

export default class IntegralManageScreen extends React.Component<any,any>{
    constructor(props) {
        super(props);
        this.state = {
            mnemonic:null
        };
    }
    render() {
        return(
            <View style={{ flex: 1}}>
                <Headers
                    backgroundColor={'#fff'}
                    centerContent={<Text style={[styles.headerBoxCenterText,{color:'#666'}]} numberOfLines={1}>{'积分'}</Text>}
                    {...this.props}
                />
                <Text>积分</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    leftContent:{
        flexDirection:'row'
    },
    leftContentTitle:{
        color:'#666',
        paddingLeft:5
    },
    headerBoxCenterText:{
        textAlign:'center',
        fontWeight:'600',
        fontSize:16
    }
})
