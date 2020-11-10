import React, { useState,useEffect } from "react";
import {View, Text, ScrollView, StyleSheet, StatusBar, TouchableOpacity, TextInput} from 'react-native';
import {Button, Icon} from '@ant-design/react-native';
import {CachedImage,CachedImageBackground} from 'react-native-img-cache'
import Headers from "@/Components/header/Headers";
import ImagePicker from '@/Components/imagePicker/ImagePicker';
import ChildrenSolt from '@/Components/childrenSolt/ChildrenSolt';

export default class MeScreen extends React.Component<any,any> {
    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
    }
    openDrawer=()=>{
        this.props.navigation.toggleDrawer()
    }
    onGoMySettingPage=()=>{
        this.props.navigation.navigate('mySetting');
    }
    onGoVerificationCodeInputPage=()=>{
        this.props.navigation.navigate('verificationCode');
    }
    render() {
        return(
            <View style={{ flex: 1}}>
                <Headers
                    backgroundColor={'#fff'}
                    centerContent={<Text style={[styles.headerBoxCenterText,{color:'#666'}]} numberOfLines={1}>{'我的'}</Text>}
                    rightColor={'#fff'}
                    rightIcon={'setting'}
                    {...this.props}
                />
                <ScrollView>
                    <View style={styles.contentHeader}>
                        <CachedImageBackground  style={{width:'100%',height:260}}  source={require('@/assess/images/me/wode_bg.png')}>
                            <View style={styles.contentHeaderContent}>
                                <View style={styles.contentHeaderContentLeft}>

                                </View>
                                <View style={styles.contentHeaderContentCenter}>
                                   <View>
                                       <Text style={styles.contentHeaderContentCenterNameText}>用户名：wei0001</Text>
                                   </View>
                                    <View>
                                        <Text  style={styles.contentHeaderContentCenterPhoneText}>手机号：15267889897</Text>
                                    </View>
                                </View>
                                <View>
                                    <Text style={styles.sign}>签到</Text>
                                </View>
                            </View>
                        </CachedImageBackground>
                       <View style={styles.contentHeaderInputBg}>
                           <CachedImageBackground  style={{width:'100%',height:120}}  source={require('@/assess/images/me/juxing.png')}/>
                       </View>
                    </View>
                    <View style={[styles.cardBox,{marginTop:-45}]}>
                        <View style={styles.cardBoxHeader}>
                            <View style={styles.cardBoxHeaderLeft}>
                                <Text>我的订单</Text>
                            </View>
                            <View>
                                <Text style={{color:'#999'}}>查看全部订单</Text>
                            </View>
                            <View>
                                <Icon name={'right'} size={16} color={'#999'} />
                            </View>
                        </View>
                        <View style={styles.cardBoxBody}>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_dindan01.png')}/>
                                </View>
                                <View>
                                    <Text>代付款</Text>
                                </View>
                            </View>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_dindan02.png')}/>
                                </View>
                                <Text>代发货</Text>
                            </View>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_dindan03.png')}/>
                                </View>
                                <Text>已发货</Text>
                            </View>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_dindan04.png')}/>
                                </View>
                                <Text>已完成</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardBox}>
                        <View style={styles.cardBoxHeader}>
                            <View style={styles.cardBoxHeaderLeft}>
                                <Text>我的收益</Text>
                            </View>
                        </View>
                        <View style={styles.cardBoxBodyTwo}>
                            <View style={styles.cardBoxBodyTwoItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                   <Text style={styles.cardBoxBodyItemImgText}>1000</Text>
                                </View>
                                <View>
                                    <Text style={styles.cardBoxBodyItemSum}>总收益</Text>
                                </View>
                            </View>
                            <View style={styles.cardBoxBodyTwoItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <Text style={styles.cardBoxBodyItemImgText}>1000</Text>
                                </View>
                                <Text style={styles.cardBoxBodyItemSum}>余额</Text>
                            </View>
                            <View style={styles.cardBoxBodyTwoItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <Text style={styles.cardBoxBodyItemImgText}>1000</Text>
                                </View>
                                <Text style={styles.cardBoxBodyItemSum}>一级推荐</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cardBox}>
                        <View style={styles.cardBoxHeader}>
                            <View style={styles.cardBoxHeaderLeft}>
                                <Text>必备工具</Text>
                            </View>
                        </View>
                        <View style={styles.cardBoxBody}>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_gj01.png')}/>
                                </View>
                                <View>
                                    <Text>我的团队</Text>
                                </View>
                            </View>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_gj02.png')}/>
                                </View>
                                <Text>邀请好友</Text>
                            </View>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_gj03.png')}/>
                                </View>
                                <Text>收藏中心</Text>
                            </View>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_gj04.png')}/>
                                </View>
                                <Text>我的拼团</Text>
                            </View>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_gj05.png')}/>
                                </View>
                                <Text>安全中心</Text>
                            </View>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_gj06.png')}/>
                                </View>
                                <Text>银行卡</Text>
                            </View>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_gj07.png')}/>
                                </View>
                                <Text>收货地址</Text>
                            </View>
                            <View style={styles.cardBoxBodyItem}>
                                <View style={styles.cardBoxBodyItemImg}>
                                    <TouchableOpacity onPress={()=>this.onGoMySettingPage()}>
                                        <CachedImage style={styles.filePathImg} source={require('@/assess/images/me/wd_icon_gj08.png')}/>
                                    </TouchableOpacity>
                                </View>
                                <Text>设置中心</Text>
                            </View>
                        </View>
                    </View>
                    {/*<Text>MeScreen Screen</Text>*/}
                    {/*<Button onPress={()=>this.openDrawer()}>打开抽屉</Button>*/}
                    {/*<Button onPress={()=>this.onGoMySettingPage()}>我的设置</Button>*/}
                    {/*<ImagePicker {...this.props}/>*/}
                    {/*<ChildrenSolt renderContent={<View><Text>123123123123123</Text></View>}/>*/}
                    {/*<Button onPress={()=>this.openDrawer()}>打开抽屉</Button>*/}
                    {/*<Button onPress={()=>this.onGoMySettingPage()}>我的设置</Button>*/}
                    {/*<Button onPress={()=>this.onGoVerificationCodeInputPage()}>验证码</Button>*/}
                </ScrollView>
            </View>
        )
    }
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
    cardBox:{
        backgroundColor:'#fff',
        padding:15,
        marginTop:15,
        marginLeft:15,
        marginRight:15
    },
    cardBoxHeader:{
        flexDirection:'row',
        alignItems:"center"
    },
    cardBoxHeaderLeft:{
        flex:1
    },
    cardBoxBodyTwo:{
        flexDirection:'row',
        alignItems:"center",
        flexWrap:'wrap'
    },
    cardBoxBody:{
        flexDirection:'row',
        alignItems:"center",
        flexWrap:'wrap'
    },
    cardBoxBodyTwoItem:{
        marginTop:30,
        textAlign:'center',
        flexDirection:'column',
        alignItems:"center",
        flex:1
    },
    cardBoxBodyItem:{
        marginTop:30,
        textAlign:'center',
        flexDirection:'column',
        alignItems:"center",
        width:'25%'
    },
    filePathImg:{
        width:40,
        height:40
    },
    cardBoxBodyItemImg:{
        marginBottom:10
    },
    cardBoxBodyItemImgText:{
        fontSize:20
    },
    cardBoxBodyItemSum:{
        color:"#999"
    },
    contentHeader:{
        position:'relative'
    },
    contentHeaderInputBg:{
        position:'absolute',
        zIndex:999,
        width:'100%',
        bottom:-30,
        elevation:999
    },
    contentHeaderContent:{
        height:260,
        flexDirection:'row',
        alignItems:'center',
        padding:15,
        marginTop:-30
    },
    contentHeaderContentLeft:{
        width:100,
        height:100,
        backgroundColor:'#eee',
        borderRadius:50
    },
    contentHeaderContentCenter:{
        flex:1,
        marginLeft:15,
        marginRight:15
    },
    contentHeaderContentCenterNameText:{
        color:'#fff',
        fontSize:18,
        marginBottom:10,
        fontWeight:'700'
    },
    contentHeaderContentCenterPhoneText:{
        color:'#fff',
        fontSize:12,
    },
    sign:{
        backgroundColor:'rgba(255,255,255,0.4)',
        color:'#fff',
        paddingLeft:20,
        paddingRight:20,
        paddingTop:10,
        paddingBottom:10,
        borderRadius:5,
        overflow:'hidden'
    }
})
