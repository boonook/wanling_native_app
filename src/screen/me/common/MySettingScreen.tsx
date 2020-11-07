import React, { useState,useEffect } from "react";
import { View, Text,TouchableOpacity,StyleSheet,Image} from 'react-native';
import Headers from "@/Components/header/Headers";
import {Icon,ActionSheet} from '@ant-design/react-native';
import NavigationService from '@/utils/NavigationService'
import theme from '@/theme/theme.js'
const MySettingScreen = (props) => {
    function onLoginOut() {
        const BUTTONS = [
            '确定',
            '取消',
        ];
        ActionSheet.showActionSheetWithOptions(
            {
                title: '你确定要退出登陆吗？',
                message: '退出后用户信息缓存将被清除',
                options: BUTTONS,
                cancelButtonIndex: 4,
                destructiveButtonIndex:0,
            },
            buttonIndex => {
                if(buttonIndex+''==='0'){
                    NavigationService.reset('login')
                }
            }
        );
    }
    return(
        <View style={styles.container}>
            <Headers
                backgroundColor={theme.backgroundColor}
                title={'设置'}
                centerColor={'#fff'}
                leftColor={'#fff'}
                leftTitle={'返回'}
                leftIcon={'left'}
                {...props}
            />
           <View style={styles.contentBox}>
               <View style={styles.contentBoxTop}>
                  <TouchableOpacity onPress={()=>{
                      this.props.navigation.navigate("myProductList");
                  }}>
                      <View style={styles.footer}>
                          <View style={styles.footerImg}>
                              <Image  style={styles.footerImg} source={require('@/assess/images/wode_shez.png')} />
                          </View>
                          <View style={styles.footerLeft}>
                              <Text>我的进货</Text>
                          </View>
                          <Icon name="right" size="md" color="#ccc" />
                      </View>
                  </TouchableOpacity>
               </View>
               <View style={styles.loginOutBtn}>
                   <TouchableOpacity onPress={onLoginOut}>
                       <Text style={styles.loginOutBtnText}>退出登录</Text>
                   </TouchableOpacity>
               </View>
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#eee',
        flexDirection:'column'
    },
    footer:{
        flexDirection:'row',
        paddingTop:15,
        paddingBottom:15,
        borderBottomColor:'#eee',
        borderStyle:'solid',
        borderBottomWidth:1,
        alignItems:'center',
        backgroundColor:'#fff',
        paddingLeft:12,
        paddingRight:12,
        borderRadius:5
    },
    footerLeft:{
        flex:1,
        marginLeft:10
    },
    footerImg:{
        width:24,
        height:24
    },
    contentBox:{
        flex:1,
        paddingLeft:12,
        paddingRight:12
    },
    loginOutBtn:{
        width:'100%',
        backgroundColor:"#fff",
        height:50,
        marginTop:20,
        borderRadius:5
    },
    loginOutBtnText:{
        lineHeight:50,
        textAlign:'center'
    },
    contentBoxTop:{
        marginTop:20
    }
})

export default MySettingScreen;
