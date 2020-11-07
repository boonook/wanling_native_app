//@ts-nocheck
import { button, colors, main } from '@/assess/styles';
import { size } from '@/utils';
import React from 'react';
import {View,Text,Image,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import { KeyboardAwareScrollView }  from 'react-native-keyboard-aware-scroll-view';
import {inject, observer} from 'mobx-react';

@inject(["userState"]) // 注入对应的store
@observer // 监听当前组件
export default class LoginScreen extends React.Component<any,any>{
    constructor(props) {
        super(props);
        this.state = {
            mnemonic:null
        };
    }

    handleLogin(){
        this.props.userState.login()
    }

    onRegistered=()=>{
        this.props.navigation.push('registered')
    }

    onForgetPwd=()=>{
        this.props.navigation.push('forgetPwd')
    }

    render(){
        return (
            <View style={{flex:1}}>
                <KeyboardAwareScrollView contentContainerStyle={{flexDirection:'column',alignItems:"center"}}>
                    <Image style={styles.head} source={require('@/assess/images/auth/icon_head.png')}/>
                    <View style={styles.logo}>
                        <Text style={{color:colors.primary}}>LOGO</Text>
                    </View>
                    <View style={styles.form}>
                        <View style={styles.formItem}>
                            <Image style={styles.icon} source={require('@/assess/images/auth/icon_phone.png')}/>
                            <TextInput style={styles.input} placeholder={"请输入手机号"} keyboardType={'phone-pad'}/>
                        </View>
                        <View style={[styles.formItem,{marginTop:15}]}>
                            <Image style={styles.icon} source={require('@/assess/images/auth/icon_pwd.png')}/>
                            <TextInput style={styles.input} placeholder={"请输入手机号"} secureTextEntry={true}/>
                        </View>
                        <View style={styles.forget} >
                            <Text onPress={()=>this.onForgetPwd()}>忘记密码？</Text>
                        </View>
                    </View>
                    <View style={[main.center,{marginTop:-20}]}>
                        <TouchableOpacity onPress={()=>{
                            this.handleLogin()
                        }}>
                            <View style={styles.login_box_footer_btn}>
                                <Text style={styles.login_box_footer_btn_text}>登陆</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <View style={{marginTop:size(16)}}>
                            <Text>还没有账号?<Text  onPress={()=>this.onRegistered()} style={{color:colors.primary}}>立即注册</Text></Text>
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    head:{
        width:size(375),
        height:size(225.5)
    },
    logo:{
        width:size(85.5),
        height:size(85.5),
        display:'flex',
        justifyContent:'center',
        alignItems:"center",
        borderRadius:45,
        borderWidth:3,
        borderColor:colors.primary,
        marginTop:-size(30),
        backgroundColor:'#fff',
        zIndex:1
    },
    form:{
        width:size(351),
        backgroundColor:'#fff',
        borderRadius:4,
        paddingTop:size(70),
        paddingHorizontal:size(20),
        paddingBottom:size(50),
        marginTop:-size(40)
    },
    formItem:{
        borderBottomWidth:1,
        borderBottomColor:'#ccc',
        paddingVertical:8,
        paddingHorizontal:4,
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    icon:{
        width:size(15),
        height:size(22),
    },
    input:{
        flex:1,
        height:size(35),
        marginLeft:15,
        fontSize:size(15)
    },
    forget:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'flex-end',
        marginVertical:size(10)
    },
    login_box_footer_btn:{
        width:226,
        backgroundColor:'#F54751',
        alignItems:'center',
        borderRadius:25.5,
    },
    login_box_footer_btn_text:{
        height:45,
        lineHeight:45,
        textAlign:'center',
        color:'#fff',
        fontSize:17
    },
})
