import React from "react";
import { colors, icons, main, nav, texts } from '@/assess/styles';
import { ProductGroup, view_size } from '@/common/ProductItem';
import {View, StyleSheet, Image, Text, TouchableOpacity, StatusBar} from 'react-native';
import Headers from '@/Components/header/Headers'
import { hitokoto, randomImage, size } from '@/utils';
import Swiper from 'react-native-swiper'
import {Icon,Badge} from '@ant-design/react-native';
import {ScrollView} from "react-native-gesture-handler";

export default class HomeScreen extends React.Component<any,any> {
    banners =  [
        {
            image:require('@/assess/images/home/banner_home.png')
        },
        {
            image:require('@/assess/images/home/banner_home.png')
        },
        {
            image:require('@/assess/images/home/banner_home.png')
        },
    ]
    menus = [
        {
            icon:require('@/assess/images/icons/icon_market.png'),
            text:'拼团',
            route:"TeamMarket"
        },
        {
            icon:require('@/assess/images/icons/icon_information.png'),
            text:'资讯',
            route:"Information"
        },
        {
            icon:require('@/assess/images/icons/icon_agency.png'),
            text:'代理',
            route:'Agency'
        },
        {
            icon:require('@/assess/images/icons/icon_support.png'),
            text:'客服',
            route:'CustomerService'
        },
    ]
    product_groups = [
        {
            title:"热门推荐",
            intro:"天天有新品   天天有惊喜   每天来逛逛",
            image:{uri:randomImage()},
            more:true,
            products:[
                {
                    image:{uri:randomImage()},
                    title:"小香氛香水小众清新淡香",
                    intro:"小香氛香水小众清新淡香",
                    price:50.00,
                    originPrice:115,
                    sales:2500
                },
                {
                    image:{uri:randomImage()},
                    title:"小香氛香水小众清新淡香",
                    intro:"小香氛香水小众清新淡香",
                    price:50.00,
                    originPrice:115,
                    sales:2500
                },
                {
                    image:{uri:randomImage()},
                    title:"小香氛香水小众清新淡香",
                    intro:"小香氛香水小众清新淡香",
                    price:50.00,
                    originPrice:115,
                    sales:2500
                }
            ]
        },
        {
            title:"爆款拼团",
            intro:"天天有新品   天天有惊喜   每天来逛逛",
            image:{uri:randomImage()},
            more:true,
            products:[
                {
                    image:{uri:randomImage()},
                    title:"小香氛香水小众清新淡香",
                    intro:"小香氛香水小众清新淡香",
                    price:50.00,
                    originPrice:115,
                    sales:2500
                },
                {
                    image:{uri:randomImage()},
                    title:"小香氛香水小众清新淡香",
                    intro:"小香氛香水小众清新淡香",
                    price:50.00,
                    originPrice:115,
                    sales:2500
                },
                {
                    image:{uri:randomImage()},
                    title:"小香氛香水小众清新淡香",
                    intro:"小香氛香水小众清新淡香",
                    price:50.00,
                    originPrice:115,
                    sales:2500
                }
            ]
        }
    ]

    constructor(props) {
        super(props);
        this.state = {
            announcements:[]
        };
    }


    async componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
        const hts = new Array(3).fill('').map(()=>hitokoto({max_length:14}))
        const res = await Promise.all(hts);
        let announcements = [...res.map(i=>({text:`${i.hitokoto} by ${i.creator}`}))]
        this.setState({
            announcements
        })
    }

    goTo=(router)=>{
        this.props.navigation.push(router)
    }

    _onClickRightBtn=()=>{
        this.props.navigation.push('messageCenter')
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#eee'}}>
                <Headers
                    title={'首页'}
                    border={true}
                    backgroundColor={'#fff'}
                    centerColor={'#666'}
                    onClickRightBtn={()=>this._onClickRightBtn()}
                    rightContent={<View style={styles.leftContent}><Badge text={109} dot><Icon name={'bell'} size={22} color={'#666'}/></Badge></View>}
                    {...this.props}
                />
                <ScrollView>
                    <View style={[main.columnCenter,styles.container]}>
                        <View style={[styles.bannber,styles.mt]}>
                            <Swiper style={[styles.wrapper]} showsButtons={false}  showsPagination={true} autoplay>
                                {this.banners.map((i,idx)=>(
                                    <View style={styles.slide} key={'head_banner_'+idx}>
                                        <Image resizeMode={'stretch'} style={styles.bannber} source={i.image}/>
                                    </View>
                                ))}
                            </Swiper>
                        </View>
                        <View style={[main.rowVCenter,styles.announcement,styles.mt,{borderColor:'#eee',borderWidth:1,borderStyle:'solid'}]}>
                            <Image style={{width:size(15), height:size(15),marginRight:8}} source={require('@/assess/images/icons/icon_announcement.png')}/>
                            <Swiper style={[styles.wrapper]} showsButtons={false} horizontal={false} showsPagination={false} autoplay>
                                {this.state.announcements.map((i,idx)=>(
                                    <View style={styles.slide} key={'head_announcement_'+idx}>
                                        <Text style={styles.announcementText} numberOfLines={1}>{i.text}</Text>
                                    </View>
                                ))}
                            </Swiper>
                        </View>
                        <View style={[main.rowVCenter,main.sa,styles.menus,styles.mt,{borderColor:'#eee',borderWidth:1,borderStyle:'solid'}]}>
                            {this.menus.map((i,idx)=>(
                                <TouchableOpacity  onPress={this.goTo.bind(this,i.route)}>
                                    <View key={'menus_'+idx} style={[main.columnCenter,main.center]}>
                                        <Image style={{width:size(40),height:size(40)}} source={i.icon}/>
                                        <Text style={{color:'#301E05',fontSize:size(12),marginTop:size(4)}}>{i.text}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                        <View style={[styles.sign,styles.mt,styles.mb]}>
                            <View>
                                <Image style={{width:view_size,height:size(100)}} source={require('@/assess/images/home/banner_sign.png')}/>
                            </View>
                        </View>
                    </View>
                    {this.product_groups.map(((i,idx)=><ProductGroup key={'product_group_'+idx} {...i}/>))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff'
    },
    mt:{
        marginTop:16
    },
    mb:{
        marginBottom:16
    },
    pd:{
        paddingBottom:16
    },
    bannber:{
        width:view_size,
        height:size(156),
    },
    announcement:{
        width:view_size,
        height:size(33),
        padding:size(4),
        borderRadius:4
    },
    wrapper: {

    },
    slide: {
        flex: 1,
        borderRadius:8,
        overflow:'hidden',
        ...main.rowVCenter
    },

    shadow:{
        backgroundColor:'#fff',
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowColor: '#eee',
        elevation: 4,
    },
    announcementText:{
        color: colors.subtitle,
        fontSize:size(13)
    },
    menus:{
        width:view_size,
        height:size(83),
        borderRadius:4
    },
    menu:{
        width:size(45)
    },
    sign:{
        width:view_size,
    },
    signImage:{
        width:view_size,
        height:size(100)
    },

    border:{
        borderBottomWidth:1,
        borderBottomColor:'#ccc'
    },
    saled:{
        color:'#F927A1',
        backgroundColor:'#FF3D4F30',
        width:size(83),
        textAlign:'center',
        borderRadius:2,
        fontSize:size(12),
        paddingVertical:2,
        fontWeight:'100'
    },
    price:{
        color:colors.primary,
        fontSize:size(16),
        fontWeight:'100'
    },
    priceUnit:{
        fontSize:size(10),
    },
    originOriginText:{
        color:colors.normal,
        fontSize:size(10),
        marginLeft:10
    },
    originOrigin:{
        textDecorationLine:'line-through'
    },
    producGroupHead:{
        borderLeftWidth:3,
        borderLeftColor: colors.primary,
        paddingLeft:4,
        marginTop:8,
        marginBottom:4
    },
    leftContent:{

    }
})

