import React from "react";
import {View, StatusBar,Text, StyleSheet,ScrollView} from 'react-native';
import HTMLView from 'react-native-htmlview';
import Headers from "@/Components/header/Headers";
export default class InTheJoinTaskDetailScreen extends React.Component<any,any> {
    constructor(props) {
        super(props);
        this.state = {
            title:'万岭商场正式上线！！！',
            date:'2020-08-09',
            htmlContent:"万岭商场正式上线！！！万岭商场正式上线！！！万岭商场正式上线！！！万岭商场正式上线！！！万岭商场正式上线！！！万岭商场正式上线！！！万岭商场正式上线！！！"
        };
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            StatusBar.setBarStyle('dark-content');
            StatusBar.setBackgroundColor('#fff')
        });
        let {id} = this.props.route.params;
    }

    render() {
        return (
            <View style={{ flex:1,backgroundColor:'#fff'}}>
                <Headers
                    leftIcon={'left'}
                    leftColor={'#666'}
                    border={true}
                    backgroundColor={'#fff'}
                    title={'任务详情'}
                    centerColor={'#666'}
                    {...this.props}
                />
                <View style={{flex:1,paddingLeft:15,paddingRight:15}}>
                    <ScrollView style={{padding:12}}>
                        <View>
                            <Text style={styles.titleText}>{this.state.title}</Text>
                            <Text style={styles.dateText}>{this.state.date}</Text>
                        </View>
                        <HTMLView
                            value={this.state.htmlContent}
                        />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    titleText:{
        textAlign:'center',
        fontSize:18,
    },
    dateText:{
        textAlign:'center',
        color:'#999',
        paddingTop:12,
        paddingBottom:12
    }
})

