import React from "react";
import {View, ScrollView, StatusBar, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Headers from "@/Components/header/Headers";
import theme from "@/theme/theme";
import {Icon} from "@ant-design/react-native";
import {CachedImageBackground} from "react-native-img-cache";

export default class AcceptNewcreen extends React.Component<any,any> {
    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
    }

    _onClickRightBtn=()=>{
        this.props.navigation.push('inTheJoinTask')
    }

    _onDetail=()=>{
        this.props.navigation.push('inTheJoinTaskDetail',{id:'1'})
    }

    render() {
        return(
            <View style={{ flex: 1}}>
                <Headers
                    border={true}
                    backgroundColor={'#fff'}
                    title={'任务中心'}
                    centerColor={'#666'}
                    rightColor={'#666'}
                    onClickRightBtn={()=>this._onClickRightBtn()}
                    rightTitle={'已参与任务'}
                    {...this.props}
                />
                <ScrollView style={{flex:1}}>
                    <View style={styles.contentHeader}>
                        <CachedImageBackground  style={{width:'100%',height:260}}  source={require('@/assess/images/acceptNew/wode_bg.png')}>
                            <View style={styles.contentHeaderContent}>
                                <View style={styles.contentHeaderContentLeft}>

                                </View>
                                <View style={styles.contentHeaderContentCenter}>
                                    <View>
                                        <Text style={styles.contentHeaderContentCenterNameText}>wei0001<Text style={styles.signIcon}>暂无会员</Text></Text>
                                    </View>
                                    <View>
                                        <Text  style={styles.contentHeaderContentCenterPhoneText}>ID：15267889897</Text>
                                    </View>
                                </View>
                            </View>
                        </CachedImageBackground>
                        <View style={styles.contentHeaderInputBg}>
                            <CachedImageBackground  style={{width:'100%',height:120}}  source={require('@/assess/images/me/juxing.png')}>
                                <View style={styles.searchBoxParent}>
                                    <View style={styles.searchBox}>
                                        <View style={styles.searchBoxLeft}>
                                            <Icon name={'search'} />
                                        </View>
                                        <View style={styles.searchBoxCenter}>
                                            <TextInput placeholder={'输入关键词搜索'} style={styles.inputSearch}/>
                                        </View>
                                    </View>
                                </View>
                            </CachedImageBackground>
                        </View>
                    </View>
                    <View style={styles.listItem}>
                        <View style={styles.listItemHeader}>
                            <View style={styles.listItemHeaderLeft}>
                                <View style={styles.suxian}></View>
                               <Text style={{paddingLeft:10}}>推荐任务</Text>
                            </View>
                            <View style={styles.listItemHeaderRight}>
                                <Icon name={'sync'} size={16} color={'#999'} />
                                <Text style={{color:'#999'}}>换一批</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>this._onDetail()}>
                            <View style={styles.listItemBody}>
                                <View style={styles.listItemBodyLeft}></View>
                                <View style={styles.listItemBodyCenter}>
                                    <View style={styles.listItemBodyCenterTop}>
                                        <View style={styles.listItemBodyCenterTopLeft}>
                                            <Text  style={styles.listItemBodyCenterTopLeftText} numberOfLines={2}>123123123123123123123123123123123123123123123123123123</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.listItemBodyCenterTopRightText} numberOfLines={2}>任务奖励：+6.7元</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.listItemBodyCenterFooterText}>123123123123123123</Text>
                                    </View>
                                </View>
                                <Icon name={'right'} size={16} color={'#999'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this._onDetail()}>
                            <View style={styles.listItemBody}>
                                <View style={styles.listItemBodyLeft}></View>
                                <View style={styles.listItemBodyCenter}>
                                    <View style={styles.listItemBodyCenterTop}>
                                        <View style={styles.listItemBodyCenterTopLeft}>
                                            <Text  style={styles.listItemBodyCenterTopLeftText} numberOfLines={2}>123123123123123123123123123123123123123123123123123123</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.listItemBodyCenterTopRightText} numberOfLines={2}>任务奖励：+6.7元</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.listItemBodyCenterFooterText}>123123123123123123</Text>
                                    </View>
                                </View>
                                <Icon name={'right'} size={16} color={'#999'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listItem}>
                        <View style={styles.listItemHeader}>
                            <View style={styles.listItemHeaderLeft}>
                                <View style={styles.suxian}></View>
                                <Text style={{paddingLeft:10}}>最新任务</Text>
                            </View>
                            <View style={styles.listItemHeaderRight}>
                                <Icon name={'sync'} size={16} color={'#999'} />
                                <Text style={{color:'#999'}}>换一批</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>this._onDetail()}>
                            <View style={styles.listItemBody}>
                                <View style={styles.listItemBodyLeft}></View>
                                <View style={styles.listItemBodyCenter}>
                                    <View style={styles.listItemBodyCenterTop}>
                                        <View style={styles.listItemBodyCenterTopLeft}>
                                            <Text  style={styles.listItemBodyCenterTopLeftText} numberOfLines={2}>123123123123123123123123123123123123123123123123123123</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.listItemBodyCenterTopRightText} numberOfLines={2}>任务奖励：+6.7元</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.listItemBodyCenterFooterText}>123123123123123123</Text>
                                    </View>
                                </View>
                                <Icon name={'right'} size={16} color={'#999'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this._onDetail()}>
                            <View style={styles.listItemBody}>
                                <View style={styles.listItemBodyLeft}></View>
                                <View style={styles.listItemBodyCenter}>
                                    <View style={styles.listItemBodyCenterTop}>
                                        <View style={styles.listItemBodyCenterTopLeft}>
                                            <Text  style={styles.listItemBodyCenterTopLeftText} numberOfLines={2}>123123123123123123123123123123123123123123123123123123</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.listItemBodyCenterTopRightText} numberOfLines={2}>任务奖励：+6.7元</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.listItemBodyCenterFooterText}>123123123123123123</Text>
                                    </View>
                                </View>
                                <Icon name={'right'} size={16} color={'#999'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.listItem}>
                        <View style={styles.listItemHeader}>
                            <View style={styles.listItemHeaderLeft}>
                                <View style={styles.suxian}></View>
                                <Text style={{paddingLeft:10}}>高额任务</Text>
                            </View>
                            <View style={styles.listItemHeaderRight}>
                                <Icon name={'sync'} size={16} color={'#999'} />
                                <Text style={{color:'#999'}}>换一批</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={()=>this._onDetail()}>
                            <View style={styles.listItemBody}>
                                <View style={styles.listItemBodyLeft}></View>
                                <View style={styles.listItemBodyCenter}>
                                    <View style={styles.listItemBodyCenterTop}>
                                        <View style={styles.listItemBodyCenterTopLeft}>
                                            <Text  style={styles.listItemBodyCenterTopLeftText} numberOfLines={2}>123123123123123123123123123123123123123123123123123123</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.listItemBodyCenterTopRightText} numberOfLines={2}>任务奖励：+6.7元</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.listItemBodyCenterFooterText}>123123123123123123</Text>
                                    </View>
                                </View>
                                <Icon name={'right'} size={16} color={'#999'} />
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>this._onDetail()}>
                            <View style={styles.listItemBody}>
                                <View style={styles.listItemBodyLeft}></View>
                                <View style={styles.listItemBodyCenter}>
                                    <View style={styles.listItemBodyCenterTop}>
                                        <View style={styles.listItemBodyCenterTopLeft}>
                                            <Text  style={styles.listItemBodyCenterTopLeftText} numberOfLines={2}>123123123123123123123123123123123123123123123123123123</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.listItemBodyCenterTopRightText} numberOfLines={2}>任务奖励：+6.7元</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={styles.listItemBodyCenterFooterText}>123123123123123123</Text>
                                    </View>
                                </View>
                                <Icon name={'right'} size={16} color={'#999'} />
                            </View>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    searchBoxParent:{
        paddingLeft:30,
        paddingRight:30,
        paddingTop:45,
        paddingBottom:15
    },
    searchBox:{
        flexDirection:'row',
        backgroundColor:'#eee',
        borderRadius:10,
        overflow:'hidden',
        alignItems:'center'
    },
    searchBoxCenter:{
        flex:1,
    },
    searchBoxLeft:{
        width:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    searchBoxBtn:{
        width:50,
    },
    searchBoxBtnText:{
        textAlign:'center',
        color:'#999'
    },
    inputSearch:{
        width:'100%',
        backgroundColor:'#eee',
        paddingTop:15,
        paddingBottom:15
    },
    listItem:{
        // padding:15
        paddingTop:15,
        paddingLeft:15,
        paddingRight:15
    },
    listItemHeader:{
        flexDirection:'row',
        alignItems:'center'
    },
    listItemHeaderLeft:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
    },
    listItemHeaderRight:{
        flexDirection:'row',
        alignItems:'center',
        textAlign:'right'
    },
    listItemBody:{
        backgroundColor:'#fff',
        padding:15,
        marginTop:15,
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        flexWrap:"wrap"
    },
    suxian:{
        borderLeftWidth:4,
        borderLeftColor:'#EB5B62',
        borderStyle:'solid',
        height:20
    },
    listItemBodyLeft:{
        width:80,
        height:80,
        backgroundColor:'#eee',
        borderRadius:5
    },
    listItemBodyCenter:{
        flex:1,
        paddingRight:15,
        flexDirection:'column',
        paddingLeft:15,
        marginTop:5,
        marginBottom:5
    },
    listItemBodyCenterTop:{
        flex:1,
        flexDirection:'row',
        // alignItems:'center',
    },
    listItemBodyCenterTopLeft:{
        flex:1,
        paddingRight:10
    },
    listItemBodyCenterTopRightText:{
        color:'#EB5B62'
    },
    listItemBodyCenterFooterText:{
        color:'#999'
    },
    listItemBodyCenterTopLeftText:{
        fontSize:16
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
    signIcon:{
        color:'#fff',
        padding:20,
        fontSize:12,
        borderRadius:5,
        overflow:'hidden',
        paddingLeft:15
    }
})

