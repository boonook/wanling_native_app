import {observable,computed,action} from 'mobx';
import NavigationService from '@/utils/NavigationService'
class UserState {
    @observable count = 0;
    @observable name = 'Jokcy';
    @observable isLogin = false;
    @observable token = null;
    @observable theme = 'light';////默认主题
    // @ts-ignore
    @computed get msg(){
        return `${this.name} say  count is ${this.count}`
    }

    // @ts-ignore
    @computed get getToken(){
        return `${this.name} say  count is ${this.count}`
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

    @action login(){
        NavigationService.reset('home');
    }

    @action loginOut(){
        NavigationService.reset('loading');
    }
}

export default UserState
