import React, { useState,useEffect } from "react";
import { View,Text,StyleSheet,StatusBar,Dimensions,Image} from 'react-native';
import theme from '@/theme/theme.js'
import Headers from "@/Components/header/Headers";
import {Toast,Icon} from '@ant-design/react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";
const {height,width} =  Dimensions.get('window');
const FinishRegisteredScreen = (props) => {
    const [userName,setUserName] = useState('boonook');
    const [userPwd,setUserPwd] = useState('boonook');
    const [modalBoxShow,setModalBoxShow] = useState(true)

    useEffect(() => {
        props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor(theme.backgroundColor)
        });
    })

    function onRegistered() {

    }

    function onLogin() {
        if(userName+''==='' || userName===null||userName===undefined){
            Toast.fail('用户名不能为空！',0.8);
            return false;
        }
        if(userPwd+''==='' || userPwd===null||userPwd===undefined){
            Toast.fail('密码不能为空！',0.8);
            return false;
        }
        let params={
            userName,
            userPwd
        }
        props.navigation.push('home', {
            itemId: Math.floor(Math.random() * 100),
        })
    }

    ///关闭
    function onClose() {
        setModalBoxShow(false);
    }

    // @ts-ignore
    return(
        <KeyboardAwareScrollView>
            <View  style={styles.container}>
                <Headers
                    leftIcon={'left'}
                    leftColor={'#fff'}
                    backgroundColor={theme.backgroundColor}
                    centerContent={<Text style={[styles.headerBoxCenterText,{color:'#fff'}]} numberOfLines={1}>{'新用户注册'}</Text>}
                    {...props}
                />
                <View style={styles.formContent}>
                    <ScrollView>
                        <View style={styles.formContentBox}>
                            <View style={styles.formContentBoxTop}>
                                <Text style={styles.formContentBoxTopTitle}>您的矿工ID</Text>
                                <View>
                                    <Text style={styles.formContentBoxTopContent}>123445</Text>
                                </View>
                            </View>
                            <View style={styles.formContentBoxTop}>
                                <Text style={styles.formContentBoxTopTitle}>您的矿工助记词ID</Text>
                                <View style={styles.formContentBoxTopListItem}>
                                    <View style={styles.formContentBoxTopListItemChild}>
                                        <Text style={styles.formContentBoxTopListItemChildText}>DSKL</Text>
                                    </View>
                                    <View style={styles.formContentBoxTopListItemChild}>
                                        <Text style={styles.formContentBoxTopListItemChildText}>DSKL</Text>
                                    </View>
                                </View>
                                <View style={styles.formContentBoxTopListItem}>
                                    <View style={styles.formContentBoxTopListItemChild}>
                                        <Text style={styles.formContentBoxTopListItemChildText}>DSKL</Text>
                                    </View>
                                    <View style={styles.formContentBoxTopListItemChild}>
                                        <Text style={styles.formContentBoxTopListItemChildText}>DSKL</Text>
                                    </View>
                                </View>
                                <View style={styles.formContentBoxTopListItem}>
                                    <View style={styles.formContentBoxTopListItemChild}>
                                        <Text style={styles.formContentBoxTopListItemChildText}>DSKL</Text>
                                    </View>
                                    <View style={styles.formContentBoxTopListItemChild}>
                                        <Text style={styles.formContentBoxTopListItemChildText}>DSKL</Text>
                                    </View>
                                </View>
                                <View style={styles.formContentBoxTopListItem}>
                                    <View style={styles.formContentBoxTopListItemChild}>
                                        <Text style={styles.formContentBoxTopListItemChildText}>DSKL</Text>
                                    </View>
                                    <View style={styles.formContentBoxTopListItemChild}>
                                        <Text style={styles.formContentBoxTopListItemChildText}>DSKL</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={styles.formdec}>
                                <Text style={styles.formdecText}>
                                    重要提示:請牢記您的礦工助記詞,該礦工助記詞涉及密傌和資產安全,如果丟失會導致無法修改密碼,甚至丟失資產。如因礦工助記詞和礦工ID未妥善保存,導致的資產丢失問題由個人負責,官方不予提供任何支持及服務。
                                </Text>
                            </View>
                            <TouchableOpacity onPress={onLogin}>
                                <View style={{backgroundColor:theme.backgroundColor,borderRadius:5}}>
                                    <Text style={styles.loginBtnText}>我已保存矿工ID和矿工助记词</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                {modalBoxShow?<View style={styles.modalBox}>
                    <View style={styles.footerImgBox}>
                        <Image  style={styles.footerImg} source={require('@/assess/images/tanchuang.png')} />
                        <View style={styles.shuxian}/>
                        <View style={{marginTop:-3}}>
                            <TouchableOpacity onPress={onClose}>
                                <Icon name="close-circle" size={30} color="#fff" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>:null}
            </View>
        </KeyboardAwareScrollView>
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
    },
    formContentBox:{
        paddingLeft:24,
        paddingRight:24,
        marginTop:20
    },
    loginBtnText:{
        color:'#fff',
        lineHeight:50,
        textAlign:'center',
        fontSize:16
    },
    formContentBoxTop:{
        backgroundColor:'#eee',
        paddingTop:24,
        paddingBottom:24,
        marginBottom:20,
        borderRadius:5
    },
    formContentBoxTopTitle:{
        textAlign:'center'
    },
    formContentBoxTopContent:{
        textAlign:'center',
        paddingTop:24,
        fontSize:30,
        color:theme.backgroundColor
    },
    formContentBoxTopListItem:{
        flexDirection:'row',
        paddingTop:24,
    },
    formContentBoxTopListItemChild:{
        flex:1,
    },
    formContentBoxTopListItemChildText:{
        textAlign:'center'
    },
    formdec:{
        marginBottom:40,
    },
    formdecText:{
        lineHeight:24,
        color:'#666'
    },
    modalBox:{
        position:'absolute',
        zIndex:999,
        elevation:999,
        height:height,
        width:width,
        backgroundColor:"rgba(0,0,0,0.2)"
    },
    container:{
        height:height,
        width:width,
        flexDirection:'column',
        backgroundColor:'#fff',
        position:'relative'
    },
    footerImg:{
        width:300,
        height:300,
    },
    footerImgBox:{
        flex:1,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        marginTop:-200
    },
    shuxian:{
        width:1,
        height:60,
        backgroundColor:'#fff'
    }
})


export default FinishRegisteredScreen;
