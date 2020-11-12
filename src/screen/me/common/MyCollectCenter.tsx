import React from "react";
import {
    View,
    StatusBar,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator, Image, Dimensions
} from 'react-native';
import Headers from "@/Components/header/Headers";
import {size} from "@/utils";
import {icons, main} from "@/assess/styles";
const {width} =  Dimensions.get('window');

export default class MyCollectCenter extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            list:[{id:'1'},{id:'2'},{id:'3'}],
            refreshing:false,
            page:1,
            loading:false,
            total:3,
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
    }

    handleLoadMore=()=>{
        if(this.state.list.length<10){
            return false
        }else{
            if (this.state.list.length!==this.state.total){
                this.setState(
                    {
                        page: this.state.page + 1,
                        loading:true,
                    },
                    () => {
                        // this.getDataList();
                    }
                );
            }
        }
    };

    renderFooter = () => {
        if (this.state.list.length===this.state.total){
            if(this.state.list.length===this.state.total){
                return (
                    <View style={{paddingTop:20,paddingBottom:15}}>
                        <Text style={{color:'#ccc',fontSize:12,textAlign:'center',}}>数据加载完毕</Text>
                    </View>
                )
            }else{
                return null;
            }
        }else{
            return (
                <View
                    style={{
                        paddingVertical: 20,
                        borderTopWidth: 1,
                        borderColor: "#CED0CE"
                    }}
                >
                    <ActivityIndicator animating size="large" />
                </View>
            );
        }
    };

    handleRefresh=()=>{
        this.setState(
            {
                page: 1,
                refreshing: true,
            },
            () => {
                // this.getDataList();
            }
        );
    };

    _onDetail=(data)=>{
        this.props.navigation.push('inTheJoinTaskDetail',{id:data.id})
    }


    render() {
        return (
            <View style={{ flex: 1}}>
                <Headers
                    leftIcon={'left'}
                    leftColor={'#666'}
                    border={true}
                    backgroundColor={'#fff'}
                    title={'收藏中心'}
                    centerColor={'#666'}
                    {...this.props}
                />
                <View style={{flex:1}}>
                    <FlatList
                        keyExtractor={(item, index) => index.toString()}
                        data={this.state.list}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={()=>{
                                this._onDetail(item)
                            }}>
                                <View style={styles.listItem}>
                                    <View  style={styles.filePathImgBox}>
                                        {/*<CachedImage style={styles.filePathImg} source={require('@/assess/images/home/gonggao.png')}/>*/}
                                    </View>
                                    <View style={styles.listItemRight}>
                                        <View style={styles.listItemRightTop}>
                                            <Text style={styles.listItemRightTopText} numberOfLines={2}>123123123123123123123123123123123123123123123123123123<Text>（<Text  style={styles.listItemRightTopFinishText}>已完成</Text>）</Text></Text>
                                        </View>
                                        <View  style={styles.hotPinTuanBox}>
                                            <Text style={{textDecorationLine:'line-through'}}>原价:￥1199</Text>
                                            <View style={styles.hotPinTuan}><Text style={styles.hotPinTuanText}>爆款拼团</Text></View>
                                        </View>
                                        <View>
                                            <Text style={styles.listItemRighShouJia}>￥1099.00</Text>
                                        </View>
                                        <View style={styles.listItemRighFooter}>
                                            <View style={styles.listItemRighFooterLeft}>
                                                <View>
                                                    <Text style={styles.listItemRightFooterText}>已售2050件</Text>
                                                </View>
                                            </View>
                                            <View style={styles.listItemRighFooterRight}>
                                                <Image style={icons.round} source={require('@/assess/images/icons/icon_shopcard.png')}/>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                        ListFooterComponent={this.renderFooter}
                        onRefresh={this.handleRefresh}
                        refreshing={this.state.refreshing}
                        onEndReached={this.handleLoadMore}
                        onEndReachedThreshold={0.5}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    filePathImg:{
        width:80,
        height:80
    },
    filePathImgBox:{
        width:140,
        height:140,
        backgroundColor:'#eee',
        borderRadius:5
    },
    listItem:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        flexWrap:'wrap',
        backgroundColor:'#fff',
        padding:15,
        margin:15,
        marginBottom:0,
        borderRadius:5
    },
    listItemRight:{
        flex:1,
        flexDirection:'column',
        paddingLeft:15,
        marginTop:5,
        marginBottom:5
    },
    listItemRightTop:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-start',
    },
    listItemRightTopLeft:{
        flex:1,
    },
    listItemRightFooterText:{
        color:'#fff',
        flexDirection:'row',
        backgroundColor:'#FC8D98',
        padding:5,
        borderRadius:3,
        overflow:'hidden'
    },
    listItemRightTopText:{
        lineHeight:20,
        fontSize:16
    },
    renderHeaderBox:{

    },
    renderHeaderBoxText:{
        color:'#fff',
        fontSize:16
    },
    listItemRightTopFinishText:{
        color:'green'
    },
    bannber:{
        width:width,
        height:size(156),
    },
    mt:{

    },
    wrapper: {

    },
    slide: {
        flex: 1,
        overflow:'hidden',
        ...main.rowVCenter
    },
    listItemRighFooter:{
        flexDirection:'row',
        alignItems:'center'
    },
    listItemRighFooterLeft:{

    },
    listItemRighFooterRight:{
        flex:1,
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'flex-end'
    },
    listItemRighShouJia:{
        fontWeight:'700',
        color:'#EB474F',
        fontSize:16
    },
    hotPinTuan:{
        borderColor:'#EB474F',
        borderWidth:1,
        borderStyle:'solid',
        marginLeft:10,
        padding:3
    },
    hotPinTuanText:{
        color:'#EB474F',
    },
    hotPinTuanBox:{
        flexDirection:'row',
        alignItems:'center'
    },
    menulist:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        paddingTop:30,
        paddingBottom:30
    },
    menulistItem:{
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    selectText:{
        color:'#EB474F',
    },
    noSelectText:{
        fontWeight:'700'
    },
    menulistItemJiaGe:{
        flexDirection:'row',
        alignItems:'center'
    }
})

