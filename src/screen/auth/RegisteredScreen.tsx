import React, { useState,useEffect } from "react";
import { View,Text,StyleSheet,TextInput,StatusBar,Dimensions} from 'react-native';
import theme from '@/theme/theme.js'
import Headers from "@/Components/header/Headers";
import {Icon, Toast,Provider} from '@ant-design/react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from "react-native-gesture-handler";
const {height,width} =  Dimensions.get('window');
const RegisteredScreen = (props) => {
    /****密码是否可见start****/
    const [settingLoginPwdStatus,setSettingLoginPwdStatus] = useState(true);
    const [querenLoginPwdStatus,setQuerenLoginPwdStatus] = useState(true);
    const [settingPayPwdStatus,setSettingPayPwdStatus] = useState(true);
    const [querenPayPwdStatus,setQuerenPayPwdStatus] = useState(true);
    /****密码是否可见end****/
    const [userName,setUserName] = useState('boonook');
    const [userPwd,setUserPwd] = useState('boonook')

    useEffect(() => {
        props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
    })

    function onRegistered() {
        /*if(userName+''==='' || userName===null||userName===undefined){
            Toast.fail('用户名不能为空！',0.8);
            return false;
        }else{
            let reg = /^(?![^a-zA-Z]+$)(?!\D+$).{6,12}/;
            if(!reg.test(userName)){
                Toast.fail('密码必须有数字和字母构成，且最小6位最大12位！',0.8);
                return false;
            }
        }*/
        props.navigation.push('finishRegistered')
    }

    function onSetSettingLoginPwdStatus() {
        setSettingLoginPwdStatus(!settingLoginPwdStatus)
    }

    function onSetQuerenLoginPwdStatus() {
        setQuerenLoginPwdStatus(!querenLoginPwdStatus)
    }

    function onSetSettingPayPwdStatus() {
        setSettingPayPwdStatus(!settingPayPwdStatus)
    }

    function onSetQuerenPayPwdStatus() {
        setQuerenPayPwdStatus(!querenPayPwdStatus)
    }

    // @ts-ignore
    return(
        <Provider>
            <KeyboardAwareScrollView>
            <View style={{ height:height,width:width,flexDirection:'column',backgroundColor:'#fff'}}>
                <Headers
                    leftIcon={'left'}
                    leftColor={'#444'}
                    backgroundColor={'#fff'}
                    border
                    centerContent={<Text style={[styles.headerBoxCenterText,{color:'#444'}]} numberOfLines={1}>{'新用户注册'}</Text>}
                    {...props}
                />
                <View style={styles.formContent}>
                    <View style={[styles.formItem,{marginTop:20}]}>
                        <View style={styles.formItemLeft}>
                            <Text style={styles.formItemLeftText}>设置登陆密码</Text>
                        </View>
                        <View style={styles.formItemRight}>
                            <TextInput value={userName} onChange={value =>{
                                setUserName(value.nativeEvent.text)
                            }} placeholder="请输入登陆密码" secureTextEntry={settingLoginPwdStatus} style={styles.formItemRightText}/>
                        </View>
                        <TouchableOpacity onPress={onSetSettingLoginPwdStatus}>
                            {settingLoginPwdStatus?<Icon name="eye" size="md" color="#666" />:<Icon name="eye-invisible" size="md" color="#666" />}
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.formItem,{marginTop:20}]}>
                        <View style={styles.formItemLeft}>
                            <Text style={styles.formItemLeftText}>确定登陆密码</Text>
                        </View>
                        <View style={styles.formItemRight}>
                            <TextInput value={userName} onChange={value =>{
                                setUserName(value.nativeEvent.text)
                            }} placeholder="请输入登陆密码" secureTextEntry={querenLoginPwdStatus} style={styles.formItemRightText}/>
                        </View>
                        <TouchableOpacity onPress={onSetQuerenLoginPwdStatus}>
                            {querenLoginPwdStatus?<Icon name="eye" size="md" color="#666" />:<Icon name="eye-invisible" size="md" color="#666" />}
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.formItem,{marginTop:20}]}>
                        <View style={styles.formItemLeft}>
                            <Text style={styles.formItemLeftText}>设置支付密码</Text>
                        </View>
                        <View style={styles.formItemRight}>
                            <TextInput value={userName} onChange={value =>{
                                setUserName(value.nativeEvent.text)
                            }} placeholder="请输入支付密码" secureTextEntry={settingPayPwdStatus} style={styles.formItemRightText}/>
                        </View>
                        <TouchableOpacity onPress={onSetSettingPayPwdStatus}>
                            {settingPayPwdStatus?<Icon name="eye" size="md" color="#666" />:<Icon name="eye-invisible" size="md" color="#666" />}
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.formItem,{marginTop:20}]}>
                        <View style={styles.formItemLeft}>
                            <Text style={styles.formItemLeftText}>确认支付密码</Text>
                        </View>
                        <View style={styles.formItemRight}>
                            <TextInput value={userName} onChange={value =>{
                                setUserName(value.nativeEvent.text)
                            }} placeholder="请输入支付密码" secureTextEntry={querenPayPwdStatus} style={styles.formItemRightText}/>
                        </View>
                        <TouchableOpacity onPress={onSetQuerenPayPwdStatus}>
                            {querenPayPwdStatus?<Icon name="eye" size="md" color="#666" />:<Icon name="eye-invisible" size="md" color="#666" />}
                        </TouchableOpacity>
                    </View>
                    <View style={[styles.formItem,{marginTop:20}]}>
                        <View style={styles.formItemLeft}>
                            <Text style={styles.formItemLeftText}>邀请码（必填）</Text>
                        </View>
                        <View style={styles.formItemRight}>
                            <TextInput value={userName} onChange={value =>{
                                setUserName(value.nativeEvent.text)
                            }} placeholder="请输入邀请码" style={styles.formItemRightText}/>
                        </View>
                    </View>
                    <View style={[styles.formItem,{marginTop:20}]}>
                        <View style={styles.formItemLeft}>
                            <Text style={styles.formItemLeftText}>昵称</Text>
                        </View>
                        <View style={styles.formItemRight}>
                            <TextInput value={userName} onChange={value =>{
                                setUserName(value.nativeEvent.text)
                            }} placeholder="请输入昵称" style={styles.formItemRightText}/>
                        </View>
                    </View>
                </View>
                <View style={styles.loginBtn}>
                    <TouchableOpacity onPress={onRegistered}>
                        <View style={{backgroundColor:'#E71F2A',borderRadius:5}}>
                            <Text style={styles.loginBtnText}>完成注册</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </KeyboardAwareScrollView>
        </Provider>
    )
}

const styles = StyleSheet.create({
    leftContent:{
        flexDirection:'row'
    },
    leftContentTitle:{
        color:'#fff',
        paddingLeft:5
    },
    headerBoxCenterText:{
        textAlign:'center',
        fontWeight:'600',
        fontSize:16
    },
    formContent:{
        flex:1,
        paddingLeft:24,
        paddingRight:24,
    },
    formContentTop:{
        backgroundColor:theme.backgroundColor,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:30,
        paddingBottom:30
    },
    formContentTopLogoBox:{
        width:80,
        height:80,
        backgroundColor:'#fff',
        borderRadius:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    formContentTopTitle:{
        paddingTop:30,
        color:'#fff',
        fontSize:16
    },
    formContentCenter:{
        flex:1,
        paddingLeft:24,
        paddingRight:24,
    },
    formItem:{
        backgroundColor:'#eee',
        flexDirection:'row',
        alignItems:'center',
        height:50,
        lineHeight:50,
        paddingLeft:12,
        paddingRight:12,
        borderRadius:5
    },
    IconImage:{
        width:34,
        height:34
    },
    formItemRight:{
        flex:1
    },
    formItemRightText:{
        paddingLeft:12
    },
    loginBtn:{
        width:'100%',
        height:50,
        marginTop:20,
        borderRadius:5,
        marginBottom:30,
        paddingLeft:24,
        paddingRight:24,
    },
    forgetBox:{
        width:'100%',
        marginTop:20,
    },
    zhuCeBox:{
        width:'100%',
        marginTop:20,
    },
    zhuCeBoxText:{
        textAlign:'center',
        color:'#666'
    },
    loginBtnText:{
        color:'#fff',
        lineHeight:50,
        textAlign:'center',
        fontSize:16
    },
    forgetBoxText:{
        textAlign:'right',
        color:'#666'
    },
    zhuCeBoxBtnText:{
        color:theme.backgroundColor
    },
    formItemLeft:{
        width:100
    },
    formItemLeftText:{
        color:'#666'
    }
})


export default RegisteredScreen;
