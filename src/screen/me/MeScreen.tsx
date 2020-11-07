import React, { useState,useEffect } from "react";
import { View, Text,ScrollView,StyleSheet,StatusBar} from 'react-native';
import {Button} from '@ant-design/react-native';
import { observer, inject } from 'mobx-react'
import Headers from "@/Components/header/Headers";
import ImagePicker from '@/Components/imagePicker/ImagePicker'
import ChildrenSolt from '@/Components/childrenSolt/ChildrenSolt'

let MeScreen = inject("userState")(observer((props=>{
    useEffect(() => {
        props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
    })
    function openDrawer(){
        props.navigation.toggleDrawer()
    }
    function onGoMySettingPage(){
        props.navigation.navigate('mySetting');
    }
    function onGoVerificationCodeInputPage() {
        props.navigation.navigate('verificationCode');
    }
    return(
        <View style={{ flex: 1}}>
            <Headers
                backgroundColor={'#fff'}
                centerContent={<Text style={[styles.headerBoxCenterText,{color:'#666'}]} numberOfLines={1}>{'我的'}</Text>}
                {...props}
            />
            <ScrollView>
                <Text>MeScreen Screen</Text>
                <Button onPress={openDrawer}>打开抽屉</Button>
                <Button onPress={onGoMySettingPage}>我的设置</Button>
                <ImagePicker {...props}/>
                <ChildrenSolt renderContent={<View><Text>123123123123123</Text></View>}/>
                <Button onPress={openDrawer}>打开抽屉</Button>
                <Button onPress={onGoMySettingPage}>我的设置</Button>
                <Button onPress={onGoVerificationCodeInputPage}>验证码</Button>
            </ScrollView>
        </View>
    )
})))
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
    }
})

export default MeScreen;
