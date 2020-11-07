import React, { useState,useEffect } from "react";
import { View,StyleSheet,TouchableOpacity,Text} from 'react-native';
import {Provider} from '@ant-design/react-native';
import {JRNStatusBar} from '@/Components/jRNStatusBar/JRNStatusBar';
import {inject, observer} from "mobx-react";
import Video from 'react-native-video';
import {Toast,Portal} from '@ant-design/react-native'
import NavigationService from "@/utils/NavigationService";

let LoadingScreen = inject("userState")(observer((props=>{
        let key = Toast.loading('loading...');
        function onLoadStart() {
            Portal.remove(key)
        }
        function onEnd() {
            NavigationService.reset('login');
        }
        function onNextPage() {
            NavigationService.reset('login');
        }
        return(
            <Provider>
                <View style={{ flex: 1}}>
                    <JRNStatusBar {...props}/>
                    <View style={styles.videoBox}>
                        <View style={styles.timeBox}>
                            <TouchableOpacity onPress={onNextPage}><Text style={styles.timeBoxText}>跳过</Text></TouchableOpacity>
                        </View>
                        <Video
                            source={require('@/assess/mp4/loading.mp4')}
                            style={styles.fullScreen}
                            muted={false}
                            resizeMode={'cover'}
                            onLoadStart={onLoadStart}
                            onEnd={onEnd}
                            playWhenInactive={false}
                            playInBackground={false}
                            ignoreSilentSwitch={'ignore'}
                        />
                    </View>
                </View>
            </Provider>
    )
})))

const styles = StyleSheet.create({
    fullScreen: {
        flex:1,
        flexDirection: 'row',
    },
    videoBox:{
        flex:1,
        position:'relative',
    },
    timeBox:{
        position:'absolute',
        zIndex:9999,
        elevation:9999,
        top:60,
        right:10,
    },
    timeBoxText:{
        color:'#fff'
    }
})

export default LoadingScreen;
