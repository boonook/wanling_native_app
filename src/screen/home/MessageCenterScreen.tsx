import React from "react";
import {View, StatusBar, Text, StyleSheet, FlatList, ActivityIndicator, TouchableOpacity} from 'react-native';
import Headers from "@/Components/header/Headers";
import {Icon} from "@ant-design/react-native";
export default class MessageCenterScreen extends React.Component<any,any> {
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
        this.props.navigation.push('newDetail',{id:data.id,title:'公告详情'})
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <Headers
                    leftIcon={'left'}
                    leftColor={'#666'}
                    border={true}
                    backgroundColor={'#fff'}
                    title={'最新公告'}
                    centerColor={'#666'}
                    {...this.props}
                />
                <View style={{flex:1,paddingLeft:15,paddingRight:15}}>
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
                                            <Text  style={styles.listItemRightTopText} numberOfLines={2}>万岭商会正是上线万岭商会正是上线万岭商会正是上线万岭商会正是上线万岭商会正是上线万岭商会正是上线万岭商会正是上线万岭商会正是上线万岭商会正是上线万岭商会正是上线万岭商会正是上线万岭商会正是上线万岭商会正是上线万岭商会正是上线</Text>
                                        </View>
                                        <View>
                                            <Text style={styles.listItemRightFooterText}>2020-09-08</Text>
                                        </View>
                                    </View>
                                    <Icon name={'right'} size={16} color={'#999'} />
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
        marginTop:15,
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
        flex:1
    },
    listItemRightFooterText:{
        color:'#999'
    },
    listItemRightTopText:{
        lineHeight:20
    }
})

