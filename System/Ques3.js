import * as React from 'react';
import { Text, View, StyleSheet,Image,Button,TextInput,ImageBackground,Alert} from 'react-native';
import {useState} from 'react';
const Ques3 =()=>{
  const [Name,setName]=useState('')
  function buttonClick(){
  alert(" The Correct answer is Age")
  }
  return(
    <View style= {{backgroundColor:'lightblue',margin:10}}>
    <View>
    <Text style={style1.textQues}>
   QUESTION 3
    </Text>
     </View>
     <Text style={style1.text2}>What goes up but never comes down?</Text>
     <Text style={{fontSize:20}}>{Name}</Text>
    <TextInput style={style1.text1}
    placeholder="Enter your Answer"/>
    <View style={{justifyContent:'center',alignItems:'center'}}>
  <Button title="submit" onPress= {buttonClick}/>
  <Text> </Text>
    </View>
    </View>
  )
}
export default Ques3;
const style1=StyleSheet.create({
  text1:{
    fontSize:30,
    borderWidth:2,
    borderColor:'black',
    alignItems:'center',
    paddingLeft:15,
    borderRadius:40,
    backgroundColor:'white',
    margin:20
  },
   text2:{
    fontSize:30,
    alignItems:'stretch',
    marginLeft:10,
    marginTop:10,
  },
  textQues:{
    fontSize:40,fontWeight:'700', textAlign:'center',backgroundColor:'red',opacity:.9,borderRadius:50,width:200,marginLeft:80,marginTop:20,color:"white"
  }
 
})