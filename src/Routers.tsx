import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View,StyleSheet,Image} from 'react-native';
import HomeScreen from '@/screen/home/HomeScreen'
import MeScreen from '@/screen/me/MeScreen'
import AcceptNewcreen from '@/screen/AcceptNew/AcceptNewcreen'
import LoginScreen from '@/screen/auth/LoginScreen'
import DrawerScreen from '@/screen/drawer/DrawerScreen';
import LoadingScreen from '@/screen/loadinng/LoadingScreen';
import MySettingScreen from '@/screen/me/common/MySettingScreen';
import VerificationCodeInput from '@/screen/me/common/VerificationCodeInput';
import RegisteredScreen from '@/screen/auth/RegisteredScreen';
import ForgetPasswordSccreen from '@/screen/auth/ForgetPasswordSccreen';
import FinishRegisteredScreen from '@/screen/auth/FinishRegisteredScreen';
import MerchantScreen from '@/screen/merchant/MerchantScreen';
import IntegralManageScreen from '@/screen/integralManage/IntegralManageScreen';
///代理
import AgencyScreen from '@/screen/home/AgencyScreen';
/// 客服
import CustomerServiceScreen from '@/screen/home/CustomerServiceScreen';
///资讯
import InformationScreen from '@/screen/home/InformationScreen';
////拼团
import TeamMarketScreen from '@/screen/home/TeamMarketScreen';
///已参与任务
import InTheJoinTaskScreen from '@/screen/AcceptNew/InTheJoinTaskScreen';
////领奖记录
import WardRecordScreen from '@/screen/AcceptNew/WardRecordScreen';
////最新公告
import MessageCenterScreen from '@/screen/home/MessageCenterScreen';
import NavigationService from '@/utils/NavigationService';
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const menu=[
    {name:'loading',component:LoadingScreen},
    {name:'login',component:LoginScreen},
    {name:'home',component:drawer},
    {name:'integral',component:IntegralManageScreen},
    {name:'mySetting',component:MySettingScreen},
    {name:'verificationCode',component:VerificationCodeInput},
    {name:'registered',component:RegisteredScreen},
    {name:'forgetPwd',component:ForgetPasswordSccreen},
    {name:'finishRegistered',component:FinishRegisteredScreen},
    {name:'Agency',component:AgencyScreen},
    {name:'CustomerService',component:CustomerServiceScreen},
    {name:'Information',component:InformationScreen},
    {name:'TeamMarket',component:TeamMarketScreen},
    {name:'inTheJoinTask',component:InTheJoinTaskScreen},
    {name:'wardRecord',component:WardRecordScreen},
    {name:'messageCenter',component:MessageCenterScreen},
]

function homeTab() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused }) => {
                    if (route.name === '首页') {
                        return <View style={styles.tabCenter}>
                                <Image source={focused?require('@/assess/images/tabs/icon_tab_2.png'):require('@/assess/images/tabs/icon_tab_1.png')} style={[styles.IconImage]}/>
                               </View>;
                    } else if (route.name === '纳新') {
                        return <View style={styles.tabCenter}>
                                 <Image source={focused?require('@/assess/images/tabs/icon_tab_10.png'):require('@/assess/images/tabs/icon_tab_9.png')} style={[styles.IconImage]}/>
                               </View>;
                    }
                    else if (route.name === '商家') {
                        return <View style={styles.tabCenter}>
                                <Image source={focused?require('@/assess/images/tabs/icon_tab_4.png'):require('@/assess/images/tabs/icon_tab_3.png')} style={[styles.IconImage]}/>
                               </View>;
                    }
                    else if (route.name === '积分') {
                        return <View style={styles.tabCenter}>
                            <Image source={focused?require('@/assess/images/tabs/icon_tab_8.png'):require('@/assess/images/tabs/icon_tab_7.png')} style={[styles.IconImage]}/>
                        </View>;
                    }
                    else if (route.name === '我的') {
                        return <View style={styles.tabCenter}>
                            <Image source={focused?require('@/assess/images/tabs/icon_tab_6.png'):require('@/assess/images/tabs/icon_tab_5.png')} style={[styles.IconImage]}/>
                        </View>;
                    }
                },
            })}
            tabBarOptions={{
                activeTintColor: '#E73D46',
                inactiveTintColor: 'gray',
            }}
        >
            <Tab.Screen name="首页" component={HomeScreen}/>
            <Tab.Screen name="纳新" component={AcceptNewcreen} />
            <Tab.Screen name="商家" component={MerchantScreen}/>
            <Tab.Screen name="积分" component={IntegralManageScreen} />
            <Tab.Screen name="我的" component={MeScreen} />
        </Tab.Navigator>
    )
}

function drawer() {
    return(
        <Drawer.Navigator initialRouteName="home" drawerContent={(props) => <DrawerScreen {...props} />}>
            <Drawer.Screen name="home" component={homeTab} />
        </Drawer.Navigator>
    )
}
function Routers() {
    return (
        <NavigationContainer  ref={navigatorRef => {NavigationService.setTopLevelNavigator(navigatorRef)}}>
            <Stack.Navigator>
                {menu.map((item,index)=>{
                    return <Stack.Screen options={{ headerShown: false}} key={index.toString()} name={item.name} component={item.component} />
                })}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    tabCenter:{
        width:50,
        height:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    IconImage:{
        width: 24,
        height: 24,
    }
})

export default Routers;
