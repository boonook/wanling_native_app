import React from "react";
import {View, Text, TouchableOpacity, StyleSheet,ScrollView, StatusBar} from 'react-native';
import {inject, observer} from "mobx-react";
import Headers from "@/Components/header/Headers";
import {CachedImage,CachedImageBackground} from 'react-native-img-cache';

// @ts-ignore
@inject(["userState"]) // 注入对应的store
@observer // 监听当前组件
export default class SignCenterScreen extends React.Component<any,any> {
    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
    }
    render() {
        return(
            <View style={styles.container}>
                <Headers
                    backgroundColor={'#fff'}
                    title={'签到中心'}
                    centerColor={'#666'}
                    leftColor={'#666'}
                    leftIcon={'left'}
                    rightColor={'#666'}
                    rightTitle={'任务记录'}
                    {...this.props}
                />
                <View style={styles.contentBox}>
                    <CachedImageBackground style={{width:'100%',height:'100%'}}  source={require('@/assess/images/me/wode_bg.png')}>
                        <View style={styles.contentBoxContent}>
                            <ScrollView style={{height:'100%'}}>
                                <Text>123123123</Text>
                            </ScrollView>
                        </View>
                    </CachedImageBackground>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#eee',
        flexDirection:'column'
    },
    contentBox:{
        flex: 1,
    },
    contentBoxContent:{
        flex: 1,
        marginLeft:12,
        marginRight:12,
        marginTop:12,
        marginBottom:36,
        borderWidth:1,
        borderColor:'#fff',
        borderStyle:'solid',
        borderRadius:10
    }
})
