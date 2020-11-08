import React from "react";
import {
    View,
    ScrollView,
    StatusBar,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    ActivityIndicator
} from 'react-native';
import Headers from "@/Components/header/Headers";
import {Icon} from "@ant-design/react-native";

export default class InTheJoinTaskScreen extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            list:[{id:'1'},{id:'2'},{id:'3'}],
            refreshing:false,
            page:1,
            loading:false,
            total:3
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
    }

    onClickRightBtn=()=>{
        this.props.navigation.push('wardRecord')
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

    renderHeader=()=>{
        return(
            <View style={styles.renderHeaderBox}>
                <Text style={styles.renderHeaderBoxText}>已领取奖励：1000</Text>
            </View>
        )
    }

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
                    title={'已参与任务'}
                    onClickRightBtn={()=>this.onClickRightBtn()}
                    centerColor={'#666'}
                    rightColor={'#666'}
                    rightTitle={'领奖记录'}
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
                                            <View style={styles.listItemRightTopLeft}>
                                                <Text style={styles.listItemRightTopText} numberOfLines={2}>万岭商会正是上线万岭商会正是上线万岭商会<Text>（<Text  style={styles.listItemRightTopFinishText}>已完成</Text>）</Text></Text>
                                            </View>
                                            <View style={styles.listItemRightTopRight}>
                                                <Text style={styles.listItemRightTopRightText}>领取奖励</Text>
                                            </View>
                                        </View>
                                        <View style={styles.listItemRightTop}>
                                            <Text style={styles.listItemRightFooterText}>2020-09-08</Text>
                                        </View>
                                    </View>
                                    <Icon name={'right'} size={16} color={'#999'} />
                                </View>
                            </TouchableOpacity>
                        )}
                        ListHeaderComponent={this.renderHeader}
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
        width:80,
        height:80,
        backgroundColor:'#eee',
        borderRadius:40
    },
    listItem:{
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
        paddingRight:15,
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
        paddingRight:10
    },
    listItemRightFooterText:{
        color:'#999'
    },
    listItemRightTopText:{
        lineHeight:20
    },
    renderHeaderBox:{
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        backgroundColor:'#EB5B62',
        borderRadius:5,
        padding:30
    },
    renderHeaderBoxText:{
        color:'#fff',
        fontSize:16
    },
    listItemRightTopFinishText:{
        color:'green'
    },
    listItemRightTopRight:{
        marginTop:5,
        backgroundColor:'#EB5B62',
        borderRadius:3
    },
    listItemRightTopRightText:{
        color:'#fff',
        padding:5,
    }
})

