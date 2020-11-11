import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import Headers from "@/Components/header/Headers";
import {Icon} from "@ant-design/react-native";

export default class SafetySettingScreen extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {

        };
    };
    componentWillMount(){

    };
    componentDidMount(){

    }

    render(){
        return (
            <View style={styles.myTeam}>
                <Headers
                    backgroundColor={'#fff'}
                    title={'安全中心'}
                    centerColor={'#666'}
                    leftColor={'#666'}
                    leftIcon={'left'}
                    border={true}
                    {...this.props}
                />
                <View style={{flex:1,padding:15}}>
                    <View style={styles.footerBox}>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate("editLoginPwd");
                        }}>
                            <View style={styles.footer}>
                                <View style={styles.footerLeft}>
                                    <Text>修改登陆密码</Text>
                                </View>
                                <Icon name="right" size="md" color="#ccc" />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>{
                            this.props.navigation.navigate("editPayPwd");
                        }}>
                            <View style={styles.footer}>
                                <View style={styles.footerLeft}>
                                    <Text>修改支付密码</Text>
                                </View>
                                <Icon name="right" size="md" color="#ccc" />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    myTeam:{
        flex:1,
        backgroundColor:'#eee'
    },
    contentBoxTop:{
        margin:15
    },
    footer:{
        flexDirection:'row',
        paddingTop:20,
        paddingBottom:20,
        borderBottomColor:'#eee',
        borderStyle:'solid',
        borderBottomWidth:1,
        alignItems:'center',
        backgroundColor:'#fff',
        paddingLeft:12,
        paddingRight:12,
    },
    footerLeft:{
        flex:1,
        marginLeft:10
    },
    footerBox:{
        borderRadius:5,
        overflow:'hidden'
    }
})
