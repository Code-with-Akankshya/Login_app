import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextButton  from '../reusableComponents/TextButton';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const reusableButton = () => {
  return (
    <View style={{margin:40}}>
        <Text style={{
            backgroundColor: 'blue',
            textAlign: 'center',
            color: 'white',
            fontSize: 25,
            fontWeight: '700',
            padding: 10,
            marginBottom:50
        }}>
            Reusable Buttons
        </Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{fontSize:25}}>Primary{"\n"}Button</Text>
            <TextButton title='Primary Button' 
                style={{backgroundColor:'black',padding:15,alignItems:'center',width:210,borderRadius:20}} 
                onPress={()=>console.log("Button Clicked !")}  />
        </View>
 
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:50}}>
            <Text style={{fontSize:25}}>Join Button</Text>
            <TextButton title='Join Now 🤝' 
                style={{backgroundColor:'blue',padding:15,alignItems:'center',width:160,borderRadius:10}} 
                onPress={()=>console.log("Join Now Button Clicked !")}  />
        </View>


        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginTop:50}}>
            <Text style={{fontSize:25}}>Secondary{"\n"}Button</Text>
            <TextButton title='Secondary Button' 
                style={{backgroundColor:'grey',padding:15,alignItems:'center',width:160,borderWidth:5,borderRadius:10,borderColor:'red' }} 
                onPress={()=>console.log(" Button Clicked !")}  />
        </View>
        

        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginTop:50}}>
            <Text style={{fontSize:25,}}>Submit Button</Text>
            <TextButton title='Submit' 
                style={{backgroundColor:'green',padding:15,alignItems:'center',width:160,}} 
                onPress={()=>console.log("Submit Button Clicked !")}  />
        </View>

    </View>
  );
};

export default reusableButton

const styles = StyleSheet.create({})