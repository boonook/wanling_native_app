import {observable,computed,action} from 'mobx';
import AsyncStorage from '@react-native-community/async-storage';
import NavigationService from '@/utils/NavigationService'
class UserState {
    @observable count = 0;
    @observable name = 'Jokcy';
    @observable isLogin = 'false';
    @observable userInfo = null;
    @observable token = null;
    @observable theme = 'light';////默认主题
    // @ts-ignore
    @computed get msg(){
        return `${this.name} say  count is ${this.count}`
    }

    // @ts-ignore
    @computed get getUserInfo(){
        return `${this.userInfo}`
    }

    // @ts-ignore
    @computed get getIsLogin(){
        return `${this.isLogin}`
    }

    // @ts-ignore
    @computed get getToken(){
        return `${this.token}`
    }

    @action add(){
        this.count +=1;
    }

    @action changeTheme(){
        if(this.theme+''==='light'){
            this.theme ='dark';
        }else{
            this.theme ='light';
        }
    }

    @action save(key,value) {
        return AsyncStorage.setItem(key, value);
    }

    @action login(param){
        let token = param.token||null;
        this.token = token||null;
        this.save('isLogin','true');
        this.save('token',token);
        NavigationService.reset('home');
    }

    @action setUserInfo(data){
        this.save('userInfo',JSON.stringify(data));

    }
    @action loginOut(){
        this.isLogin = 'false';
        this.token = null;
        this.userInfo = null;
        this.save('isLogin','false');
        this.save('userInfo',null);
        this.save('token',null);
        NavigationService.reset('login');
    }

    @action userTokenStorage() {
        AsyncStorage.getItem('token').then(res=>{
            this.token = res;
        });
    }

    @action userInfoStorage() {
        AsyncStorage.getItem('userInfo').then(res=>{
            this.userInfo = res;
        });
    }

    @action userIsLoginStorage() {
        AsyncStorage.getItem('isLogin').then(res=>{
            this.isLogin = res;
        });
    }

    constructor() {
        this.userInfoStorage();
        this.userTokenStorage();
        this.userIsLoginStorage();
    }

}

export default UserState
