import React, { Component } from "react";
import {View, StyleSheet, Text, TouchableOpacity, Clipboard,Linking} from 'react-native';
import {inject, observer} from 'mobx-react';
import {CachedImageBackground} from 'react-native-img-cache';
import Headers from "@/Components/header/Headers";
import QRCodeScreen from '@/Components/QRCode/QRCodeScreen'
import {Toast, Provider, ActionSheet} from '@ant-design/react-native';

// @ts-ignore
@inject(["userState"]) // 注入对应的store
@observer // 监听当前组件
export default class SharePromotionScreen extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            value:'http://register.fcnworld.net?code='
        };
    };

    componentDidMount(){

    }

    onCopy= async ()=>{
        // @ts-ignore
        Clipboard.setString(this.state.value);
        let  str = await Clipboard.getString();
        console.log(str)//我是文本
        Toast.success('复制成功', 0.8);
    }

    ///分享
    onSureClick=()=>{
        const BUTTONS = [
            '在浏览器中打开',
            '取消',
        ];
        ActionSheet.showActionSheetWithOptions(
            {
                title: '分享',
                message: '用户可以快速从浏览器中打开',
                options: BUTTONS,
                cancelButtonIndex: 1,
                destructiveButtonIndex:0,
            },
            buttonIndex => {
                if(buttonIndex+''==='0'){
                    let baiduURL = this.state.value;
                    Linking.canOpenURL(baiduURL).then(supported => {
                        if (!supported) {
                            console.warn('Can\'t handle url: ' + baiduURL);
                        } else {
                            return Linking.openURL(baiduURL);
                        }
                    }).catch(err => console.error('An error occurred',baiduURL));
                }
            }
        );
    }

    render() {
        return (
            <View style={styles.AddMyAddress}>
                <Headers
                    backgroundColor={'#fff'}
                    title={'邀请好友'}
                    centerColor={'#666'}
                    leftColor={'#666'}
                    leftTitle={'返回'}
                    leftIcon={'left'}
                    rightIcon={'ellipsis'}
                    rightColor={'#666'}
                    onClickRightBtn={()=>this.onSureClick()}
                    {...this.props}
                />
                <View style={{flex:1}}>
                    <CachedImageBackground style={{flex:1}} source={require('@/assess/images/me/fenxiangtuiguang.png')}>
                        <View style={styles.contentBox}>
                            <QRCodeScreen value={this.state.value}/>
                            <View style={styles.valueTextBox}>
                                <View>
                                   <Text numberOfLines={1} style={styles.valueTextBoxValue}>{this.state.value}</Text>
                                </View>
                                <View>
                                    <TouchableOpacity onPress={()=>{
                                        this.onCopy()
                                    }}>
                                        <Text style={styles.valueTextBtn}>复制</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </CachedImageBackground>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    AddMyAddress:{
        backgroundColor:'#eee',
        flex:1
    },
    fenxiangtuiguangtitleBox:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        marginTop:60
    },
    contentBox:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginTop:260
    },
    valueTextBox:{
        marginTop:60,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FF4800',
        height:40,
        paddingLeft:24,
        paddingRight:24,
        borderRadius:20,
    },
    valueTextBoxValue:{
        color:'#fff',
        lineHeight:40,
    },
    valueTextBtn:{
        color:'#fff',
        lineHeight:40,
        marginLeft:30
    }
})
