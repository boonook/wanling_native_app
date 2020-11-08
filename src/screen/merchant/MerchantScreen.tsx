//@ts-nocheck
import React from "react";
import {
    View,
    ScrollView,
    StatusBar,
    TextInput,
    StyleSheet,
    Image,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';
import Headers from "@/Components/header/Headers";
import {Icon} from '@ant-design/react-native'
import Swiper from "react-native-swiper";
import {randomImage, size} from "@/utils";
import {main} from "@/assess/styles";
import {ProductGroup, view_size} from "@/common/ProductItem";
const {width} =  Dimensions.get('window');
export default class MerchantScreen extends React.Component<any,any> {
    menus = [
        {
            icon:require('@/assess/images/icons/icon_market.png'),
            text:'热门商城',
            route:"TeamMarket"
        },
        {
            icon:require('@/assess/images/icons/icon_information.png'),
            text:'拼团商城',
            route:"joinGroupMall"
        },
        {
            icon:require('@/assess/images/icons/icon_agency.png'),
            text:'积分兑换',
            route:'Agency'
        },
        {
            icon:require('@/assess/images/icons/icon_support.png'),
            text:'加入我们',
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
            products:[
                {
                    image:{uri:'https://tva1.sinaimg.cn/large/0072Vf1pgy1foxk7okxe5j31hc0u0nhp.jpg'},
                },
                {
                    image:{uri:'https://tva4.sinaimg.cn/large/0072Vf1pgy1foxkc1m6kij31hc0u0dv3.jpg'},
                },
                {
                    image:{uri:'https://tva2.sinaimg.cn/large/0075auPSly1fq9xhvn9i5j31hc0xcqv5.jpg'},
                }
            ]
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
    }

    goTo=(route)=>{
        this.props.navigation.push(route)
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <Headers
                    border={true}
                    backgroundColor={'#fff'}
                    title={'商城'}
                    centerColor={'#666'}
                    {...this.props}
                />
                <ScrollView style={{flex:1}}>
                    <View style={[styles.bannber,styles.mt]}>
                        <Swiper style={[styles.wrapper]} showsButtons={false}  showsPagination={true} autoplay>
                            {this.state.products.map((i,idx)=>(
                                <View style={styles.slide} key={'head_banner_'+idx}>
                                    <Image style={styles.bannber} source={i.image}/>
                                </View>
                            ))}
                        </Swiper>
                    </View>
                    <View style={styles.searchBoxParent}>
                       <View style={styles.searchBox}>
                           <View style={styles.searchBoxLeft}>
                               <Icon name={'search'} />
                           </View>
                           <View style={styles.searchBoxCenter}>
                               <TextInput style={styles.inputSearch}/>
                           </View>
                           <View style={styles.searchBoxBtn}>
                               <Text style={styles.searchBoxBtnText}>搜索</Text>
                           </View>
                       </View>
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
                    {this.product_groups.map(((i,idx)=><ProductGroup key={'product_group_'+idx} {...i}/>))}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    bannber:{
        width:width,
        height:size(156),
    },
    mt:{

    },
    slide: {
        flex: 1,
        overflow:'hidden',
        ...main.rowVCenter
    },
    wrapper: {

    },
    searchBoxParent:{
        backgroundColor:'#fff',
        paddingLeft:30,
        paddingRight:30,
        paddingTop:15,
        paddingBottom:15
    },
    searchBox:{
        flexDirection:'row',
        backgroundColor:'#eee',
        borderRadius:5,
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
    menus:{
        height:size(83),
        backgroundColor:'#fff',
    },
})

