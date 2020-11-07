import React, {useState} from 'react'
import {StyleSheet, Text, TextInput, View} from "react-native";

const VerificationCodeInput = (props) => {
    const [phone_1,setPhone_1] = useState(null);
    const [phone_2,setPhone_2] = useState(null);
    const [phone_3,setPhone_3] = useState(null);
    const [phone_4,setPhone_4] = useState(null);
    const [auth,setAuth] = useState('phone_1')
    return (
        <View style={[styles.viewBox]}>
           <View style={styles.inputRow}>
               <TextInput
                  maxLength={1}
                  style={styles.numInput}
                  onChangeText={(text) => {
                      const newText = text.replace(/[^\d]+/, '');
                      if(newText!==''||newText!==undefined){
                          setAuth('phone_2')
                      }
                      setPhone_1(newText);
                  }}
                  value={phone_1}
                  keyboardType='numeric'
               />
               <TextInput
                   maxLength={1}
                   style={styles.numInput}
                   onChangeText={(text) => {
                       const newText = text.replace(/[^\d]+/, '');
                       setPhone_2(newText)
                   }}
                   value={phone_2}
                   keyboardType='numeric'
               />
               <TextInput
                   maxLength={1}
                   style={styles.numInput}
                   onChangeText={(text) => {
                       const newText = text.replace(/[^\d]+/, '');
                       setPhone_3(newText)
                   }}
                   value={phone_3}
                   keyboardType='numeric'
               />
               <TextInput
                   maxLength={1}
                   style={styles.numInput}
                   onChangeText={(text) => {
                       const newText = text.replace(/[^\d]+/, '');
                       setPhone_4(newText)
                   }}
                   value={phone_4}
                   keyboardType='numeric'
               />
           </View>
        </View>
    )

}

const styles = StyleSheet.create({
    viewBox: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        backgroundColor: '#00aeff'
    },
    inputRow:{
        flexDirection:'row',
        marginRight:10
    },
    numInput:{
        borderColor:'#fff',
        borderWidth:1,
        borderStyle:'solid',
        width:40,
        height:40,
        marginLeft:10
    }
});

export default VerificationCodeInput;
