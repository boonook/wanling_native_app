import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import {ActivityIndicator} from '@ant-design/react-native';
import {inject, observer} from 'mobx-react';
import Headers from "@/Components/header/Headers";

// @ts-ignore
@inject(["userState"]) // 注入对应的store
@observer // 监听当前组件
export default class MyTeamScreen extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            list:[],
            teamSumMen:0,
            zhituiSumMen:0,
            limit:10,
            seed:1,
            page:1,
            refreshing: false,
            loading: true,
            total:0
        };
    };
    componentWillMount(){

    };
    componentDidMount(){
        let list = [...this.state.list];
        list.forEach(item=>{
            item.phone = item.phone.substr(0,3)+'****'+item.phone.substr(7);
        });
        this.setState({
            list
        })
        this.getMyTearm();
        this.getDataList();
    };

    getMyTearm=()=>{
        // myTuanDuiTopInfo().then(res=>{
        //     if(res && res.code+''===constant.SUCCESS+''){
        //         let data = res.data||{};
        //         this.setState({
        //             teamSumMen:data.zhong||0,
        //             zhituiSumMen:data.zhitui||0,
        //         })
        //     }
        // })
    }

    getDataList=()=>{
        let data = {
            limit:this.state.limit,
            page:this.state.page
        }
        // myTuanDuiList(data).then(res=>{
        //     if(res && res.code+''===constant.SUCCESS+''){
        //         let data = res.data||{};
        //         let list = data.data||[];
        //         this.setState({
        //             list:this.state.page === 1 ? list : [...this.state.list, ...list],
        //             loading: false,
        //             refreshing: false,
        //             total:data.total||0
        //         })
        //     }
        // })
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
                        this.getDataList();
                    }
                );
            }
        }
    };

    renderFooter=()=> {
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
        return (
           <View>
               <View style={styles.contentHeader}>
                   <View style={styles.contentHeaderItem}>
                       <Text style={styles.contentHeaderItemHeader}>团队总人数</Text>
                       <Text style={styles.contentHeaderItemBottom}>{this.state.teamSumMen}</Text>
                   </View>
                   <View style={styles.contentHeaderItem}>
                       <Text style={styles.contentHeaderItemHeader}>直推人数</Text>
                       <Text style={styles.contentHeaderItemBottom}>{this.state.zhituiSumMen}</Text>
                   </View>
               </View>
               <View style={[styles.contentCenterHeader,styles.contentCenterHeaderTop]}>
                   <View>
                       <Text style={styles.contentCenterHeaderText}>用户名</Text>
                   </View>
                   <View style={styles.contentCenterHeaderRight}>
                       <Text style={[styles.contentCenterHeaderRightText,styles.contentCenterHeaderText]}>伞下用户</Text>
                   </View>
               </View>
           </View>
        )
    }

    render(){
        return (
            <View style={styles.myTeam}>
                <Headers
                    backgroundColor={'#fff'}
                    title={'我的团队'}
                    centerColor={'#666'}
                    leftColor={'#666'}
                    leftTitle={'返回'}
                    leftIcon={'left'}
                    border={true}
                    {...this.props}
                />
                <View style={{flex:1}}>
                    <View style={styles.contentCenter}>
                        <FlatList
                            keyExtractor={(item, index) => index.toString()}
                            data={this.state.list}
                            renderItem={({ item }) => (
                                <View style={[styles.contentCenterHeader,styles.contentCenterHeaderItem]}>
                                    <View>
                                        <Text style={styles.contentCenterHeaderText}>{item.name}</Text>
                                    </View>
                                    <View style={styles.contentCenterHeaderRight}>
                                        <Text style={[styles.contentCenterHeaderRightText,styles.contentCenterHeaderText]}>{item.recommendCount}</Text>
                                    </View>
                                </View>
                                )
                            }
                            ListHeaderComponent={this.renderHeader}
                            ListFooterComponent={this.renderFooter}
                            refreshing={this.state.refreshing}
                            onEndReached={this.handleLoadMore}
                            onEndReachedThreshold={0.5}
                        />
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    myTeam:{
        flex:1,
        backgroundColor:'#fff'
    },
    contentHeader:{
        flexDirection:'row',
        backgroundColor:'#d71e31',
        margin:12,
        paddingTop:30,
        paddingBottom:30,
        paddingLeft:24,
        paddingRight:24,
        borderRadius:5
    },
    contentHeaderItem:{
        flex:1
    },
    contentHeaderItemHeader:{
        color:'#fff',
        fontSize:12
    },
    contentHeaderItemBottom:{
        color:'#fff',
        marginTop:30,
        fontSize:18,
        fontWeight:'600'
    },
    contentCenter:{
        flex:1,
        // margin:12,
        paddingRight:12,
        paddingLeft:12,
        backgroundColor:'#fff',
        // padding:12
    },
    contentCenterHeader:{
        flexDirection:'row',
        padding:12,
    },
    contentCenterHeaderRight:{
        flex:1
    },
    contentCenterHeaderRightText:{
        textAlign:'right'
    },
    contentCenterHeaderText:{
        color:'#999'
    },
    contentCenterHeaderTop:{
        borderBottomColor:'#eee',
        borderBottomWidth:1,
        borderStyle:'solid',
        paddingBottom:24
    },
    contentCenterHeaderItem:{
        paddingTop:24
    }
})
